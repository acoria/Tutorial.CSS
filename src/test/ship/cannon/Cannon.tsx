import { CSSProperties } from "react";
import styles from "./Cannon.module.css";
import { ICannonProps } from "./ICannonProps";

export const Cannon: React.FC<ICannonProps> = (props) => {
  return (
    <div
      className={styles.cannon}
      style={
        {
          "--cannonContainerSize": `${props.containerSize}rem`,
          "--cannonTurretColor": `${props.turretColor ?? "black"}`,
          "--cannonBarrelColor": `${props.barrelColor ?? "black"}`,
          "--cannonAimAngle": `${props.aimAngle ?? 270}deg`,
        } as CSSProperties
      }
    >
      <div className={styles.cannonBarrel} ></div>
      <div className={styles.cannonMount}></div>
    </div>
  );
};
