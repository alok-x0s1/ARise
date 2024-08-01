import "./App.css";
import authService from "./firebase/auth";
import { useState } from "react";

function App() {
	const data = {
		email: "alok@a.com",
		password: "123456abc",
	};
	const createUser = async (x) => {
		const data = await authService.createAccount(x);
		console.log(data);
	};
  const getuser = async () => {
    const user = await authService.getCurrentUser();
    console.log(user);
  }
	return (
		<div className="App">
			<h1>Hello</h1>
			<button onClick={() => createUser(data)}>Create User</button>
      <button onClick={getuser}>Get User</button>
		</div>
	);
}

export default App;
