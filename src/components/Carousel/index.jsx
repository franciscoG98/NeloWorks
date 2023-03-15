import React from "react";
import Swiper from "swiper/bundle";
import pieDeCama from '../../assets/carouselHome/pieDeCama.webp'
import "swiper/css/bundle";
import "./carouselStyles.scss";

const Carousel = () => {
    const swiper = new Swiper(".swiper", {
        loop: true,

        pagination: {
            el: ".swiper-pagination",
        },

        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

    return (
        <div className="swiper" swiper={swiper}>
            <div className="swiper-wrapper">
                <div className="swiper-slide"><img src={pieDeCama} alt='NeloWorks Alfombras Personalizadas - Pie de Cama' /></div>
                <div className="swiper-slide">Slide 2</div>
                <div className="swiper-slide">Slide 3</div>
            </div>
            <div className="swiper-pagination"></div>

            <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div>
        </div>
    );
};

export default Carousel;
