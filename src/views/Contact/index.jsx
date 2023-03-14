import React from "react";
import { Navbar } from "../../components/Navbar";
import ContactForm from "../../components/Form/ContactForm";
import "./contactStyles.scss";

const Contacto = () => {
    return (
        <div>
            <Navbar />
            <div className="contact_container">
                <div className="contact_information">
                    <h2>Antes de cosultar:</h2>
                    <ul>
                        <li>Medidas del producto</li>
                        <li>Que tipo de producto es (para pared, alfombra, almoadon, etc)</li>
                        <li>Si tenés un diseño propio o queres que te hagamos alguno</li>
                        <li>También podes hacer tu consulta por whatsapp</li>
                    </ul>
                </div>
                <ContactForm />
            </div>
        </div>
    );
};

export default Contacto;
