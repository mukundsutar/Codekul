import React, { useState } from "react";
import FrontPreview from "./FrontPreview";
import BackPreview from "./BackPreview";
import BackgroundCoverPanels from "./BackgroundCoverPanels";

export default function BackgroundApp({number, date, image, name}) {

	console.log(number);
	console.log(date);
	console.log(image);
	console.log(name);


	return (
		<>
			<div className="container preview">
				{/* <BackgroundCoverPanels imageFrontCallback={setImage}/> */}
				<FrontPreview/>
				<BackPreview/>
			</div>
		</>
	);
}
