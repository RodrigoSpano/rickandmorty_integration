import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DetailContainer from "../components/characterDetail/DetailContainer";
import axios from "axios";

const CharacterDetail = () => {
  const [character, setCharacter] = useState();

  const { id } = useParams();

  useEffect(() => {
    axios(`http://localhost:8080/rickandmorty/character/${id}`)
      .then((res) => {
        if (res.data.character.name) {
          setCharacter(res.data.character);
        }
      })
      .catch((err) => {
        throw Error(err);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <>{character && <DetailContainer character={character} />}</>;
};

export default CharacterDetail;
