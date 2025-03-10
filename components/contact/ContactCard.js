import React from 'react';
import styles from '../../styles/contact/ContactCard.module.css';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaYoutube, FaLinkedin, FaXing, FaInstagram } from 'react-icons/fa';

const icons = {
  phone: <FaPhone />,
  envelope: <FaEnvelope />,
  location: <FaMapMarkerAlt />,
  youtube: <FaYoutube />,
  linkedin: <FaLinkedin />,
  xing: <FaXing />,
  instagram: <FaInstagram />,
};

const ContactCard = ({ contactInfo }) => {
  return (
    <div className={styles.card}>
      <h2 className={styles.title}>{contactInfo.title}</h2>
      <ul className={styles.infoList}>
        {contactInfo.infoList.map((info, index) => (
          <li key={index} className={styles.infoItem}>
            <span className={styles.icon}>{icons[info.icon]}</span>
            <span>{info.text}</span>
          </li>
        ))}
      </ul>
      <div className={styles.socialLinks}>
        {contactInfo.socialLinks.map((link, index) => (
          <a key={index} href={link.href} target="_blank" rel="noopener noreferrer" className={styles.socialContainer}>
            {icons[link.icon]}
          </a>
        ))}
      </div>
    </div>
  );
};

export default ContactCard;
