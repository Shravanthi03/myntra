import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Body.module.css";

export type BodyType = {
  className?: string;
};

const Body: FunctionComponent<BodyType> = ({ className = "" }) => {
  const navigate = useNavigate();

  const onNavigateBeforeIconClick = useCallback(() => {
    navigate("/flexing");
  }, [navigate]);

  return (
    <section className={[styles.body, className].join(" ")}>
      <div className={styles.post}>
        <div className={styles.postHeader}>
          <img
            className={styles.navigateBeforeIcon}
            loading="lazy"
            alt=""
            src="/navigate-before.svg"
            onClick={onNavigateBeforeIconClick}
          />
          <div className={styles.image6Wrapper}>
            <img
              className={styles.image6Icon}
              loading="lazy"
              alt=""
              src="/image-6@2x.png"
            />
          </div>
        </div>
        <div className={styles.postContent}>
          <div className={styles.postActions}>
            <div className={styles.actionIcons}>
              <div className={styles.engagementIcons}>
                <div className={styles.favoritesAction}>
                  <img
                    className={styles.favoriteIcon}
                    alt=""
                    src="/favorite-1.svg"
                  />
                </div>
                <div className={styles.commentAction}>
                  <img
                    className={styles.chatBubbleIcon}
                    loading="lazy"
                    alt=""
                    src="/chat-bubble.svg"
                  />
                </div>
                <img
                  className={styles.shareIcon}
                  loading="lazy"
                  alt=""
                  src="/share.svg"
                />
              </div>
              <img
                className={styles.archiveIcon}
                loading="lazy"
                alt=""
                src="/archive.svg"
              />
            </div>
            <blockquote className={styles.vintageVibesWith}>
              "Vintage vibes with a modern twist. ✨🕊️ #SustainableStyle"
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Body;
