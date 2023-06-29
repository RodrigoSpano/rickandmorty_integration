import React from "react";
import SearchBar from "./SearchBar";
import styles from "./searchbar.module.css";
import LinksContainer from "./LinksContainer";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { addCharacter } from "../../redux/characters/actions";
import LogoutBtn from "../auth/logout/LogoutBtn";
import Swal from "sweetalert2";

const Nav = () => {
  const characters = useSelector((state) => state.characters.characters);
  const dispatch = useDispatch();

  const handleSearch = async (id) => {
    try {
      const resp = await axios(
        `http://localhost:8080/rickandmorty/character/${id}`
      );
      if (resp.data.character.name) {
        if (characters.find((el) => el.id === resp.data.character.id)) {
          let timerInterval;
          Swal.fire({
            icon: "error",
            title: "ID already used!",
            text: "you already have selected this character!",
            toast: true,
            position: "top",
            showConfirmButton: false,
            timer: 5000,
            didOpen: () => {
              timerInterval = setInterval(() => {}, 100);
            },
            willClose: () => {
              clearInterval(timerInterval);
            },
          });
        } else {
          let timerInterval;
          Swal.fire({
            icon: "success",
            title: "Character added successfully!",
            toast: true,
            position: "bottom-left",
            showConfirmButton: false,
            timer: 5000,
            didOpen: () => {
              timerInterval = setInterval(() => {}, 100);
            },
            willClose: () => {
              clearInterval(timerInterval);
            },
          });
          dispatch(addCharacter(resp.data.character));
        }
      }
    } catch (error) {
      let timerInterval;
      Swal.fire({
        icon: "error",
        title: "Invalid ID!",
        text: "this ID doesn't exists, try others id!!",
        toast: true,
        position: "top",
        showConfirmButton: false,
        timer: 5000,
        didOpen: () => {
          timerInterval = setInterval(() => {}, 100);
        },
        willClose: () => {
          clearInterval(timerInterval);
        },
      });
    }
  };
  return (
    <div className={styles.navbar}>
      <LinksContainer />
      <img src="/assets/logo.png" alt="Ricky & Morty title" />
      <SearchBar onSearch={handleSearch} />
      <LogoutBtn />
    </div>
  );
};

export default Nav;
