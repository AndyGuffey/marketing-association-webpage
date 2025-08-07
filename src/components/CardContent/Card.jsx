import styles from "./Card.module.css";

//? Card Component
// Single article With card Image
// Props: img, title, description, onClick
// Receives all data via props

export default function Card({ image, title, description, onClick }) {
  return (
    // Main card cintainer with click event handle
    <div className={styles.card} onClick={onClick}>
      {/* IMG Container */}
      <div className={styles.imageContainer}>
        <img src={image} alt={title} className={styles.cardImage} />
      </div>

      {/* Content Container 
        - Contains title & description 
        -Flexbox for vertical alignment
      */}
      <div className={styles.cardContent}>
        {/* Article Title- passed in from data/ dummyCard.js  */}
        <h3 className={styles.cardTitle}>{title}</h3>
        <p className={styles.cardDescription}>{description}</p>
      </div>
    </div>
  );
}
