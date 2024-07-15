import { FunctionComponent } from "react";
import styles from "./FrameComponent.module.css";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.searchBarWrapper, className].join(" ")}>
      <div className={styles.searchBar}>
        <div className={styles.stateLayer}>
          <div className={styles.leadingIcon}>
            <div className={styles.container}>
              <div className={styles.stateLayer1}>
                <img className={styles.icon} alt="" src="/icon.svg" />
              </div>
            </div>
          </div>
          <input
            className={styles.content}
            placeholder="Hinted search text"
            type="text"
          />
          <div className={styles.trailingElements}>
            <div className={styles.stTrailingIcon}>
              <div className={styles.container1}>
                <div className={styles.stateLayer2}>
                  <img className={styles.icon1} alt="" src="/icon-1.svg" />
                </div>
              </div>
            </div>
            <div className={styles.ndTrailingIcon}>
              <div className={styles.container2}>
                <div className={styles.stateLayer3}>
                  <img className={styles.icon2} alt="" src="/icon-2.svg" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
