import { useElements, useStripe, CardElement } from "@stripe/react-stripe-js";
import axios from "../axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import service from "../firebase/config";
import { removeAllItems, removeFromCart } from "../features/cartSlice";
import { Toaster } from "../components";
import totalAmount from "../utils/totalAmount";

const Checkout = () => {
	const user = useSelector((state) => state.auth.userData);
	const cartItems = useSelector((state) => state.cart.cartItems);
	const totalAmountOfProduct = totalAmount(cartItems);

	const [error, setError] = useState(null);
	const [disabled, setDisabled] = useState(true);
	const [succeeded, setSucceeded] = useState(false);
	const [processing, setProcessing] = useState("");
	const [clientSecret, setClientSecret] = useState(null);
	const stripe = useStripe();
	const elements = useElements();
	const navigate = useNavigate();
	const dispatch = useDispatch();

	useEffect(() => {
		if (!user) {
			navigate("/login");
			return;
		}

		if (totalAmountOfProduct <= 0) {
			setError("Your cart is empty. Please add items to proceed.");
			return;
		}

		const getClientSecret = async () => {
			try {
				const response = await axios({
					method: "post",
					url: `/payments/create?total=${totalAmountOfProduct * 100}`,
				});
				setClientSecret(response.data.clientSecret);
			} catch (error) {
				console.error("Error fetching client secret:", error);
				setError("Failed to initialize payment.");
			}
		};

		getClientSecret();
	}, [cartItems, totalAmountOfProduct, user, navigate]);

	const handleSubmit = async (event) => {
		event.preventDefault();
		if (!stripe || !elements) {
			setError("Stripe has not loaded properly.");
			return;
		}

		setProcessing(true);
		try {
			const { paymentIntent } = await stripe.confirmCardPayment(
				clientSecret,
				{
					payment_method: {
						card: elements.getElement(CardElement),
					},
				}
			);

			if (paymentIntent) {
				await service.createOrder(
					user?.uid,
					paymentIntent.id,
					cartItems,
					totalAmountOfProduct
				);
				dispatch(removeAllItems());
				setSucceeded(true);
				setError(null);
				setProcessing(false);
				navigate("/orders");
			}
		} catch (error) {
			setError("Payment failed. Please try again.");
			setProcessing(false);
		}
	};

	const handleChange = (event) => {
		if (event.error) {
			setError(event.error.message);
			setDisabled(true);
		} else {
			setError(null);
			setDisabled(false);
		}
	};

	const handleRemove = (itemId) => {
		dispatch(removeFromCart(itemId));
	};
	console.log("Total amount ", totalAmountOfProduct);

	return (
		<div className="min-h-screen pt-24 text-secondary bg-primary py-10">
			{error && <Toaster status="error" message={error} />}
			<div className="container mx-auto p-4 sm:p-6 rounded-lg">
				<h1 className="text-3xl sm:text-4xl font-bold mb-6 text-center">
					Checkout
				</h1>

				<div className="mb-6 p-4 sm:p-6 border-2 border-gray-400 shadow-lg text-secondary rounded-lg w-full lg:w-1/2 mx-auto">
					<h2 className="text-2xl font-bold mb-4">
						User Information
					</h2>
					<p>
						<strong>Name:</strong> {"John Doe"}
					</p>
					<p>
						<strong>Email:</strong> {user.email}
					</p>
					<p>
						<strong>Address:</strong> {"1461 Ihso Turnpike UZ"}
					</p>
				</div>

				<div className="mb-6 p-4 sm:p-6 border-2 border-gray-400 shadow-lg rounded-lg">
					<h2 className="text-2xl font-bold mb-4">
						Verify and Review
					</h2>
					<div className="flex flex-wrap gap-4">
						{cartItems.length === 0 ? (
							<p>Your cart is empty.</p>
						) : (
							cartItems.map((item) => (
								<div
									key={item.id}
									className="w-full sm:w-1/2 lg:w-1/4 p-4 border-2 border-gray-400 shadow rounded-lg transition-all duration-300 hover:bg-primary-light"
								>
									<img
										src={item.image}
										alt={item.name}
										className="w-full h-40 sm:h-60 object-cover rounded-lg mb-4"
									/>
									<h3 className="text-lg sm:text-xl font-bold mb-2">
										{item.name}
									</h3>
									<p className="mb-2">
										{item.description.substring(0, 100)}...
									</p>
									<div className="ratings flex mb-2">
										{item.ratings > 0 &&
											Array.from({
												length: item.ratings,
											}).map((_, i) => (
												<span key={i}>⭐</span>
											))}
									</div>
									<p className="text-blue mb-2">
										${Number(item.price).toFixed(2)}
									</p>
									<button
										className="bg-red hover:bg-red-secondary text-white py-2 px-4 rounded transition-colors duration-300"
										onClick={() => handleRemove(item.id)}
									>
										Remove
									</button>
								</div>
							))
						)}
					</div>
				</div>

				{totalAmountOfProduct > 0 ? (
					<div className="p-4 sm:p-6 flex flex-col items-center border-2 border-gray-400 shadow-md rounded-lg">
						<p className="text-2xl font-bold mb-6">
							Payment method
						</p>
						<form
							onSubmit={handleSubmit}
							className="w-full lg:w-1/2 text-secondary text-center"
						>
							{!clientSecret ? (
								<p>Loading...</p>
							) : (
								<CardElement
									onChange={handleChange}
									options={{
										style: {
											base: {
												color: "#000000",
												fontSize: "16px",
												"::placeholder": {
													color: "#000000",
												},
											},
											invalid: { color: "#fa755a" },
										},
									}}
								/>
							)}

							<div className="flex justify-between items-center mt-8">
								<h2 className="text-xl sm:text-2xl font-bold">
									Total Amount
								</h2>
								<p className="text-xl sm:text-2xl font-semibold text-blue mt-2">
									${Number(totalAmountOfProduct).toFixed(2)}
								</p>
							</div>

							<button
								disabled={processing || disabled || succeeded}
								className={`w-fit mt-4 bg-blue hover:bg-blue-secondary duration-300 text-white py-3 px-6 rounded transition-transform transform hover:scale-105 ${
									processing && "opacity-50"
								}`}
							>
								<span>
									{processing ? <p>Processing</p> : "Buy now"}
								</span>
							</button>
						</form>
					</div>
				) : null}
			</div>
		</div>
	);
};

export default Checkout;
