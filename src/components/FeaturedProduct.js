import React from "react";
import { Link } from "react-router-dom";

const FeaturedProduct = () => {
	return (
		<div className="featured-product mt-12 min-h-screen bg-primary p-6">
			<h1 className="text-3xl md:text-4xl font-bold text-secondary py-12 text-center">
				Featured Products
			</h1>

			<div className="flex flex-col md:flex-row justify-between items-center mt-6 px-6 py-8 rounded border border-gray-900">
				<div className="md:w-1/2">
					<h2 className="text-2xl md:text-3xl font-bold mb-4">
						T-Shirt
					</h2>
					<p className="text-sm md:text-base text-gray-700 mb-4">
						Create a T-shirt that's uniquely yours! With our
						easy-to-use customization tool, you can add your
						personal touch to this high-quality, comfortable
						T-shirt. Whether it's a favorite quote, an image, or a
						special design, the possibilities are endless.
					</p>
					<ul className="list-item list-inside text-sm md:text-base text-gray-700 mb-4">
						<li>Material - 100% cotton</li>
						<li>Available Sizes - S, M, L, XL, XXL</li>
						<li>Sleeve - Half</li>
					</ul>
					<h5 className="text-lg md:text-xl font-semibold mb-2">
						Customization Options
					</h5>
					<ul className="list-decimal list-inside text-sm md:text-base text-gray-700">
						<li>
							Upload your own image or choose from our gallery
						</li>
						<li>Choose colors from our list of colors</li>
						<li>Add images, or shapes to your design</li>
						<li>Ask AI to generate textures and images</li>
					</ul>

					<div className="py-6 text-sm lg:text-base flex gap-4">
						<Link
							to="/featured-product"
							className="bg-blue hover:bg-blue-secondary text-white duration-300 py-2 px-4 rounded"
						>
							View Details
						</Link>
						<Link
							to="/featured-product"
							className="bg-red hover:bg-red-secondary text-white duration-300 py-2 px-4 rounded"
						>
							Add to cart
						</Link>
					</div>
				</div>

				<img
					src="/t_shirt.png"
					alt="T-shirt"
					className="h-[25rem] md:h-[30rem] rounded shadow-md"
				/>
			</div>
		</div>
	);
};

export default FeaturedProduct;
