import React, { useEffect, useRef } from "react";
import styles from "../../styles/home/ChallengesSection.module.css";

const ChallengesSection = ({ title, challenges }) => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
          }
        });
      },
      { threshold: 0.2 }
    );

    const elements = sectionRef.current.querySelectorAll(`.${styles.card}, .${styles.title}`);
    elements.forEach((el) => observer.observe(el));

    return () => elements.forEach((el) => observer.unobserve(el));
  }, []);

  return (
    <section ref={sectionRef} className={styles.section}>
      <h2 className={styles.title}>{title}</h2>

      <div className={styles.grid}>
        {challenges.map((challenge, index) => (
          <div
            key={index}
            className={styles.card}
            style={{ animationDelay: `${index * 0.3}s` }}
          >
            <div className={styles.header}>
              <img src={challenge.icon} alt={challenge.title} />
              <h3 className={styles.challengeTitle}>{challenge.title}</h3>
            </div>
            <p className={styles.challengeDescription}>{challenge.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ChallengesSection;
