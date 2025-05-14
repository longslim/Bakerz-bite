import React from 'react'
import "./carousel.css"
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function Carousel() {

    const slides = [
        {
          image: "/carousel1.jpg",
          title: "Welcome to Bakerz Bite",
          motto: "Our Motto: Where smiles are served daily.",
          btn: "Shop Now",
          path: "#shop"
        },
        {
          image: "/carousel2.jpg",
          title: "Welcome to Bakerz Bite",
          motto: "Our Motto: Where smiles are served daily.",
          btn: "Shop Now",
          path: "#shop"
        },
        {
          image: "/carousel3.jpg",
          title: "Welcome to Bakerz Bite",
         motto: "Our Motto: Where smiles are served daily.",
         btn: "Shop Now",
         path: "#shop"
        },
        {
          image: "/carousel4.jpg",
          title: "Welcome to Bakerz Bite",
          motto: "Our Motto: Where smiles are served daily.",
          btn: "Shop Now",
          path: "#shop"
        }
      ];


      const handleScroll = (e, path) => {
        e.preventDefault()
        const element = document.querySelector(path)
        if (element) {
            element.scrollIntoView({behavior: "smooth"})
        }
      }
  return (
    <div className='carousel_container'>
        <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop={true}
            preloadImages={false}
            lazy={true}
            watchSlidesVisibility={true}
            watchSlidesProgress={true}
        >
            {slides.map((slide, index) => (
            <SwiperSlide key={index}>
                <div className="slide_content">
                <img
                    src={slide.image}
                    alt={`Slide ${index + 1}`}
                    className="swiper_lazy"
                    loading="lazy"
                />
                <div className="header_text">
                    <h2>{slide.title}</h2>
                    <p>{slide.motto}</p>
                    <button
                        className='shop_btn'
                        onClick={(e) => handleScroll(e, slide.path) }
                        aria-label={`Click to ${slide.btn.toLowerCase()}`}
                    >
                        {slide.btn}
                    </button>
                </div>
                </div>
            </SwiperSlide>
            ))}
        </Swiper>
    </div>
  )
}

export default Carousel
