import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import DesignBanner from "./DesignBanner";
import styles from "./FlexingBanner.module.css";

export type FlexingBannerType = {
  className?: string;
};

const FlexingBanner: FunctionComponent<FlexingBannerType> = ({
  className = "",
}) => {
  const navigate = useNavigate();

  const onFlexingBackgroundImageClick = useCallback(() => {
    navigate("/flexing");
  }, [navigate]);

  return (
    <div className={[styles.flexingBanner, className].join(" ")}>
      <DesignBanner
        designBackground="/rectangle-3@2x.png"
        designStudio="Flexing"
        onDesignBackgroundImageClick={onFlexingBackgroundImageClick}
      />
      <div className={styles.horizontalinset}>
        <div className={styles.divider} />
      </div>
      <footer className={styles.trendingShopping}>
        <div className={styles.trendingBag}>
          <div className={styles.trendingBagLabels}>
            <img
              className={styles.trendingUpIcon}
              loading="lazy"
              alt=""
              src="/trending-up.svg"
            />
            <a className={styles.trending}>Trending</a>
          </div>
        </div>
        <div className={styles.trendingBag1}>
          <div className={styles.shoppingBagWrapper}>
            <img
              className={styles.shoppingBagIcon}
              loading="lazy"
              alt=""
              src="/shopping-bag.svg"
            />
          </div>
          <div className={styles.bag}>Bag</div>
        </div>
      </footer>
    </div>
  );
};

export default FlexingBanner;
