import React from "react";
import hologram from "../img/hologram.png";

export default function BackPreview({ cvv }) {
	console.log({ cvv });

	return (
		<>
			<div className="back-preview">
				<div className="back-ele back-ele-contact">
					Customer Care: 1800 1234 4321
				</div>

				<div className="back-ele back-ele-tape"></div>

				<div className="back-ele cvv-div">
					<div className=" back-ele-hologram">
						<img src={hologram} alt="Image not Found" />
					</div>
					<div className="back-ele-cvv">{cvv}</div>
				</div>
			</div>
		</>
	);
}
