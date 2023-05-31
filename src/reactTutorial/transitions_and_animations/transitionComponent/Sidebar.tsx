import { Transition, TransitionStatus } from "react-transition-group";
import styles from "./Sidebar.module.css";
import { EXITED, EXITING } from "react-transition-group/Transition";

export const Sidebar: React.FC<{ visible: boolean }> = (props) => {
  return (
    <Transition in={props.visible} timeout={1000} mountOnEnter unmountOnExit>
      {(state: TransitionStatus) => {
        const animationStyle =
          state === EXITING || state === EXITED ? styles.sidebarHidden : "";
        return (
          <div className={`${styles.sidebar} ${animationStyle}`}>Sidebar</div>
        );
      }}
    </Transition>
  );
};
