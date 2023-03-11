import Carousel from "../../components/Carousel";
import { Navbar } from "../../components/Navbar";
import nwLogo from "../../assets/neloworksLogo.png";
import "./homeStyles.scss";

const Home = () => {
    return (
        <div>
            <Navbar />
            <Carousel />
            <div className="content_nw">
                <img
                    src={nwLogo}
                    alt="NeloWorks Logo alfombras personalizadas"
                />
                <p className="slogan">
                    Diseñamos tus ideas, hacemos alfombras, creamos comodidad.
                    Ve nuestros diseños en instagram{" "}
                    <a
                        href="https://www.instagram.com/neloworks/"
                        target="__blank"
                        rel="noopener noreferrer"
                    >
                        @neloworks
                    </a>
                </p>
            </div>
        </div>
    );
};

export default Home;
