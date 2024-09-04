import React from "react";
import { Customizer, Home } from "../components";
import CanvasModel from "../canvas";

const FeaturedProductPage = () => {
	return (
		<main className="app transition-all ease-in">
			<Home />
			<CanvasModel />
			<Customizer />
		</main>
	);
};

export default FeaturedProductPage;
