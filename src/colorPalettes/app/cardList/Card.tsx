import styles from "./Card.module.css";

export const Card: React.FC = () => {
  return (
    <div className={styles.card}>
      <h1 className={styles.title}>Card</h1>
      <p className={styles.text}>Some text</p>
      <div className={styles.buttons}>
        <button className={styles.button}>Option 1</button>
        <button className={styles.button}>Option 2</button>
        <button className={styles.buttonMain}>Special option</button>
      </div>
    </div>
  );
};
