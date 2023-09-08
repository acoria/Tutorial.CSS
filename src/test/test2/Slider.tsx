import { useState } from "react";
import styles from "./Slider.module.css";
import { transform } from "typescript";

export const Slider: React.FC = () => {
  const minValue = 0;
  const maxValue = 100;
  const [sliderPosition, setSliderPosition] = useState(0);

  const calcThumbPositionInPercent = () => {
    const range = maxValue - minValue;
    const onePercent = range / 100;
    const position = sliderPosition / onePercent;
    console.log(`thumbPosition: ${position}%`);
    return position;
  };

  const thumbTranslationX = `-${calcThumbPositionInPercent()}%`;

  const calcProgressBarWidthExtension = () => {
    //Bug: the thumb is moved with translate so it is moved backwards by its percentage (so it does not exceed the end) -> this is missing in the calculation
    // return `+ calc(calc(var(--thumbRadius) / 2) - calc(var(--thumbRadius) * ${calcThumbPositionInPercent} /100))`
    // if (calcThumbPositionInPercent() < 100) {
      return "+ calc(var(--thumbRadius) / 2)";
    // } else {
    //   return "- calc(var(--thumbRadius) / 2)";
    // }
  };

  // Take off 2% because of the border radius being bigger than the one of the thumb. A little bit will always show,
  // so the 2% are taken off to reduce the width of the progress bar.
  // The extension is needed so the progress bar is roughly in the middle of the thumb
  const progressBarWidth = `calc(${calcThumbPositionInPercent()}% ${calcProgressBarWidthExtension()} - 2%)`;

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSliderPosition(parseInt(event.target.value));
  };
  return (
    <div className={styles.sliderContainer}>
      <div
        className={styles.progressBar}
        style={{
          width: progressBarWidth,
          transform: `scaleX(50%)`,
          //Bug fix here? 
          transformOrigin: "left"
        }}
      />
      <div className={styles.track} />
      <input
        className={styles.slider}
        type="range"
        onChange={onChange}
        min={minValue}
        max={maxValue}
        value={sliderPosition}
      />
      <div
        className={styles.thumb}
        style={{
          left: `${calcThumbPositionInPercent()}%`,
          transform: `translateX(${thumbTranslationX}) translateY(-50%)`,
        }}
      />
    </div>
  );
};
