import React from "react";
import styles from "./about.module.css";
import InfoCard from "./InfoCard";

const AboutContainer = () => {
  return (
    <div className={styles.aboutContainer}>
      <img alt="Rodrigo Spano" src={"/assets/foto-carnet.jpg"} />
      <div className={styles.infoCont}>
        <h2>Rodrigo Spano</h2>
        <InfoCard prop={"Location"} detail={"Earth C-053"} />
        <InfoCard prop={"Species"} detail={"Human"} />
        <InfoCard prop={"Gender"} detail={"Male"} />
        <InfoCard
          prop={"About me"}
          direction={true}
          detail={
            "Since I was very young I have been passionate about technology, always wanting to learn more and improve my knowledge in order to improve myself every day and give my best."
          }
        />
      </div>
    </div>
  );
};

export default AboutContainer;
