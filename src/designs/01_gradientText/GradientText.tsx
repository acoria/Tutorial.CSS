import styles from "./GradientText.module.css";
import { ReactComponent as Square } from "./Square.svg";

export const GradientText: React.FC = () => {
  return (
    <div className={styles.background}>
      <h1 className={styles.gradientText}>
        Hello World
        <Square className={styles.square} />
      </h1>
    </div>
  );
};
