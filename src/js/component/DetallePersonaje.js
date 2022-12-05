import React, { useContext, useEffect } from "react";
import { AppContext } from "../store/appContext";
import { useParams } from "react-router-dom";

const DetallePersonaje = () => {
  const { uid } = useParams();
  const { store, actions } = useContext(AppContext);

  useEffect(() => {
    actions.getPersonajeById(`https://www.swapi.tech/api/people/${uid}`);
  }, []);

  useEffect(() => {
    actions.getPersonajeById(`https://www.swapi.tech/api/people/${uid}`);
  }, [uid]);

  return (
    <>
    <div className="container">
    <div className="card m-3 ">
  <div className="row ">
    <div className="col-md-4">
      <img src="https://th.bing.com/th/id/OIP.hnrI-IT31UB9-VX0K0CJCQHaE8?pid=ImgDet&rs=1" className="img-fluid h-100" 
     alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body mx-5">
        <h5 className="card-title">{store.personaje?.result?.properties?.name}</h5>
        <p className="card-text">     Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
          deserunt harum, natus odio sequi delectus ea velit praesentium, sit,
          sunt quasi vel. Commodi, sapiente dolorem excepturi quasi cumque</p>
        Algunos datos: <br />
        <ul>
            <li><i>Año de nacimiento:</i>{store.personaje?.result?.properties?.birth_year}</li>
            <li><i>Color de ojos:</i>{store.personaje?.result?.properties?.eye_color} </li>
            <li><i>Género:</i> {store.personaje?.result?.properties?.gender} </li>
            <li><i>Altura:</i>{store.personaje?.result?.properties?.height}  </li>
            <li><i>Color de piel:</i>{store.personaje?.result?.properties?.skin_color}  </li>
          </ul>
      </div>
    </div>
  </div>
</div>
</div>

    </>
  );
};

DetallePersonaje.defaultProps = {
  uid: "00123",
  name: "Alien",
  birth_year: "2000BC",
  eye_color: "blue",
  gender: "Something",
  height: "2m",
  skin_color: "transparent",
};

export default DetallePersonaje;