import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { addToCart } from "../features/cartSlice";

const ProductCard = ({ product }) => {
	const { id, name, image, price, description, ratings } = product;
	const dispatch = useDispatch();
	const navigatae = useNavigate()
	const [isLoggedIn, setIsLoggedIn] = useState(false)

	const authStatus = useSelector((state) => state.auth.status);

	const handleAddToCart = () => {
		dispatch(
			addToCart({
				id,
				name,
				image,
				price,
				description,
				ratings,
			})
		);
	};
	useEffect( () => {
		setIsLoggedIn(authStatus)
	}, [authStatus])

	return (
		<div className="max-w-sm rounded overflow-hidden shadow-lg bg-gray-900 m-4">
			<img className="h-60 w-96" src={product.image} alt={product.name} />
			<div className="px-6 py-4">
				<div className="ratings flex">
					{ratings > 0 &&
						Array.from({ length: ratings }).map((_, i) => (
							<span key={i}>⭐</span>
						))}
				</div>
				<div className="font-bold text-xl mb-2 text-white">
					{product.name}
				</div>
				<p className="text-gray-400 text-base mb-4">
					&#x20b9; {product.price}
				</p>
				<p className="text-gray-400 text-base">
					{product.description.slice(0, 100)}...
				</p>
			</div>
			<div className="px-6 py-4 flex gap-4">
				<Link
					to={`/products/${id}`}
					className="bg-indigo-600 hover:bg-indigo-700 text-white duration-300 font-bold py-2 px-4 rounded"
				>
					View Details
				</Link>
				<button
					onClick={isLoggedIn ? handleAddToCart : () => navigatae('/login')}
					className="bg-red-600 hover:bg-red-700 text-white duration-300 font-bold py-2 px-4 rounded"
				>
					Add to cart
				</button>
			</div>
		</div>
	);
};

export default ProductCard;
