import styles from "./Spinner.module.css";
import { ReactComponent as SpinnerIcon } from "./spinner.svg";

export const Spinner: React.FC = () => {
  return <SpinnerIcon className={styles.spinner} />;
};
