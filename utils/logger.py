"""
Central logging configuration for the framework.
Provides both console and file logging.
"""
import logging
import os
from datetime import datetime

def get_logger(name: str) -> logging.Logger:
    """
    Returns a configured logger instance.

    :return: Logger object
    """
    logger = logging.getLogger(name)
    logger.setLevel(logging.DEBUG)

    #Prevent dupicate logs
    if not logger.handlers:

        # Create Log directory
        if not os.path.exists("logs"):
            os.makedirs("logs")
        
        #File handler (timestamped lof file)
        timestamp = datetime.now().strftime("%Y-%m-%d_%H-%M-%S")
        file_handler = logging.FileHandler(f"logs/test_run_{timestamp}.log")
        file_handler.setLevel(logging.DEBUG)

        #Console handler
        console_handler = logging.StreamHandler()
        console_handler.setLevel(logging.INFO)

        #Log format
        formatter = logging.Formatter(
            "%(asctime)s | %(levelname)s | %(name)s | %(message)s"
        )

        file_handler.setFormatter(formatter)
        console_handler.setFormatter(formatter)

        logger.addHandler(file_handler)
        logger.addHandler(console_handler)
    
    return logger