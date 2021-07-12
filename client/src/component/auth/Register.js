import React, { Fragment, useState } from "react";
// import axios from "axios";
import { Link, Redirect } from "react-router-dom";
// import { connect } from "react-redux";
// import { setAlert } from "../../actions/alert";
// import { register } from "../../actions/auth";

const Register = props => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		password: "",
		password2: ""
	});
	const { name, email, password, password2 } = formData;
	const onChange = e =>
		setFormData({ ...formData, [e.target.name]: e.target.value });
	// const onSubmit = async e => {
	// 	e.preventDefault();
	// 	if (password !== password2) {
	// 		setAlert("password doesnt match", "danger");

	// 		//console.log("password doesnt match");
	// 	} else {
	// 		register({ name, email, password });
	// 		console.log("sucess");
	// 		// const newUser = {
	// 		// 	name,
	// 		// 	email,
	// 		// 	password
	// 		// };
	// 		// // console.log(newUser);
	// 		// try {
	// 		// 	const config = {
	// 		// 		headers: {
	// 		// 			"Content-Type": "application/json"
	// 		// 		}
	// 		// 	};
	// 		// 	const body = JSON.stringify(newUser);
	// 		// 	const res = await axios.post("/api/user", body, config);
	// 		// 	console.log("response", res.data);
	// 		// } catch (error) {
	// 		// 	console.error(error.response.data);
	// 		// }
	// 	}
	// };
	return (
		<div>
			<h2>thank you for coming</h2>
		</div>
	);
	// return (
	// 	<Fragment>
	// 		<h1 className="large text-primary">Sign Up</h1>
	// 		<p className="lead">
	// 			<i className="fas fa-user" /> Create Your Account
	// 		</p>
	// 		<form
	// 			className="form"
	// 			// onSubmit={e => onSubmit(e)}
	// 		>
	// 			<div className="form-group">
	// 				<input
	// 					type="text"
	// 					placeholder="Name"
	// 					name="name"
	// 					value={name}
	// 					onChange={e => onChange(e)}
	// 					// required
	// 				/>
	// 			</div>
	// 			<div className="form-group">
	// 				<input
	// 					type="email"
	// 					placeholder="Email Address"
	// 					value={email}
	// 					onChange={e => onChange(e)}
	// 					name="email"
	// 					// required
	// 				/>
	// 			</div>
	// 			<div className="form-group">
	// 				<input
	// 					type="password"
	// 					placeholder="Password"
	// 					name="password"
	// 					value={password}
	// 					onChange={e => onChange(e)}
	// 					// minLength={6}
	// 				/>
	// 			</div>
	// 			<div className="form-group">
	// 				<input
	// 					type="password"
	// 					value={password2}
	// 					onChange={e => onChange(e)}
	// 					placeholder="Confirm Password"
	// 					name="password2"
	// 					// minLength={6}
	// 				/>
	// 			</div>
	// 			<input
	// 				type="submit"
	// 				className="btn btn-primary"
	// 				defaultValue="Register"
	// 			/>
	// 		</form>
	// 		<p className="my-1">
	// 			Already have an account? <Link to="/login">Sign In</Link>
	// 		</p>
	// 	</Fragment>
	// );
};

Register.propTypes = {};

export default Register;
