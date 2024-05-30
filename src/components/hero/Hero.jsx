import React from 'react'
import "./Hero.scss"

import "swiper/css";
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from 'swiper/modules';

import { FaAngleRight } from "react-icons/fa6";


import bannerImg1 from "../../assets/hero-banner1.webp"
import bannerImg2 from "../../assets/hero-banner2.webp"
import bannerImg3 from "../../assets/hero-banner3.webp"
import bannerImg4 from "../../assets/hero-banner4.webp"

const Hero = () => {
    return (
        <section id="hero">
            <Swiper pagination={true} modules={[Pagination]} loop={true} className="hero container">
                <SwiperSlide className='banner first__banner'>
                    <div className="banner__left">
                        <h3 className="banner__title">
                            Скидки до 90% <br /> уже скоро
                        </h3>
                        <p className="banner__description">
                            Распродажа начнётся 1 июня
                        </p>
                        <button className="banner__btn">
                            Смотреть
                            <FaAngleRight />
                        </button>
                    </div>
                    <div className="banner__right">
                        <img src={bannerImg1} alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide className='banner second__banner'>
                    <div className="banner__left">
                        <h3 className="banner__title">
                            Выгодные <br /> находки
                        </h3>
                        <p className="banner__description">
                            Распродажа начнётся 1 июня
                        </p>
                        <button className="banner__btn">
                            Смотреть
                            <FaAngleRight />
                        </button>
                    </div>
                    <div className="banner__right">
                        <img src={bannerImg2} alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide className='banner third__banner'>
                    <div className="banner__left">
                        <h3 className="banner__title">
                            Скидки до 90% <br /> уже скоро
                        </h3>
                        <p className="banner__description">
                            Распродажа начнётся 1 июня
                        </p>
                        <button className="banner__btn">
                            Смотреть
                            <FaAngleRight />
                        </button>
                    </div>
                    <div className="banner__right">
                        <img src={bannerImg3} alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide className='banner fourth__banner'>
                    <div className="banner__left">
                        <h3 className="banner__title">
                            Скидки до 90% <br /> уже скоро
                        </h3>
                        <p className="banner__description">
                            Распродажа начнётся 1 июня
                        </p>
                        <button className="banner__btn">
                            Смотреть
                            <FaAngleRight />
                        </button>
                    </div>
                    <div className="banner__right">
                        <img src={bannerImg4} alt="" />
                    </div>
                </SwiperSlide>
            </Swiper>
        </section>
    )
}

export default Hero