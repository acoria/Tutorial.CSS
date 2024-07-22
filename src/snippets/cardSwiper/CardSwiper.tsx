import styles from "./CardSwiper.module.scss";

export const CardSwiper: React.FC = () => {
  const cards = [1, 2, 3, 4, 5].map((value, index) => {
    return (
      <div className={styles.card} key={index}>
        <h2>{`Card ${value}`}</h2>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua.
        </p>
      </div>
    );
  });

  return (
    <div className={styles.cardSwiper}>
      <div className={styles.wrapper}>{cards}</div>
    </div>
  );
};
