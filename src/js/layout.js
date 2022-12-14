import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { Home } from "./views/home";
import injectContext from "./store/appContext";
import  Navbar  from "./component/navbar";
import Personajes from "./views/personajes";
import Footer from "./component/Footer";
import Vehiculos from "./views/vehiculos";
import Planetas from "./views/planetas";
import DetallePersonaje from "./component/DetallePersonaje";


//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<div className="d-flex flex-column vh-100">
					<Navbar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/personajes" element={<Personajes />} />
						<Route path="personajes/personaje/:uid/detail" element={<DetallePersonaje />} />
						<Route path="/vehiculos" element={<Vehiculos />} />
						<Route path="/planetas" element={<Planetas />} />
						<Route path="*" element={<h1>Not found!</h1>} />
					</Routes>
					<Footer/>
					</div>				
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
