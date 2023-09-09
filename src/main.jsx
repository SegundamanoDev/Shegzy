import React from "react";
import ReactDOM from "react-dom/client";

// import App from "./App.jsx";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "./index.css";
import Header from "./Components/Header.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import About from "./Components/About";
import Services from "./Components/Services";
import Signin from "./Components/Signin";
import Signup from "./Components/Signup";
import Contact from "./Components/Contact";
import Partner from "./Components/Partner";
import Specialised from "./Components/Specialised";
import Courier from "./Components/Courier";
import Logistics from "./Components/Logistics";
import Commerce from "./Components/Commerce";
import International from "./Components/International";
import Custom from "./Components/Custom";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<BrowserRouter>
			<Header />
			<Routes>
				<Route exact path='/' element={<Home />} />
				<Route path='/about' element={<About />} />
				<Route path='/services' element={<Services />} />
				<Route path='/signin' element={<Signin />} />
				<Route path='/signup' element={<Signup />} />
				<Route path='/contact' element={<Contact />} />
				<Route path='/partner' element={<Partner />} />
				<Route path='/services/courier' element={<Courier />} />
				<Route path='/services/logistics' element={<Logistics />} />
				<Route path='/services/e-commerce' element={<Commerce />} />
				<Route path='/services/international' element={<International />} />
				<Route
					path='/services/specialised-solution'
					element={<Specialised />}
				/>
				<Route path='/services/custom-solution' element={<Custom />} />
			</Routes>
			<Footer />
		</BrowserRouter>
	</React.StrictMode>
);
