import { useState } from "react";
import styles from "./NavBar.module.css";

export default function NavBar() {
  // Mobile Navbar Use state
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className={styles.navBar}>
      <div className={styles.navContent}>
        <div className={styles.leftSection}>
          <img
            src="/images/logos/manz.png"
            alt="Marketing Association NZ Logo"
            className={styles.logo}
          />
          <div className={styles.companyName}>Marketing Association NZ</div>
        </div>

        {/* Desktop Menu */}
        <div className={styles.rightSection}>
          <button className={styles.menuButton}>Home</button>
          <button className={styles.menuButton}>About</button>
          <button className={styles.menuButton}>Services</button>
          <button className={styles.loginButton}>Login</button>
        </div>

        {/* Mobile Hamburger */}
        <div className={styles.hamburger} onClick={toggleMobileMenu}>
          <span className={mobileMenuOpen ? styles.active : ""}></span>
          <span className={mobileMenuOpen ? styles.active : ""}></span>
          <span className={mobileMenuOpen ? styles.active : ""}></span>
        </div>
      </div>

      {/* Mobile  Drop down Menu */}
      <div
        className={`${styles.mobileMenu} ${mobileMenuOpen ? styles.open : ""}`}
      >
        <button className={styles.menuButton}>Home</button>
        <button className={styles.menuButton}>About</button>
        <button className={styles.menuButton}>Services</button>
        <button className={styles.loginButton}>Login</button>
      </div>
    </div>
  );
}
