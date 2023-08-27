import { Cannon } from "../ship/cannon/Cannon";
import styles from "./Test2.module.css";

export const Test2: React.FC = () => {
  return (
    <div className={styles.test2}>
      <div className={styles.boatParts}>
        <div className={`${styles.boat} ${styles.boatBow}`}></div>
        <div className={`${styles.boat} ${styles.boatRound}`}></div>
        <div className={styles.boat}>
          <Cannon
            containerSize={7}
            turretColor="red"
            barrelColor="#2381df"
            aimAngle={180}
          />
        </div>

        <div className={styles.boat}>
          <Cannon containerSize={7} turretColor="red" barrelColor="#2381df" />
        </div>

        <div className={styles.boat}></div>
        <div className={styles.boat}>
          <Cannon containerSize={7} />
        </div>
      </div>
    </div>
  );
};
