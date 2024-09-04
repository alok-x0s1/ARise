import { Route, Routes } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { Footer, Navbar, NotFound } from "./components";
import {
	About,
	AddProduct,
	Cart,
	Checkout,
	Contact,
	FeaturedProductPage,
	Home,
	Login,
	Orders,
	Products,
	Signup,
	SingleProduct,
} from "./pages";

const promise = loadStripe(String(process.env.REACT_APP_STRIPE_SECRET_KEY));

const App = () => {
	return (
		<div>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/login" element={<Login />} />
				<Route path="/signup" element={<Signup />} />
				<Route path="/about" element={<About />} />
				<Route path="/products" element={<Products />} />
				<Route
					path="/featured-product"
					element={<FeaturedProductPage />}
				/>
				<Route path="/products/:id" element={<SingleProduct />} />
				<Route
					path="/checkout"
					element={
						<Elements stripe={promise}>
							<Checkout />
						</Elements>
					}
				/>
				{process.env.REACT_APP_MODE === "development" && (
					<Route path="/add-product" element={<AddProduct />} />
				)}
				<Route path="/contact" element={<Contact />} />
				<Route path="/cart" element={<Cart />} />
				<Route path="/orders" element={<Orders />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
			<Footer />
		</div>
	);
};

export default App;
