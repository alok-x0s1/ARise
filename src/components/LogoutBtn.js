import { useDispatch } from "react-redux";
import authService from "../firebase/auth";
import { logout } from "../features/authSlice";

const LogoutBtn = () => {
	const dispatch = useDispatch();
	const handleLogout = async () => {
		await authService.logout().then(() => dispatch(logout()));
	};
	return (
		<button 
        onClick={handleLogout}
        className="bg-red hover:bg-red-secondary duration-300 text-white px-4 py-2 rounded">
			Logout
		</button>
	);
};

export default LogoutBtn