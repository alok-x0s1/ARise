import React from 'react';

const Loader = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-primary">
            <div className="flex space-x-3">
                <div className="w-6 h-6 bg-secondary rounded-full animate-ping"></div>
                <div className="w-6 h-6 bg-secondary rounded-full animate-ping delay-200"></div>
                <div className="w-6 h-6 bg-secondary rounded-full animate-ping delay-400"></div>
            </div>
        </div>
    );
};

export default Loader;