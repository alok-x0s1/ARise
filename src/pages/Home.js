import React from "react";
import { Link } from "react-router-dom";
import Products from "./Products";

const Home = () => {
	return (
		<div className="flex flex-col min-h-screen bg-primary text-secondary">
			<main className="flex-grow">
				<section
					className="relative flex items-center justify-center h-screen bg-cover bg-center"
				>
					<div className="relative z-10 text-center">
						<h1 className="text-5xl font-extrabold mb-4">
							Welcome to ARise
						</h1>
						<p className="text-xl mb-8">
							Discover the best products with unmatched quality
							and service.
						</p>
						<Link
							to="/signup"
							className="inline-block bg-secondary hover:bg-secondary/80 duration-300 text-white font-bold py-3 px-6 rounded-md text-lg"
						>
							Get Started
						</Link>
					</div>
				</section>
				<Products />

				<section className="py-16 px-4 bg-primary text-secondary">
					<div className="container mx-auto text-center">
						<h2 className="text-4xl font-bold mb-8">
							Testimonials
						</h2>
						<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
							{testimonials.map((testimonial, index) => (
								<div
									key={index}
									className="p-8 rounded-lg shadow-lg border-2 border-gray-400"
								>
									<img
										src={testimonial.image}
										alt={testimonial.customer}
										className="w-16 h-16 rounded-full mx-auto mb-4"
									/>
									<p className="mb-4 text-start">
										"{testimonial.quote}"
									</p>
									<h3 className="text-xl font-bold">
										{testimonial.customer}
									</h3>
									<p className="text-secondary/80">
										{testimonial.designation}
									</p>
								</div>
							))}
						</div>
					</div>
				</section>

				<section className="py-16 px-4 bg-primary text-secondary">
					<div className="container mx-auto text-center">
						<h2 className="text-4xl font-bold mb-8">Contact Us</h2>
						<p className="text-secondary/80 mb-8">
							Have any questions or feedback? We'd love to hear
							from you.
						</p>
						<Link
							to="/contact"
							className="inline-block bg-secondary hover:bg-secondary/80 duration-300 text-white font-bold py-3 px-6 rounded-md text-lg"
						>
							Contact Us
						</Link>
					</div>
				</section>
			</main>
		</div>
	);
};

const testimonials = [
	{
		quote: "Amazing service and products! Highly recommend ARise. I was able to visualize the products in my home with the augmented reality feature, which made the decision-making process so much easier. The 3D models were incredibly detailed and gave me a comprehensive understanding of what I was purchasing. I have never experienced such a seamless and secure transaction process before.",
		customer: "John Doe",
		designation: "CEO of ExampleCorp",
		image: "./default.png",
	},
	{
		quote: "The best experience I've had with any online store. The ARise platform is intuitive and user-friendly, and the product quality is top-notch. I loved the augmented reality feature, which allowed me to see how the products would look in my space before buying. The customer support team was also very responsive and helpful, ensuring that my questions were answered promptly.",
		customer: "Jane Smith",
		designation: "Marketing Manager at MarketPros",
		image: "./default.png",
	},
	{
		quote: "Top-notch quality and excellent customer support. The 3D model integration feature is a game-changer, providing a detailed view of the products. The augmented reality feature helped me make an informed decision by visualizing the products in my environment. The transaction process was smooth and secure, and I felt confident purchasing from ARise. Highly recommended!",
		customer: "Michael Johnson",
		designation: "Freelance Designer",
		image: "./default.png",
	},
];

export default Home;
