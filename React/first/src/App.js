import "./App.css";
import Header from './Components/Header';
import Navbar from "./Components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from './Components/Home';

function App() {
	return (
		<>
      <div id="navbar">
        <Navbar/>
      </div>

			<Routes>
        <Route path="/" element={<Header />}/>
        <Route path="/Home" element={<Home />}/>
      </Routes>

      {/* <Header/>
      <Home/> */}
		</>
	);
}

export default App;
