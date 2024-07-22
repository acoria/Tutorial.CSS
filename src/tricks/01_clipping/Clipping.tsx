import styles from "./Clipping.module.css";
import { ReactComponent as Square } from "./Square.svg";

export const Clipping: React.FC = () => {
  return (
    <div>
      <div className={styles.circle}></div>
      <div className={styles.polygon}></div>
      <Square className={styles.svg} />
      <div className={styles.clippedBySVG}></div>
    </div>
  );
};
