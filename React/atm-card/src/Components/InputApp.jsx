import React, { useState } from "react";
import { useEffect } from "react";

export default function InputApp({ callback }) {
	const btnRandom = () => {
		callback(Math.floor(Math.random() * (9999999999999999 - 1000000000000000) + 1000000000000000));
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
							<input type="text" />
						</form>
					</div>
					<div id="enter-number-button" className="enter-number-ele">
						<button onClick={btnRandom}>Random</button>
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
					<div id="enter-expiry-title" className="enter-expiry-ele">
						Enter Expiry
					</div>
					<div id="enter-expiry-field" className="enter-expiry-ele">
						<form>
							<input type="text" />
						</form>
					</div>
					<div id="enter-expiry-button" className="enter-expiry-ele">
						Random
					</div>
				</div>

				<div className="input-ele enter-background-div">
					<div
						id="enter-background-title"
						className="enter-background-ele"
					>
						Change Background
					</div>
					<div
						id="enter-background-field"
						className="enter-background-ele"
					>
						<form>
							<input type="file" />
						</form>
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
						Random
					</div>
				</div>
			</div>
		</>
	);
}
