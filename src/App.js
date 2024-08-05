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

const promise = loadStripe(
	"pk_test_51Pjw6mLZoIGHAt2AU3FiaIgs9LidQjq4HnQSME7nirpWGT4iR2fgfTr6yehL8p8lkNZPjl00WFXm6xrbf09Srwib00yFwMSkOB"
);

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
				<Route path="/add-product" element={<AddProduct />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/cart" element={<Cart />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
			<Footer />
		</div>
	);
};

export default App;
