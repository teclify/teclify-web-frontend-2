import React from 'react';

const Footer = ({ footer }) => {
  return (
    <footer className="footer">

      <div className="footer-logo">
        <img src={footer.logo || "/default-logo.png"} alt="Teclify Logo" />
      </div>

      <div className="impressum-datasecurity">
        <ul>
          <li><a href={footer.links?.impressum || "#"}>Impressum</a></li>
          <li><a href={footer.links?.datenschutz || "#"}>Datenschutz</a></li>
        </ul>
      </div>
      <div className="footer-grid">

        <div className="footer-section">
          <h4>Übersicht</h4>
          <ul>
            {footer.overview?.map((item, index) => (
              <li key={index}><a href={item.link || "#"}>{item.name}</a></li>
            ))}
          </ul>
        </div>

        <div className="footer-section">
          <h4>Kontakt</h4>
          <ul>
            {footer.contact?.map((item, index) => (
              <li key={index}><a href={item.link || "#"}>{item.label}</a></li>
            ))}
          </ul>
        </div>

        <div className="footer-section">
          <h4>Folge uns</h4>
          <ul className="social-media">
            {footer.socialMedia?.map((item, index) => (
              <li key={index}><a href={item.link || "#"}>{item.platform}</a></li>
            ))}
          </ul>
        </div>
      </div>


      <div className="footer-copyright">
        <p>&copy; {new Date().getFullYear()} Teclify. Alle Rechte vorbehalten.</p>
      </div>

    </footer>
  );
};


export default Footer;
