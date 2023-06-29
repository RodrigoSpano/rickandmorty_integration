import React from "react";
import { Link } from "react-router-dom";
import styles from "./error.module.css";

const ErrorPage = () => {
  return (
    <div className={styles.errorPageCont}>
      <div>
        <h3>Universe not found</h3>
        <p>click on the portal to return to your universe</p>
        <Link to="/">
          <img src="/assets/portalAlone.png" alt="" />
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
