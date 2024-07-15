import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./FrameComponent6.module.css";

export type FrameComponent6Type = {
  className?: string;
};

const FrameComponent6: FunctionComponent<FrameComponent6Type> = ({
  className = "",
}) => {
  const navigate = useNavigate();

  const onNavigateBeforeIconClick = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  return (
    <header className={[styles.frameParent, className].join(" ")}>
      <div className={styles.frameWrapper}>
        <div className={styles.myntralogo2Parent}>
          <img
            className={styles.myntralogo2Icon}
            loading="lazy"
            alt=""
            src="/myntralogo-11@2x.png"
          />
          <div className={styles.navigationContainer}>
            <div className={styles.searchFavoriteContainer}>
              <div className={styles.searchContainer}>
                <img
                  className={styles.searchIcon}
                  loading="lazy"
                  alt=""
                  src="/search.svg"
                />
              </div>
              <div className={styles.favoriteContainer}>
                <img
                  className={styles.favoriteIcon}
                  loading="lazy"
                  alt=""
                  src="/favorite.svg"
                />
              </div>
              <img
                className={styles.shoppingBagIcon}
                loading="lazy"
                alt=""
                src="/shopping-bag.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.horizontalinsetParent}>
        <div className={styles.horizontalinset}>
          <div className={styles.divider} />
        </div>
        <div className={styles.navigateBeforeWrapper}>
          <img
            className={styles.navigateBeforeIcon}
            loading="lazy"
            alt=""
            src="/navigate-before.svg"
            onClick={onNavigateBeforeIconClick}
          />
        </div>
      </div>
    </header>
  );
};

export default FrameComponent6;
