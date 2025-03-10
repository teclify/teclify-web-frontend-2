import React from 'react';
import styles from '../../styles/dataprivacy/DataPrivacy.module.css';

// Hilfsfunktion zur Generierung von IDs
const generateId = (header) => {
  return header
    .toLowerCase()
    .replace(/ä/g, 'ae')
    .replace(/ö/g, 'oe')
    .replace(/ü/g, 'ue')
    .replace(/ß/g, 'ss')
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '');
};

const DataPrivacy = ({ data }) => {
  // Initialisierung von sections aus data
  const sections = data || []; // Falls data undefined ist, verwenden wir ein leeres Array

  return (
    <div className={styles.container}>
      <nav className={styles.toc}>
        <h2 className={styles.tocTitle}>Inhaltsübersicht</h2>
        <ul>
          {sections.map((item, index) => (
            <li key={index}>
              <a href={`#${generateId(item.subheader)}`} className={styles.tocLink}>
                {item.subheader}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className={styles.content}>
        {sections.map((item, index) => (
          <section key={index} id={generateId(item.subheader)} className={styles.section}>
            <h2 className={styles.header}>{item.subheader}</h2>
            <p className={styles.text}>{item.text}</p>
          </section>
        ))}
      </div>
    </div>
  );
};

export default DataPrivacy;
