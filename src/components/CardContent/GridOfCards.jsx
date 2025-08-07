import styles from "./GridOfCards.module.css";
import Card from "./Card";

export default function GridOfCards({ cards }) {
  const handleCardClick = (card) => {
    console.log("Card clicked:", card);
    // Add your click handling logic here
  };

  return (
    <section className={styles.cardGrid}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {cards.map((card, index) => (
            <Card
              key={index}
              image={card.image}
              title={card.title}
              description={card.description}
              onClick={() => handleCardClick(card)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
