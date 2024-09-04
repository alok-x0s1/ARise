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
	}, [cartData, authStatus]);

	const handleRemove = (itemId) => {
		dispatch(removeFromCart(itemId));
	};

	return (
		<div className="min-h-screen pt-24 bg-primary text-secondary py-10">
			<div className="container mx-auto px-4">
				<h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">
					Shopping Cart
				</h1>
				{isLoggedIn ? (
					<div className="flex flex-col lg:flex-row gap-4 p-4 lg:p-8">
						<div className="flex flex-col gap-6 lg:gap-8 text-white rounded-lg mb-6 lg:w-3/4">
							{cartItems.map((item) => (
								<div
									key={item.id}
									className="flex flex-col md:flex-row shadow-md items-start hover:bg-primary-light border-2 border-gray-400 duration-300 gap-4 lg:gap-8 p-4 border-b rounded-md w-full"
								>
									<img
										src={item.image}
										alt={item.name}
										className="w-full md:w-60 h-40 object-cover rounded-lg"
									/>
									<div className="text-start text-secondary mt-4 md:mt-0">
										<div className="ml-0 md:ml-4 flex-1">
											<h2 className="text-xl font-semibold">
												{item.name}
											</h2>
											<p className="text-secondary/80">
												{item.description.length > 100
													? `${item.description.substring(
															0,
															100
													  )}...`
													: item.description}
											</p>
										</div>
										<div className="ratings flex ml-0 md:ml-4 mt-2 md:mt-0">
											{item.ratings > 0 &&
												Array.from({
													length: item.ratings,
												}).map((_, i) => (
													<span key={i}>⭐</span>
												))}
										</div>
										<div className="ml-0 md:ml-4 mt-2 md:mt-4">
											<p className="text-lg font-semibold">
												${" "}
												{Number(item.price).toFixed(2)}
											</p>
											<button
												onClick={() =>
													handleRemove(item.id)
												}
												className="mt-2 bg-red hover:bg-red-secondary duration-200 text-white py-1 px-2 rounded"
											>
												Remove
											</button>
										</div>
									</div>
								</div>
							))}
						</div>
						<div className="border-2 border-gray-400 text-secondary shadow-md rounded-lg p-6 lg:w-1/4 h-fit">
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
									to={"/checkout"}
									className="bg-blue hover:bg-blue-secondary duration-200 text-white py-2 px-4 rounded w-full block text-center"
								>
									Proceed to Checkout
								</Link>
							</div>
						</div>
					</div>
				) : (
					<div className="text-center text-2xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
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
