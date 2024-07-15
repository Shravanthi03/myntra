import { FunctionComponent } from "react";
import styles from "./MyntraRevibe.module.css";

const MyntraRevibe: FunctionComponent = () => {
  return (
    <div className={styles.myntraRevibe}>
      <div className={styles.myntralogo1Wrapper}>
        <img
          className={styles.myntralogo1Icon}
          loading="lazy"
          alt=""
          src="/myntralogo-1@2x.png"
        />
      </div>
      <button className={styles.button}>
        <div className={styles.stateLayer}>
          <div className={styles.labelText}>Get Started</div>
        </div>
      </button>
    </div>
  );
};

export default MyntraRevibe;
