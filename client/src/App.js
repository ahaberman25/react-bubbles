import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import Login from "./components/Login";
import BubblePage from "./components/BubblePage";
import "./styles.scss";

function App() {
	const logout = (e) => {
		e.preventDefault();
		localStorage.removeItem("token");
		window.location.reload(false);
	};

	return (
		<Router>
			<div className="app-container">
				<div className="App">
					{localStorage.getItem("token") === null ? (
						<h2>Login</h2>
					) : (
						<div className="protected-container">
							<button
								className="logout"
								color="inherit"
								onClick={logout}>
								logout
							</button>
						</div>
					)}
					<Switch>
						<PrivateRoute
							exact
							path="/bubbles"
							component={BubblePage}
						/>
						{/* <PrivateRoute
								exact
								path="/addColors"
								component={addColors}
							/> */}
						<Route path="/login" component={Login} />
						<Route component={Login} />
					</Switch>
				</div>
			</div>
		</Router>
	);
}

export default App;
