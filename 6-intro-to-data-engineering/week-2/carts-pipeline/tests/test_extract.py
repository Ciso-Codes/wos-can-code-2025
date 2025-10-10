import requests
import requests_mock
from extract import extract


def test_requests_get_returns_expected_json():
    url = "https://api.example.com/widgets/42"
    fake_json = {"id": 42, "name": "Widget", "price": 9.99}

    with requests_mock.Mocker() as m:
        m.get(url, json=fake_json, status_code=200)
        resp = requests.get(url)
        assert resp.status_code == 200
        assert resp.json() == fake_json


def test_extract_returns_expected_dict_with_200():
    """extract returns expected dictionary with code 200"""

    url = "https://dummyjson.com/carts/1"
    fake_cart = {
        "id": 1,
        "products": [
            {
                "id": 168,
                "title": "Charger SXT RWD",
                "price": 32999.99,
                "quantity": 3,
                "total": 98999.97,
                "discountPercentage": 13.39,
                "discountedTotal": 85743.87,
                "thumbnail": "thumbnail.png",
            }
        ],
        "total": 103774.85,
        "discountedTotal": 89686.65,
        "userId": 33,
        "totalProducts": 4,
        "totalQuantity": 15,
    }

    with requests_mock.Mocker() as m:
        mock = m.get(url, json=fake_cart, status_code=200)
        result = extract(url, "fake_token")

        assert isinstance(result, dict)
        assert result == fake_cart
        assert mock.called
        assert mock.last_request.method == "GET"
        assert mock.last_request.url == url
        assert mock.last_request.response.status_code == 200


def test_extract_sends_bearer_token_in_header():
    """sends an Authorization: Bearer ... header"""

    url = "https://dummyjson.com/carts/1"

    with requests_mock.Mocker() as m:
        m.get(url, status_code=200)
        extract(url, "fake-token")

        req = m.request_history[-1]
        assert req.headers["Authorization"] == "Bearer fake-token"
