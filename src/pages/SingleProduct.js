import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import service from "../firebase/config";
import Toaster from "../components/Toaster";
import Loader from "../components/Loader";
import { addToCart } from "../features/cartSlice";

const SingleProduct = () => {
	const { id } = useParams();
	const [product, setProduct] = useState({});
	const [error, setError] = useState("");
	const [loading, setLoading] = useState(false);

	const navigatae = useNavigate();
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	const authStatus = useSelector((state) => state.auth.status);

	const dispatch = useDispatch();

	useEffect(() => {
		setError("");
		setLoading(true);
		const getProduct = async () => {
			try {
				const product = await service.getSingleProduct(id);
				if (product) {
					setProduct(product);
				}
			} catch (error) {
				setError(error.message.replace("Firebase: Error ", ""));
			} finally {
				setLoading(false);
			}
		};

		getProduct();
	}, [id]);

	useEffect(() => {
		setIsLoggedIn(authStatus);
	}, [authStatus]);

	const handleAddToCart = () => {
		dispatch(
			addToCart({
				id: product.id,
				name: product.name,
				image: product.image,
				price: product.price,
				description: product.description,
				ratings: product.ratings,
			})
		);
	};

	return (
		<div className="min-h-screen bg-gray-800 py-10 pt-36">
			{error && <Toaster status="error" message={error} />}
			{loading ? (
				<Loader />
			) : error ? (
				""
			) : (
				<div className="container mx-auto p-6">
					<div className="flex flex-col items-center">
						<img
							src={product.image}
							alt={product.name}
							className="w-full md:w-3/4 md:h-96 object-cover rounded-lg mb-6 border border-white md:mb-0 transition-transform duration-500 transform hover:scale-105"
						/>
						<div className="md:ml-6 flex-1 text-start mt-6">
							<h1 className="text-4xl font-bold mb-4 text-gray-200">
								{product.name}
							</h1>
							<div className="ratings flex">
								{product.ratings > 0 &&
									Array.from({ length: product.ratings }).map(
										(_, i) => <span key={i}>⭐</span>
									)}
							</div>
							<p className="text-gray-100 mb-4">
								{product.description}
							</p>
							<p className="text-2xl font-bold mb-4 text-indigo-600">
								$ {Number(product.price).toFixed(2)}
							</p>
							<div className="flex space-x-4">
								<button
									onClick={
										isLoggedIn
											? handleAddToCart
											: () => navigatae("/login")
									}
									className="bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded transition-colors duration-300"
								>
									Add to Cart
								</button>
								<Link
									to={`/3d-view/${product.id}`}
									className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded transition-colors duration-300"
								>
									View in 3D
								</Link>
								<Link
									to={`/ar-view/${product.id}`}
									className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded transition-colors duration-300"
								>
									View in AR
								</Link>
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default SingleProduct;
