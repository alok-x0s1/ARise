import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<footer className="bg-gray-900 text-gray-300 py-8">
			<div className="container mx-auto px-4">
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					<div>
						<h2 className="text-2xl font-bold text-white mb-4">ARise</h2>
						<p className="text-gray-400">
							ARise you the best products with top-notch quality and service. 
							Your satisfaction is our priority.
						</p>
					</div>
					<div>
						<h2 className="text-xl font-bold text-white mb-4">Quick Links</h2>
						<ul className="space-y-2">
							<li>
								<Link to="/" className="hover:text-white">Home</Link>
							</li>
							<li>
								<Link to="/about" className="hover:text-white">About</Link>
							</li>
							<li>
								<Link to="/services" className="hover:text-white">Services</Link>
							</li>
							<li>
								<Link to="/contact" className="hover:text-white">Contact</Link>
							</li>
						</ul>
					</div>
					<div>
						<h2 className="text-xl font-bold text-white mb-4">Follow Us</h2>
						<div className="flex space-x-4">
							<a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
									<path d="M22.675 0H1.325C.594 0 0 .593 0 1.326v21.348C0 23.407.594 24 1.325 24H12.81v-9.294H9.692v-3.622h3.118V8.413c0-3.1 1.894-4.788 4.66-4.788 1.325 0 2.464.099 2.798.143v3.245l-1.919.001c-1.504 0-1.796.715-1.796 1.762v2.31h3.59l-.468 3.622h-3.122V24h6.116c.73 0 1.324-.593 1.324-1.326V1.326C24 .593 23.407 0 22.675 0z" />
								</svg>
							</a>
							<a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
									<path d="M24 4.557a9.94 9.94 0 0 1-2.828.775 4.94 4.94 0 0 0 2.165-2.724 9.865 9.865 0 0 1-3.127 1.195 4.926 4.926 0 0 0-8.391 4.49A13.978 13.978 0 0 1 1.671 3.149a4.926 4.926 0 0 0 1.523 6.574 4.902 4.902 0 0 1-2.231-.616c-.054 2.28 1.581 4.415 3.945 4.892a4.944 4.944 0 0 1-2.224.084 4.928 4.928 0 0 0 4.604 3.417A9.867 9.867 0 0 1 0 21.542a13.945 13.945 0 0 0 7.548 2.212c9.057 0 14.002-7.506 14.002-14.002 0-.213-.005-.426-.014-.637A10.012 10.012 0 0 0 24 4.557z" />
								</svg>
							</a>
							<a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
									<path d="M12 2.163c3.2 0 3.584.012 4.85.07 1.17.055 1.995.24 2.458.403a4.919 4.919 0 0 1 1.69 1.108 4.92 4.92 0 0 1 1.107 1.691c.162.462.347 1.287.403 2.457.059 1.267.071 1.651.071 4.851s-.012 3.584-.07 4.85c-.055 1.17-.24 1.995-.403 2.458a4.92 4.92 0 0 1-1.108 1.69 4.923 4.923 0 0 1-1.691 1.107c-.462.162-1.287.347-2.457.403-1.267.059-1.651.071-4.851.071s-3.584-.012-4.85-.07c-1.17-.055-1.995-.24-2.458-.403a4.921 4.921 0 0 1-1.69-1.108 4.918 4.918 0 0 1-1.107-1.691c-.162-.462-.347-1.287-.403-2.457C2.175 15.584 2.163 15.2 2.163 12s.012-3.584.07-4.85c.055-1.17.24-1.995.403-2.458a4.92 4.92 0 0 1 1.108-1.69 4.92 4.92 0 0 1 1.691-1.107c.462-.162 1.287-.347 2.457-.403C8.416 2.175 8.8 2.163 12 2.163zm0-2.163C8.732 0 8.332.014 7.052.071 5.733.129 4.633.341 3.678.672a7.14 7.14 0 0 0-2.6 1.671 7.14 7.14 0 0 0-1.671 2.6C.341 5.633.129 6.733.071 8.052.014 9.332 0 9.732 0 12c0 2.268.014 2.668.071 3.948.058 1.319.27 2.419.601 3.374a7.143 7.143 0 0 0 1.671 2.6 7.137 7.137 0 0 0 2.6 1.671c.955.331 2.055.543 3.374.601 1.28.057 1.68.071 3.948.071 2.268 0 2.668-.014 3.948-.071 1.319-.058 2.419-.27 3.374-.601a7.137 7.137 0 0 0 2.6-1.671 7.137 7.137 0 0 0 1.671-2.6c.331-.955.543-2.055.601-3.374.057-1.28.071-1.68.071-3.948 0-2.268-.014-2.668-.071-3.948-.058-1.319-.27-2.419-.601-3.374a7.14 7.14 0 0 0-1.671-2.6 7.137 7.137 0 0 0-2.6-1.671C17.367.341 16.267.129 14.948.071 13.668.014 13.268 0 12 0z" />
									<path d="M12 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z" />
								</svg>
							</a>
						</div>
					</div>
				</div>
				<div className="mt-8 border-t border-gray-700 pt-4 text-center">
					<p className="text-gray-400">&copy; 2024 ARise. All rights reserved.</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;