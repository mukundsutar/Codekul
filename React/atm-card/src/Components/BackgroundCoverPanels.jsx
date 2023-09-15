import React, { useState } from "react";
import atmBack1 from "../img/atm-background-1.jpg";
import atmBack2 from "../img/atm-background-2.jpg";
import atmBack3 from "../img/atm-background-3.jpg";
import "../ImageGallery.css";

export default function BackgroundCoverPanels() {
	const [image, setImage] = useState();

	const changeImage = (e) => {
		setImage(e.target.backgroundImage);
	};

	let back1 = "url(" + atmBack1 + ")";
	let back2 = "url(" + atmBack2 + ")";
	let back3 = "url(" + atmBack3 + ")";

	return (
		<>
			{/* <div className="front-preview" style={{backgroundImage: "url(" + imageURL + ")"}}></div> */}

			<div className="image-gallery input">
				<div className="image-gallery-ele front-preview"  onClick={changeImage} style={{backgroundImage: back1}}></div>

				<div className="image-gallery-ele front-preview"  onClick={changeImage} style={{backgroundImage: back2}}></div>

				<div className="image-gallery-ele front-preview"  onClick={changeImage} style={{backgroundImage: back3}}></div>
			</div>
		</>
	);
}
