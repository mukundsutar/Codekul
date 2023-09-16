import React, { useState } from "react";
import InputApp from "./InputApp";
import FrontPreview from "./FrontPreview";
import BackPreview from "./BackPreview";

export default function Home(
	numberCallback,
	dateCallback,
	cvvCallback,
	inputNumberCallback,
	inputNameCallback,
	inputDateCallback,
	inputCVVCallback
) {
	return (
		<>
			<div className="container home">
				{/* child 2 */}
				<InputApp
					numberCallback
					dateCallback
					cvvCallback
					inputNumberCallback
					inputNameCallback
					inputDateCallback
					inputCVVCallback
				/>
				{/* child 1 */}
				{/* <FrontPreview
					number={number}
					name={name}
					date={date}
					image={image}
				/>
				<BackPreview cvv={cvv} /> */}
			</div>
		</>
	);
}
