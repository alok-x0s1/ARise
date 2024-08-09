import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import calculateTotal from "../utils/totalAmount";
import { removeFromCart } from "../features/cartSlice";

const Cart = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [cartItems, setCartItems] = useState([]);
	const [totalAmount, setTotalAmount] = useState(0);
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	const cartData = useSelector((state) => state.cart.cartItems);
	const authStatus = useSelector((state) => state.auth.status);

	useEffect(() => {
		setCartItems(cartData);
		setTotalAmount(calculateTotal(cartData));
		setIsLoggedIn(authStatus);
	}, [cartData]);

	const handleRemove = (itemId) => {
		dispatch(removeFromCart(itemId));
	};

	return (
		<div className="min-h-screen pt-24 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 py-10">
			<div className="container mx-auto">
				<h1 className="text-4xl font-bold mb-6 text-center text-white">
					Shopping Cart
				</h1>
				{isLoggedIn ? (
					<div className="w-full flex gap-4 p-8">
						<div className="flex flex-wrap flex-col w-3/4 gap-8 text-white rounded-lg mb-6">
							{cartItems.map((item) => (
								<div
									key={item.id}
									className="flex shadow-md items-start bg-gray-900 hover:bg-gray-800 duration-300 gap-8 p-4 border-b rounded-md w-full"
								>
									<img
										src={item.image}
										alt={item.name}
										className="w-60 h-40 object-cover rounded-lg"
									/>
									<div className="text-start">
										<div className="ml-4 flex-1">
											<h2 className="text-xl font-semibold">
												{item.name}
											</h2>
											<p className="text-gray-400">
												{item.description}
											</p>
										</div>
										<div className="ratings flex ml-4">
											{item.ratings > 0 &&
												Array.from({
													length: item.ratings,
												}).map((_, i) => (
													<span key={i}>⭐</span>
												))}
										</div>
										<div className="ml-4">
											<p className="text-lg font-semibold">
												${" "}
												{Number(item.price).toFixed(2)}
											</p>
											<button
												onClick={() =>
													handleRemove(item.id)
												}
												className="mt-2 bg-red-600 hover:bg-red-700 duration-200 text-white py-1 px-2 rounded"
											>
												Remove
											</button>
										</div>
									</div>
								</div>
							))}
						</div>
						<div className="bg-gray-800 text-white w-1/4 shadow-md rounded-lg p-6 h-fit">
							<div className="flex flex-col justify-start">
								<h2 className="text-2xl font-bold mb-2">
									Total Amount
								</h2>
								<p className="text-xl font-bold">
									$ {Number(totalAmount).toFixed(2)}
								</p>
							</div>
							<div className="text-start mt-6">
								<Link
									to="/checkout"
									className="bg-green-600 hover:bg-green-700 duration-200 text-white py-2 px-4 rounded"
								>
									Proceed to Checkout
								</Link>
							</div>
						</div>
					</div>
				) : (
					<div className="text-center text-2xl text-gray-400 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
						<button onClick={() => navigate("/login")}>
							Please Login First
						</button>
					</div>
				)}
			</div>
		</div>
	);
};

export default Cart;
