import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 text-white">
            <div className="text-center">
                <h1 className="text-6xl font-bold mb-4">404</h1>
                <p className="text-2xl mb-8">Page Not Found</p>
                <Link
                    to="/"
                    className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded"
                >
                    Go Back Home
                </Link>
            </div>
        </div>
    );
};

export default NotFound;