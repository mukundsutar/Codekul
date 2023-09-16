import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
	return (
		<>
			<div className="navbar">
				<NavLink
					className="navbar-ele navbar-home"
					to={"/"}
					style={{ textDecoration: "none" }}
				>
					Home
				</NavLink>

				<NavLink
					className="navbar-ele navbar-background"
					to={"/background"}
					style={{ textDecoration: "none" }}
				>
					Choose Background
				</NavLink>

				<NavLink
					className="navbar-ele navbar-generate"
					to={"/generate"}
					style={{ textDecoration: "none" }}
				>
					Generate
				</NavLink>
			</div>
		</>
	);
}
