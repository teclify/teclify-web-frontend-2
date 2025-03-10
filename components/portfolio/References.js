import styles from '../../styles/portfolio/References.module.css';

const References = ({ references }) => {
  return (
    <section className={styles.section}>
      <div className={styles.referenceGrid}>
        {references.map((reference, index) => (
          <div key={index} className={styles.contentGrid}>
            <img src={reference.image} alt={reference.title} />
            <div className={styles.content}>
              <h3>{reference.title}</h3>
              <p>{reference.description}</p>
            </div>
          </div>
        ))}
        
      </div>
      <a href={"/references"} className={styles.buttonLink}>
                  <button className={styles.button}>Mehr erfahren &gt;</button></a>
    </section>
  );
};

export default References;