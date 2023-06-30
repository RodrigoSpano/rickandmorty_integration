import React from "react";
import Card from "../cards/Card";
import styles from "./favourites.module.css";
import { useSelector } from "react-redux";

const FavouritesCharacters = ({ handleClose }) => {
  const myFavourites = useSelector((state) => state.favourites.myFavourites);

  return (
    <div className={styles.favsContainer}>
      {Array.isArray(myFavourites) &&
        myFavourites?.map((el) => (
          <Card character={el} handleClose={handleClose} key={el.id} />
        ))}
    </div>
  );
};

export default FavouritesCharacters;
