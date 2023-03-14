import Carousel from "../../components/Carousel";
import { Navbar } from "../../components/Navbar";
import nwLogo from "../../assets/logos/neloworksLogo.webp";
import WhatsappLink from "../../components/WhatsappLink";
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
                <div className="slogan">
                    <h1>Hacemos alfombras personalizadas,</h1> diseñamos tus
                    ideas, creamos comodidad. Ve nuestros diseños en instagram{" "}
                    <a
                        href="https://www.instagram.com/neloworks/"
                        target="__blank"
                        rel="noopener noreferrer"
                    >
                        @neloworks
                    </a>
                </div>
            </div>
            <WhatsappLink />
        </div>
    );
};

export default Home;
