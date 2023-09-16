import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import InputApp from "./Components/InputApp";
import Navbar from "./Components/Navbar";
import Generate from "./Components/Generate";
import FrontPreview from "./Components/FrontPreview";
import BackPreview from "./Components/BackPreview";

export default function App() {
	return (
		<>
			<Navbar />

			<Routes>
				<Route path="/" element={<InputApp />} />
				<Route
					path="/background"
					element={
						<div className="container preview">
							<FrontPreview />
							<BackPreview />
						</div>
					}
				/>
				<Route path="/generate" element={<Generate />} />
			</Routes>
		</>
	);
}
