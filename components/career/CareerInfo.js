import React from 'react';
import styles from '../../styles/career/CareerInfo.module.css';

const CareerInfo = ({ careerInfo }) => {
    return (
        <section>
            <div className={styles.grid}>
                {careerInfo.map((info, index) => (
                    <div className={styles.info} key={index}>
                        <img src={info.image} alt="Career" />
                        <div>
                            <h2>{info.title}</h2>
                            <p>{info.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default CareerInfo;