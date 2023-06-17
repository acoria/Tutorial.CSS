import { useState } from "react";
import styles from "./Test.module.css";
import { CSSTransition } from "react-transition-group";

export const Test: React.FC = () => {
  const [leftVisible, setLeftVisible] = useState(true);

  return (
    <>
      <button
        onClick={() => {
          setLeftVisible((previous) => !previous);
        }}
      >
        Toggle divs
      </button>
      <div className={styles.test}>
        <CSSTransition
          in={leftVisible}
          timeout={1000}
          classNames={{
            enter: styles.enterLeft,
            enterActive: styles.enterActiveLeft,
            enterDone: styles.enterDoneLeft,
            exit: styles.exitLeft,
            exitActive: styles.exitActiveLeft,
            exitDone: styles.exitDoneLeft,
          }}
        >
          <div className={styles.left}></div>
        </CSSTransition>
        <CSSTransition
          in={!leftVisible}
          timeout={1000}
          classNames={{
            enter: styles.enterRight,
            enterActive: styles.enterActiveRight,
            enterDone: styles.enterDoneRight,
            exit: styles.exitRight,
            exitActive: styles.exitActiveRight,
            exitDone: styles.exitDoneRight,
          }}
        >
          <div className={styles.right}></div>
        </CSSTransition>
      </div>
    </>
  );
};
