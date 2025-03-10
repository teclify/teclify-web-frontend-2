import React, { useState } from 'react';
import Image from 'next/image';
import styles from '../../styles/home/Expertise.module.css'; 

const Expertise = ({ title, knowledgeItems }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchedTerm, setSearchedTerm] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      setSearchedTerm(searchTerm);
    }
  };

  return (
    <section className={styles['knowledge-section']}>
      <h2>{title}</h2>
      <div className={styles['knowledge-grid']}>
        {knowledgeItems.map((item, index) => (
          <div key={index} className={styles['knowledge-card']}>
            <Image
              src={item.icon}
              alt={`${item.title} icon`}
              width={50}
              height={50}
              className={styles['knowledge-icon']}
            />
            <h3>{item.title}</h3>
            <a href="#expertise" className={styles['knowledge-link']}>→</a>
          </div>
        ))}
      </div>

      <p className={styles['search-hint']}>
        Suchst du nach einer bestimmten Programmiersprache oder einer Technologie? Du kannst hier nachschauen, ob wir diese Expertise mitbringen.
      </p>
      <form className={styles['search-bar']} onSubmit={handleSearch}>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Technologie suchen..."
          className={styles['search-input']}
        />
        <button type="submit" className={styles['search-button']}>→</button>
      </form>

      {searchedTerm && (
        <div className={styles['search-results']}>
          <h3>Ergebnisse für: "{searchedTerm}"</h3>
        </div>
      )}
    </section>
  );
};

export default Expertise;
