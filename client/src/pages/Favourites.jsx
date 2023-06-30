import React, { useEffect } from "react";
import FavouritesCharacters from "../components/favourites/FavouritesCharacters";
import { useDispatch, useSelector } from "react-redux";
import { removeCharacter } from "../redux/characters/actions";
import { removeFav } from "../redux/favourites/actions";
import SelectComponent from "../components/favourites/SelectComponent";

const Favourites = () => {
  const dispatch = useDispatch();
  const myFavourites = useSelector((state) => state.favourites.myFavourites);
  const characters = useSelector((state) => state.characters.characters);
  const handleClose = (id) => {
    dispatch(removeCharacter(id));
    dispatch(removeFav(id));
  };
  useEffect(() => {
    Array.isArray(myFavourites) &&
      myFavourites?.forEach((el) => {
        let match = characters.find((char) => el.id === char.id);
        if (!match) {
          dispatch(removeFav(el.id));
        }
      });
  }, []);
  return (
    <div>
      <SelectComponent />
      <FavouritesCharacters handleClose={handleClose} />
    </div>
  );
};

export default Favourites;
