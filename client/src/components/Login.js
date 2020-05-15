import React, { useState } from "react";
import { axiosWithAuth } from "../util/axiosWithAuth";

const Login = (props) => {
	const [cred, setCred] = useState({
		credentials: {
			username: "",
			password: "",
		},
	});

	const handleChange = (e) => {
		setCred({
			credentials: {
				...cred.credentials,
				[e.target.name]: e.target.value,
			},
		});
	};

	const login = (e) => {
		e.preventDefault();
		axiosWithAuth()
			.post("/login", cred.credentials)
			.then((res) => {
				console.log("res ", res);
				localStorage.setItem("token", res.data.payload);
				props.history.push("/bubbles");
			})
			.catch((err) => {
				console.log("error login: ", err);
			})
			.finally(() => window.location.reload());
	};

	return (
		<>
			<form onSubmit={login}>
				<input
					type="text"
					name="username"
					placeholder="Username"
					value={cred.credentials.username}
					onChange={handleChange}
				/>
				<input
					type="password"
					name="password"
					placeholder="Password"
					value={cred.credentials.password}
					onChange={handleChange}
				/>
				<button type="submit">Login</button>
			</form>
		</>
	);
};

export default Login;
