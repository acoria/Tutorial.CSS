import styles from "./SwitchApp.module.css";
import { Switch } from "./component/Switch";

export const SwitchApp: React.FC = () => {
  const onChange = (switchedOn: boolean) => {
    console.log(`Switched to "${switchedOn}"`);
  };

  return <Switch className={styles.switch} onChange={onChange} />;
  // return (
  //   <Switch
  //     width={"8rem"}
  //     sliderColor={"purple"}
  //     switchColorOff="darkgrey"
  //     switchColorOn="black"
  //     onChange={onChange}
  //     checked
  //   />
  // );
};
