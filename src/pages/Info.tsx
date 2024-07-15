import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../components/Card";
import FrameComponent2 from "../components/FrameComponent2";
import styles from "./Info.module.css";

const Info: FunctionComponent = () => {
  const navigate = useNavigate();

  const onNavigateBeforeIconClick = useCallback(() => {
    navigate("/shop-now");
  }, [navigate]);

  return (
    <div className={styles.info}>
      <section className={styles.frameParent}>
        <header className={styles.frameGroup}>
          <div className={styles.frameWrapper}>
            <div className={styles.myntralogo1Parent}>
              <img
                className={styles.myntralogo1Icon}
                loading="lazy"
                alt=""
                src="/myntralogo-12@2x.png"
              />
              <div className={styles.frameContainer}>
                <div className={styles.frameDiv}>
                  <div className={styles.searchParent}>
                    <img
                      className={styles.searchIcon}
                      loading="lazy"
                      alt=""
                      src="/search.svg"
                    />
                    <img
                      className={styles.favoriteIcon}
                      loading="lazy"
                      alt=""
                      src="/favorite.svg"
                    />
                  </div>
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
        <div className={styles.navigationWrapper}>
          <div className={styles.navigation}>
            <img
              className={styles.navigateBeforeIcon}
              loading="lazy"
              alt=""
              src="/navigate-before1.svg"
              onClick={onNavigateBeforeIconClick}
            />
            <div className={styles.image1Wrapper}>
              <img
                className={styles.image1Icon}
                loading="lazy"
                alt=""
                src="/image-11@2x.png"
              />
            </div>
          </div>
        </div>
      </section>
      <section className={styles.cardParent}>
        <Card />
        <FrameComponent2 />
      </section>
    </div>
  );
};

export default Info;
