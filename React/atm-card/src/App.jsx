import { useState } from "react";
import "./App.css";
import BackPreview from "./Components/BackPreview";
import FrontPreview from "./Components/FrontPreview";
import InputApp from "./Components/InputApp";
import { Route, Routes } from "react-router-dom";

export default function App() {
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
