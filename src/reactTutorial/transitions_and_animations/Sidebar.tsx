import styles from "./Sidebar.module.css";

export const Sidebar: React.FC<{ visible: boolean }> = (props) => {
  return (
    <div
      className={`${styles.sidebar} ${
        props.visible ? "" : styles.sidebarHidden
      }`}
    >
      Sidebar
    </div>
  );
};
