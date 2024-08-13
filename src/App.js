import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Contact from "./pages/Contact";
import NotFound from "./components/NotFound";
import AddProduct from "./pages/AddProduct";
import Products from "./pages/Products";
import About from "./pages/About";
import Cart from "./pages/Cart";
import SingleProduct from "./pages/SingleProduct";
import { loadStripe } from "@stripe/stripe-js";
import Checkout from "./pages/Checkout";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./pages/Orders";
import Product3DView from "./pages/3dView";

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
				<Route path="/ha" element={<Product3DView />} />
			</Routes>
			<Footer />
		</div>
	);
};

export default App;
