import React from "react";
import { Link } from "react-router-dom";
import styles from "./links.module.css";

const LinkItem = ({ element }) => {
  return (
    <Link className={styles.link} to={element.path}>
      <p>{element.title}</p>
    </Link>
  );
};

export default LinkItem;
