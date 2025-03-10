import React, { useEffect, useState } from 'react';
import { FaCity, FaCalendarAlt, FaCheckCircle } from 'react-icons/fa';
import styles from '../../styles/aboutus/FactsAndFigures.module.css'; 

const FactsAndFigures = ({ facts }) => {
  const icons = {
    city: <FaCity size={50} />,
    calendar: <FaCalendarAlt size={50} />,
    "check-circle": <FaCheckCircle size={50} />,
  };

  const [currentValues, setCurrentValues] = useState(facts.map(() => 0));

  useEffect(() => {
    const intervals = facts.map((fact, index) => {
      if (fact.value) {
        const increment = fact.value / 100;
        return setInterval(() => {
          setCurrentValues((prev) =>
            prev.map((val, i) => (i === index && val < fact.value ? val + increment : val))
          );
        }, 20);
      }
      return null;
    });

    return () => intervals.forEach((interval) => interval && clearInterval(interval));
  }, [facts]);

  return (
    <section className={styles['facts-and-figures']}>
      <div className={styles['facts-container']}>
        {facts.map((fact, index) => (
          <div key={index} className={styles.fact}>
            <div className={styles.icon}>{icons[fact.icon]}</div>
            <h3 className={styles['fact-title']}>{fact.title}</h3>
            {fact.value ? (
              <p className={styles['fact-value']}>
                {Math.min(currentValues[index], fact.value).toFixed(0)}
                {fact.suffix}
              </p>
            ) : (
              <p className={styles['fact-description']}>{fact.description}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FactsAndFigures;
