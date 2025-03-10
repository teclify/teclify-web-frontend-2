import React from 'react';
import styles from '../../styles/home/HomeTitle.module.css';

const HomeTitle = ({ title, subtitle, ctaText, ctaLink, backgroundImage }) => {
  return (
    <section
      className={styles.hero_section}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <h1 className={styles['hero-title']}>{title}</h1>
      <p className={styles['hero-subtitle']}>{subtitle}</p>
      <a href={ctaLink}>
        <button className={styles['cta-button']}>{ctaText}</button>
      </a>
    </section>
  );
};

export default HomeTitle;