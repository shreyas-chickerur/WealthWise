# WealthWise

## Overview

WealthWise is a web application designed to help users manage their finances effectively. By integrating data from multiple sources such as bank accounts and Venmo, users can get a comprehensive view of their financial status, set financial goals, and receive personalized recommendations to improve their financial health.

## Features

- **User Authentication:** Secure user registration and login using JWT.
- **Financial Account Integration:** Connect and manage multiple financial accounts including bank accounts and Venmo.
- **Transaction Tracking:** Automatically fetch and categorize transactions from linked accounts.
- **Goal Setting:** Set and track financial goals with progress monitoring.
- **Budget Recommendations:** Receive personalized budget recommendations based on spending patterns.
- **Investment Portfolio:** Manage and track investment holdings and performance.
- **NLP Explanations:** Get understandable explanations for financial recommendations using NLP.

## Tech Stack

- **Frontend:** React.js, Redux, Material-UI
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Data Aggregation:** Plaid, Venmo API
- **Machine Learning:** Python, Pandas, scikit-learn
- **NLP:** GPT-3 (OpenAI), spaCy
- **Hosting:** AWS, Docker

## Installation

### Prerequisites

- Node.js
- MongoDB
- Python (for machine learning scripts)
- Docker (optional, for containerization)
- AWS Account (optional, for hosting)

### Setup Instructions

1. **Clone the Repository**
    ```sh
    git clone https://github.com/yourusername/financial-wellness-planner.git
    cd financial-wellness-planner
    ```

2. **Install Backend Dependencies**
    ```sh
    cd backend
    npm install
    ```

3. **Install Frontend Dependencies**
    ```sh
    cd ../frontend
    npm install
    ```

4. **Environment Variables**

    Create a `.env` file in the `backend` directory with the following variables:
    ```
    PORT=5000
    MONGO_URI=your_mongodb_uri
    JWT_SECRET=your_jwt_secret
    PLAID_CLIENT_ID=your_plaid_client_id
    PLAID_SECRET=your_plaid_secret
    VENMO_CLIENT_ID=your_venmo_client_id
    VENMO_SECRET=your_venmo_secret
    ```

5. **Run the Application**

    Start the backend server:
    ```sh
    cd backend
    npm start
    ```

    Start the frontend development server:
    ```sh
    cd ../frontend
    npm start
    ```

6. **Access the Application**

    Open your browser and navigate to `http://localhost:3000`.

## Usage

1. **Register and Login:**
    - Register a new user account.
    - Login with your credentials.

2. **Connect Financial Accounts:**
    - Use Plaid to connect your bank accounts.

3. **Track Transactions:**
    - View and categorize transactions from linked accounts.

4. **Set Financial Goals:**
    - Define your financial goals and track your progress.

5. **Receive Recommendations:**
    - Get personalized budget recommendations.
    - Understand recommendations with NLP explanations.

6. **Manage Investments:**
    - Track and manage your investment portfolio.

## Development

### Backend Structure

- **Models:** MongoDB models for users, accounts, transactions, goals, portfolios, and recommendations.
- **Routes:** Express routes for authentication, account management, transactions, goals, and recommendations.
- **Controllers:** Logic for handling API requests and responses.

### Frontend Structure

- **Components:** React components for various parts of the application (e.g., Dashboard, Transactions, Goals).
- **Redux Store:** State management for handling user data, transactions, goals, and recommendations.
- **UI:** Material-UI components for a consistent and responsive design.

## Contributing

Contributions are welcome! Please create a pull request or open an issue to discuss improvements or features.

## License

This project is licensed under the MIT License.

---

**Contact:**

For any questions or suggestions, please contact [schickerur2020@gmail.com].



## Branch Naming Conventions

To maintain a well-organized and clear structure in our project, we follow specific branch naming conventions. Below are the conventions we use for different types of branches:

### Main Branches

- **`main`**: The main production branch. This is the default branch where the source code of HEAD always reflects a production-ready state.
- **`develop`**: The main development branch. All feature branches are merged into `develop` before being merged into `main`.

### Feature Branches

- **`feature/`**: Used for new features or enhancements.
  - Example: `feature/user-authentication`, `feature/transaction-tracking`

### Bugfix Branches

- **`bugfix/`**: Used for bug fixes.
  - Example: `bugfix/login-error`, `bugfix/transaction-sync`

### Hotfix Branches

- **`hotfix/`**: Used for urgent fixes that need to be applied to the production branch.
  - Example: `hotfix/security-patch`, `hotfix/payment-gateway`

### Release Branches

- **`release/`**: Used to prepare for a new production release.
  - Example: `release/1.0.0`, `release/2.1.0`

### Chore Branches

- **`chore/`**: Used for routine tasks or maintenance work.
  - Example: `chore/update-dependencies`, `chore/code-refactoring`

### Documentation Branches

- **`docs/`**: Used for documentation updates or additions.
  - Example: `docs/api-endpoints`, `docs/readme-update`

### Testing Branches

- **`test/`**: Used for creating or updating tests.
  - Example: `test/add-unit-tests`, `test/integration-tests`

### Backend Development Branches

For branches focusing specifically on backend development:

- **Feature Development**: `backend/feature/{feature-name}`
  - Example: `backend/feature/user-authentication`, `backend/feature/transaction-api`
  
- **Bug Fixes**: `backend/bugfix/{bug-name}`
  - Example: `backend/bugfix/login-error`, `backend/bugfix/payment-sync`
  
- **Refactoring**: `backend/refactor/{refactor-name}`
  - Example: `backend/refactor/db-schema`, `backend/refactor/auth-middleware`

- **Chore Tasks**: `backend/chore/{task-name}`
  - Example: `backend/chore/update-dependencies`, `backend/chore/configure-logging`

### Summary Table

| Branch Type        | Naming Convention                           | Example                                   |
|--------------------|---------------------------------------------|-------------------------------------------|
| Main Branch        | `main`                                      | `main`                                    |
| Development Branch | `develop`                                   | `develop`                                 |
| Feature Development| `feature/{feature-name}`                    | `feature/user-authentication`             |
| Bug Fixes          | `bugfix/{bug-name}`                         | `bugfix/login-error`                      |
| Hotfix             | `hotfix/{hotfix-name}`                      | `hotfix/security-patch`                   |
| Release            | `release/{version-number}`                  | `release/1.0.0`                           |
| Chore Tasks        | `chore/{task-name}`                         | `chore/update-dependencies`               |
| Documentation      | `docs/{documentation-name}`                 | `docs/api-endpoints`                      |
| Testing            | `test/{testing-name}`                       | `test/add-unit-tests`                     |
| Backend Feature    | `backend/feature/{feature-name}`            | `backend/feature/user-authentication`     |
| Backend Bugfix     | `backend/bugfix/{bug-name}`                 | `backend/bugfix/login-error`              |
| Backend Refactor   | `backend/refactor/{refactor-name}`          | `backend/refactor/db-schema`              |
| Backend Chore      | `backend/chore/{task-name}`                 | `backend/chore/update-dependencies`       |

By following these conventions, we ensure that our branches are well-organized and that their purposes are immediately clear to anyone working on the project.
