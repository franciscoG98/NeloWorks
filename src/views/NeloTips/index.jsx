import React from "react";
import { Navbar } from "../../components/Navbar";
import tuftingLogo from "../../assets/tuftingLogo.png"
import './nelotipsStyles.scss'

const NeloTips = () => {
    return (
        <>
            <Navbar />
            <div className="nelotips_container">
                <h1>NELOTIPS para tu alfombrita ⚜️</h1>
                <ol>
                    <li>No lavar en lavarropas</li>
                    <li>Aspirar siempre que sea necesario</li>
                    <li>Al principio puede perder un poco de pelusa , es normal</li>
                    <li>
                        Para limpiar aplica sobre la zona de mancha una esponja
                        húmeda con detergente y absorber sobrante de agua con
                        servilleta y aspirar
                    </li>
                    <li>
                        Si ves una cerda suelta córtala al nivel de las demás y
                        listop
                    </li>
                </ol>
                <img className="tufting_logo" src={tuftingLogo} alt='tufting logo - Neloworks - alfombras personalizadas - alfombras artesanales' />
            </div>
        </>
    );
};

export default NeloTips;
