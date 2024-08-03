import { useInView } from "react-intersection-observer";
import { CSSTransition } from "react-transition-group";
import styles from "./AnimatingOnScroll.module.css";
import { ReactComponent as DottedCircle } from "./dottedCircle.svg";

/**
 * For listening to scrolling events, the library "react-intersection-observer" can be used.
 * It provides a hook "useInView":
 *    - ref: is applied to the element to listen to
 *    - inView: is toggled whenever the element comes into view
 *    - threshold: is a number between 0 and 1. Decides whether inView is true when the entire element is visible (1)
 *                 or when it comes into view (0)
 */

export const AnimatingOnScroll: React.FC = () => {
  const {
    ref: turningCircleRef,
    inView,
    entry,
  } = useInView({
    threshold: 0,
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
