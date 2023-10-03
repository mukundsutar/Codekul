import Home from "./Home";
import Login from "./Login";
import Register from "./Register";
import { Route, Routes } from "react-router-dom";


function App() {

	return (
		<>
			<Routes>
				<Route path="/" element={<Register />} />
				<Route path="/logg" element={<Login />} />
				<Route path="/home" element={<Home />} />
			</Routes>
		</>
	);
}

export default App;
