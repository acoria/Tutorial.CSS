import styles from "./ExtendingMenu.module.css";

export const ExtendingMenu: React.FC = () => {
  const items: string[] = ["Cat", "Dog", "Rooster", "Cow", "Bird", "Horse"];

  return (
    <div className={styles.items}>
      {items.map((item) => (
        <div className={styles.item}>{item}</div>
      ))}
    </div>
  );
};
