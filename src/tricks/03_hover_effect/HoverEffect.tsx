import styles from "./HoverEffect.module.css";

export const HoverEffect: React.FC = () => {
  return (
    <div className={styles.background}>
      <div className={styles.hoverEffect}>Hover me!</div>
    </div>
  );
};
