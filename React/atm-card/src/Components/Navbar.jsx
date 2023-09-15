import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
	return (
		<>
			<div className="navbar">
				<NavLink className="navbar-ele navbar-home" to={"/"}>
					Home
				</NavLink>

				<NavLink className="navbar-ele navbar-background" to={"/background"}>
					Choose Background
				</NavLink>

				<div className="navbar-ele navabr-generate">Generate</div>
			</div>
		</>
	);
}
