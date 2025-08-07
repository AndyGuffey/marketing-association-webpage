import styles from "./Card.module.css";

export default function Card({ image, title, description, onClick }) {
  return (
    <div className={styles.card} onClick={onClick}>
      <div className={styles.imageContainer}>
        <img src={image} alt={title} className={styles.cardImage} />
      </div>

      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>{title}</h3>
        <p className={styles.cardDescription}>{description}</p>
      </div>
    </div>
  );
}
