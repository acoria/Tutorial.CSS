import styles from "./GridAnimation.module.scss";

export const GridAnimation: React.FC = () => {
  return (
    <div className={styles.gridAnimation}>
      <div className={styles.gridAnimationWiden}>
        <div className={`${styles.gridCell1} ${styles.left}`}></div>
        <div className={`${styles.gridCell2} ${styles.right}`}></div>
      </div>
      <div className={styles.gridAnimationWiden2}>
        <div className={styles.left}></div>
        <div className={styles.center}></div>
        <div className={styles.right}></div>
      </div>
      <div className={styles.gridAnimationAddCell}>
        <div className={styles.gridAddCell}></div>
        <div className={styles.gridAddCell}></div>
        <div className={styles.gridAddCell}></div>
      </div>
    </div>
  );
};
