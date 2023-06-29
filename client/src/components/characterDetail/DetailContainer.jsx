import React from "react";
import InfoBox from "./InfoBox";
import styles from "./detail.module.css";

const DetailContainer = ({ character }) => {
  return (
    <div className={styles.detailContainer}>
      <img alt="" src={character.image} />
      <InfoBox character={character} />
    </div>
  );
};

export default DetailContainer;
