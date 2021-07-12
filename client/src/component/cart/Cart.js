import React, { Fragment, useEffect } from "react";

import { Link } from "react-router-dom";

const Cart = props => {
	let bill,
		menu = [];

	let data = localStorage.getItem("item");
	if (data) menu = JSON.parse(data);
	console.log("menu", menu);
	bill = menu.reduce((a, v) => (a = a + v.price), 0);
	bill = bill + bill * 0.1;

	return (
		<Fragment>
			<h1 className="large text-primary">MENU</h1>

			<h2 className="my-2">Menu Items</h2>
			<div>
				<table className="table">
					<thead>
						<tr>
							<th className="hide-sm">Name</th>
							<th className="hide-sm">Description</th>
							<th className="hide-sm">Price</th>
							<th></th>
						</tr>
					</thead>
					<tbody>
						{menu.map(item => (
							<tr key={item._id}>
								<td>{item.name}</td>
								<td className="hide-sm">{item.description}</td>
								<td className="hide-sm">{item.price}</td>
								<td className="hide-sm"></td>
							</tr>
						))}

						<tr>
							<td>
								<h2 className="hide-sm">Final Bill</h2> {bill}
							</td>
						</tr>
						<h2 className="hide-sm">Thank you for dinning at Amreen's</h2>
						{/* {console.log(menu.reduce((a, v) => (a = a + v.price), 0))} */}
					</tbody>
				</table>
				{/* <Link to="/register" className="btn btn-light">
					<i className="fas  text-primary" /> checkout
				</Link> */}
			</div>
		</Fragment>
	);
};

Cart.propTypes = {};

export default Cart;
