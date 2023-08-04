import { useCallback, useEffect } from "react";
import styles from "./MouseTracker.module.css";

export const MouseTracker: React.FC = () => {
  const setCursorPosition = useCallback(
    (mousePositionX: number, mousePositionY: number) => {
      const dotPosition = { x: "0", y: "0" };
      //make cursor position responsive -> divide by innerWidth/height
      //round it -> toFixed(2)
      dotPosition.x = (mousePositionX / window.innerWidth).toFixed(2);
      dotPosition.y = (mousePositionY / window.innerHeight).toFixed(2);
      document.documentElement.style.setProperty("--trackedX", dotPosition.x);
      document.documentElement.style.setProperty("--trackedY", dotPosition.y);
    },
    []
  );

  useEffect(() => {
    document.addEventListener("mousemove", (event) =>
      setCursorPosition(event.clientX, event.clientY)
    );
  }, [setCursorPosition]);

  return (
    <div className={styles.mouseTracker}>
      <div className={styles.container}>
        <div className={styles.tracker}></div>
      </div>
    </div>
  );
};
