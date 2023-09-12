import React from "react";

function Propps(props) {
	var uName = { Name: "CodeKul", Location: "Pune" };

	return (
		<>
			<p>
				Hello There! This is {uName.Name} from {uName.Location}
			</p>
		</>
	);
}

export default Propps;
