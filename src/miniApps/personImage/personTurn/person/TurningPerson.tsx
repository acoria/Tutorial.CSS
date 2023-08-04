import { useState } from "react";
import styles from "./TurningPerson.module.css";
import person from "./person.png";
import { Buttock } from "../buttock/Buttock";
import { WinkingEye } from "../eye/winkingEye/WinkingEye";
import { CSSTransition } from "react-transition-group";

export const TurningPerson: React.FC = () => {
  const [showFront, setShowFront] = useState(true);
  const [showFullSize, setShowFullSize] = useState(true);

  return (
    <CSSTransition
      in={!showFullSize}
      timeout={1000}
      classNames={{
        enter: styles.personShrink,
        enterDone: styles.personShrunk,
        exitActive: styles.personShrunk,
        exit: styles.personGrow
      }}
    >
      <div className={styles.turningPerson}>
        <img
          className={`${styles.image} ${showFront ? "" : styles.flipSideways}`}
          src={person}
          alt="Person"
          onClick={() => setShowFullSize((previous) => !previous)}
        />
        <Buttock show={!showFront} />
        <WinkingEye show={showFront} positionInPercentFromLeft={50} />
        <WinkingEye show={showFront} positionInPercentFromLeft={60} />
        <span
          className={`material-symbols-outlined ${styles.turnButton}`}
          onClick={() => setShowFront((previous) => !previous)}
        >
          refresh
        </span>
      </div>
    </CSSTransition>
  );
};
