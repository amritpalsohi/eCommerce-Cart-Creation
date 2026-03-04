"""
conftest.py

This file contains shared pytest fixtures:
- A Playwright API request context
- Centralized base URL configuration
"""

import pytest
from playwright.sync_api import Playwright

@pytest.fixture(scope="session")
def api_request_context(playwright: Playwright):
        request = playwright.request.new_context(base_url="http://localhost:3000")

        yield request
        request.dispose()