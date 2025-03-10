import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import styles from '../../styles/aboutus/ValuesSection.module.css';

const ValuesSection = ({ values }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef(null);
  const sectionRef = useRef(null);
  const textRefs = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const sectionTop = sectionRef.current.offsetTop;
      const sectionHeight = sectionRef.current.offsetHeight;
      const scrollPosition = window.scrollY + window.innerHeight * 0.3;

      if (scrollPosition > sectionTop && scrollPosition < sectionTop + sectionHeight) {
        const index = Math.floor(((scrollPosition - sectionTop) / sectionHeight) * values.length);
        setActiveIndex(Math.min(index, values.length - 1));
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [values.length]);

  const calculatePointPosition = (index, radius = 140) => {
    const angle = (index * 60 - 90) * (Math.PI / 180);
    return {
      x: radius * Math.cos(angle),
      y: radius * Math.sin(angle)
    };
  };

  const scrollToSection = (index) => {
    if (textRefs.current[index]) {
      const sectionHeight = sectionRef.current.offsetHeight;
      const scrollTarget = sectionRef.current.offsetTop + (sectionHeight * (index / values.length));

      window.scrollTo({
        top: scrollTarget,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className={styles.section} ref={sectionRef}>
      <div className={styles.stickyContainer} ref={containerRef}>
        <div className={styles.svgContainer}>
          <motion.svg
            className={styles.svg}
            viewBox="-200 -200 400 400"
            animate={{ rotate: -activeIndex * 60 }}
            transition={{ ease: "easeInOut", duration: 0.5 }}
          >
            {/* Hexagon */}
            <path
              d="M0 -150L129.904 -75L129.904 75L0 150L-129.904 75L-129.904 -75L0 -150Z"
              fill="none"
              stroke="#4a90e2"
              strokeWidth="2"
            />

            {values.map((_, index) => {
              const pos = calculatePointPosition(index);
              return (
                <g
                  key={index}
                  transform={`translate(${pos.x}, ${pos.y})`}
                  className={`${styles.point} ${activeIndex === index ? styles.active : ''}`}
                  onClick={() => scrollToSection(index)}
                >
                  <circle
                    r="30"
                    fill={activeIndex === index ? "#4a90e2" : "#f0fafc"}
                    stroke={activeIndex === index ? "white" : "#4a90e2"}
                    strokeWidth="2"
                  />
                  <motion.text
                    y="5"
                    fill={activeIndex === index ? "white" : "#4a90e2"}
                    className={styles.number}
                    textAnchor="middle"
                    alignmentBaseline="middle"
                    animate={{ rotate: activeIndex * 60 }}
                    transition={{ ease: "easeInOut", duration: 1 }}
                  >
                    {index + 1}
                  </motion.text>
                </g>
              );
            })}
          </motion.svg>
        </div>

        <div className={styles.gridContainer}>
          {values.map((value, index) => (
            <div
              key={index}
              ref={(el) => (textRefs.current[index] = el)}
              className={`${styles.textContainer} ${activeIndex === index ? styles.activeText : ''}`}
            >
              <h3 className={styles.valueTitle}>{value.title}</h3>
              <p className={styles.valueDescription}>{value.description}</p>
            </div>
          ))}
        </div>


      </div>

      <div style={{ height: `${values.length * 100}dvh` }} />
    </section>
  );
};

export default ValuesSection;