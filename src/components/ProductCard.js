import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { addToCart } from "../features/cartSlice";

const ProductCard = ({ product }) => {
	const { id, name, image, price, description, ratings } = product;
	const dispatch = useDispatch();
	const navigatae = useNavigate();
	const [isLoggedIn, setIsLoggedIn] = useState(false);

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
	useEffect(() => {
		setIsLoggedIn(authStatus);
	}, [authStatus]);

	return (
		<div className="max-w-sm rounded overflow-hidden shadow-lg bg-primary border-2 border-primary m-4 text-secondary hover:bg-primary-light duration-300">
			<img className="h-60 w-96" src={product.image} alt={product.name} />
			<div className="px-6 py-4">
				<div className="ratings flex">
					{ratings > 0 &&
						Array.from({ length: ratings }).map((_, i) => (
							<span key={i}>⭐</span>
						))}
				</div>
				<div className="font-bold text-xl mb-2">{product.name}</div>
				<p className="text-base mb-4">$ {product.price}</p>
				<p className="text-base">
					{product.description.slice(0, 100)}...
				</p>
			</div>
			<div className="px-6 py-4 flex gap-4">
				<Link
					to={`/products/${id}`}
					className="bg-blue hover:bg-blue-secondary text-white duration-300 py-2 px-4 rounded"
				>
					View Details
				</Link>
				<button
					onClick={
						isLoggedIn ? handleAddToCart : () => navigatae("/login")
					}
					className="bg-red hover:bg-red-secondary text-white duration-300 py-2 px-4 rounded"
				>
					Add to cart
				</button>
			</div>
		</div>
	);
};

export default ProductCard;
