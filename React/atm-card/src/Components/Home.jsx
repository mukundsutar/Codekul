import React, { useState } from "react";
import InputApp from "./InputApp";
import FrontPreview from "./FrontPreview";
import BackPreview from "./BackPreview";

export default function Home() {
	const [number, setNumber] = useState(1234123412341234);
	const [date, setDate] = useState(1234);
	const [cvv, setCVV] = useState(123);

	return (
		<>
			<div className="container">
				{/* child 2 */}
				<InputApp
					numberCallback={setNumber}
					dateCallback={setDate}
					cvvCallback={setCVV}
				/>
				{/* child 1 */}
				<FrontPreview number={number} date={date} />
				<BackPreview cvv={cvv} />
			</div>
		</>
	);
}
