import React, { useState } from 'react';
import styles from '../../styles/career/Values.module.css';

const Values = ({ values }) => {
    const [activeIndex, setActiveIndex] = useState(null);

    return (
        <div className={styles.hexagonWrapper}>
            <div className={styles.hexagonContainer}>
               
                {values.map((value, index) => (
                    <><div className={styles.hexagonOuter}>
                        <div className={`${styles.hexagonInner} ${styles.blank}`}>
                            <div className={styles.hexagonContent}>
                            </div>
                        </div>
                    </div><div
                        key={value.name}
                        className={`${styles.hexagonOuter} ${styles.hexagonOuterHover}  ${activeIndex === index ? styles.active : ''}`}
                        onMouseEnter={() => setActiveIndex(index)}
                        onMouseLeave={() => setActiveIndex(null)}
                    >
                            <div className={styles.hexagonInner}>
                                <div className={styles.hexagonContent}>
                                    {activeIndex === index ? (
                                        <p>{value.description}</p>
                                    ) : (
                                        <h3>{value.name}</h3>
                                    )}
                                </div>
                            </div>

                        </div></>

                    
                ))}
            </div>
        </div>
    );
};

export default Values;