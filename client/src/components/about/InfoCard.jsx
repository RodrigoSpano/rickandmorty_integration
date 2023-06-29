import React from "react";
import styles from "./about.module.css";

const InfoCard = ({ prop, detail, direction = false }) => {
  return (
    <div
      className={
        direction
          ? styles.personalCardContainerTrue
          : styles.personalCardContainer
      }
    >
      <p className={styles.prop}>{prop}:</p>
      <p className={direction && styles.detailTrue}>{detail}</p>
    </div>
  );
};

export default InfoCard;
