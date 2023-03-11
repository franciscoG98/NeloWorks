import React from "react";
import { Navbar } from "../../components/Navbar";
import nwLogo from "../../assets/neloworksLogo.png";
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
                <p className="information_text">
                    Somos una empresa local dedicada al Tufting. Nos dedicamos
                    al diseño de alfombras, hacemos tambien colaboraciones y
                    logos. Somos eco-friendly, utilizamos lana acrilica libre de
                    maltrato animal. Hacemos envios a toda la Argentina. Pedidos
                    y diseños por encargo a nuestra cuenta de instagram
                    <br />
                    <br />
                    <a
                        className="ig_button"
                        href="https://www.instagram.com/neloworks/"
                        target="__blank"
                        rel="noopener noreferrer"
                    >
                        Ir a instagram
                    </a>
                </p>
            </div>
        </div>
    );
};

export default Informacion;
