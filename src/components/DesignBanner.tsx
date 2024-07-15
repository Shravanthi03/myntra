import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./DesignBanner.module.css";

export type DesignBannerType = {
  className?: string;
  designBackground?: string;
  designStudio?: string;

  /** Action props */
  onDesignBackgroundImageClick?: () => void;
};

const DesignBanner: FunctionComponent<DesignBannerType> = ({
  className = "",
  designBackground,
  designStudio,
  onDesignBackgroundImageClick,
}) => {
  const navigate = useNavigate();

  const onDesignBackgroundImageClick1 = useCallback(() => {
    navigate("/design-studio");
  }, [navigate]);

  return (
    <div className={[styles.designBanner, className].join(" ")}>
      <div className={styles.designBannerContent}>
        <img
          className={styles.designBackgroundIcon}
          loading="lazy"
          alt=""
          src={designBackground}
          onClick={onDesignBackgroundImageClick}
        />
        <h1 className={styles.designStudio}>{designStudio}</h1>
      </div>
    </div>
  );
};

export default DesignBanner;
