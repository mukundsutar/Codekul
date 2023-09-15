import React from "react";
import FrontPreview from "./FrontPreview";
import BackPreview from "./BackPreview";
import BackgroundCoverPanels from "./BackgroundCoverPanels";

export default function BackgroundApp() {
	return (
		<>
			<div className="container">
				<BackgroundCoverPanels/>
				<FrontPreview />
				<BackPreview />
			</div>
		</>
	);
}
