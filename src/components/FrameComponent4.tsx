import { FunctionComponent } from "react";
import styles from "./FrameComponent4.module.css";

export type FrameComponent4Type = {
  className?: string;
};

const FrameComponent4: FunctionComponent<FrameComponent4Type> = ({
  className = "",
}) => {
  return (
    <header className={[styles.frameParent, className].join(" ")}>
      <div className={styles.myntralogo2Parent}>
        <img
          className={styles.myntralogo2Icon}
          loading="lazy"
          alt=""
          src="/myntralogo-11@2x.png"
        />
        <div className={styles.navigation}>
          <div className={styles.searchFieldParent}>
            <div className={styles.searchField}>
              <img
                className={styles.searchIcon}
                loading="lazy"
                alt=""
                src="/search.svg"
              />
            </div>
            <div className={styles.favoriteWrapper}>
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
      <div className={styles.horizontalinset}>
        <div className={styles.divider} />
      </div>
    </header>
  );
};

export default FrameComponent4;
