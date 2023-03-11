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
                    <h2>NELOTIPS para tu alfombrita ⚜️</h2>
                    <ol>
                        <li>No lavar en lavarropas</li>
                        <li>Aspirar siempre que sea necesario</li>
                        <li>
                            Al principio puede perder un poco de pelusa , es
                            normal
                        </li>
                        <li>
                            Para limpiar aplica sobre la zona de mancha una
                            esponja húmeda con detergente y absorber sobrante de
                            agua con servilleta y aspirar
                        </li>
                        <li>
                            Si ves una cerda suelta córtala al nivel de las
                            demás y listop
                        </li>
                    </ol>
                    <br />

                    <h2>Antes de cosultar:</h2>
                    <ul>
                        <li>Medidas de la alfombra a diseñar/hacer</li>
                        <li>Es para pared o es alfombra?</li>
                        <li>Tenes un diseño o queres alguno ya hecho?</li>
                    </ul>
                </div>
                <ContactForm />
            </div>
        </div>
    );
};

export default Contacto;
