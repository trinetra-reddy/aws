import React from "react";
import { Navigation, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import AboutusClients from "./AboutusClients";
import "./AboutusClients.scss";
import clientimg1 from "../../images/Carousel-img1.webp";
import clientimg2 from "../../images/Carousel-img2.webp";
import clientimg3 from "../../images/Carousel-img3.webp";
import clientimg4 from "../../images/Carousel-img4.webp";
import clientimg5 from "../../images/Carousel-img5.webp";
import clientimg6 from "../../images/Carousel-img6.webp";
import clientimg7 from "../../images/Carousel-img7";
const AboutusClientsCarousel = (props) => {
  return (
    <>
      <div className="Client-main-wrapper">
        <div className="Client-Heading">
          <h1>Clients Served by Our Team</h1>
        </div>
        <div className="Client-logos">
          <Swiper
            autoplay={{
              delay: 2500,
            }}
            pagination={{
              clickable: true,
            }}
               breakpoints={{
          "@0.00": {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          "@0.75": {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          "@1.00": {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          "@1.50": {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="clientsvideos-swiper top-carousel-nav"
          >
            <SwiperSlide>
              <AboutusClients image={clientimg1} />
            </SwiperSlide>
            <SwiperSlide>
              <AboutusClients image={clientimg2} />
            </SwiperSlide>
            <SwiperSlide>
              <AboutusClients image={clientimg3} />
            </SwiperSlide>
            <SwiperSlide>
              <AboutusClients image={clientimg4} />
            </SwiperSlide>
            <SwiperSlide>
              <AboutusClients image={clientimg5} />
            </SwiperSlide>
            <SwiperSlide>
              <AboutusClients image={clientimg6} />
            </SwiperSlide>
            <SwiperSlide>
              <AboutusClients image={clientimg7} />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default AboutusClientsCarousel;
