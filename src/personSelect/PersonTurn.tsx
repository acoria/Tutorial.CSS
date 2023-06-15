import { useState } from "react";
import styles from "./PersonTurn.module.css";
import { WinkTransition } from "./WinkTransition";
import person from "./person.png";
import { CSSTransition } from "react-transition-group";

export const PersonTurn: React.FC = () => {
  const [showFront, setShowFront] = useState(true);
  return (
    <div className={styles.personTurn}>
      <img
        className={`${styles.image} ${showFront ? "" : styles.flipSideways}`}
        src={person}
        alt="Person"
      />
      <CSSTransition
        in={!showFront}
        timeout={{ enter: 800, exit: 400 }}
        classNames={{
          exit: styles.visible,
          exitDone: styles.invisible,
          enterDone: styles.visible,
        }}
      >
        <div className={styles.buttock}></div>
      </CSSTransition>
      <WinkTransition visible={showFront}>
        <div
          className={`${styles.eye} ${styles.leftEye} ${
            showFront ? "" : styles.wink
          }`}
        ></div>
      </WinkTransition>
      <WinkTransition visible={showFront}>
        <div
          className={`${styles.eye} ${styles.rightEye} ${
            showFront ? "" : styles.wink
          }`}
        ></div>
      </WinkTransition>
      <button onClick={() => setShowFront((previous) => !previous)}>
        {showFront ? "Flip to back" : "Flip to front"}
      </button>
    </div>
  );
};
