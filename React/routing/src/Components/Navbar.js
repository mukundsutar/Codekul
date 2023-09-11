import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
	return (
		<>
			<div id="navbar">
				<NavLink className="navbarItems" to={'/'}>Home</NavLink>
				<NavLink className="navbarItems" to={'/about'}>About</NavLink>
				<NavLink className="navbarItems" to={'/products'}>Products</NavLink>
				<NavLink className="navbarItems" to={'/contact'}>Contact</NavLink>
			</div>
		</>
	);
}

export default Navbar;
