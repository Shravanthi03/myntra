import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent from "../components/FrameComponent";
import Home1 from "../components/Home1";
import DesignBanner from "../components/DesignBanner";
import FlexingBanner from "../components/FlexingBanner";
import styles from "./Home.module.css";

const Home: FunctionComponent = () => {
  const navigate = useNavigate();

  const onDesignBackgroundImageClick = useCallback(() => {
    navigate("/design-studio");
  }, [navigate]);

  const onRectangleImageClick = useCallback(() => {
    navigate("/shop-now");
  }, [navigate]);

  return (
    <div className={styles.home}>
      <img
        className={styles.navigateBeforeIcon}
        loading="lazy"
        alt=""
        src="/navigate-before.svg"
      />
      <section className={styles.frameParent}>
        <FrameComponent1 />
        <FrameComponent />
      </section>
      <section className={styles.homeBannerParent}>
        <div className={styles.homeBanner}>
          <div className={styles.homeBannerContent}>
            <img
              className={styles.homeBannerContentChild}
              alt=""
              src="/rectangle-1@2x.png"
              onClick={onRectangleImageClick}
            />
            <Home1 />
            <div className={styles.shopNow}>SHOP NOW</div>
          </div>
        </div>
        <DesignBanner
          designBackground="/rectangle-2@2x.png"
          designStudio="Design Studio"
          onDesignBackgroundImageClick={onDesignBackgroundImageClick}
        />
        <FlexingBanner />
      </section>
    </div>
  );
};

export default Home;
