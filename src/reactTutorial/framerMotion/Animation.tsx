import { motion, spring } from "framer-motion";
import styles from "./Animation.module.css";
import { useState } from "react";

export const Animation: React.FC = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const triangleRotation = dropdownOpen ? 180 : 0;

  return (
    <div className={styles.animation}>
      <div
        className={styles.dropdown}
        onClick={() => setDropdownOpen((previous) => !previous)}
      >
        <h3>Title</h3>
        <motion.div
          className={styles.triangle}
          animate={{ rotate: triangleRotation }}
        ></motion.div>
      </div>
      <div>
        <motion.button
          className={styles.poppingButton}
          transition={{ type: "spring", stiffness: 500 }}
          whileHover={{ scale: 1.1 }}
        >
          Click me
        </motion.button>
      </div>
    </div>
  );
};
