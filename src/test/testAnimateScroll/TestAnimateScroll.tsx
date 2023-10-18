import { useInView } from "react-intersection-observer";
import styles from "./TestAnimateScroll.module.css";
import { CSSTransition } from "react-transition-group";
import { ReactComponent as DottedCircle } from "./noun-dotted-circle-250117.svg";
import { useState } from "react";

export const TestAnimateScroll: React.FC = () => {
  const { ref: turningCircleRef, inView, entry } = useInView({
    threshold: 1,
  });

  const [movingTitleRef, titleInView] = useInView({
    threshold: 0,
  });

  const [growingTitleRef, growingTitleInView] = useInView({
    threshold: 0,
  });

  console.log(inView);

  return (
    <div className={styles.boards}>
      <div className={styles.first}>Scroll down</div>
      <div ref={turningCircleRef} className={styles.circleWrapper}>
        <CSSTransition
          timeout={1500}
          in={inView}
          classNames={{
            enter: styles.circleTurnClockwise,
          }}
        >
          <DottedCircle className={styles.circle} />
        </CSSTransition>
        <CSSTransition
          timeout={3000}
          in={inView}
          classNames={{
            enter: styles.circleTurnClockwise,
            enterDone: styles.grownCircle,
          }}
        >
          <DottedCircle className={styles.smallerCircle} />
        </CSSTransition>
      </div>
      <h1
        ref={movingTitleRef}
        className={`${styles.title} ${titleInView && styles.moveTitle}`}
      >
        Some moving title
      </h1>
      <h1
        ref={growingTitleRef}
        className={`${styles.title} ${
          growingTitleInView && styles.growingTitle
        }`}
      >
        Growing title
      </h1>
      <div className={styles.second}></div>
    </div>
  );
};
