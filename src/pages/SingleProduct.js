import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import service from "../firebase/config";
import { addToCart } from "../features/cartSlice";
import { Loader, Toaster } from "../components";

const SingleProduct = () => {
	const { id } = useParams();
	const [product, setProduct] = useState({});
	const [error, setError] = useState("");
	const [loading, setLoading] = useState(false);

	const navigate = useNavigate();
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
		<div className="min-h-screen bg-primary py-10 pt-36 text-secondary">
			{error && <Toaster status="error" message={error} />}
			{loading ? (
				<Loader />
			) : error ? (
				""
			) : (
				<div className="container mx-auto p-6">
					<div className="flex flex-col md:flex-row items-center md:items-start">
						<div className="md:w-1/2 flex-shrink-0 mb-6 md:mb-0 w-full">
							<img
								src={product.image}
								alt={product.name}
								className="w-full h-full object-cover rounded-lg border border-white transition-transform duration-500 transform hover:scale-105"
							/>
						</div>

						<div className="md:ml-10 flex-1 text-start w-full">
							<h1 className="text-3xl md:text-4xl font-bold mb-4">
								{product.name}
							</h1>
							<div className="ratings flex mb-4">
								{product.ratings > 0 &&
									Array.from({ length: product.ratings }).map(
										(_, i) => <span key={i}>⭐</span>
									)}
							</div>
							<p className="text-secondary/80 mb-4">
								{product.description}
							</p>
							<p className="text-xl md:text-2xl font-bold mb-6 text-blue">
								$ {Number(product.price).toFixed(2)}
							</p>
							<div className="flex flex-wrap items-center sm:space-x-4 space-y-4 sm:space-y-0">
								<button
									onClick={
										isLoggedIn
											? handleAddToCart
											: () => navigate("/login")
									}
									className="bg-blue hover:bg-blue-secondary text-white py-2 px-4 rounded transition-colors duration-300 w-fit"
								>
									Add to Cart
								</button>
								<Link
									to={`/3d-view/${product.id}`}
									className="bg-red hover:bg-red-secondary text-white py-2 px-4 rounded transition-colors duration-300 w-fit text-center mx-4"
								>
									View in 3D
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
