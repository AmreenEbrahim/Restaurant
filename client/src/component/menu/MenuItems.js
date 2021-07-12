import React, { useEffect } from "react";
import { setAlert } from "../../actions/alert";
// import { AddOrder } from "../../actions/menu";

export const MenuItems = ({ menu }) => {
	let items = [];
	const AddOrder = (e, id) => {
		// e.preventDefault();
		items.push(id);

		localStorage.setItem("item", JSON.stringify(items));
		// localStorage.item = id;
		// let users = JSON.parse(localStorage.getItem("item"));
		// console.log("item id", users);
	};

	return (
		<div>
			<table className="table">
				<thead>
					<tr>
						<th>Name</th>
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
							<td>
								<button
									onClick={e => AddOrder(e, item)}
									className="btn btn-danger"
								>
									Order
								</button>
							</td>
						</tr>
					))}

					{/* <tr>
						<td>Traversy Media</td>
						<td className="hide-sm">Instructor & Developer</td>
						<td className="hide-sm">02-03-2015 - Now</td>
						<td>
							<button className="btn btn-danger">Delete</button>
						</td>
					</tr> */}
				</tbody>
			</table>
		</div>
	);
};
