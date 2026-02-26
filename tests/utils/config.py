"""
config.py

This module handles environment configuration.
It reads environment variables and provides
a centralized configuration object.

"""
import os
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()

#class Config:
    """
    Configuration class for managing environment-specific values.
    """

#    BASE_URL = os.getenv("BASE_URL","http://localhost:3000")