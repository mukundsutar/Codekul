import "./App.css";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";

function App() {
	return (
		<>
			<Navbar />
			<div>
				<Header />
				<Home />
			</div>
		</>
	);
}

export default App;
