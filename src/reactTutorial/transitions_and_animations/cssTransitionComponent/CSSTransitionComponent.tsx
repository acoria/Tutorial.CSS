import { useState } from "react";
import { CSSTransition } from "react-transition-group";
import styles from "./CSSTransitionComponent.module.css";

export const CSSTransitionComponent: React.FC = () => {
  const [move, setMove] = useState(false);

  return (
    <div className={styles.cssTransition}>
      <button
        onClick={() => {
          console.log("Clicked");
          setMove((previous) => !previous);
        }}
      >
        ToggleDiv
      </button>
      <CSSTransition
        in={!move}
        // Timeouts define the length between entering and entered / exiting and exited. 
        // They can be defined as one number or an object for different values.
        timeout={{ enter: 1000, exit: 1000 }}
        //each state change has a callback method which is called as soon as the state is entered
        onEnter={() => console.log("onEnter")}
        onEntering={() => console.log("onEntering")}
        onEntered={() => console.log("onEntered")}
        onExit={() => console.log("onExit")}
        onExiting={() => console.log("onExiting")}
        onExited={() => console.log("onExited")}
        // Css classes can be defined for each state
        classNames={{
          enter: styles.enter,
          enterActive: styles.enterActive,
          enterDone: styles.enterDone,
          exit: styles.exit,
          exitActive: styles.exitActive,
          exitDone: styles.exitDone,
        }}
      >
        <div className={styles.transitionDiv}></div>
      </CSSTransition>
    </div>
  );
};
