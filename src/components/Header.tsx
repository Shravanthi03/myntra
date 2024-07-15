import { FunctionComponent } from "react";
import styles from "./Header.module.css";

export type HeaderType = {
  className?: string;
};

const Header: FunctionComponent<HeaderType> = ({ className = "" }) => {
  return (
    <header className={[styles.header, className].join(" ")}>
      <div className={styles.mainHeader}>
        <div className={styles.headerDivider}>
          <img
            className={styles.myntralogo1Icon}
            loading="lazy"
            alt=""
            src="/myntralogo-11@2x.png"
          />
          <div className={styles.headerActions}>
            <div className={styles.searchFavorite}>
              <img
                className={styles.searchIcon}
                loading="lazy"
                alt=""
                src="/search.svg"
              />
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
      </div>
    </header>
  );
};

export default Header;
