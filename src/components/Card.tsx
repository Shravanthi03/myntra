import { FunctionComponent } from "react";
import styles from "./Card.module.css";

export type CardType = {
  className?: string;
};

const Card: FunctionComponent<CardType> = ({ className = "" }) => {
  return (
    <div className={[styles.card, className].join(" ")}>
      <img className={styles.infoIcon} loading="lazy" alt="" src="/info.svg" />
      <div className={styles.body}>
        <div className={styles.text}>
          <h3 className={styles.title}>Embroidered Jacket</h3>
          <div className={styles.bodyTextFor}>
            Beautiful jacket made from upcycling of denim and a dupatta with
            embriodery
          </div>
        </div>
        <div className={styles.buttonGroup}>
          <div className={styles.button}>
            <img className={styles.starIcon} alt="" src="/star.svg" />
            <div className={styles.button1}>Button</div>
            <img className={styles.xIcon} alt="" src="/x.svg" />
          </div>
          <div className={styles.button2}>
            <img className={styles.starIcon1} alt="" src="/star.svg" />
            <div className={styles.button3}>Shop NOW</div>
            <img className={styles.xIcon1} alt="" src="/x.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
