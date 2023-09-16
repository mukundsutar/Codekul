import React from "react";
import chipimg from "../img/emv-chip.png";

export default function FrontPreview({ number, date, image, name }) {
	const numStr = JSON.stringify({ number });
	const dateStr = JSON.stringify({ date });
	const nameStr = JSON.stringify({ name });

	// define initial
	let num1 = 1234;
	let num2 = 1234;
	let num3 = 1234;
	let num4 = 1234;
	let date1 = 15;
	let date2 = 12;
	let name1 = nameStr;

	// format numbers
	if (numStr.length == 27) {
		num1 = numStr.substring(10, 14);
		num2 = numStr.substring(14, 18);
		num3 = numStr.substring(18, 22);
		num4 = numStr.substring(22, 26);
	} else {
		num1 = numStr.substring(11, 15);
		num2 = numStr.substring(15, 19);
		num3 = numStr.substring(19, 23);
		num4 = numStr.substring(23, 27);
	}

	// format dates
	if (dateStr.length == 12) {
		date1 = "0" + dateStr.substring(8, 9);
		date2 = dateStr.substring(9, 11);
	} else if (dateStr.length == 13) {
		date1 = dateStr.substring(8, 10);
		date2 = dateStr.substring(10, 12);
	}

	// format name
	name1 = nameStr.substring(9, nameStr.length - 2);

	// console.log(num1);
	// console.log(num2);
	// console.log(num3);
	// console.log(num4);
	// console.log(date1);
	// console.log(date2);

	return (
		<>
			<div id={image} className="front-preview">
				<div className="chip-div">
					<div id="chip" className="card-ele">
						<img src={chipimg} alt="Image not Found" />
					</div>
					<div id="chip-space" className="card-ele break"></div>
				</div>

				<div className="number-div">
					<div id="num1" className="card-ele number">
						{num1}
					</div>
					<div id="num2" className="card-ele number">
						{num2}
					</div>
					<div id="num3" className="card-ele number">
						{num3}
					</div>
					<div id="num4" className="card-ele number">
						{num4}
					</div>
				</div>

				<div className="title-div">
					<div id="holder-name" className="card-ele">
						Card Holder
					</div>
					<div id="title-space" className="card-ele break"></div>
					<div id="expiry" className="card-ele">
						Expiry
					</div>
				</div>

				<div className="name-date-div">
					<div id="name" className="card-ele">
						{name1}
					</div>
					<div id="name-date-space" className="card-ele break"></div>

					<div id="date" className="card-ele">
						{date1}/{date2}
					</div>
				</div>
			</div>
		</>
	);
}
