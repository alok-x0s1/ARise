# ARise - Augmented Reality E-Commerce Platform

ARise is a cutting-edge e-commerce platform built with React, designed to bring an immersive shopping experience to users by incorporating Augmented Reality (AR). With ARise, users can view and place products as 3D objects in their real-world environment, making online shopping more interactive and engaging.

## Features

- **Augmented Reality Integration**: Visualize products in your real-world space using AR technology.
- **React Frontend**: A responsive, dynamic user interface built with React.
- **Firebase Backend**: Real-time database, authentication, and storage powered by Firebase.
- **Stripe Payments**: Secure and efficient payment processing with Stripe.
- **State Management with Redux**: Centralized state management for user info and cart items.
- **Axios for API Requests**: Simplified HTTP requests to fetch data from the backend.
- **Firebase Cloud Functions**: Secure serverless functions to generate Stripe clientSecrets.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **Firebase**: Backend-as-a-Service for real-time database, authentication, and storage.
- **Stripe**: Payment processing platform to handle transactions.
- **Firebase Cloud Functions**: Serverless backend functions for secure payment processing.
- **Redux**: A predictable state container for managing application state.
- **Axios**: Promise-based HTTP client for making requests to the backend.

## Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js (v14 or above)
- npm (v6 or above)
- Firebase CLI
- Stripe account

### Installation

1. **Clone the repository**:

    ```bash
    git clone https://github.com/03aey/a-rise.git
    cd a-rise
    ```

2. **Install dependencies**:

    ```bash
    npm install
    ```

    After this you should have enough knowledge about firebase, firebase CLI, storage, and database

3. **Create a `.env` file** in the root directory and add your environment variables:

    ```plaintext
    REACT_APP_FIREBASE_API_KEY=your_firebase_api_key
    REACT_APP_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
    REACT_APP_FIREBASE_PROJECT_ID=your_firebase_project_id
    REACT_APP_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
    REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
    REACT_APP_FIREBASE_APP_ID=your_firebase_app_id
    REACT_APP_STRIPE_SECRET_KEY=your_stripe_secret_key
    REACT_APP_CLOUD_FUNCTION_URL=your_cloud_function_url
    ```

4. **Set up Firebase**:
    - Create a Firebase project and configure Firebase services (Authentication, Firestore, and Storage).
    - Set up Firebase Cloud Functions:
        ```bash
        cd functions
        npm install
        firebase deploy --only functions
        cd ..
        ```
    - Or you can also run firebase cloud function locally

        ```bash
        cd functions
        npm install
        firebase emulator:start
        ```

        By default port

        ```URL
        http://127.0.0.1:5001
        ```

5. **Set up Stripe**:
    - Get your Stripe API keys from the [Stripe Dashboard](https://dashboard.stripe.com/apikeys).
    - Add your Stripe keys to your Firebase Cloud Functions environment.

6. **Start the development server**:
    ```bash
    npm start
    ```

### Deployment

To deploy the project, you can use Firebase Hosting:

1. **Build the project**:

    ```bash
    npm run build
    ```

2. **Deploy to Firebase**:
    ```bash
    firebase deploy --only hosting
    ```

## Folder Structure

```plaintext
arise/
│
├── public/                 # Public assets
├── src/
│   ├── components/         # React components
│   ├── redux/              # Redux setup (actions, reducers, store)
│   ├── pages/              # React pages (Home, Product, Cart, etc.)
│   ├── services/           # Axios service for API calls
│   ├── App.js              # Main App component
│   ├── index.js            # Entry point for the application
│   └── firebase.js         # Firebase configuration
├── functions/              # Firebase Cloud Functions
│   ├── index.js            # Main Cloud Functions file
│   ├── .env                # Environment variables for Cloud Functions
│   └── package.json        # Node.js dependencies for Cloud Functions
├── .env                    # Environment variables for the frontend
├── .gitignore              # Git ignore file
├── firebase.json           # Firebase configuration
├── package.json            # Node.js dependencies for the frontend
├── README.md               # Project documentation
└── ...                     # Other project files and folders
```

---

[![GitHub](https://img.shields.io/badge/GitHub-03aey-181717?logo=github&logoColor=white)](https://github.com/03aey)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-in%2F03aey-0A66C2?logo=linkedin&logoColor=white)](https://linkedin.com/in/03aey)
[![Portfolio](https://img.shields.io/badge/Portfolio-03aey.vercel.app-000000?logo=vercel&logoColor=white)](https://03aey.vercel.app)
[![Linktree](https://img.shields.io/badge/Linktree-03aey-43E55E?logo=linktree&logoColor=white)](https://linktr.ee/03aey)
