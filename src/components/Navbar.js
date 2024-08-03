import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	return (
		<nav className="bg-gray-900 p-4 shadow-lg fixed top-0 left-0 right-0 z-50">
			<div className="container mx-auto flex items-center justify-between">
				<Link to="/" className="text-white text-2xl font-bold">
					ARise
				</Link>
				<div className="hidden md:flex space-x-4 items-center">
					<Link to="/about" className="text-gray-300 hover:text-white">
						About
					</Link>
					<Link to="/products" className="text-gray-300 hover:text-white">
						Products
					</Link>
					<Link to="/contact" className="text-gray-300 hover:text-white">
						Contact
					</Link>
					<Link
						to="/signup"
						className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded"
					>
						Sign Up
					</Link>
					<Link
						to="/add-product"
						className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded"
					>
						Add Product
					</Link>
				</div>
				<div className="md:hidden flex items-center">
					<button
						className="text-gray-300 hover:text-white focus:outline-none"
						onClick={toggleMenu}
					>
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
					</button>
				</div>
			</div>
			{isMenuOpen && (
				<div className="md:hidden bg-gray-800 text-center py-4 space-y-2">
					<Link
						to="/"
						className="block text-gray-300 hover:text-white"
						onClick={toggleMenu}
					>
						Home
					</Link>
					<Link
						to="/about"
						className="block text-gray-300 hover:text-white"
						onClick={toggleMenu}
					>
						About
					</Link>
					<Link
						to="/services"
						className="block text-gray-300 hover:text-white"
						onClick={toggleMenu}
					>
						Services
					</Link>
					<Link
						to="/contact"
						className="block text-gray-300 hover:text-white"
						onClick={toggleMenu}
					>
						Contact
					</Link>
					<Link
						to="/login"
						className="block bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded"
						onClick={toggleMenu}
					>
						Login
					</Link>
					<Link
						to="/signup"
						className="block bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded"
						onClick={toggleMenu}
					>
						Sign Up
					</Link>
				</div>
			)}
		</nav>
	);
};

export default Navbar;