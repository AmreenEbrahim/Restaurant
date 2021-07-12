import React from "react";
import { Link, Redirect } from "react-router-dom";

const Landing = () => {
	return (
		<div>
			<section className="landing">
				<div className="dark-overlay">
					<div className="landing-inner">
						<h1 className="x-large">Welcome to Amreen's Restaurant</h1>
						<p className="lead">Enjoy Indian Food at lowest price</p>
						<div className="buttons">
							<Link to="/menu" className="btn btn-primary">
								MENU
							</Link>
							{/* <a href="login.html" className="btn btn-light">
								Login
							</a> */}
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};
export default Landing;
