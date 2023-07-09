import { useState } from "react";
import styles from "./TurningPerson.module.css";
import person from "./person.png";
import { Buttock } from "../buttock/Buttock";
import { WinkingEye } from "../eye/winkingEye/WinkingEye";

export const TurningPerson: React.FC = () => {
  const [showFront, setShowFront] = useState(true);
  return (
    <div className={styles.turningPerson}>
      <img
        className={`${styles.image} ${showFront ? "" : styles.flipSideways}`}
        src={person}
        alt="Person"
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
  );
};
