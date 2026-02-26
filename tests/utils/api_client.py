"""
api_client.py

This file abstracts API interactions.
Tests should NOT directly call Playwright methods.

Why?
- Separation of concerns
- Reusability
- Maintainability
- Enterprise design pattern
"""
import json
from playwright.sync_api import APIRequestContext

class ApiClient:
    """
    Encapsulates all cart-related API operations.
    """

    def __init__(self, request: APIRequestContext):
        """
        Constructor receives Playwright API request context.
        """
        self.request = request

    def create_cart(self, payload):
        """
        Sends POST /cart request.

        :param payload: JSON request body
        :return: Playwright response object
        """
        
        return self.request.post("/cart", data=payload)