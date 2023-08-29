import { ISwitchProps } from "./ISwitchProps";
import styles from "./Switch.module.css";
import { CSSProperties } from "react";

export const Switch: React.FC<ISwitchProps> = (props) => {
  let style: CSSProperties = {};

  const addCSSProperties = (cssProperties: CSSProperties) => {
    style = { ...style, ...cssProperties } as CSSProperties;
  };

  props.width &&
    addCSSProperties({ "--switchWidth": props.width } as CSSProperties);
  props.sliderColor &&
    addCSSProperties({ "--sliderColor": props.sliderColor } as CSSProperties);
  props.switchColorOff &&
    addCSSProperties({
      "--switchColorOff": props.switchColorOff,
    } as CSSProperties);
  props.switchColorOn &&
    addCSSProperties({
      "--switchColorOn": props.switchColorOn,
    } as CSSProperties);

  return (
    <>
      <label style={style} className={`${styles.switch} ${props.className}`}>
        <input
          className={styles.checkbox}
          type="checkbox"
          onChange={() => {}}
        />
        <span className={`${styles.slider} ${styles.round}`}></span>
      </label>
    </>
  );
};
