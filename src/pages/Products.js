import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import service from "../firebase/config";
import ProductCard from "../components/ProductCard";
import Loader from "../components/Loader";

const Products = () => {
	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const getAllProducts = async () => {
			try {
				setLoading(true);
				const product = await service.getAllProducts();
				setProducts(product.docs);
			} catch (error) {
				setError(error);
			} finally {
				setLoading(false);
			}
		};

		getAllProducts();
	}, []);

	if (loading) {
		return (
			<Loader />
		);
	}

	if (error) {
		return (
			<div className="flex items-center justify-center min-h-screen text-white">
				{error}
			</div>
		);
	}

	return (
		<div className="flex mt-12 flex-wrap items-center justify-center min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 p-6">
			{products.map((product) => (
				<ProductCard key={product.data().id} product={product.data()} />
			))}
		</div>
	);
};

export default Products;