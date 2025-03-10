import React from 'react';
import Image from 'next/image';
import styles from '../../styles/aboutus/AboutUsDetails.module.css';

const AboutUsDetails = ({ highlightDescription, highlights }) => {
  return (
    <section className={styles['about-us']}>
      <p className={styles['about-us-description']}>{highlightDescription}</p>

      <div className={styles['highlights-grid']}>
        {highlights.map((highlight, index) => (
          <div key={index} className={styles.highlight}>
            {/* Bild */}
            <div className={styles['highlight-image-container']}>
              <Image
                src={highlight.image}
                alt={`Highlight ${index + 1}`}
                width={100}
                height={100}
                className={styles['highlight-image']}
              />
            </div>
            {/* Text */}
            <div className={styles['highlight-description-container']}>
              <p className={styles['highlight-description']}>{highlight['image-description']}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutUsDetails;
