import React, { useState } from "react";
import InputApp from "./InputApp";
import FrontPreview from "./FrontPreview";
import BackPreview from "./BackPreview";
import CardLayout from "./CardLayout";

export default function ContainerApp() {
	const [number, setNumber] = useState(1234123412341234);

	return (
		<>
			<div className="container">
				{/* child 2 */}
				<InputApp callback={setNumber} />
				{/* child 1 */}
				<CardLayout number={number} />
				<BackPreview />
			</div>
		</>
	);
}
