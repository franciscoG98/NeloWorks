import React from "react";
import Swiper from "swiper/bundle";
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
        <div className="swiper">
            <div className="swiper-wrapper">
                <div className="swiper-slide">Slide 1</div>
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
