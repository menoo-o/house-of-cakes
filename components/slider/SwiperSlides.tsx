'use client'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './slider.css';
import { Pagination, Autoplay } from 'swiper/modules';
import Image from 'next/image';

// Mock data for cake images
const cakeImages = [
    { id: 1, src: "/insta/cake1.jpg", alt: "Delicious cake", link: "https://www.instagram.com/p/DH3ry9IoUso" },
    { id: 2, src: "/insta/cake2.jpg", alt: "Vanilla cream cake", link: "/cakes/vanilla-cake" },
    { id: 3, src: "/insta/cake3.jpg", alt: "Cupcake with sprinkles", link: "/cakes/cupcakes" },
    { id: 4, src: "/insta/cake4.jpg", alt: "Freshly baked brownies", link: "/cakes/brownies" },
    { id: 5, src: "/insta/cake5.jpg", alt: "Strawberry shortcake", link: "/cakes/strawberry-shortcake" },
    { id: 6, src: "/insta/cake6.jpg", alt: "Strawberry shortcake", link: "/cakes/strawberry-shortcake" },
    { id: 7, src: "/insta/cake7.jpg", alt: "Strawberry shortcake", link: "/cakes/strawberry-shortcake" },
    { id: 8, src: "/insta/cake8.jpg", alt: "Strawberry shortcake", link: "/cakes/strawberry-shortcake" },
    { id: 9, src: "/insta/cake9.jpg", alt: "Strawberry shortcake", link: "/cakes/strawberry-shortcake" },
    { id: 10, src: "/insta/cake10.jpg", alt: "Strawberry shortcake", link: "/cakes/strawberry-shortcake" },
    { id: 11, src: "/insta/cake11.jpg", alt: "Strawberry shortcake", link: "/cakes/strawberry-shortcake" },
];
  



export default function Slider() {

  return (
    <div className="slider-container">
      <h2 className="slider-heading">Find us on Instagram</h2>
      <p>Baked goodies direct to your feed - @houseofcakeslc</p>
      <Swiper
        slidesPerView={2}
        spaceBetween={20}
        centeredSlides={true}
        loop={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
        breakpoints={{
          640: {
            slidesPerView: 4,
          },
          1024: {
            slidesPerView: 6,
          },
        }}
      >
        {cakeImages.map((cake) => (
          <SwiperSlide key={cake.id}>
            <div className="slide-content">
              <Image
                src={cake.src}
                alt={cake.alt || 'cake image'}
                className="cake-image"
                fill
                sizes="(max-width: 768px) 100px, (min-width: 769px) 300px"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}