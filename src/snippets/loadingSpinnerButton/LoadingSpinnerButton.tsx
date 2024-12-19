import { ILoadingSpinnerButtonProps } from "./ILoadingSpinnerButtonProps";
import styles from "./LoadingSpinnerButton.module.css";
import { Spinner } from "./spinner/Spinner";

export const LoadingSpinnerButton: React.FC<ILoadingSpinnerButtonProps> = (
  props
) => {
  return (
    <button className={styles.loadingSpinnerButton} onClick={props.onClick}>
      <span
        className={`${styles.text} ${props.isLoading ? styles.loading : ""}`}
      >
        {props.caption}
      </span>
      <span
        className={`${styles.spinner} ${props.isLoading ? styles.loading : ""}`}
        area-label="Loading"
      >
        <Spinner />
        {props.loadingCaption}
      </span>
    </button>
  );
};
