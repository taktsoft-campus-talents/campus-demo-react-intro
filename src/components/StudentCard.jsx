import styles from "./StudentCard.module.css";

export function StudentCard({ name }) {
  return (
    <div className={styles.card}>
      <h2>{name}</h2>
    </div>
  );
}
