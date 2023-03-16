import React from "react";
import pieDeCama from "../../assets/carouselHome/pieDeCama.webp";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css/bundle";
import "./carouselStyles.scss";

const Carousel = () => {
    return (
        <>
            <Swiper
                className="swiper"
                navigation={true}
                loop={true}
                modules={[Navigation, Pagination, Autoplay]}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                centeredSlides={true}
            >
                <SwiperSlide className="swiper-slide">
                    <img
                        src={pieDeCama}
                        alt="NeloWorks Alfombras Personalizadas - Pie de Cama"
                    />
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">Slide 2</SwiperSlide>
                <SwiperSlide className="swiper-slide">Slide 3</SwiperSlide>
            </Swiper>
        </>
    );
};

export default Carousel;
