import React from "react";
import { Link } from "react-router-dom";
import "../../styles/home.css";

export const Home = () => (
  <div className="text-center mt-5">
    <h1>Star-Wars Blog!</h1>
	<p>Toca la imagen</p>
    <Link to={"/personajes"}>
      <img
        src="https://blogdesuperheroes.es/wp-content/plugins/BdSGallery/BdSGaleria/97261.jpg"
        alt="yoda"
      ></img>
    </Link>
  </div>
);
