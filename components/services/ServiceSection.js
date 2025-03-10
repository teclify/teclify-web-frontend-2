import React from 'react';
import Image from 'next/image';
import styles from '../../styles/services/ServicesSection.module.css';

const ServicesSection = ({ services }) => {
  return (
    <section className={styles.section}>

      {services.map((service, index) => (
        <div
          key={index}
          className={`${styles.items}  ${index % 2 !== 0 ? styles.reverse : ''
        }`}
        >
           
          <div className={styles.grid}>

          <div className={styles.image}>
              <img
                src={service.image}
                alt={service.title}
                layout="fill"
                objectFit="cover"
                className={styles.image}
              />
            </div>
            <div className={styles.content}>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <a href={service.buttonLink} className={styles.button}>
                Mehr erfahren &gt;
              </a>
            </div>
           
          </div> </div>
      ))}

    </section>
  );
};

export default ServicesSection;
