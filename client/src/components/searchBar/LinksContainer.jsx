import React from "react";
import styles from "./links.module.css";
import LinkItem from "./LinkItem";

const LinksContainer = () => {
  const linksArr = [
    { title: "home", path: "/" },
    { title: "about", path: "/about" },
    { title: "favourites", path: "/characters/favourites" },
  ];
  return (
    <div className={styles.linksContainer}>
      {linksArr.map((el) => (
        <LinkItem element={el} key={Math.random()} />
      ))}
    </div>
  );
};

export default LinksContainer;
