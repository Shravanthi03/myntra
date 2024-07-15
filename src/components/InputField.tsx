import { FunctionComponent } from "react";
import styles from "./InputField.module.css";

export type InputFieldType = {
  className?: string;
  label?: string;
};

const InputField: FunctionComponent<InputFieldType> = ({
  className = "",
  label,
}) => {
  return (
    <div className={[styles.inputField, className].join(" ")}>
      <div className={styles.label}>{label}</div>
      <div className={styles.description}>Description</div>
      <div className={styles.input}>
        <input className={styles.value} placeholder="Value" type="text" />
      </div>
      <div className={styles.error}>Error</div>
    </div>
  );
};

export default InputField;
