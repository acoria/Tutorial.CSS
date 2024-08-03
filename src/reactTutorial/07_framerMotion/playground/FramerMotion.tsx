import { useState } from "react";
import styles from "./FramerMotion.module.css";
import { motion } from "framer-motion";

export const FramerMotion: React.FC = () => {
  const [xValue, setXValue] = useState(0);
  const [yValue, setYValue] = useState(0);
  const [rotateValue, setRotateValue] = useState(0);

  const parseInput = (value: string): number => {
    if (value === "") {
      return 0;
    } else {
      return parseInt(value);
    }
  };

  return (
    <div className={styles.framerMotion}>
      <div className={styles.leftSide}>
        <motion.div
          className={styles.cube}
          animate={{ x: xValue, y: yValue, rotate: rotateValue }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
      </div>
      <div className={styles.rightSide}>
        <div className={styles.xValue}>
          <label htmlFor="xValue">X</label>
          <input
            type="number"
            id="xValue"
            value={xValue}
            onChange={(event) => setXValue(parseInput(event.target.value))}
          />
        </div>
        <div className={styles.yValue}>
          <label htmlFor="yValue">Y</label>
          <input
            type="number"
            id="yValue"
            value={yValue}
            onChange={(event) => setYValue(parseInput(event.target.value))}
          />
        </div>
        <div className={styles.rotateValue}>
          <label htmlFor="rotateValue">Rotate</label>
          <input
            type="number"
            id="rotateValue"
            value={rotateValue}
            onChange={(event) => setRotateValue(parseInput(event.target.value))}
          />
        </div>
      </div>
      <motion.button>Click me</motion.button>
    </div>
  );
};
