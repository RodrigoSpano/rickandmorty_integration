import React from "react";
import styles from "./detail.module.css";

const InfoBox = ({ character }) => {
  return (
    <div className={styles.boxInfoContainer}>
      <div className={styles.nameContainer}>
        <h3>{character.name}</h3>
        <p>
          {character.status} - {character.species}
        </p>
      </div>

      <div className={styles.locationDiv}>
        <p className={styles.titleP}>Last known location:</p>
        <p className={styles.dataP}>{character.location.name}</p>
      </div>
      <div className={styles.locationDiv}>
        <p className={styles.titleP}>First seen location:</p>
        <p className={styles.dataP}>{character.origin.name}</p>
      </div>
    </div>
  );
};

export default InfoBox;
