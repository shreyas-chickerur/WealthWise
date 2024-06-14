# Financial Wellness Planner

## Overview

The Financial Wellness Planner is a web application designed to help users manage their finances effectively. By integrating data from multiple sources such as bank accounts and Venmo, users can get a comprehensive view of their financial status, set financial goals, and receive personalized recommendations to improve their financial health.

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
    - Connect your Venmo account.

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
- **Redux Store:** St
