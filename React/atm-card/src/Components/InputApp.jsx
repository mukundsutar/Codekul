import React from "react";
import "../Input.css";
import { NavLink } from "react-router-dom";

export default function InputApp() {
	return (
		<>
			<div className="container home">
				<div className="input">
					<div className="input-ele enter-number-div">
						<div
							id="enter-number-title"
							className="enter-number-ele"
						>
							Enter Numbers:
						</div>
						<div
							id="enter-number-field"
							className="enter-number-ele"
						>
							<form>
								<input type="text" />
							</form>
						</div>
						<div
							id="enter-number-button"
							className="enter-number-ele"
						>
							<button>Random</button>
						</div>
					</div>

					<div className="input-ele enter-name-div">
						<div id="enter-name-title" className="enter-name-ele">
							Enter Name
						</div>
						<div id="enter-name-field" className="enter-name-ele">
							<form>
								<input type="text" />
							</form>
						</div>
					</div>

					<div className="input-ele enter-expiry-div">
						<div
							id="enter-expiry-title"
							className="enter-expiry-ele"
						>
							Enter Expiry
						</div>
						<div
							id="enter-expiry-field"
							className="enter-expiry-ele"
						>
							<form>
								<input type="text" />
							</form>
						</div>
						<div
							id="enter-expiry-button"
							className="enter-expiry-ele"
						>
							<button>Random</button>
						</div>
					</div>

					<div className="input-ele enter-cvv-div">
						<div id="enter-cvv-title" className="enter-cvv-ele">
							Enter CVV
						</div>
						<div id="enter-cvv-field" className="enter-cvv-ele">
							<form>
								<input type="text" />
							</form>
						</div>
						<div id="enter-cvv-button" className="enter-cvv-ele">
							<button>Random</button>
						</div>
					</div>

					<div className="input-ele enter-button-div">
						<NavLink
							className="navbar-ele navbar-background"
							to={"/background"}
							style={{ textDecoration: "none" }}
						>
							<button className="input-button">
								Choose Background
							</button>
						</NavLink>
					</div>
				</div>
			</div>
		</>
	);
}
