import { FunctionComponent } from "react";
import FrameComponent4 from "../components/FrameComponent4";
import Body from "../components/Body";
import styles from "./Beforeafter.module.css";

const Beforeafter: FunctionComponent = () => {
  return (
    <div className={styles.beforeafter}>
      <FrameComponent4 />
      <Body />
      <section className={styles.postDescription}>
        <div className={styles.sustainableFashionTipContainer}>
          <p className={styles.sustainableFashionTip}>
            Sustainable Fashion Tip of the Day:
          </p>
          <p className={styles.blankLine}>&nbsp;</p>
          <p className={styles.investInVersatilePiecesCh}>
            <span className={styles.investInVersatile}>
              Invest in Versatile Pieces:
            </span>
            <i className={styles.chooseClothingItems}>
              {" "}
              Choose clothing items that can be styled in multiple ways and fit
              various occasions. A simple dress, for example, can be dressed up
              with accessories for a night out or kept casual for a day at the
              park. This minimizes the need for numerous single-purpose items.
              🌟👗
            </i>
          </p>
        </div>
      </section>
    </div>
  );
};

export default Beforeafter;
