import React, { useState } from 'react';
import styles from '../../styles/contact/ContactForm.module.css';

const ContactForm = ({ contactForm }) => {
  const [formData, setFormData] = useState({
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <form
      className={styles.form}
      name="contact"
      method="POST" 
      data-netlify="true" 
    >
      <input type="hidden" name="form-name" value="contact" />
      <input type="hidden" name="subject" value="Kontaktanfrage" />

      <div className={styles.title}>{contactForm.formTitle}</div>

      <input
        type="email"
        name="email"
        placeholder={contactForm.emailPlaceholder}
        value={formData.email}
        onChange={handleChange}
        className={styles.input}
        required
      />
      <input
        type="tel"
        name="phone"
        placeholder={contactForm.phonePlaceholder}
        value={formData.phone}
        onChange={handleChange}
        className={styles.input}
        required
      />
      <textarea
        name="message"
        placeholder={contactForm.messagePlaceholder}
        value={formData.message}
        onChange={handleChange}
        className={styles.textarea}
        required
      ></textarea>
      <button type="submit" className={styles.button}>
        {contactForm.buttonText}
      </button>
    </form>
  );
};

export default ContactForm;
