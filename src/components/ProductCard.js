import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product, id }) => {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-gray-900 m-4">
            <img className="h-60 w-96" src={product.image} alt={product.name} />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 text-white">{product.name}</div>
                <p className="text-gray-400 text-base mb-4">${product.price}</p>
                <p className="text-gray-400 text-base">{product.description.slice(0, 100)}...</p>
            </div>
            <div className="px-6 py-4">
                <Link to={`/products/${id}`} className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded">
                    View Details
                </Link>
            </div>
        </div>
    );
};

export default ProductCard;