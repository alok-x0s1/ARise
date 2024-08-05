import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import LogoutBtn from "./LogoutBtn";
import { FaCartArrowDown } from "react-icons/fa";

const Navbar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [user, setUser] = useState("Guest");
	const [cartItem, setCartItem] = useState("0");
	

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	const authData = useSelector((state) => state.auth);
	const cartData = useSelector((state) => state.cart);

	useEffect(() => {
		setIsLoggedIn(authData.status);
		const name = authData.userData?.email?.split("@")[0];
		if (name) setUser(name);
		setCartItem(cartData.cartItems.length);
	}, [authData, cartData]);

	return (
		<nav className="bg-gray-900 p-4 shadow-lg fixed top-0 left-0 right-0 z-50">
			<div className="container mx-auto flex items-center justify-between">
				<Link to="/" className="text-white text-2xl font-bold">
					ARise
				</Link>
				<div className="flex items-center space-x-4 w-full justify-center md:justify-between mx-12">
					<div className="relative w-full md:w-auto flex items-center">
						<input
							type="text"
							placeholder="Search..."
							className="bg-gray-800 text-white px-4 py-2 rounded-l-lg w-full md:w-64 focus:outline-none"
						/>
						<button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-r-lg">
							Search
						</button>
					</div>
					<div className="hidden md:flex space-x-4 items-center">
						<button className="text-gray-300 hover:text-white">
							<p>Hello, {user}</p>
						</button>
						<Link
							to="/about"
							className="text-gray-300 hover:text-white"
						>
							About
						</Link>
						<Link
							to="/products"
							className="text-gray-300 hover:text-white"
						>
							Products
						</Link>
						<Link
							to="/contact"
							className="text-gray-300 hover:text-white"
						>
							Contact
						</Link>
						{isLoggedIn ? (
							<LogoutBtn />
						) : (
							<Link
								to="/login"
								className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded"
							>
								Login
							</Link>
						)}
						<Link
							to="/add-product"
							className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded"
						>
							Add Product
						</Link>
						<Link
						to={"/cart"}
						className="flex text-white gap-1"
						>
							<FaCartArrowDown className="text-2xl" />
							<p>{cartItem}</p>
						</Link>
					</div>
				</div>
				<div className="md:hidden flex items-center">
					<button
						className="text-gray-300 hover:text-white focus:outline-none"
						onClick={toggleMenu}
					>
						{isMenuOpen ? (
							<svg
								className="w-6 h-6"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M6 6l12 12M6 18l12-12"
								/>
							</svg>
						) : (
							<svg
								className="w-6 h-6"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M4 6h16M4 12h16m-7 6h7"
								/>
							</svg>
						)}
					</button>
				</div>
			</div>
			{isMenuOpen && (
				<div className="md:hidden bg-gray-900 rounded-lg text-center py-4 space-y-2 h-1/2 fixed p-12 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/2">
					<Link
						to="/"
						className="block pt-2 text-gray-300 hover:text-white"
						onClick={toggleMenu}
					>
						Home
					</Link>
					<Link
						to="/about"
						className="block pt-2 text-gray-300 hover:text-white"
						onClick={toggleMenu}
					>
						About
					</Link>
					<Link
						to="/services"
						className="block pt-2 text-gray-300 hover:text-white"
						onClick={toggleMenu}
					>
						Services
					</Link>
					<Link
						to="/contact"
						className="block py-2 text-gray-300 hover:text-white"
						onClick={toggleMenu}
					>
						Contact
					</Link>
					{isLoggedIn ? (
						<LogoutBtn />
					) : (
						<div>
							<Link
								to="/login"
								className="block mt-2 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded"
								onClick={toggleMenu}
							>
								Login
							</Link>
							<Link
								to="/signup"
								className="block mt-2 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded"
								onClick={toggleMenu}
							>
								Sign Up
							</Link>
						</div>
					)}
				</div>
			)}
		</nav>
	);
};

export default Navbar;
