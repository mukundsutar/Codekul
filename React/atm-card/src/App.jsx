import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import BackgroundApp from "./Components/BackgroundApp";


export default function App() {
	return (
		<>
		<Navbar/>

			<Routes>
				<Route path="/" element={<Home/>}/>
				<Route path="/background" element={<BackgroundApp/>}/>
			</Routes>
		</>
	);
}
