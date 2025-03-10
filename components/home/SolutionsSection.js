import React from 'react';
import Image from 'next/image';
import styles from '../../styles/home/SolutionsSection.module.css'; 

const SolutionSection = ({ title, solutions }) => {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>{title}</h2>

      {solutions.map((solution, index) => (
        <div
          key={index}
          className={`${styles.solutionItem} ${
            index % 2 !== 0 ? styles.reverse : ''
          }`}
        >
          <div className={styles.image}>
          <img 
            src={solution.image} 
            alt={solution.title} 
          />
          </div>
          <div className={styles.content}>
            <h3>{solution.title}</h3>
            <p>{solution.description}</p>
            <ul>
              {solution.points.map((pointObj, i) => (
                <li key={i}>{pointObj.point}</li> 
              ))}
            </ul>
          </div>
        </div>
      ))}
    </section>
  );
};

export default SolutionSection;
