import React from "react";
import Cards from "../components/cards/Cards";
import { useDispatch, useSelector } from "react-redux";
import { removeCharacter } from "../redux/characters/actions";
import { removeFav } from "../redux/favourites/actions";

const Home = () => {
  const characters = useSelector((state) => state.characters.characters);
  const dispatch = useDispatch();

  const handleClose = (id) => {
    dispatch(removeCharacter(id));
    dispatch(removeFav(id));
  };

  return (
    <div>
      <Cards characters={characters} handleClose={handleClose} />
    </div>
  );
};

export default Home;
