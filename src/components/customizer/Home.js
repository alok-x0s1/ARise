import { motion, AnimatePresence } from "framer-motion";
import { v4 as uuidv4 } from "uuid";
import {
	headContainerAnimation,
	headContentAnimation,
	headTextAnimation,
	slideAnimation,
} from "../../config/motion";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { toggleIntro } from "../../features/customizerSlice";
import { addToCart } from "../../features/cartSlice";

const Home = () => {
	const navigate = useNavigate();
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [product, setProduct] = useState({
		id: uuidv4(),
		name: "T-Shirt",
		image: "/t_shirt.png",
		price: "49.9",
		description:
			"A stylish T-shirt featuring a modern, minimalist design with vibrant colors, comfortable fabric, and a sleek fit. Perfect for casual outings, making a bold statement with effortless style.",
		ratings: "4",
	});

	const authStatus = useSelector((state) => state.auth.status);
	const intro = useSelector((state) => state.customizer.intro);

	const dispatch = useDispatch();

	useEffect(() => {
		setIsLoggedIn(authStatus);
	}, [authStatus]);

	const handleCustomize = () => {
		dispatch(toggleIntro());
	};

	const handleAddToCart = () => {
		dispatch(
			addToCart({
				id: product.id,
				name: product.name,
				image: product.image,
				price: product.price,
				description: product.description,
				ratings: product.ratings,
			})
		);
	};
	console.log(product);

	return (
		<AnimatePresence>
			{intro && (
				<motion.section className="home" {...slideAnimation("left")}>
					<motion.header {...slideAnimation("down")}>
						<img
							src="./threejs.png"
							alt="logo"
							className="w-8 h-8 object-contain"
						/>
					</motion.header>

					<motion.div
						className="home-content"
						{...headContainerAnimation}
					>
						<motion.div {...headTextAnimation}>
							{/* <h1 className="head-text">
								LET'S <br className="xl:block hidden" /> DO IT.
							</h1> */}
							<p className="max-w-md font-normal text-gray-600 text-base">
								Create your unique and exclusive shirt with our
								brand-new 3D customization tool.{" "}
								<strong>Unleash your imagination</strong> and
								define your own style.
							</p>
						</motion.div>
						<motion.div
							className="max-w-md font-normal text-base"
							{...slideAnimation("left")}
						>
							<h1 className="text-3xl md:text-4xl font-bold mb-4">
								{product.name}
							</h1>
							<div className="ratings flex mb-4">
								{product.ratings > 0 &&
									Array.from({ length: product.ratings }).map(
										(_, i) => <span key={i}>⭐</span>
									)}
							</div>
							<p className="text-secondary/80 mb-4">
								{product.description}
							</p>
							<p className="text-xl md:text-2xl font-bold mb-6 text-blue">
								$ {Number(product.price).toFixed(2)}
							</p>

							<div className="flex flex-wrap items-center sm:space-x-4 space-y-4 sm:space-y-0">
								<button
									onClick={
										isLoggedIn
											? handleAddToCart
											: () => navigate("/login")
									}
									className="bg-blue hover:bg-blue-secondary text-white py-2 px-4 rounded transition-colors duration-300 w-fit"
								>
									Add to Cart
								</button>

								<button
									onClick={
										isLoggedIn
											? handleCustomize
											: () => navigate("/login")
									}
									className="bg-red hover:bg-red-secondary text-white py-2 px-4 rounded transition-colors duration-300 w-fit text-center mx-4"
								>
									Customize It
								</button>
							</div>
						</motion.div>
						<motion.div
							{...headContentAnimation}
							className="flex flex-col gap-5"
						>
							<p className="max-w-md font-normal text-gray-600 text-base">
								Discover our new product, a stylish T-shirt with
								a modern, minimalist design. Perfect for casual
								outings, making a bold statement with effortless
								style.{" "}
								<Link to="/products">
									<strong>Available now</strong>
								</Link>
								!
							</p>
						</motion.div>
					</motion.div>
				</motion.section>
			)}
		</AnimatePresence>
	);
};

export default Home;
