import React, { Fragment } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "../src/component/layout/Navbar";
import Landing from "../src/component/layout/Landing";
import Menu from "../src/component/menu/Menu";
import Cart from "../src/component/cart/Cart";
import Alert from "../src/component/layout/Alert";
import Register from "../src/component/auth/Register";

//redux
import { Provider } from "react-redux";
import store from "./store";
const App = () => {
	return (
		<Provider store={store}>
			<Router>
				<Fragment>
					<Navbar />
					<Route exact path="/" component={Landing} />
					<Alert />
					<Switch>
						<Route exact path="/register" component={Register} />
						<Route exact path="/menu" component={Menu} />
						<Route exact path="/cart" component={Cart} />
					</Switch>
				</Fragment>
			</Router>
		</Provider>
	);
};

export default App;
