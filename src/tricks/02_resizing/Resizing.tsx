import styles from "./Resizing.module.css";

export const Resizing: React.FC = () => {
  return (
    <div className={styles.resizing}>
      <div className={styles.resizableBothWays}>Resize me both ways</div>
      <div className={styles.resizableVertically}>Resize vertically</div>
      <div className={styles.resizableHorizontally}>Resize horizontally</div>
    </div>
  );
};
