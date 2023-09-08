import { useState } from "react";
import styles from "./SwitchApp.module.css";
import { Switch } from "./switch/Switch";

export const SwitchApp: React.FC = () => {
  const [toggle, setToggle] = useState(false);
  const onChange = (switchedOn: boolean) => {
    setToggle(switchedOn);
    console.log(`Switched to "${switchedOn}"`);
  };

  return <Switch width="10rem" sliderColor="blue" />;
  // return (
  //   <>
  //     <button onClick={() => setToggle((previous) => !previous)}>Toggle</button>
  //     <Switch className={styles.switch} checked={toggle} onChange={onChange} />
  //   </>
  // );
  // return (
  //   <Switch
  //     width={"8rem"}
  //     sliderColor={"purple"}
  //     colorOffState="darkgrey"
  //     colorOnState="black"
  //     onChange={onChange}
  //     checked
  //   />
  // );
};
