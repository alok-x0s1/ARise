import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";

const Footer = () => {
	return (
		<footer className="bg-primary text-secondary py-8 border-t-2">
			<div className="container mx-auto px-4">
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
					<div>
						<h2 className="text-2xl font-bold text-secondary mb-4">
							ARise
						</h2>
						<p className="text-secondary/80">
							ARise offers you the best products with top-notch quality
							and service. Your satisfaction is our priority.
						</p>
					</div>
					<div>
						<h2 className="text-xl font-bold text-red mb-4">
							Quick Links
						</h2>
						<ul className="space-y-2 text-secondary/80">
							<li>
								<Link
									to="/"
									className="hover:text-red-secondary duration-300"
								>
									Home
								</Link>
							</li>
							<li>
								<Link
									to="/about"
									className="hover:text-red-secondary duration-300"
								>
									About
								</Link>
							</li>
							<li>
								<Link
									to="/services"
									className="hover:text-red-secondary duration-300"
								>
									Services
								</Link>
							</li>
							<li>
								<Link
									to="/contact"
									className="hover:text-red-secondary duration-300"
								>
									Contact
								</Link>
							</li>
						</ul>
					</div>
					<div>
						<h2 className="text-xl font-bold text-red mb-4">
							Follow Us
						</h2>
						<div className="flex flex-wrap space-x-4">
							<a
								href="https://www.facebook.com"
								target="_blank"
								rel="noopener noreferrer"
								className="hover:text-red-secondary duration-300"
							>
								<FaFacebook className="w-6 h-6" />
							</a>
							<a
								href="https://www.twitter.com"
								target="_blank"
								rel="noopener noreferrer"
								className="hover:text-red-secondary duration-300"
							>
								<FaTwitter className="w-6 h-6" />
							</a>
							<a
								href="https://www.instagram.com"
								target="_blank"
								rel="noopener noreferrer"
								className="hover:text-red-secondary duration-300"
							>
								<FaInstagram className="w-6 h-6" />
							</a>
							<a
								href="https://www.github.com"
								target="_blank"
								rel="noopener noreferrer"
								className="hover:text-red-secondary duration-300"
							>
								<FaGithub className="w-6 h-6" />
							</a>
						</div>
					</div>
				</div>
				<div className="mt-8 border-t-2 pt-4 text-center">
					<p className="text-secondary/80">
						&copy; 2024 ARise. All rights reserved.
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
