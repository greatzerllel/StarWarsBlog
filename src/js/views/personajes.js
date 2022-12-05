import React, { useContext } from "react";
import CardPersonajes from "../component/CardPersonajes";
import { AppContext } from "../store/appContext";

const Personajes = () => {
  const { store } = useContext(AppContext);

  return (
    <>
      <div className="container">
        <div className="principal-personajes d-fluid">
          <h1>Personajes</h1>

          <div className="row">
            {!!store.personajes &&
              store.personajes.results.length > 0 &&
              store.personajes.results.map(({ name, uid }) => {
                return (
                  <div
                    className="col-md-3 my-3"
                    key={uid}
                  >
                    <CardPersonajes name={name} uid={uid} />
                  </div>
                );
              })}
            ;
          </div>
        </div>
      </div>
    </>
  );
};

export default Personajes;
