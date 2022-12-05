import React, {useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../store/appContext";

const CardPersonajes = ({name, uid}) => {
  
  const {actions} = useContext(AppContext);
  const [favorite, setFavorite] = useState(0)

  return (
    <div className="card" id="cartas">
      <img src="https://th.bing.com/th/id/R.1bcbc98e5ba7cf0e3e0fd19f4d8b6d09?rik=YRdsKmL5SwuGyQ&riu=http%3a%2f%2fwww.muraldecal.com%2fen%2fimg%2fas311eng-jpg%2ffolder%2fproducts-listado-merchanthover%2fwall-stickers-may-the-force-be-with-you.jpg&ehk=uCwkW5badf31GJONE0bv4iokYpE3AOmEfxU9wUHi3lY%3d&risl=&pid=ImgRaw&r=0" className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <Link
          to={`personaje/${uid}/detail`}
          className="btn btn-dark"
          id="boton-personajes"
        >
          Ver más
        </Link>
        <button type="button" className="add-favoritos btn btn-light" onClick={() => actions.agregarFavoritos({uid, name, type:"personaje"})}><i class="fa-regular fa-heart"></i></button>

      </div>
    </div>
  );
};

export default CardPersonajes;