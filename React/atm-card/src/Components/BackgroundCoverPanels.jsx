import React, { useState } from "react";
import atmBack1 from "../img/atm-background-1.jpg";
import atmBack2 from "../img/atm-background-2.jpg";
import atmBack3 from "../img/atm-background-3.jpg";
import "../ImageGallery.css";

export default function BackgroundCoverPanels({ imageFrontCallback }) {
	const changeImage = (e) => {
		imageFrontCallback(e.target.id);
	};

	return (
		<>
			<div className="image-gallery input">
				<img
					id="one"
					className="image-gallery-ele front-preview"
					onClick={changeImage}
					style={{ backgroundImage: atmBack1 }}
				/>

				<img
					id="two"
					className="image-gallery-ele front-preview"
					onClick={changeImage}
					style={{ backgroundImage: atmBack2 }}
				/>

				<img
					id="three"
					className="image-gallery-ele front-preview"
					onClick={changeImage}
					style={{ backgroundImage: atmBack3 }}
				/>
			</div>
		</>
	);
}
