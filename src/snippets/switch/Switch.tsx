import styles from "./Switch.module.css";

export const Switch: React.FC = () => {
  return (
    <>
      <label className={styles.switch}>
        <input
          className={styles.checkbox}
          type="checkbox"
          onChange={() => {}}
        />
        <span className={`${styles.slider} ${styles.round}`}></span>
      </label>
    </>
  );
};
