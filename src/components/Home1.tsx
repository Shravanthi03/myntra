import { FunctionComponent } from "react";
import styles from "./Home1.module.css";

export type Home1Type = {
  className?: string;
};

const Home1: FunctionComponent<Home1Type> = ({ className = "" }) => {
  return <div className={[styles.home, className].join(" ")} />;
};

export default Home1;
