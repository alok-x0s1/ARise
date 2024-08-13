import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import service from "../firebase/config"; 
import { useNavigate } from "react-router-dom";

const Orders = () => {
	const user = useSelector((state) => state.auth.userData);
	const navigate = useNavigate();
	const [orders, setOrders] = useState([]);
	const [error, setError] = useState(null);

	useEffect(() => {
		if (user) {
			const fetchOrders = async () => {
				try {
					const orders = await service.getOrderData(user.uid);
					if (orders.length === 0) {
						setError("No orders found.");
					} else {
						setOrders(orders);
						setError(null);
					}
				} catch (error) {
					console.error("Error fetching orders:", error);
					setError("Failed to fetch orders.");
				}
			};

			fetchOrders();
		} else {
			navigate("/login");
		}
	}, [user, navigate]);

	return (
		<div className="min-h-screen pt-24 text-white bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 py-10">
			<div className="container mx-auto p-6 rounded-lg">
				<h1 className="text-4xl font-bold mb-6 text-center">
					Your Orders
				</h1>

				{error && (
					<p className="text-red-400 text-center mb-6">{error}</p>
				)}

				<div className="mb-6 p-6 border border-white shadow-md rounded-lg w-1/2">
					<h2 className="text-2xl font-bold mb-4">
						User Information
					</h2>
					<p className="text-gray-400">
						<strong>Name:</strong> {user?.displayName || "John Doe"}
					</p>
					<p className="text-gray-400">
						<strong>Email:</strong> {user?.email || "N/A"}
					</p>
					<p className="text-gray-400">
						<strong>Contact:</strong> {user?.contact || "(405) 837-7944"}
					</p>
					<p className="text-gray-400">
						<strong>Address:</strong> {user?.address || "1461 Ihso Turnpike UZ"}
					</p>
				</div>

				<div className="mb-6 p-6 border border-white rounded-md">
					<h2 className="text-2xl font-bold mb-4">Order History</h2>
					{orders.length > 0 ? (
						<div className="flex flex-wrap gap-8">
							{orders.map((order) => (
								<div
									key={order.id}
									className="mb-6 p-6 bg-gray-800 border border-gray-700 rounded-lg shadow-lg transition-all duration-300 transform hover:bg-gray-700 hover:shadow-2xl lg:w-[48%] w-full"
								>
									<h3 className="text-xl font-bold mb-2">
										Order #{order.id}
									</h3>
									<p className="text-gray-400 mb-2">
										<strong>Date:</strong>{" "}
										{order.createdAt
											?.toDate()
											.toLocaleString("en-US", {
												year: "numeric",
												month: "2-digit",
												day: "2-digit",
												hour: "2-digit",
												minute: "2-digit",
												second: "2-digit",
												timeZoneName: "short",
											})}
									</p>
									<div className="mb-4">
										<strong>Items:</strong>
										<ul className="list-none p-0">
											{order.items.map((item, index) => (
												<li
													key={index}
													className="mb-4 flex items-start bg-gray-900 p-4 rounded-lg shadow-md"
												>
													<img
														src={item.image}
														alt={item.title}
														className="w-24 h-24 object-cover mr-4 rounded-md"
													/>
													<div className="flex-1">
														<p className="font-semibold text-lg">
															{item.title}
														</p>
														<p className="text-gray-400">
															Price: ${item.price}
														</p>
														<p className="text-gray-400">
															Quantity: 1
															{item.quantity}
														</p>
														<p className="text-gray-400">
															Rating:{" "}
															{Array.from({length: item.ratings}).map(
																(_, index) => (
																	<span key={index}>⭐</span>
																)
															)}
														</p>
													</div>
												</li>
											))}
										</ul>
									</div>
									<p className="text-gray-400">
										<strong>Total Amount:</strong> $
										{order.amount}
									</p>
								</div>
							))}
						</div>
					) : (
						<p className="text-gray-400">No orders found.</p>
					)}
				</div>
			</div>
		</div>
	);
};

export default Orders;
