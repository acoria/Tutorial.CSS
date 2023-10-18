import { Slider } from "@mui/material";
import styles from "./Test2.module.css";

export const Test2ForSlider: React.FC = () => {
  return (
    <div className={styles.test2}>
      <Slider
        aria-label="Temperature"
        defaultValue={30}
        valueLabelDisplay="auto"
        step={10}
        marks
        min={10}
        max={110}
      />
    </div>
  );
};
