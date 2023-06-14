import { useState } from "react";
import styles from "./Box.module.css";

export const Box: React.FC<{ id: number; eventHandler: any }> = (props) => {
  const [selected, setSelected] = useState(false);

  return (
    <div
      key={props.id}
      className={`${styles.box} ${selected ? styles.selected : ""}`}
      onMouseEnter={(event) => {
        event.preventDefault();
        if (event.buttons === 1) {
          setSelected((previous) => !previous);
        }
      }}
      onMouseDown={(event) => {
        event.preventDefault();
        setSelected((previous) => !previous);
      }}
    >
      {/* {`Box ${props.id}`} */}
    </div>
  );
};
