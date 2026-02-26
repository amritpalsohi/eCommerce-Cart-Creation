Cart Service – REST API

A production-ready RESTful Cart Service built using Node.js and Express.js, with API tests implemented using Playwright Pytest Framework.

This service calculates the total price of items in a shopping cart and demonstrates:

Clean layered architecture

Separation of concerns

Centralized error handling

Middleware-based validation

Automated API testing

🚀 Tech Stack
Layer	Technology
Runtime	Node.js
Web Framework	Express.js
Testing Framework	Playwright with Pytest
Development Tooling	Nodemon
Architecture Pattern	Layered (Route → Controller → Service → Middleware)
🏗 Architecture Overview

The application follows an industry-standard layered architecture:

Request
   ↓
Route
   ↓
Validation Middleware
   ↓
Controller
   ↓
Service (Business Logic)
   ↓
Error Middleware
   ↓
Response
Layer Responsibilities
Layer	Responsibility
Routes	Defines API endpoints
Controllers	Handles HTTP request/response
Services	Contains business logic
Middlewares	Validation + centralized error handling
Utils	Custom error classes
Tests	API validation via Playwright

This design ensures:

Maintainability

Scalability

Testability

Clean separation of concerns

📂 Project Structure
cart-service/
│
├── src/
│   ├── app.js
│   ├── server.js
│   ├── routes/
│   ├── controllers/
│   ├── services/
│   ├── middlewares/
│   ├── utils/
│   └── config/
│
├── tests/
│   ├── api/
│   ├── data/
│   ├── utils/
│   ├── conftest.py
├── logs/
├── reports/
├── utils/
├── package.json
├── pytest.ini
├── requirements.txt
└── README.md


📌 API Specification

➤ Create Cart
Endpoint
POST /cart
Request Body
{
  "items": [
    {
      "id": "string",
      "unitPrice": 100,
      "quantity": 2
    }
  ]
}
Response (Success – 200)
{
  "items": [
    {
      "id": "string",
      "unitPrice": 100,
      "quantity": 2
    }
  ],
  "totalPrice": 200
}
⚙️ Business Logic

The total price is calculated as:

totalPrice = Σ (unitPrice × quantity)

Validation rules:

items must exist

items must be a non-empty array

id must be present

unitPrice must be a number ≥ 0

quantity must be a number > 0

❌ Error Handling

The service includes centralized error handling using custom error classes.

Example Error Response
{
  "message": "Items field is required"
}

HTTP Status Codes Used:

Code	Meaning
200	Success
400	Validation Error
500	Internal Server Error

All errors are routed through a global error middleware.

🧪 API Testing (Playwright)

API tests are implemented using Playwright’s built-in APIRequestContext.

Test coverage includes:

Successful cart calculation

Missing items validation

Invalid quantity validation

Invalid structure handling

Run Tests:
pytest tests/api/test_cart_api.py

Sample Output:
Running 3 tests

✓ should calculate total price correctly
✓ should return 400 if items missing
✓ should return 400 for invalid quantity

3 passed (1.2s)

Framework has included below capabilities along with Playwright tests:

>Logging
>HTML reporting

Framework can be further enhance to include below capabilities:

>Parallel Execution
>CI integration
>Combined API + UI testing


▶️ Running the Application

1️⃣ Install Dependencies
npm install
2️⃣ Start Development Server
npm run dev

Server runs at:

http://localhost:3000
🔄 Example cURL Request
curl -X POST http://localhost:3000/cart \
-H "Content-Type: application/json" \
-d '{
  "items": [
    { "id": "A1", "unitPrice": 100, "quantity": 2 },
    { "id": "B1", "unitPrice": 50, "quantity": 1 }
  ]
}'

🔒 Design Principles Followed

Separation of concerns

Centralized error handling

Thin controllers

Business logic in service layer

Middleware-based validation

Testable app instance (server isolated from app)

Clean folder structure

📈 Scalability Considerations

This service is designed to be easily extended with:

Database integration (MongoDB / PostgreSQL)

JWT authentication

Docker containerization

CI/CD pipelines

Docker/Kubernetes deployment

🧠 Why This Architecture?

This structure is commonly used in:

Microservices

Enterprise Node.js backends

Production REST APIs

It promotes:

✔ Maintainability
✔ Extensibility
✔ Testability
✔ Clear ownership of logic

📄 License

This project is for demonstration purposes.