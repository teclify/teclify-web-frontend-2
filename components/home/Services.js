import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import styles from '../../styles/home/Services.module.css';

const Services = ({ services }) => {
  return (
    <section className={styles.section}>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={50}
        navigation
        pagination={{ clickable: true }}
        loop={true}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        breakpoints={{
          0: { slidesPerView: 1 },
          1000: { slidesPerView: 2 },
        }}
      >
        {services.map((service, index) => (
          <SwiperSlide key={index}>
            <div className={styles.slide}>
              <Image
                src={service.image}
                alt={service.title}
                layout="fill"
                objectFit="cover"
                quality={100}
              />
              <div className={styles.content}>
                <h1 className={styles.title}>{service.title}</h1>
                <p className={styles.description}>{service.description}</p>
                <a href={service.buttonLink}>
                  <button className={styles.button}>Mehr erfahren &gt;</button>
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Services;
