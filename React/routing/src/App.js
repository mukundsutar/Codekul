import "./App.css";
import Navbar from "./Components/Navbar";
import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Components/Home";
import About from "./Components/About";
import Products from "./Components/Products";
import Contact from "./Components/Contact";
import Propps from "./Components/Propps";
import Statte from "./Components/Statte";

function App() {
	return (
		<>
			<Navbar />
			{/* <div>
				<Header />
				<Home />
			</div> */}

			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<Propps />} />
				<Route path="/products" element={<Statte />} />
				<Route path="/contact" element={<Contact />} />
			</Routes>
		</>
	);
}

export default App;
