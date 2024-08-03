import React from 'react';

const Loader = () => {
    return (
        <div className="flex items-center justify-center h-screen bg-gray-900">
            <div className="flex space-x-3">
                <div className="w-4 h-4 bg-white rounded-full animate-ping"></div>
                <div className="w-4 h-4 bg-white rounded-full animate-ping delay-200"></div>
                <div className="w-4 h-4 bg-white rounded-full animate-ping delay-400"></div>
            </div>
        </div>
    );
};

export default Loader;