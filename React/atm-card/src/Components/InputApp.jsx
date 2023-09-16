import React, { useState } from "react";
import "../Input.css";
import { NavLink } from "react-router-dom";

export default function InputApp({
	numberCallback,
	dateCallback,
	cvvCallback,
	inputNumberCallback,
	inputNameCallback,
	inputDateCallback,
	inputCVVCallback,
}) {
	const btnRandomNumber = () => {
		let max = 9999999999999999;
		let min = 1000000000000000;

		numberCallback(Math.floor(Math.random() * (max - min) + min));
	};

	const btnRandomExpiry = () => {
		let max = 1240;
		let min = 100;

		dateCallback(Math.floor(Math.random() * (max - min) + min));
	};

	const btnRandomCVV = () => {
		let max = 999;
		let min = 100;

		cvvCallback(Math.floor(Math.random() * (max - min) + min));
	};

	let text = "";

	// input to preview
	const inputNumber = (e) => {
		inputNumberCallback(e.target.value);
	};

	const inputName = (e) => {
		inputNameCallback(e.target.value);
	};

	const inputDate = (e) => {
		inputDateCallback(e.target.value);
	};

	const inputCVV = (e) => {
		inputCVVCallback(e.target.value);
	};

	return (
		<>
			<div className="input">
				<div className="input-ele enter-number-div">
					<div id="enter-number-title" className="enter-number-ele">
						Enter Numbers:
					</div>
					<div id="enter-number-field" className="enter-number-ele">
						<form>
							<input
								type="text"
								value={number}
								onChange={inputNumber}
							/>
						</form>
					</div>
					<div id="enter-number-button" className="enter-number-ele">
						<button onClick={btnRandomNumber}>Random</button>
					</div>
				</div>

				<div className="input-ele enter-name-div">
					<div id="enter-name-title" className="enter-name-ele">
						Enter Name
					</div>
					<div id="enter-name-field" className="enter-name-ele">
						<form>
							<input
								type="text"
								value={name}
								onChange={inputName}
							/>
						</form>
					</div>
				</div>

				<div className="input-ele enter-expiry-div">
					<div id="enter-expiry-title" className="enter-expiry-ele">
						Enter Expiry
					</div>
					<div id="enter-expiry-field" className="enter-expiry-ele">
						<form>
							<input
								type="text"
								value={date}
								onChange={inputDate}
							/>
						</form>
					</div>
					<div id="enter-expiry-button" className="enter-expiry-ele">
						<button onClick={btnRandomExpiry}>Random</button>
					</div>
				</div>

				<div className="input-ele enter-cvv-div">
					<div id="enter-cvv-title" className="enter-cvv-ele">
						Enter CVV
					</div>
					<div id="enter-cvv-field" className="enter-cvv-ele">
						<form>
							<input
								type="text"
								value={cvv}
								onChange={inputCVV}
							/>
						</form>
					</div>
					<div id="enter-cvv-button" className="enter-cvv-ele">
						<button onClick={btnRandomCVV}>Random</button>
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
		</>
	);
}
