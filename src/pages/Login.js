import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import authService from "../firebase/auth";
import { login } from "../features/authSlice";
import { useDispatch } from "react-redux";
import { extractUserData } from "../utils/extractData";
import { Toaster } from "../components";

const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState(false);
	const [isLoading, setIsLoading] = useState(false);

	const navigate = useNavigate();
	const dispatch = useDispatch();

	const handleSignup = async (e) => {
		e.preventDefault();
		setError("");
		setIsLoading(true);
		try {
			const user = await authService.login({ email, password });
			if (user) {
				const userData = await authService.getCurrentUser();
				const data = extractUserData(userData);
				console.log(data);
				if (userData) dispatch(login(data));
				navigate("/");
			}
		} catch (error) {
			setError(error.message.replace("Firebase: Error ", ""));
		} finally {
			setIsLoading(false);
		}
	};

	const loginWithGoogle = async () => {
		setError("");
		setIsLoading(true);
		try {
			const user = await authService.registerWithGoogle();
			if (user) {
				const userData = await authService.getCurrentUser();
				if (userData) dispatch(login(userData));
				navigate("/");
			}
		} catch (error) {
			setError(error.message.replace("Firebase: Error ", ""));
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<div className="flex items-center justify-center min-h-screen bg-primary px-4">
			{error && <Toaster status="error" message={error} />}
			<div className="w-full max-w-md p-4 lg:p-8 space-y-8 bg-primary border-2 border-gray-400 text-secondary rounded-lg shadow-lg animate-fade-in">
				<Link
					to={"/"}
					className="bg-secondary hover:bg-secondary/80 duration-300 text-white font-bold py-2 px-4 rounded mb-4"
				>
					Back to Home
				</Link>
				<div className="text-center">
					<h2 className="text-3xl font-extrabold">
						Login your account
					</h2>
					<p className="mt-2 text-base text-secondary/80">
						Enter your details below
					</p>
				</div>
				<form className="mt-8 space-y-6" onSubmit={handleSignup}>
					<input type="hidden" name="remember" value="true" />
					<div className="rounded-md shadow-sm -space-y-px">
						<div>
							<label htmlFor="email-address" className="sr-only">
								Email address
							</label>
							<input
								id="email-address"
								name="email"
								type="email"
								autoComplete="email"
								required
								className="relative block w-full px-3 py-2 border border-gray-400 placeholder-secondary bg-primary-light focus:outline-none focus:ring-red focus:border-red focus:z-10 sm:text-sm"
								placeholder="Email address"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
							/>
						</div>
						<div>
							<label htmlFor="password" className="sr-only">
								Password
							</label>
							<input
								id="password"
								name="password"
								type="password"
								autoComplete="current-password"
								required
								minLength={8}
								className="relative block w-full px-3 py-2 border border-gray-400 placeholder-secondary bg-primary-light focus:outline-none focus:ring-red focus:border-red focus:z-10 sm:text-sm rounded-b-md"
								placeholder="Password"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
							/>
						</div>
					</div>
					<div className="flex items-center justify-between">
						<div className="flex items-center">
							<input
								id="remember_me"
								name="remember_me"
								type="checkbox"
								className="w-4 h-4 border-blue rounded bg-gray-800 focus:ring-blue"
							/>
							<label
								htmlFor="remember_me"
								className="block ml-2 text-sm text-secondary/80"
							>
								Remember me
							</label>
						</div>
						<div className="text-sm">
							<Link
								to="/signup"
								className="font-medium text-secondary hover:text-secondary/80 duration-300"
							>
								Don't have an account?
							</Link>
						</div>
					</div>
					<div>
						<button
							disabled={isLoading}
							type="submit"
							className="relative flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-blue border border-transparent rounded-md group hover:bg-blue-secondary duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
						>
							<span className="absolute inset-y-0 left-0 flex items-center pl-3">
								<svg
									className="w-5 h-5 text-indigo-500 group-hover:text-indigo-400 duration-300"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 20 20"
									fill="currentColor"
									aria-hidden="true"
								>
									<path
										fillRule="evenodd"
										d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v4a1 1 0 002 0V7zm-1 8a1.5 1.5 0 110-3 1.5 1.5 0 010 3z"
										clipRule="evenodd"
									/>
								</svg>
							</span>
							{isLoading ? "Loading..." : "Sign up"}
						</button>
						<button
							disabled={isLoading}
							onClick={loginWithGoogle}
							className="relative flex justify-center w-full px-4 py-2 mt-4 text-sm font-medium text-white bg-red border border-transparent rounded-md group hover:bg-red-secondary duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
						>
							<span className="absolute inset-y-0 left-0 flex items-center pl-3">
								<svg
									className="w-5 h-5 text-red-500 group-hover:text-red-400 duration-300"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 20 20"
									fill="currentColor"
									aria-hidden="true"
								>
									<path
										fillRule="evenodd"
										d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v4a1 1 0 002 0V7zm-1 8a1.5 1.5 0 110-3 1.5 1.5 0 010 3z"
										clipRule="evenodd"
									/>
								</svg>
							</span>
							Sign in with Google
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Login;
