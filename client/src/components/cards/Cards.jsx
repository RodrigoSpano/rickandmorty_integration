import Card from "./Card";
import styles from "./cards.module.css";

export default function Cards({ characters, handleClose }) {
  return (
    <div className={styles.cardsContainer}>
      {Array.isArray(characters) &&
        characters?.map((el) => (
          <Card character={el} key={el.id} handleClose={handleClose} />
        ))}
    </div>
  );
}
