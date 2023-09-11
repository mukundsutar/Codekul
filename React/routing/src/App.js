import "./App.css";
import Navbar from "./Components/Navbar";
import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Components/Home";
import About from "./Components/About";
import Products from "./Components/Products";
import Contact from "./Components/Contact";

function App() {
	return (
		<>
			<Navbar />
			{/* <div>
				<Header />
				<Home />
			</div> */}

        <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
		</>
	);
}

export default App;
