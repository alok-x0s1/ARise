import React, { useEffect, useState } from "react";
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
		return <Loader />;
	}

	if (error) {
		return (
			<div className="flex items-center justify-center min-h-screen text-white">
				{error}
			</div>
		);
	}

	return (
		<div className="mt-12 min-h-screen bg-primary p-6">
			<h1 className="text-3xl md:text-4xl font-bold text-secondary py-12 text-center">
				Our Products :)
			</h1>
			<div className="flex flex-wrap items-center justify-center gap-6">
				{products.map((product) => (
					<ProductCard
						key={product.data().id}
						product={product.data()}
						className="w-full sm:w-auto"
					/>
				))}
			</div>
		</div>
	);
};

export default Products;
