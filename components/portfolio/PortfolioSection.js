import styles from '../../styles/portfolio/PortfolioSection.module.css';

const PortfolioSection = ({ portfolioSection }) => {
  return (
    <section className={styles.section}>
      {portfolioSection.map((portfolioSectionItem, i) => (
        <div
          key={i}
          className={`${styles.portfolioSectionItem} ${
            i % 2 !== 0 ? styles.alternate : ''
          }`}
        >
          <div className={styles.stickyBox}>
            {portfolioSectionItem.image && (
              <img
                src={portfolioSectionItem.image}
                alt={portfolioSectionItem.content.header}
                className={styles.portfolioSectionImage}
              />
            )}
          </div>
          <div className={styles.content}>
            {portfolioSectionItem.content.map((contentItem, j) => (
              <div key={j} className={styles.test}>
                <h1>{contentItem.header}</h1>
                <p>{contentItem.text}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default PortfolioSection;