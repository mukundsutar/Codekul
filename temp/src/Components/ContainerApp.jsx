import React from "react";
import InputApp from "./InputApp";
import PreviewApp from "./PreviewApp";

export default function ContainerApp() {
	return (
		<>
			<div className="container">
				<PreviewApp />
				<InputApp />
			</div>
		</>
	);
}
