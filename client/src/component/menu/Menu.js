import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getMenu } from "../../actions/menu";
import PropTypes from "prop-types";
import { MenuItems } from "./MenuItems";

const Menu = ({ getMenu, menu: { menu, loading } }) => {
	useEffect(() => {
		getMenu();
	}, [getMenu]);
	console.log("menu====", menu);

	return (
		<section className="container">
			<h1 className="large text-primary">MENU</h1>

			<h2 className="my-2">Menu Items</h2>
			{!loading && <MenuItems menu={menu} />}
		</section>
	);
};

Menu.propTypes = {
	getMenu: PropTypes.func.isRequired
};
const mapStateToProps = state => ({
	menu: state.menu
});

export default connect(
	mapStateToProps,
	{ getMenu }
)(Menu);
