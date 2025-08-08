// Import react hooks & CSS Modules
import { useState } from "react";
import styles from "./NavBar.module.css";

// ? NAV bar component
/** OVERVIEW
 * Responsive Nav Header with hamburger menu on breakpoints
 *
 * useState for mobile menu toggle
 */

export default function NavBar() {
  // Mobile Navbar Use state
  // Controls visibility of dropdown menu false- hidden true- when hamburger menu clicked
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Toggle menu function
  // Toggles mobile menu visability & 🍔 animation
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    // Triggers CSS animation for icon transformation
  };

  return (
    // Main Nav container with fixed height
    <div className={styles.navBar}>
      {/* Primary Nav content container
      Includes- logo branding & nav elements
      */}
      <div className={styles.navContent}>
        {/* LEFT Section- Logo & Companny name */}
        <div className={styles.leftSection}>
          <img
            src="/images/logos/manz.png"
            alt="Marketing Association NZ Logo"
            className={styles.logo}
          />
          <div className={styles.companyName}>Marketing Association NZ</div>
        </div>

        {/* Desktop Nav Menu 
        Btns displayed Horizontally 
        Hidden on mobile through CSS media queries
        */}
        <div className={styles.rightSection}>
          <button className={styles.menuButton}>Home</button>
          <button className={styles.menuButton}>About</button>
          <button className={styles.menuButton}>Services</button>
          <button className={styles.loginButton}>Login</button>
        </div>

        {/* Mobile Hamburger Icon 
          - Animated transform to X when active 
          - Only visable on mobile breakpoints (768 & 390)
          - Click handle toggles mobile menue Directly below 
        
        */}
        <div className={styles.hamburger} onClick={toggleMobileMenu}>
          <span className={mobileMenuOpen ? styles.active : ""}></span>
          <span className={mobileMenuOpen ? styles.active : ""}></span>
          <span className={mobileMenuOpen ? styles.active : ""}></span>
        </div>
      </div>

      {/* Mobile  Drop down Menu
        - Positioned below Navbar 
        - Conditionally rendered- based on mobileMenuOpen state 
        - Stacked Vertically on Mobile UX
      
      */}
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
