import React, { useState } from 'react';
import styles from '../../styles/career/Job.module.css';

const Job = ({ job }) => {

    return (
      <section className={styles.section}>
      <div className={styles.content}>
          <h2 className={styles.header}>{job.name}</h2>
          <p className={styles.text}>
              {job.description}
          </p>

         

      </div>

      <a href={job.link}>
              <button className={styles.button}>Jetzt Bewerben</button>
          </a>
  </section>
    );
};

export default Job;