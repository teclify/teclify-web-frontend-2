import styles from '../../styles/services/HelpBox.module.css';
import { FaLinkedin, FaXing } from 'react-icons/fa';

const HelpBox = ({ help }) => {
    return (<section className={styles.section}>
        <div className={styles.content}>
            <h2 className={styles.header}>{help.header}</h2>
            <p className={styles.text}>
                {help.text}
            </p>

            <a href={help.button}>
                <button className={styles.button}>KONTAKT AUFNEHMEN</button>
            </a>

        </div>
        <div className={styles.managementProfile}>
            <div className={styles.profileImage}>
                <img
                    src={help.management.image}
                    alt={`Profile of ${help.management.name}`}
                />
            </div>
            <div className={styles.profileInfo}>
                <h3 className={styles.name}>{help.management.name}</h3>
                <div className={styles.contactInfo}>
                    <p className={styles.contactItem}>
                        <a href={`mailto:${help.management.email}`}>{help.management.email}</a>
                    </p>
                    <p className={styles.contactItem}>
                        <a href={`tel:${help.management.phone}`}>{help.management.phone}</a>
                    </p>
                    <div className={styles.links}>
                        {help.management.xing && (
                            <a href={help.management.xing} target="_blank" rel="noopener noreferrer">
                                <FaXing size={24} /> 
                            </a>
                        )}
                        {help.management.linkedin && (
                            <a href={help.management.linkedin} target="_blank" rel="noopener noreferrer">
                                <FaLinkedin size={24} /> 
                            </a>
                        )}
                    </div>
                </div>
                
            </div>
        </div>
    </section>);
};

export default HelpBox;
