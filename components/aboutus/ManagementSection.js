import React from 'react';
import Image from 'next/image';
import styles from '../../styles/aboutus/ManagementSection.module.css';
import { FaLinkedin, FaXing } from 'react-icons/fa';

const ManagementSection = ({ management }) => {
  return (
    <section className={styles.section
    }>

      <div className={styles.grid}>
        {management.map((member, index) => (
          <div className={styles.managementProfile}>
            <div className={styles.profileImage}>
              <img
                src={member.image}
                alt={`Profile of ${member.name}`}
              />
            </div>
            <div className={styles.profileInfo}>
              <h3 className={styles.name}>{member.name}</h3>
              <div className={styles.contactInfo}>
                <p className={styles.contactItem}>
                  <a href={`mailto:${member.email}`}>{member.email}</a>
                </p>
                <p className={styles.contactItem}>
                  <a href={`tel:${member.phone}`}>{member.phone}</a>
                </p>
                <p className={styles.contactItem}>
                  <a href={`tel:${member.position}`}>{member.position}</a>
                </p>
                <div className={styles.links}>
                  {member.xing && (
                    <a href={member.xing} target="_blank" rel="noopener noreferrer">
                      <FaXing size={24} />
                    </a>
                  )}
                  {member.linkedin && (
                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                      <FaLinkedin size={24} />
                    </a>
                  )}
                </div>
              </div>

            </div>
          </div>
        ))}

      </div>
    </section>
  );
};

export default ManagementSection;
