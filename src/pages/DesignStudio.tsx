import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import FrameComponent3 from "../components/FrameComponent3";
import styles from "./DesignStudio.module.css";

const DesignStudio: FunctionComponent = () => {
  const navigate = useNavigate();

  const onNavigateBeforeIconClick = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  return (
    <div className={styles.designStudio}>
      <header className={styles.frameParent}>
        <div className={styles.frameWrapper}>
          <div className={styles.myntralogo1Parent}>
            <img
              className={styles.myntralogo1Icon}
              loading="lazy"
              alt=""
              src="/myntralogo-11@2x.png"
            />
            <div className={styles.userActionsWrapper}>
              <div className={styles.userActions}>
                <div className={styles.actions}>
                  <img
                    className={styles.searchIcon}
                    loading="lazy"
                    alt=""
                    src="/search.svg"
                  />
                </div>
                <img
                  className={styles.favoriteIcon}
                  loading="lazy"
                  alt=""
                  src="/favorite.svg"
                />
                <div className={styles.shoppingBagWrapper}>
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
        </div>
        <div className={styles.horizontalinset}>
          <div className={styles.divider} />
        </div>
      </header>
      <section className={styles.header}>
        <div className={styles.image4Parent}>
          <img
            className={styles.image4Icon}
            loading="lazy"
            alt=""
            src="/image-4@2x.png"
          />
          <img
            className={styles.navigateBeforeIcon}
            alt=""
            src="/navigate-before.svg"
            onClick={onNavigateBeforeIconClick}
          />
        </div>
      </section>
      <FrameComponent3 />
    </div>
  );
};

export default DesignStudio;
