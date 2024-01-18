import React, {
  HTMLInputTypeAttribute,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import useOnClickOutside from "../useOnClickOutside";
import { IInputDialogProps } from "./IInputDialogProps";
import styles from "./InputDialog.module.css";

export function InputDialog<T>(props: IInputDialogProps<T>) {
  const [inputValue, setInputValue] = useState(props.initialValue);
  const [error, setError] = useState<Error | undefined>(undefined);
  const inputDialogRef = useRef(null);

  const onClickOutside = useCallback(() => props.onCancel?.(), []);
  useOnClickOutside(inputDialogRef, onClickOutside);

  useEffect(() => {
    setError(undefined);
  }, [inputValue]);

  const onKeyDown = () => {
    return (event: React.KeyboardEvent<HTMLInputElement>) => {
      switch (event.key) {
        case "Enter":
          onSubmit();
          break;
        case "Escape":
          props.onCancel?.();
          break;
      }
    };
  };

  const onSubmit = () => {
    try {
      props.validate?.(inputValue);
      props.onOk?.(inputValue);
    } catch (e) {
      setError(e as Error);
    }
  };

  const deriveType = (): HTMLInputTypeAttribute => {
    switch (typeof props.initialValue) {
      case "string":
        return "text";
      case "number":
        return "number";
      case "bigint":
        return "number";
      case "boolean":
        return "text";
      default:
        throw new Error("Not supported");
    }
  };

  const style = props.widthInRem ? { width: `${props.widthInRem}rem` } : {};

  return (
    <div className={styles.editInputDialog} ref={inputDialogRef}>
      <div className={styles.inputWithButtons}>
        <input
          value={inputValue as unknown as string}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setInputValue(event.target.value as unknown as T)
          }
          type={deriveType()}
          onKeyDown={onKeyDown()}
          className={`${styles.input} ${error && styles.validationError}`}
          autoFocus={props.autoFocus}
          style={style}
        />
        <div
          //   type={IconType.CHECK}
          onClick={onSubmit}
          className={styles.okButton}
        >
          OK
        </div>
        <div
          //   type={IconType.CLOSE}
          onClick={() => props.onCancel?.()}
          className={styles.cancelButton}
        >
          CANCEL
        </div>
      </div>
      {error && (
        <span className={styles.validationErrorMessage}>{error.message}</span>
      )}
    </div>
  );
}
