# Ether.js and CCTX API Server

![License](https://img.shields.io/badge/License-MIT-blue.svg)

This project provides an API server with functionalities for Ethereum (using Ether.js) and cryptocurrency trading (using CCTX). It includes route handlers, Swagger documentation, and data models for both Ether and CCTX functionalities.

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (if applicable)

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/ether-cctx-api.git
    cd ether-cctx-api
    ```

2. Install the dependencies:

    ```bash
    npm install
    ```

3. Set up environment variables:

    Create a `.env` file in the project root directory and add the following variables:

    ```env
    INFURA_PROJECT_ID=your_infura_project_id
    MONGODB_URI=your_mongodb_uri (optional, if using MongoDB)
    PORT=3000 (or your preferred port)
    ```

### Usage

1. Start the server:

    ```bash
    npm start
    ```

2. Access the Swagger documentation:

    Open your web browser and go to: `http://localhost:3000/api-docs`

    The Swagger UI interface will display detailed documentation for all API endpoints.

## Endpoints

### Ether Functionality

- `GET /ether/validate/{address}`: Check if an Ethereum wallet address is valid.
- `GET /ether/createWallet`: Generate a new Ethereum wallet.
- `GET /ether/latestTransactions`: Get the latest 1000 Ethereum transactions.

### CCTX Functionality

- `GET /cctx/tradableCoins`: Get the list of tradable coins on Binance.
- `GET /cctx/averagePrices`: Get the average prices of tradable coins.

## Data Models

- `EtherAddressValidationResponse`: Response indicating whether an Ethereum address is valid.
- `EtherWallet`: Object representing a generated Ethereum wallet.
- `EtherTransaction`: Object representing an Ethereum transaction.
- `CCTXTradableCoinsResponse`: Response containing a list of tradable coins.
- `CCTXAveragePricesResponse`: Response containing average prices for tradable coins.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request for any improvements or fixes.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
