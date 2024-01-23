import styles from "./Card.module.css";
import clsx from "clsx";

export function Card({ title, text, price, featured }) {
  const classString = clsx(styles.card, featured && styles.featured);

  console.log(classString);

  return (
    <div className={clsx(styles.card, featured && styles.featured)}>
      <h2>{title}</h2>
      {featured && <h3>Top Produkt!</h3>}
      <p className={styles["text-content"]}>{text}</p>
      <p>Preis: {price} €</p>
    </div>
  );
}
