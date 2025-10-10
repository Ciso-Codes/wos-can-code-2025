import requests_mock

import sqlite3
from extract import extract  # your extractor that fetches a cart by id
from transform import transform  # turns one cart dict into a DataFrame
from load import load  # writes DataFrame to SQLite
from analyze import (
    compute_total_post_tax,
    get_top_spender_post_tax,
    summarize_per_cart_post_tax,
)


def test_pipeline_e2e_single_cart(tmp_path):
    # Arrange — mock a small cart payload
    fake_cart = {
        "id": 1,
        "userId": 101,
        "products": [
            {
                "id": 10,
                "title": "Widget",
                "price": 20.0,
                "quantity": 2,
                "discountPercentage": 10,
            },
            {
                "id": 11,
                "title": "Gadget",
                "price": 15.0,
                "quantity": 1,
                "discountPercentage": 0,
            },
        ],
    }

    db_file = tmp_path / "test.db"

    with requests_mock.Mocker() as m:
        url = "https://dummyjson.com/carts/1"
        m.get(url, json=fake_cart, status_code=200)

        # Act — extract → transform → load
        raw = extract(url, "fake_token")

        if raw is not None:
            df = transform(raw)
            load(df, str(db_file), "carts")

    # Assert — analyze results (7.5% tax by default)
    total_post_tax = compute_total_post_tax(str(db_file), "carts")
    top_spender = get_top_spender_post_tax(str(db_file), "carts")
    per_cart = summarize_per_cart_post_tax(str(db_file), "carts")

    # The subtotals here are deterministic:
    # Row1: price*qty = 40.00, 10% off → 36.00
    # Row2: price*qty = 15.00, 0% off  → 15.00
    # Cart subtotal = 51.00; post‑tax @7.5% ≈ 54.82
    assert round(total_post_tax, 2) == 54.82
    assert top_spender == (101, 54.82)
    assert per_cart == [(1, 54.82)]


def test_pipeline_e2e_multiple_carts(tmp_path):
    fake_cart_1 = {
        "id": 1,
        "userId": 101,
        "products": [
            {
                "id": 10,
                "title": "Widget",
                "price": 20.0,
                "quantity": 2,
                "discountPercentage": 10,
            },
            {
                "id": 11,
                "title": "Gadget",
                "price": 15.0,
                "quantity": 1,
                "discountPercentage": 0,
            },
        ],
    }
    fake_cart_2 = {
        "id": 2,
        "userId": 202,
        "products": [
            {
                "id": 12,
                "title": "Thing",
                "price": 50.0,
                "quantity": 1,
                "discountPercentage": 5,
            },
        ],
    }

    fake_cart_3 = {
        "id": 3,
        "userId": 101,
        "products": [
            {
                "id": 13,
                "title": "Doohickey",
                "price": 10.0,
                "quantity": 3,
                "discountPercentage": 0,
            },
        ],
    }

    db_file = tmp_path / "test.db"
    with requests_mock.Mocker() as m:
        url = "https://dummyjson.com/carts/1"
        m.get(url, json=fake_cart_1, status_code=200)

        # Cart 1
        raw_1 = extract(url, "fake_token")

        if raw_1 is not None:
            df = transform(raw_1)
            load(df, str(db_file), "carts")

        # Cart 2
        m.get(url, json=fake_cart_2, status_code=200)
        raw_2 = extract(url, "fake_token")
        if raw_2 is not None:
            df = transform(raw_2)
            load(df, str(db_file), "carts")

        # Cart 3
        m.get(url, json=fake_cart_3, status_code=200)
        raw_3 = extract(url, "fake_token")
        if raw_3 is not None:
            df = transform(raw_3)
            load(df, str(db_file), "carts")

    # Assert — analyze results (7.5% tax by default)
    total_post_tax = compute_total_post_tax(str(db_file), "carts")
    top_spender = get_top_spender_post_tax(str(db_file), "carts")
    per_cart = summarize_per_cart_post_tax(str(db_file), "carts")
    with sqlite3.connect(db_file) as conn:
        (rows,) = conn.execute("SELECT COUNT(*) FROM carts").fetchone()
        assert rows == 4

    # The subtotals here are deterministic:
    # Row1: price*qty = 40.00, 10% off → 36.00
    # Row2: price*qty = 15.00, 0% off  → 15.00
    # Cart subtotal = 51.00; post‑tax @7.5% ≈ 54.82
    assert round(total_post_tax, 2) == 138.14
    assert top_spender == (101, 87.08)
    assert per_cart == [(1, 54.82), (2, 51.06), (3, 32.25)]


def test_pipeline_e2e_single_cart_contains_expected_preferred_columns(tmp_path):
    # Arrange — mock a small cart payload
    fake_cart = {
        "id": 1,
        "userId": 101,
        "products": [
            {
                "id": 10,
                "title": "Widget",
                "price": 20.0,
                "quantity": 2,
                "discountPercentage": 10,
            },
            {
                "id": 11,
                "title": "Gadget",
                "price": 15.0,
                "quantity": 1,
                "discountPercentage": 0,
            },
        ],
    }

    db_file = tmp_path / "test.db"

    with requests_mock.Mocker() as m:
        url = "https://dummyjson.com/carts/1"
        m.get(url, json=fake_cart, status_code=200)

        # Act — extract → transform → load
        raw = extract(url, "fake_token")

        if raw is not None:
            df = transform(raw)
            load(df, str(db_file), "carts")

    with sqlite3.connect(db_file) as conn:
        cols = [c[1] for c in conn.execute("PRAGMA table_info(carts)").fetchall()]
    assert {
        "cart_id",
        "user_id",
        "id",
        "title",
        "price",
        "quantity",
        "total",
        "discount_percentage",
        "discounted_total",
    }.issubset(cols)
