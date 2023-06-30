import React, { useEffect } from "react";
import FavouritesCharacters from "../components/favourites/FavouritesCharacters";
import { useDispatch, useSelector } from "react-redux";
import { removeCharacter } from "../redux/characters/actions";
import { removeFav } from "../redux/favourites/actions";
import SelectComponent from "../components/favourites/SelectComponent";

const Favourites = () => {
  const dispatch = useDispatch();
  const handleClose = (id) => {
    dispatch(removeCharacter(id));
    dispatch(removeFav(id));
  };

  return (
    <div>
      <SelectComponent />
      <FavouritesCharacters handleClose={handleClose} />
    </div>
  );
};

export default Favourites;
