import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Flexing.module.css";

const Flexing: FunctionComponent = () => {
  const navigate = useNavigate();

  const onNavigateBeforeIconClick = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  const onFromTrashToClick = useCallback(() => {
    navigate("/beforeafter");
  }, [navigate]);

  return (
    <div className={styles.flexing}>
      <header className={styles.header}>
        <img
          className={styles.myntralogo2Icon}
          loading="lazy"
          alt=""
          src="/myntralogo-11@2x.png"
        />
        <div className={styles.searchActionsWrapper}>
          <div className={styles.searchActions}>
            <div className={styles.userActions}>
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
      </header>
      <div className={styles.horizontalinset}>
        <div className={styles.divider} />
      </div>
      <section className={styles.navigation}>
        <div className={styles.backNavigation}>
          <img
            className={styles.navigateBeforeIcon}
            loading="lazy"
            alt=""
            src="/navigate-before.svg"
            onClick={onNavigateBeforeIconClick}
          />
          <div className={styles.userImage}>
            <img
              className={styles.image7Icon}
              loading="lazy"
              alt=""
              src="/image-7@2x.png"
            />
          </div>
        </div>
      </section>
      <div className={styles.flexingChild} />
      <section className={styles.content}>
        <div className={styles.fromTrashToTreasureUpParent}>
          <blockquote
            className={styles.fromTrashTo}
            onClick={onFromTrashToClick}
          >
            "From trash to treasure. 💎 #UpcycleMagic"
          </blockquote>
          <div className={styles.sustainableFashionTipOfTheWrapper}>
            <div className={styles.sustainableFashionTipContainer}>
              <p className={styles.sustainableFashionTip}>
                Sustainable Fashion Tip of the Day:
              </p>
              <p className={styles.blankLine}>&nbsp;</p>
              <p className={styles.repurposeOldTShirtsIntoTo}>
                <span
                  className={styles.repurposeOldTShirts}
                >{`Repurpose Old T-Shirts into Tote Bags: `}</span>
                <i className={styles.gotSomeOld}>
                  Got some old t-shirts lying around? Transform them into
                  reusable tote bags! It's a simple DIY project that gives new
                  life to old garments and reduces your reliance on single-use
                  plastic bags. Plus, you get a stylish, unique bag that's
                  perfect for groceries or outings! 🌱👕
                </i>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Flexing;
