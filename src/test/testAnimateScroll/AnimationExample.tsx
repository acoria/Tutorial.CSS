import { useState } from "react";
import styles from "./AnimationExample.module.css";
import { CSSTransition } from "react-transition-group";

export const AnimationExample = () => {
  const [isAreaBig, setIsAreaBig] = useState(false);
  const [showArea, setShowArea] = useState(false);

  console.log(`component visible: ${showArea}`);
  return (
    <div className={styles.animationExample}>
      {/* <div
        className={`${styles.area} ${isAreaBig && styles.grow}`}
        onClick={() => setIsAreaBig((previous) => !previous)}
        onAnimationStart={() => console.log("animation started")}
        onAnimationEnd={()=>console.log("animation stopped")}
      ></div> */}
      <button onClick={() => setShowArea((previous) => !previous)}>
        Toggle visibility
      </button>
      <CSSTransition
        in={showArea}
        timeout={{ enter: 3000, exit: 3000 }}
        onEnter={() => console.log("enter")}
        onEntering={() => console.log("onEntering")}
        onEntered={() => console.log("entered")}
        onExit={() => console.log("exit")}
        onExiting={() => console.log("onExiting")}
        onExited={() => console.log("exited")}
        classNames={{
          enter: styles.hideArea,
          enterActive: styles.showArea,
          enterDone: styles.showArea,
          exit: styles.showArea,
          exitActive: styles.hideArea,
          exitDone: styles.hideArea,
        }}
        mountOnEnter
        unmount OnExit
      >
        <div className={styles.hidableArea}></div>
      </CSSTransition>
    </div>
  );
};
