import { FunctionComponent } from "react";
import InputField from "./InputField";
import styles from "./FrameComponent5.module.css";

export type FrameComponent5Type = {
  className?: string;
};

const FrameComponent5: FunctionComponent<FrameComponent5Type> = ({
  className = "",
}) => {
  return (
    <section className={[styles.formLogInWrapper, className].join(" ")}>
      <div className={styles.formLogIn}>
        <InputField label="Email" />
        <InputField label="Password" />
        <div className={styles.buttonGroup}>
          <div className={styles.button}>
            <img className={styles.starIcon} alt="" src="/star1.svg" />
            <div className={styles.button1}>Button</div>
            <img className={styles.xIcon} alt="" src="/x1.svg" />
          </div>
          <div className={styles.button2}>
            <img className={styles.starIcon1} alt="" src="/star2.svg" />
            <div className={styles.button3}>Sign In</div>
            <img className={styles.xIcon1} alt="" src="/x2.svg" />
          </div>
        </div>
        <div className={styles.textLink}>
          <div className={styles.textLink1}>Forgot password?</div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent5;
