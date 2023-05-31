import { Transition } from "react-transition-group";
import styles from "./Sidebar.module.css";

export const Sidebar: React.FC<{ visible: boolean }> = (props) => {
  return (
    <Transition in={props.visible} timeout={1000} mountOnEnter unmountOnExit>
      {(state) => {
        const animationStyle =
          state === "exiting" || state === "exited" ? styles.sidebarHidden : "";
        return (
          <div className={`${styles.sidebar} ${animationStyle}`}>Sidebar</div>
        );
      }}
    </Transition>
  );
};
