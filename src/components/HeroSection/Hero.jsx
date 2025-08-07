import styles from "./Hero.module.css";
import heroImg from "/images/hero/hero.png";

export default function Hero() {
  return (
    <section
      className={styles.hero}
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${heroImg})`,
      }}
    >
      <div className={styles.heroContent}>
        <div className={styles.leftContent}>
          <h1 className={styles.heroTitle}>
            Search or Browse
            <br />
            Our Latest Articles
          </h1>
        </div>

        {/* Search bar */}
        <div className={styles.searchSection}>
          <div className={styles.searchBar}>
            <input
              type="text"
              placeholder="Search for our latest digital news..."
              className={styles.searchInput}
            />
            <button className={styles.searchButton}>Search</button>
          </div>
        </div>
      </div>
    </section>
  );
}
