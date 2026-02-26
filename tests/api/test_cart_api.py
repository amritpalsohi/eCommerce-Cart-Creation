"""
This file contains:
- Positive tests
- Negative tests

All tests follow enterprise standards:
- No hardcoded URLs
- No direct Playwright calls
- Clean assertions
"""

import json
import pytest
from utils.logger import get_logger
from tests.utils.api_client import ApiClient

logger = get_logger(__name__)

def test_create_cart_positive(api_request_context):
    """
    Valid cart creation using external JSON test data.
    """

    # Load test data externally 
    with open("tests/data/positive_test_case.json") as f:
        payload = json.load(f)

    client = ApiClient(api_request_context)
    response = client.create_cart(payload)

    # Validate HTTP status
    assert response.status == 200
    body = response.json()

    # Validate response structure
    assert "items" in body

    logger.info(body)

    # Validate all items returned in response
    assert body["items"] == payload["items"]


    assert "totalPrice" in body

    with open("tests/data/expected_data.json") as f:
        expected = json.load(f)

    # Validate total price returned in response
    assert body["totalPrice"] == expected["totalPrice"]

def test_create_cart_negative(api_request_context):
    """
    Cart creation with invalid data
    """

    #Load data externally
    with open("tests/data/negative_test_case.json") as f:
        payload = json.load(f)
    
    client = ApiClient(api_request_context)
    response = client.create_cart(payload)

    # Validate http status for invalid request
    assert response.status == 400

    body = response.json()
    logger.info(f"Response Body: {body}")
    assert body["message"] == "Invalid item price or quantity"

def test_create_cart_missing_data(api_request_context):
    """
    Cart creation with missing required fields
    """

    #Load data externally
    with open("tests/data/missing_data_test_case.json") as f:
        payload = json.load(f)

    client = ApiClient(api_request_context)
    response = client.create_cart(payload)

    # Validate http status for invalid request
    assert response.status == 400

    body = response.json()
    logger.info(f"Response Body: {body}")
    assert body["message"] == "Items field is required"