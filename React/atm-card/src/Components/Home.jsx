import React, { useState } from "react";
import InputApp from "./InputApp";

export default function Home() {
	return (
		<>
			<div className="container home">
				{/* child 2 */}
				<InputApp
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
