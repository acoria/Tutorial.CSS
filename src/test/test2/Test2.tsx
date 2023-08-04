import styles from "./Test2.module.css";
import { Test3 } from "./Test3";

export const Test2: React.FC = () => {
  return (
    <div className={styles.test2}>
      {/* <Test3 /> */}
      Font in Test2
      <div className={styles.innerDiv}>Font in inner Test2</div>
    </div>
  );
};
