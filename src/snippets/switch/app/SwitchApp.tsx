import { Switch } from "../Switch";
import styles from "./SwitchApp.module.css";

export const SwitchApp: React.FC = () => {
  //   return <Switch className={styles.switch} />;
  return (
    <Switch
      width={"8rem"}
      sliderColor={"purple"}
      switchColorOff="darkgrey"
      switchColorOn="black"
      onChange={(switchedOn) => {
          console.log(`Switched to "${switchedOn}"`);
        }
      }
      checked
    />
  );
};
