'use client'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Link from 'next/link';
import 'swiper/css/pagination';

import { Pagination, Autoplay } from 'swiper/modules';
import Image from 'next/image';

// Mock data for cake images
const cakeImages = [
    { id: 1, src: "/insta/cake1.jpg", alt: "Delicious cake", link: "https://www.instagram.com/p/DH3ry9IoUso" },
    { id: 2, src: "/insta/cake2.jpg", alt: "Vanilla cream cake", link: "https://www.instagram.com/houseofcakeslc/" },
    { id: 3, src: "/insta/cake3.jpg", alt: "Cupcake with sprinkles", link: "https://www.instagram.com/houseofcakeslc/" },
    { id: 4, src: "/insta/cake4.jpg", alt: "Freshly baked brownies", link: "https://www.instagram.com/houseofcakeslc/" },
    { id: 5, src: "/insta/cake5.jpg", alt: "Strawberry shortcake", link: "https://www.instagram.com/houseofcakeslc/" },
    { id: 6, src: "/insta/cake6.jpg", alt: "Strawberry shortcake", link: "https://www.instagram.com/houseofcakeslc/" },
    { id: 7, src: "/insta/cake7.jpg", alt: "Strawberry shortcake", link: "https://www.instagram.com/houseofcakeslc/" },
    { id: 8, src: "/insta/cake8.jpg", alt: "Strawberry shortcake", link: "https://www.instagram.com/houseofcakeslc/" },
    { id: 9, src: "/insta/cake9.jpg", alt: "Strawberry shortcake", link: "https://www.instagram.com/houseofcakeslc/" },
    { id: 10, src: "/insta/cake10.jpg", alt: "Strawberry shortcake", link: "https://www.instagram.com/houseofcakeslc/" },
    { id: 11, src: "/insta/cake11.jpg", alt: "Strawberry shortcake", link: "https://www.instagram.com/houseofcakeslc/" },
    { id: 12, src: "/insta/cake12.jpg", alt: "Strawberry shortcake", link: "https://www.instagram.com/houseofcakeslc/" },

  ];
  






export default function Slider() {
  return (
    <section className="bg-seashell py-10 px-4">
      <div className="text-center mb-6">
        <h2 className="text-3xl md:text-6xl font-bold md:mb-6 text-[var(--Orange-Pantone)]">Find us on Instagram</h2>
        <p className="text-sm md:text-base text-walnut-brown mt-2">
          
          <Link 
            href="https://www.instagram.com/houseofcakeslc"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--brown)] font-semibold hover:underline hover:text-[var(--Orange-Pantone)] transition"
        >
        @houseofcakeslc</Link> — Baked goodies direct to your feed</p>
      </div>

      <Swiper
        slidesPerView={1.2}
        spaceBetween={16}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
        className="w-full"
        breakpoints={{
          640: {
            slidesPerView: 2.5,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4.5,
          },
        }}
      >
        {cakeImages.map((cake) => (
          <SwiperSlide key={cake.id}>
            <div className="relative w-full h-[250px] md:h-[300px] lg:h-[340px] rounded-xl overflow-hidden shadow-md">
              <Link href={cake.link} target='_blank'>
                <Image
                  src={cake.src}
                  alt={cake.alt || "cake image"}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (min-width: 768px) 25vw"
                />
              </Link>
              
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
