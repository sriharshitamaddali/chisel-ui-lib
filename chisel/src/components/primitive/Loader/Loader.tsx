import React from "react";
import styles from "./Loader.module.css";
import { LoaderProps } from "./Loader.types";
import { classNames } from '../../../utils/classNames';

const Loader = ({ size = "medium" }: LoaderProps) => {
  return (
    <div className={classNames(styles.loader, styles[size])}>
      <span className={styles.dot} />
      <span className={styles.dot} />
      <span className={styles.dot} />
    </div>
  );
};

export default Loader;
