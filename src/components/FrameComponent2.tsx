import { FunctionComponent } from "react";
import styles from "./FrameComponent2.module.css";

export type FrameComponent2Type = {
  className?: string;
};

const FrameComponent2: FunctionComponent<FrameComponent2Type> = ({
  className = "",
}) => {
  return (
    <footer className={[styles.reviewCardWrapper, className].join(" ")}>
      <div className={styles.reviewCard}>
        <div className={styles.rating}>
          <img
            className={styles.starIcon}
            loading="lazy"
            alt=""
            src="/star.svg"
          />
          <img className={styles.starIcon1} alt="" src="/star.svg" />
          <img className={styles.starIcon2} alt="" src="/star.svg" />
          <img className={styles.starIcon3} alt="" src="/star.svg" />
          <img className={styles.starIcon4} alt="" src="/star.svg" />
        </div>
        <div className={styles.reviewBody}>
          <div className={styles.textHeading}>
            <h3 className={styles.textHeading1}>Very fashionable</h3>
          </div>
          <div className={styles.text}>
            <div className={styles.text1}>Suitable for GenZ</div>
          </div>
        </div>
        <div className={styles.avatarBlock}>
          <img
            className={styles.avatarIcon}
            loading="lazy"
            alt=""
            src="/avatar@2x.png"
          />
          <div className={styles.info}>
            <div className={styles.title}>Seema Roy</div>
            <div className={styles.description}>04-05-2024</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FrameComponent2;
