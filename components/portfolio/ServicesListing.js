import styles from '../../styles/portfolio/ServicesListing.module.css';

const ServicesListing = ({ services }) => {
  return (
    <section className={styles.section}>
      <div className={styles.grid}>
      {services.map((service, index) => (
        <div key={index} className={styles.card}>
          <h1>{service.title}</h1>
          <p>{service.description}</p>
          <a href={service.buttonLink} className={styles.buttonLink}><button>Mehr Erfahren 	&gt;</button></a>
        </div>


      ))}
</div>
    </section>
  );
};

export default ServicesListing;