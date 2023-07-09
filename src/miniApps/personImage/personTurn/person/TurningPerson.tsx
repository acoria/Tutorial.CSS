import { useState } from "react";
import styles from "./TurningPerson.module.css";
import person from "./person.png";
import { Buttock } from "../buttock/Buttock";
import { WinkingEye } from "../eye/winkingEye/WinkingEye";

export const TurningPerson: React.FC = () => {
  const [showFront, setShowFront] = useState(true);
  return (
    <div className={styles.personTurn}>
      <img
        className={`${styles.image} ${showFront ? "" : styles.flipSideways}`}
        src={person}
        alt="Person"
      />
      <Buttock show={!showFront} />
      <WinkingEye show={showFront} positionInPercentFromLeft={50} />
      <WinkingEye show={showFront} positionInPercentFromLeft={60} />
      <button onClick={() => setShowFront((previous) => !previous)}>
        {showFront ? "Flip to back" : "Flip to front"}
      </button>
    </div>
  );
};
