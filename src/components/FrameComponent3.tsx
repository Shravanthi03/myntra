import { FunctionComponent } from "react";
import styles from "./FrameComponent3.module.css";

export type FrameComponent3Type = {
  className?: string;
};

const FrameComponent3: FunctionComponent<FrameComponent3Type> = ({
  className = "",
}) => {
  return (
    <section
      className={[styles.notificationWrapperWrapper, className].join(" ")}
    >
      <div className={styles.notificationWrapper}>
        <div className={styles.notification}>
          <div className={styles.title}>
            <div className={styles.iconButton}>
              <img
                className={styles.xIcon}
                loading="lazy"
                alt=""
                src="/x.svg"
              />
            </div>
            <img
              className={styles.infoIcon}
              loading="lazy"
              alt=""
              src="/info1.svg"
            />
            <div className={styles.stack}>
              <div className={styles.content}>
                <div className={styles.title1}>Chic Fashion</div>
                <div
                  className={styles.bodyText}
                >{`The above are the three designs which can be implemented by upcycling `}</div>
              </div>
              <div className={styles.button}>
                <img className={styles.starIcon} alt="" src="/star.svg" />
                <div className={styles.button1}>Collaborate Now</div>
                <img className={styles.xIcon1} alt="" src="/x.svg" />
              </div>
            </div>
          </div>
        </div>
        <img
          className={styles.avatarIcon}
          loading="lazy"
          alt=""
          src="/avatar1@2x.png"
        />
      </div>
    </section>
  );
};

export default FrameComponent3;
