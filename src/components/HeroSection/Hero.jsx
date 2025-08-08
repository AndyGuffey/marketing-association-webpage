// Import CSS Modules
import styles from "./Hero.module.css";
import heroImg from "/images/hero/hero.png";

//? HERO Component
/**
 *  Main banner section with CTA and seach bar * Not functional
 *
 * Full width background img with overlay
 */

export default function Hero() {
  return (
    <section
      className={styles.hero}
      style={{
        // BG with gradient overlay to help with txt readability
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${heroImg})`,
      }}
    >
      {/* Hero content container 
          Center contnent vertically & horizontally 
          Responsive padding & max-width constraints 
      */}
      <div className={styles.heroContent}>
        {/* Left content section - Main Headline TXT  */}
        <div className={styles.leftContent}>
          <h1 className={styles.heroTitle}>
            Search or Browse
            <br />
            Our Latest Articles
          </h1>
        </div>

        {/* Search bar section*/}
        <div className={styles.searchSection}>
          <div className={styles.searchBar}>
            <input
              type="text"
              placeholder="Search for our latest digital news..."
              className={styles.searchInput}
            />
            <button className={styles.searchButton}>Search</button>
            {/* NO search Functionality */}
          </div>
        </div>
      </div>
    </section>
  );
}
