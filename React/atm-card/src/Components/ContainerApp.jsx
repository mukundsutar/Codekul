import React, { useState } from "react";
import InputApp from "./InputApp";
import FrontPreview from "./FrontPreview";
import BackPreview from "./BackPreview";
import CardLayout from "./CardLayout";

export default function ContainerApp() {
	const [number, setNumber] = useState(1234123412341234);
	const [date, setDate] = useState(1234);
	const [cvv, setCVV]= useState(123);

	return (
		<>
			<div className="container">
				{/* child 2 */}
				<InputApp numberCallback={setNumber} dateCallback={setDate}/>
				{/* child 1 */}
				<CardLayout number={number} date={date} cvv={cvv}/>
				<BackPreview />
			</div>
		</>
	);
}
