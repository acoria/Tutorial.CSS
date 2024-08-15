import styles from "./GridAnimation.module.scss";

export const GridAnimation: React.FC = () => {
  return (
    <div className={styles.gridAnimation}>
      <div className={styles.gridAnimationWiden}>
        <div className={styles.gridCell1}></div>
        <div className={styles.gridCell2}></div>
        <div className={styles.gridCell3}></div>
        <div className={styles.gridCell4}></div>
      </div>
    </div>
  );
};
