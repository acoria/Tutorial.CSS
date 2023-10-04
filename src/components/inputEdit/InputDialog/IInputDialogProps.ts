export interface IInputDialogProps<T> {
    initialValue: T;

    /**
     * Function is called when the OK button is clicked.
     * Prior to this function call, {@link validate} is executed.
     */
    onOk?: (value: T) => void;

    /**
     * Function is called when the cancel button is clicked.
     */
    onCancel?: () => void;

    /**
     * Add a validator function. The {@link value} is the value to be validated.
     * Throw an error for an invalid input.
     */
    validate?: (value: T) => void;

    /**
     * Should the cursor be set in the input field
     */
    autoFocus?: boolean;
}
