import styles from "./Triangle.module.css";

export const Triangle: React.FC = () => {
  return (
    <div className={styles.triangleWrapper}>
      <h1>Triangle</h1>
      <div className={styles.triangle}></div>
    </div>
  );
};
