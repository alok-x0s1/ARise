import { useElements, useStripe, CardElement } from "@stripe/react-stripe-js";
import axios from "../axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Toaster from "../components/Toaster";
import service from "../firebase/config";
import { removeAllItems, removeFromCart } from "../features/cartSlice";

const Checkout = () => {
	const user = useSelector((state) => state.auth.userData);
	const cartItems = useSelector((state) => state.cart.cartItems);
	const totalAmount = cartItems.reduce(
		(total, item) => total + item.price,
		0
	);

	const [error, setError] = useState(null);
	const [disabled, setDisabled] = useState(true);
	const [succeeded, setSucceeded] = useState(false);
	const [processing, setProcessing] = useState("");
	const [clientSecret, setClientSecret] = useState(true);
	const stripe = useStripe();
	const elements = useElements();
	const navigate = useNavigate();
	const dispatch = useDispatch();

	useEffect(() => {
		if (!user) {
			navigate("/login");
			return;
		}
		const getClientSecret = async () => {
			try {
				const response = await axios({
					method: "post",
					url: `/payments/create?total=${totalAmount * 100}`,
				});
				setClientSecret(response.data.clientSecret);
			} catch (error) {
				console.error("Error fetching client secret:", error);
			}
		};

		getClientSecret();
	}, [cartItems, totalAmount]);

	const handleSubmit = async (event) => {
		event.preventDefault();
		setProcessing(true);
		const payload = await stripe
			.confirmCardPayment(clientSecret, {
				payment_method: {
					card: elements.getElement(CardElement),
				},
			})
			.then(async ({ paymentIntent }) => {
				if (paymentIntent) {
					await service.createOrder(
						user?.uid,
						paymentIntent.id,
						cartItems,
						totalAmount
					);

					dispatch(removeAllItems());
					setSucceeded(true);
					setError(null);
					setProcessing(false);
					navigate("/orders");
				}
			});
	};

	const handleChange = (event) => {
		// if (event.error) {
		//     setError(event.error.message)
		//     setDisabled(true)
		// } else {
		//     setError(null)
		//     setDisabled(false)
		// }

		setDisabled(event.empty);
		setError(event.error ? event.error.message : "");
	};

	const handleRemove = (itemId) => {
		dispatch(removeFromCart(itemId));
	};

	return (
		<div className="min-h-screen pt-24 text-white bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 py-10">
			{error && <Toaster status="error" message={error} />}
			<div className="container mx-auto p-6 rounded-lg">
				<h1 className="text-4xl font-bold mb-6 text-center">
					Checkout
				</h1>

				{/* User Information */}
				<div className="mb-6 p-6 bg-gray-800 shadow-md rounded-lg w-1/2">
					<h2 className="text-2xl font-bold mb-4">
						User Information
					</h2>
					<p className="text-gray-400">
						<strong>Name:</strong> {"John Doe"}
					</p>
					<p className="text-gray-400">
						<strong>Email:</strong> {user.email}
					</p>
					<p className="text-gray-400">
						<strong>Address:</strong> {"1461 Ihso Turnpike UZ"}
					</p>
				</div>

				{/* Verify and Review */}
				<div className="mb-6 p-6 bg-gray-800 shadow-md rounded-lg">
					<h2 className="text-2xl font-bold mb-4">
						Verify and Review
					</h2>
					<div className="flex flex-wrap gap-4">
						{cartItems.length === 0 ? (
							<p className="text-gray-400">Your cart is empty.</p>
						) : (
							cartItems.map((item) => (
								<div
									key={item.id}
									className="flex w-1/4 flex-col items-center mb-4 p-4 bg-gray-900 shadow rounded-lg transition-all duration-300 hover:bg-gray-700"
								>
									<img
										src={item.image}
										alt={item.name}
										className="w-full h-60 object-cover rounded-lg mr-4 mb-4"
									/>
									<div className="flex-1 mb-2">
										<h3 className="text-xl font-bold mb-2">
											{item.name}
										</h3>
										<p className="text-gray-400 mb-2">
											{item.description.substring(0, 100)}
											...
										</p>
										<div className="ratings flex">
											{item.ratings > 0 &&
												Array.from({
													length: item.ratings,
												}).map((_, i) => (
													<span key={i}>⭐</span>
												))}
										</div>
										<p className="text-gray-400 mb-2">
											${Number(item.price).toFixed(2)}
										</p>
									</div>
									<button
										className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded transition-colors duration-300"
										onClick={() => handleRemove(item.id)}
									>
										Remove
									</button>
								</div>
							))
						)}
					</div>
				</div>

				{/* Proceed Section */}
				<div className="p-6 flex justify-center bg-gray-800 shadow-md rounded-lg">
					<div className="text-center w-1/2">
						<p className="text-2xl font-bold mb-6">
							Payment method
						</p>
						<form onSubmit={handleSubmit} className="text-white">
							<CardElement
								onChange={handleChange}
								options={{
									style: {
										base: {
											color: "#fff",
											fontSize: "16px",
											"::placeholder": {
												color: "#aab7c4",
											},
										},
										invalid: {
											color: "#fa755a",
										},
									},
								}}
							/>

							<div className="flex justify-between items-center mt-8">
								<h2 className="text-2xl font-bold">
									Total Amount
								</h2>
								<p className="text-2xl font-bold text-indigo-600 mt-2">
									${Number(totalAmount).toFixed(2)}
								</p>
							</div>

							<button
								disabled={processing || disabled || succeeded}
								className="bg-indigo-600 hover:bg-indigo-700 text-white py-3 px-6 rounded-lg transition-transform transform hover:scale-105"
							>
								<span>
									{processing ? <p>Processing</p> : "Buy now"}
								</span>
							</button>
						</form>
						{/* <Link
							to="/payment"
							className="bg-indigo-600 hover:bg-indigo-700 text-white py-3 px-6 rounded-lg transition-transform transform hover:scale-105"
						>
							Proceed to Payment
						</Link> */}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Checkout;
