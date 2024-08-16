import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-primary text-secondary">
            <div className="text-center">
                <h1 className="text-6xl font-bold mb-4">404</h1>
                <p className="text-2xl mb-8">Page Not Found</p>
                <Link
                    to="/"
                    className="bg-green hover:bg-green-secondary duration-300 text-secondary font-bold py-2 px-4 rounded"
                >
                    Go Back Home
                </Link>
            </div>
        </div>
    );
};

export default NotFound;