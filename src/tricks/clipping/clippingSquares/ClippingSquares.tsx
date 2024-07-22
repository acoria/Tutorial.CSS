import styles from "./ClippingSquares.module.css";
import { ReactComponent as Circles } from "./circles.svg";
import { ReactComponent as Search } from "./search.svg";

export const ClippingSquares: React.FC = () => {
  return (
    <>
      <div className={styles.background}>
        <div className={styles.clippingSquares}></div>
        <Circles />
      </div>
      <div className={styles.glassy}>
        <h1 className={styles.title}>A glassy look</h1>
        <div className={styles.searchBox}>
          <Search className={styles.search} />
          <h1>Search</h1>
        </div>
        <div className={styles.textBox}>
          <h1>A tile with some text</h1>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet.{" "}
          </p>
        </div>
        <button className={styles.button}>Start</button>
      </div>
    </>
  );
};
