import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Preview from "./Components/Preview";
import Generate from "./Components/Generate";

export default function App() {
	const [number, setNumber] = useState(12345678123456780);
	const [date, setDate] = useState(151);
	const [cvv, setCVV] = useState(123);
	const [name, setInputName] = useState("Mukund H. Sutar");

	const [image, setImage] = useState("one");

	return (
		<>
			<Navbar />

			<Routes>
				<Route
					path="/"
					element={
						<Home
							numberCallback={setNumber}
							dateCallback={setDate}
							cvvCallback={setCVV}
							inputNumberCallback={setNumber}
							inputNameCallback={setInputName}
							inputDateCallback={setDate}
							inputCVVCallback={setCVV}
						/>
					}
				/>
				<Route
					path="/background"
					element={
						<Preview
							// return
							number={number}
							name={name}
							date={date}
							cvv={cvv}
						/>
					}
				/>
				<Route path="/generate" element={<Generate />} />
			</Routes>
		</>
	);
}
