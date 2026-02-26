"""
conftest.py

This file contains shared pytest fixtures:
- A Playwright API request context
- Centralized base URL configuration
"""

import pytest
from playwright.sync_api import sync_playwright

@pytest.fixture(scope="session")
def api_request_context():
    with sync_playwright() as p:
        request = p.request.new_context(base_url="http://localhost:3000")

        yield request
        request.dispose()