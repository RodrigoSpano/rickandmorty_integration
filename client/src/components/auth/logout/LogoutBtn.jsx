import React from "react";
import styles from "./logout.module.css";
import { useNavigate } from "react-router-dom";
import { HiOutlineLogout } from "react-icons/hi";

const LogoutBtn = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    sessionStorage.removeItem("loged");
    navigate("/auth/login");
  };
  return (
    <p className={styles.logoutBtn} onClick={handleLogout}>
      <HiOutlineLogout />
    </p>
  );
};

export default LogoutBtn;
