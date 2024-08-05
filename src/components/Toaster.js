import React, { useState, useEffect } from 'react';

const Toaster = ({ message, status }) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div className={`fixed bottom-7 right-4 w-80 p-4 rounded-md shadow-lg ${status === 'error' ? 'bg-red-500' : 'bg-blue-500'} text-white`}>
      <p>{message}</p>
      <div className="relative w-full h-1 mt-2 bg-white">
        <div className="absolute top-0 left-0 h-full bg-gray-800 animate-reduce-width"></div>
      </div>
    </div>
  );
};

export default Toaster;