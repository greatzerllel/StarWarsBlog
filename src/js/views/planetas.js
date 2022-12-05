import React, { useContext  } from "react";
import CardPlanetas from "../component/CardPlanetas";
import { AppContext } from "../store/appContext";

const Planetas = () => {

  const {store} = useContext(AppContext);

  return (
    <>
    <div className="principal-personajes">
      <h1>Planetas</h1>
      <div className="row">
        {!!store.planetas.results &&
          store.planetas.results.length > 0 &&
          store.planetas.results.map(({ name, uid }) => {
            return (
              <div className="col-md-3" key={uid} id="contenedor-cartas">
                <CardPlanetas name={name} uid={uid} />
              </div>
            )
          })}
        ;
      </div>
      </div>
    </>
  );

};

export default Planetas;
