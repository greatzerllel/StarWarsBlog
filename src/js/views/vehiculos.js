import React, { useContext, useEffect }from 'react'
import CardVehiculos from '../component/CardVehiculos';
import { AppContext } from '../store/appContext'

const Vehiculos = () => {
    const { store } = useContext(AppContext);
useEffect(()=>{
console.log(store.vehiculos)
},[])
return (
    <>
      <div className="principal-personajes">
        <h1>Vehículos</h1>
        <div className="row">
          {!!store.vehiculos.results &&
            store.vehiculos.results.length > 0 &&
            store.vehiculos.results.map(({ name, uid }) => {
              return (
                <div className="col-md-3" key={uid} id="contenedor-cartas">
                  <CardVehiculos name={name} uid={uid} />
                </div>
              );
            })}
          ;
        </div>
      </div>
    </>
  );
};
  
export default Vehiculos