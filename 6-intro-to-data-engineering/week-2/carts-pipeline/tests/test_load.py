import sqlite3
import pandas as pd
from load import load


def test_load_creates_table_and_writes_rows(tmp_path):
    # Arrange
    db = tmp_path / "test.db"
    df = pd.DataFrame(
        {
            "user_id": [1, 2],
            "discounted_total": [120.50, 80.75],
        }
    )

    # Act
    load(df, str(db), "carts")

    # Assert
    with sqlite3.connect(db) as conn:
        (row_count,) = conn.execute("SELECT COUNT(*) FROM carts").fetchone()
    assert row_count == 2


def test_load_creates_expected_columns(tmp_path):
    db = tmp_path / "test.db"
    df = pd.DataFrame({"id": [1], "title": ["Book"], "price": [9.99]})

    load(df, str(db), "products")

    with sqlite3.connect(db) as conn:
        cols = [c[1] for c in conn.execute("PRAGMA table_info(products)").fetchall()]
    assert {"id", "title", "price"}.issubset(set(cols))


def test_load_overwrites_or_appends(tmp_path):
    db = tmp_path / "test.db"
    df1 = pd.DataFrame({"id": [1], "name": ["A"]})
    df2 = pd.DataFrame({"id": [2], "name": ["B"]})

    load(df1, str(db), "users")
    load(df2, str(db), "users")  # Update test to match your if_exists mode

    with sqlite3.connect(db) as conn:
        (rows,) = conn.execute("SELECT COUNT(*) FROM users").fetchone()

    # If using append, assert rows == 2. If replace, assert rows == 1.
    assert rows == 2
