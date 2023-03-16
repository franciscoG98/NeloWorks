import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./navbarStyles.scss";
import logo from "../../assets/logos/logoNWlineas.webp";

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <nav className="navbar">
            <div className="nav_logo">
                <NavLink to="/">
                    <img src={logo} alt="Logo Neloworks" />
                </NavLink>
            </div>

            <div className={`nav_list ${isOpen && "open"}`}>
                <NavLink to="/" className="nav_item" activeclassname="active">
                    Inicio
                </NavLink>
                <NavLink to="/informacion" className="nav_item" activeclassname="active">
                    Informacion
                </NavLink>
                <NavLink to="/productos" className="nav_item" activeclassname="active">
                    Productos
                </NavLink>
                {/* <NavLink to="/galeria" className="nav_item" activeclassname="active">
                    Galeria
                </NavLink> */}
                <NavLink to="/nelotips" className="nav_item" activeclassname="active">
                    NeloTips
                </NavLink>
                <NavLink to="/contacto" className="nav_item" activeclassname="active">
                    Contacto
                </NavLink>
            </div>

            <div className={`nav_toggle ${isOpen && "open"}`} onClick={() => setIsOpen(!isOpen)}>
              <span></span>
              <span></span>
              <span></span>
            </div>
        </nav>
    );
};
