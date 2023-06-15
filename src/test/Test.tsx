import styles from "./Test.module.css";

export const Test: React.FC = () => {
  return (
    <div className={styles.test}>
      {/* <span className={styles.loader}></span> */}
      <div className={styles.surround}>
        <div className={styles.with}>With background</div>
      </div>
      <div className={styles.without}>Without background</div>
    </div>
  );
};
