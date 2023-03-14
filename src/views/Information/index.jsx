import React from "react";
import { Navbar } from "../../components/Navbar";
import nwLogo from "../../assets/logos/neloworksLogo.webp";
import nwLogoStraps from "../../assets/logos/logoNWlineas.webp";
import "./informationStyles.scss";

const Informacion = () => {
    return (
        <div>
            <Navbar />
            <div className="information_content">
                <img
                    src={nwLogo}
                    alt="NeloWorks Logo alfombras personalizadas"
                />
                <div className="information_text">
                    Productos artesanales hechos con material vegano, listo para
                    crear espacios únicos y calidos, aportando una mayor personalidad.
                    <h1>Alfombras, almohadones, pie de cama, logos, cuadros y lo que te imagines!!!</h1> 

                    <br />
                    <a
                        className="ig_button"
                        href="https://www.instagram.com/neloworks/"
                        target="__blank"
                        rel="noopener noreferrer"
                    >
                        <img src={nwLogoStraps} alt='Neloworks - alfombras artesanales'/>
                        <span>Instagram</span>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Informacion;
