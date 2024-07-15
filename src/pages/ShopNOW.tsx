import { FunctionComponent, useCallback } from "react";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import styles from "./ShopNOW.module.css";

const ShopNOW: FunctionComponent = () => {
  const navigate = useNavigate();

  const onNavigateBeforeIconClick = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  return (
    <div className={styles.shopNow}>
      <Header />
      <main className={styles.content}>
        <section className={styles.productSlider}>
          <img
            className={styles.navigateBeforeIcon}
            loading="lazy"
            alt=""
            src="/navigate-before.svg"
            onClick={onNavigateBeforeIconClick}
          />
          <div className={styles.productContainer}>
            <div className={styles.productWrapper}>
              <div className={styles.productCard}>
                <div className={styles.productItem}>
                  <div className={styles.productDetails}>
                    <div className={styles.productName}>
                      <h3 className={styles.embroideredJacket}>
                        Embroidered Jacket
                      </h3>
                      <div className={styles.jacketDescription}>
                        <div className={styles.beautifulJacketMade}>
                          Beautiful jacket made from upcycling of denim and a
                          dupatta with embriodery
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.button}>
                    <img className={styles.starIcon} alt="" src="/star.svg" />
                    <div className={styles.button1}>Shop NOW</div>
                    <img className={styles.xIcon} alt="" src="/x.svg" />
                  </div>
                </div>
                <div className={styles.hoodieName}>
                  <h3 className={styles.hoodieMan}>Hoodie-Man</h3>
                  <div className={styles.hoodieDescription}>
                    <div className={styles.hoodieMadeOut}>
                      Hoodie made out of napkins
                    </div>
                  </div>
                </div>
                <div className={styles.indieFrockDetails}>
                  <div className={styles.indieFrockCard}>
                    <div className={styles.indieFrockButton}>
                      <div className={styles.button2}>
                        <img
                          className={styles.starIcon1}
                          alt=""
                          src="/star.svg"
                        />
                        <div className={styles.button3}>Shop NOW</div>
                        <img className={styles.xIcon1} alt="" src="/x.svg" />
                      </div>
                      <div className={styles.frockName}>
                        <h3 className={styles.indieFrock}>Indie-Frock</h3>
                      </div>
                    </div>
                    <div className={styles.frockDescription}>
                      <div className={styles.dressMadeOut}>
                        Dress made out of saree
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.imageAction}>
                  <div className={styles.button4}>
                    <img className={styles.starIcon2} alt="" src="/star.svg" />
                    <div className={styles.button5}>Shop NOW</div>
                    <img className={styles.xIcon2} alt="" src="/x.svg" />
                  </div>
                </div>
              </div>
              <img
                className={styles.image1Icon}
                loading="lazy"
                alt=""
                src="/image-1@2x.png"
              />
              <div className={styles.imageGallery}>
                <img
                  className={styles.image2Icon}
                  loading="lazy"
                  alt=""
                  src="/image-2@2x.png"
                />
                <img
                  className={styles.image3Icon}
                  loading="lazy"
                  alt=""
                  src="/image-3@2x.png"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className={styles.header}>
        <div className={styles.horizontalinset}>
          <div className={styles.divider} />
        </div>
        <div className={styles.trendingHeaderWrapper}>
          <div className={styles.trendingHeader}>
            <img
              className={styles.trendingUpIcon}
              loading="lazy"
              alt=""
              src="/trending-up.svg"
            />
            <a className={styles.trending}>Trending</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ShopNOW;
