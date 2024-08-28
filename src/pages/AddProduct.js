import React, { useState } from "react";
import service from "../firebase/config";
import { useNavigate } from "react-router-dom";
import {v4 as uuidv4} from 'uuid';

const AddProduct = () => {
	const [name, setName] = useState("");
	const [price, setPrice] = useState("");
	const [description, setDescription] = useState("");
	const [image, setImage] = useState(null);
	const [modelFile, setModelFile] = useState(null)
	const [ratings, setRatings] = useState(0)
	const [loading, setLoading] = useState(false);

	const navigate = useNavigate();

	const handleImageChange = (e) => {
		setImage(e.target.files[0]);
	};

	const handleModelChange = (e) => {
		setModelFile(e.target.files[0]);
	}

	const handleSubmit = async (e) => {
		e.preventDefault();
		setLoading(true);
		const data = await service.createProduct({
			id: uuidv4(),
			name,
			description,
			price,
			image,
			ratings,
		});
		setLoading(false);
		navigate("/");
	};

	return (
		<div className="flex items-center pt-24 justify-center min-h-screen bg-primary text-secondary pb-6">
			<div className="w-full max-w-md p-8 border-2 border-gray-400 rounded-lg shadow-lg">
				<h1 className="text-3xl font-bold mb-6 text-center">
					Add New Product
				</h1>
				<form onSubmit={handleSubmit} encType="multipart/form-data">
					<div className="mb-4">
						<label
							htmlFor="name"
							className="block mb-2"
						>
							Name
						</label>
						<input
							id="name"
							type="text"
							className="relative block w-full px-3 py-2 border border-gray-400 placeholder-secondary bg-primary-light focus:outline-none focus:ring-red focus:border-red focus:z-10 sm:text-sm rounded-t-md"
							value={name}
							onChange={(e) => setName(e.target.value)}
							placeholder="Product Name"
							required
						/>
					</div>
					<div className="mb-4">
						<label
							htmlFor="price"
							className="block mb-2"
						>
							Price
						</label>
						<input
							id="price"
							type="number"
							step="0.01"
							className="relative block w-full px-3 py-2 border border-gray-400 placeholder-secondary bg-primary-light focus:outline-none focus:ring-red focus:border-red focus:z-10 sm:text-sm rounded-t-md"
							value={price}
							onChange={(e) => setPrice(e.target.value)}
							required
						/>
					</div>
					<div className="mb-4">
						<label
							htmlFor="ratings"
							className="block mb-2"
						>
							Ratings
						</label>
						<input
							id="ratings"
							type="number"
							step="0.01"
							className="relative block w-full px-3 py-2 border border-gray-400 placeholder-secondary bg-primary-light focus:outline-none focus:ring-red focus:border-red focus:z-10 sm:text-sm rounded-t-md"
							value={ratings}
							min="0"
							max="5"
							onChange={(e) => setRatings(e.target.value)}
							required
						/>
					</div>
					<div className="mb-4">
						<label
							htmlFor="description"
							className="block mb-2"
						>
							Description
						</label>
						<textarea
							id="description"
							className="relative block w-full px-3 py-2 border border-gray-400 placeholder-secondary bg-primary-light focus:outline-none focus:ring-red focus:border-red focus:z-10 sm:text-sm rounded-t-md"
							value={description}
							onChange={(e) => setDescription(e.target.value)}
							rows="4"
							required
						/>
					</div>
					<div className="mb-4">
						<label
							htmlFor="image"
							className="block mb-2"
						>
							Image
						</label>
						<input
							id="image"
							type="file"
							accept="image/*"
							className="relative block w-full px-3 py-2 border border-gray-400 placeholder-secondary bg-primary-light focus:outline-none focus:ring-red focus:border-red focus:z-10 sm:text-sm rounded-t-md"
							onChange={handleImageChange}
							required
						/>
					</div>
					{/* <div className="mb-4">
						<label
							htmlFor="ModelFile"
							className="block mb-2"
						>
							ModelFile
						</label>
						<input
							id="ModelFile"
							type="file"
							className="relative block w-full px-3 py-2 border border-gray-400 placeholder-secondary bg-primary-light focus:outline-none focus:ring-red focus:border-red focus:z-10 sm:text-sm rounded-t-md"
							onChange={handleModelChange}
							required
						/>
					</div> */}
					<button
						type="submit"
						className="w-full bg-blue hover:bg-blue-secondary duration-300 text-white font-bold py-2 px-4 rounded-md"
						disabled={loading}
					>
						{loading ? "Adding..." : "Add Product"}
					</button>
				</form>
			</div>
		</div>
	);
};

export default AddProduct;
