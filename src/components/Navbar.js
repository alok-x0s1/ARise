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
		<nav className="bg-primary text-secondary p-4 shadow-lg fixed top-0 left-0 right-0 z-50">
			<div className="container mx-auto flex items-center justify-between">
				<Link to="/" className="text-2xl font-bold">
					ARise
				</Link>
				<div className="flex items-center space-x-4 w-full justify-center md:justify-between mx-12">
					<div className="relative w-full md:w-auto flex items-center">
						<input
							type="text"
							placeholder="Search..."
							className="bg-hover px-4 shadow-md text-secondary py-2 rounded-l-lg w-full md:w-64 focus:outline-none border"
						/>
						<button className="bg-secondary text-primary hover:bg-secondary/80 duration-300 px-4 py-2 rounded-r-lg">
							Search
						</button>
					</div>
					<div className="hidden md:flex space-x-4 items-center">
						<button className="text-secondary hover:text-red duration-300">
							<p>Hello, {user}</p>
						</button>
						<Link
							to="/products"
							className="text-secondary hover:text-red duration-300"
						>
							Products
						</Link>
						<Link
							to="/orders"
							className="text-secondary hover:text-red duration-300"
						>
							Orders
						</Link>
						<Link
							to="/contact"
							className="text-secondary hover:text-red duration-300"
						>
							Contact
						</Link>
						{isLoggedIn ? (
							<LogoutBtn />
						) : (
							<Link
								to="/login"
								className="bg-red hover:bg-red-secondary duration-300 text-white px-4 py-2 rounded"
							>
								Login
							</Link>
						)}
						{process.env.NODE_ENV === "development" && (
							<Link
								to="/add-product"
								className="bg-blue hover:bg-blue-secondary duration-300 text-white px-4 py-2 rounded"
							>
								Add Product
							</Link>
						)}
						<Link
							to={"/cart"}
							className="flex text-secondary gap-1"
						>
							<FaCartArrowDown className="text-2xl" />
							<p>{cartItem}</p>
						</Link>
					</div>
				</div>
				<div className="md:hidden flex items-center">
					<button
						className="text-secondary focus:outline-none"
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
				<div className="md:hidden bg-primary border shadow-md rounded-lg text-center py-4 space-y-2 h-1/2 fixed p-12 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2/3">
					<Link
						to="/"
						className="block pt-2 text-secondary hover:text-red duration-300"
						onClick={toggleMenu}
					>
						Home
					</Link>
					<Link
						to={"/cart"}
						className="flex text-secondary gap-1 text-center w-full"
						onClick={toggleMenu}
					>
						<FaCartArrowDown className="text-2xl" />
						<p>{cartItem}</p>
					</Link>
					<Link
						to="/products"
						className="block pt-2 text-secondary hover:text-red duration-300"
						onClick={toggleMenu}
					>
						Products
					</Link>
					<Link
						to="/orders"
						className="block pt-2 text-secondary hover:text-red duration-300"
						onClick={toggleMenu}
					>
						Orders
					</Link>
					<Link
						to="/contact"
						className="block pt-2 text-secondary hover:text-red duration-300"
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
								className="block mt-2 bg-red hover:bg-red/80 duration-300 text-secondary px-4 py-2 rounded"
								onClick={toggleMenu}
							>
								Login
							</Link>
							<Link
								to="/signup"
								className="block mt-2 bg-red hover:bg-red/80 duration-300 text-secondary px-4 py-2 rounded"
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
