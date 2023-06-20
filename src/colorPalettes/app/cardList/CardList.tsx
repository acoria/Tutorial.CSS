import { Card } from "./Card";
import styles from "./CardList.module.css";

export const CardList: React.FC = () => {
  return (
    <div className={styles.cardList}>
      <Card />
      <Card />
    </div>
  );
};
