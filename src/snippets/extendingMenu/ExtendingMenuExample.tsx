import { useState } from "react";
import { ExtendingMenu } from "./ExtendingMenu";
import styles from "./ExtendingMenuExample.module.css";

export const ExtendingMenuExample: React.FC = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className={styles.extendingMenuExample}>
      <div>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
        amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
        nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
        sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
        rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
        ipsum dolor sit amet.
      </div>
      <div>
        {showMenu && <ExtendingMenu />}
        <button
          className={styles.button}
          onClick={() => setShowMenu((previous) => !previous)}
        >
          Extend Menu
        </button>
      </div>
    </div>
  );
};
