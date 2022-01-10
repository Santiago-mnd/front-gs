import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { startLogout } from "../../actions/auth";
import "./navbar.css";

export const Navbar = () => {
  const dispatch = useDispatch();
  const { name } = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(startLogout());
  };

  return (
    <header className="header">
      <Link to="/productos"> Productos </Link>
      <Link to="/plazos"> Plazos </Link>
      <Link to="/cotizaciones"> Cotización </Link>
      <div className="header__user">
        <span className="">{name}</span>
        <button className="" onClick={handleLogout}>
          <i className="fas fa-sign-out-alt"></i>
          <span> Salir</span>
        </button>
      </div>
    </header>
  );
};
