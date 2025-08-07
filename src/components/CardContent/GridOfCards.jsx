// Import CSS Modules
import styles from "./GridOfCards.module.css";
import Card from "./Card";

//? GridOfCards Component
// Renders responsive grid of article cards
// PROPS- cards: Array of card objects containing [image, title, description data]

export default function GridOfCards({ cards }) {
  const handleCardClick = (card) => {
    console.log("Card clicked:", card);
  };

  return (
    // Main section container with BG styling
    <section className={styles.cardGrid}>
      {/* Container div for max-width & centering */}
      <div className={styles.container}>
        {/* CSS Grid container -responsive layout done with CSS */}
        <div className={styles.grid}>
          {/* Maps over cards array to render all dummy cards- using index as key */}
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
