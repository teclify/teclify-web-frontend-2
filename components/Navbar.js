import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/Navbar.module.css';

const Navbar = ({ navbar }) => {
  const router = useRouter(); 
  const isHomepage = router.pathname === '/'; 
  const [isMobile, setIsMobile] = useState(false);

  const toggleScrolledClasses = (add) => {
    const navbarElement = document.querySelector(`.${styles.navbar}`);
    const linksElement = document.querySelector(`.${styles.links}`);
    const contactButtonElement = document.querySelector(`.${styles.contact_button}`);

    if (navbarElement && linksElement && contactButtonElement) {
      if (add) {
        navbarElement.classList.add(styles.scrolled);
        linksElement.classList.add(styles.scrolled);
        contactButtonElement.classList.add(styles.scrolled);
      } else {
        navbarElement.classList.remove(styles.scrolled);
        linksElement.classList.remove(styles.scrolled);
        contactButtonElement.classList.remove(styles.scrolled);
      }
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleResize = () => {
        setIsMobile(window.innerWidth <= 800);
      };

      handleResize();
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined' && !isMobile) {
      const handleScroll = () => {
        if (isHomepage) {
          toggleScrolledClasses(window.scrollY > 50);
        }
      };

      if (isHomepage) {
        window.addEventListener('scroll', handleScroll);
        handleScroll(); 
      } else {
        toggleScrolledClasses(true);
      }

      return () => {
        window.removeEventListener('scroll', handleScroll);
        if (!isHomepage) toggleScrolledClasses(false);
      };
    }
  }, [isMobile, isHomepage]);

  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          <a href="/">
            <img src="/img/teclify-logo.png" alt="Teclify Logo" />
          </a>
        </div>

        {!isMobile && (
          <>
            <ul className={styles.links}>
              {navbar.links.map((link, index) => (
                <li key={index} className={styles.link_item}>
                  <a href={link.href}>
                    {link.name}
                   
                  </a>
                  
                </li>
              ))}
            </ul>

              <a href={navbar.contactButton.href}>
              <button className={styles.contact_button}>
                {navbar.contactButton.label}
              </button>
            </a>
          </>
        )}

        {isMobile && (
          <>
           <input type="checkbox" id="sidebar-toggle" className={styles.sidebar_toggle} />
            <label htmlFor="sidebar-toggle" className={styles.trigger}>
              <svg className={styles.bars} viewBox="0 0 100 100">
                <path className={`${styles.line} ${styles.top}`} d="m 30,33 h 40 c 13.100415,0 14.380204,31.80258 6.899646,33.421777 -24.612039,5.327373 9.016154,-52.337577 -12.75751,-30.563913 l -28.284272,28.284272"></path>
                <path className={`${styles.line} ${styles.middle}`} d="m 70,50 c 0,0 -32.213436,0 -40,0 -7.786564,0 -6.428571,-4.640244 -6.428571,-8.571429 0,-5.895471 6.073743,-11.783399 12.286435,-5.570707 6.212692,6.212692 28.284272,28.284272 28.284272,28.284272"></path>
                <path className={`${styles.line} ${styles.bottom}`} d="m 69.575405,67.073826 h -40 c -13.100415,0 -14.380204,-31.80258 -6.899646,-33.421777 24.612039,-5.327373 -9.016154,52.337577 12.75751,30.563913 l 28.284272,-28.284272"></path>
              </svg>
            </label>

            <div className={styles.sidebar}>
              <div className={styles.checkboxExit}>
                <input type="checkbox" id="sidebar-toggle" className={styles.sidebar_toggle} />
                <label htmlFor="sidebar-toggle" className={styles.triggerExit}>
                  <svg className={styles.barsExit} viewBox="0 0 100 100">
                    <path className={`${styles.line} ${styles.top}`} d="m 30,33 h 40 c 13.100415,0 14.380204,31.80258 6.899646,33.421777 -24.612039,5.327373 9.016154,-52.337577 -12.75751,-30.563913 l -28.284272,28.284272"></path>
                    <path className={`${styles.line} ${styles.middle}`} d="m 70,50 c 0,0 -32.213436,0 -40,0 -7.786564,0 -6.428571,-4.640244 -6.428571,-8.571429 0,-5.895471 6.073743,-11.783399 12.286435,-5.570707 6.212692,6.212692 28.284272,28.284272 28.284272,28.284272"></path>
                    <path className={`${styles.line} ${styles.bottom}`} d="m 69.575405,67.073826 h -40 c -13.100415,0 -14.380204,-31.80258 -6.899646,-33.421777 24.612039,-5.327373 -9.016154,52.337577 12.75751,30.563913 l 28.284272,-28.284272"></path>
                  </svg>
                </label>
              </div>
              <ul className={styles.sidebar_links}>
                {navbar.links.map((link, index) => (
                  <li key={index} className={styles.sidebar_link_item}>
                    <a href={link.href}>
                      {link.name}
                      {link.dropdown && <span className="dropdown-icon">▼</span>}
                    </a>
                   
                  </li>
                ))}
              </ul>
              <a href={navbar.contactButton.href}>
                <button className={styles.sidebar_contact_button}>
                  {navbar.contactButton.label}
                </button>
              </a>
            </div>


            <label htmlFor="sidebar-toggle" className={styles.overlay}></label>
          </>
        )}
      </nav>
    </>
  );
};

export default Navbar;