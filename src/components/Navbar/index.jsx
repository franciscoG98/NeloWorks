import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navbarStyles.scss";
import logo from "../../assets/logoNWlineas.png";

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <nav className="navbar">
            <div className="nav_logo">
                <Link to="/">
                    <img src={logo} alt="Logo Neloworks" />
                </Link>
            </div>

            <div className={`nav_list ${isOpen && "open"}`}>
                <Link to="/" className="nav_item">
                    Inicio
                </Link>
                <Link to="/informacion" className="nav_item">
                    Informacion
                </Link>
                <Link to="/productos" className="nav_item">
                    Productos
                </Link>
                <Link to="/galeria" className="nav_item">
                    Galeria
                </Link>
                <Link to="/contacto" className="nav_item">
                    Contacto
                </Link>
            </div>

            <div className={`nav_toggle ${isOpen && "open"}`} onClick={() => setIsOpen(!isOpen)}>
              <span></span>
              <span></span>
              <span></span>
            </div>
        </nav>
    );
};
