import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
	let menu = [];
	let data = localStorage.getItem("item");
	if (data) menu = JSON.parse(data);
	// console.log("menu", menu);
	return (
		<div>
			<nav className="navbar bg-dark">
				<h1>
					<Link to="/">
						<i className="fas " /> Amreen's
					</Link>
				</h1>
				<ul>
					<li>
						<Link to="/cart">
							Cart({menu && menu.length > 0 ? menu.length : ""})
						</Link>
					</li>
					{/* {/* <li>
						<a href="register.html">Register</a>
					</li> */}
					<li>
						<Link to="/menu">menu</Link>
					</li>
				</ul>
			</nav>
		</div>
	);
};
export default Navbar;
