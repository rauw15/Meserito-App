import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../../auth/AuthProvider";
// import logo from "../../../assets/img/logoBotones-blanco-removebg-preview.png"
import { FaUser } from "react-icons/fa";

export default function Navbar() {
  const { isAuthenticated, logout } = useAuth();

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
        {/* <img src={logo}/> */}
        </Link>
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/menu" className="nav-links">
              Menú
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/bot" className="nav-links">
              Bot-on
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/inventario" className="nav-links">
              Inventario
            </Link>
          </li>
          {/* {isAuthenticated ? (
            <li className="sesion">
              <button onClick={logout} className="nav-links">
                Cerrar Sesión
              </button>
            </li>
          ) : (
            <li className="sesion">
              <Link to="/inicio sesion" className="nav-links">
                Iniciar Sesión
              </Link>
            </li>
          )} */}
        </ul>
        <div className="sesion-icon">
          {isAuthenticated ? (
            <button onClick={logout} className="nav-links">
              <FaUser />
            </button>
          ) : (
            <Link to="/sesion" className="nav-links">
              <FaUser />
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
