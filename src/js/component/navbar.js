import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../store/appContext";
import Dropdown from "./dropdown";

const Navbar = () => {
  const { store } = useContext(AppContext);
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="#">
		<i className="fa-solid fa-jedi"></i>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to={"/personajes"}>
                Personajes
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to={"/planetas"}>
                Planetas
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to={"/vehiculos"}>
                Vehículos
              </Link>
            </li>
          </ul>

          <div className="dropdown">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Favoritos
            </button>
            <ul className="dropdown-menu">
              {!!store.favoritos &&
                store.favoritos.length > 0 &&
                store.favoritos.map(({ name, uid, type }, index) => {
                  return <Dropdown name={name} uid={uid} key={uid+index} type={type}/>;
                })}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
