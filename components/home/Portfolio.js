import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import styles from '../../styles/home/Portfolio.module.css'; 

const Portfolio = ({ title, portfolioItems }) => {
  return (
    <section className={styles.portfolio}>
      <h2 className={styles.title}>{title}</h2>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        loop={true}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        breakpoints={{
          0: { slidesPerView: 1 },
          800: { slidesPerView: 2 },
          1200: { slidesPerView: 3 },
        }}
      >


        {portfolioItems.map((item, index) => (
          <SwiperSlide key={index}>
            <div className={styles.items}>
              <img
                src={item.image}
                alt={item.title}
              />
              <div className={styles.content}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Portfolio;
