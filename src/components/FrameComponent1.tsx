import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./FrameComponent1.module.css";

export type FrameComponent1Type = {
  className?: string;
};

const FrameComponent1: FunctionComponent<FrameComponent1Type> = ({
  className = "",
}) => {
  const navigate = useNavigate();

  const onProfileImageClick = useCallback(() => {
    navigate("/profile");
  }, [navigate]);

  return (
    <header className={[styles.frameParent, className].join(" ")}>
      <div className={styles.frameWrapper}>
        <div className={styles.frameGroup}>
          <div className={styles.myntralogo1Wrapper}>
            <img
              className={styles.myntralogo1Icon}
              loading="lazy"
              alt=""
              src="/myntralogo-11@2x.png"
            />
          </div>
          <div className={styles.notificationsAndProfileParent}>
            <div className={styles.notificationsAndProfile}>
              <img
                className={styles.notificationsIcon}
                loading="lazy"
                alt=""
                src="/notifications.svg"
              />
            </div>
            <div className={styles.notificationsAndProfile1}>
              <img
                className={styles.favoriteIcon}
                loading="lazy"
                alt=""
                src="/favorite.svg"
              />
            </div>
            <img
              className={styles.profileIcon}
              loading="lazy"
              alt=""
              src="/profile@2x.png"
              onClick={onProfileImageClick}
            />
          </div>
        </div>
      </div>
      <div className={styles.horizontalinsetParent}>
        <div className={styles.horizontalinset}>
          <div className={styles.divider} />
        </div>
        <div className={styles.horizontalinset1}>
          <div className={styles.divider1} />
        </div>
      </div>
    </header>
  );
};

export default FrameComponent1;
