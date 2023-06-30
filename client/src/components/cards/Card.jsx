import styles from "./cards.module.css";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { addFav, removeFav } from "../../redux/favourites/actions";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

function Card({ character, handleClose }) {
  const [isFav, setIsFav] = useState(false);

  const myFavorites = useSelector((state) => state.favourites.myFavourites);
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const handleNavigationToDetail = () => navigate(`/detail/${character.id}`);

  const handleFavourite = () => {
    if (!isFav) {
      setIsFav(true);
      dispatch(addFav(character));
    } else {
      setIsFav(false);
      dispatch(removeFav(character.id));
    }
  };
  useEffect(() => {
    Array.isArray(myFavorites) &&
      myFavorites?.forEach((el) => {
        if (el.id === character.id) setIsFav(true);
      });
  }, [myFavorites, character.id]);

  let statusIcon =
    character.status === "Alive"
      ? "🟢"
      : character.status === "Dead"
      ? "🔴"
      : "⚪";

  return (
    <div className={styles.flipCard}>
      <div className={styles.flipCardInner}>
        <div className={styles.flipCardFront}>
          <div className={styles.statusCont}>
            <p>{statusIcon}</p>
            <p>{character.status}</p>
          </div>
          <img src={character.image} alt="character picture" />
          <div className={styles.infoCont}>
            <h3 className={styles.name}>{character.name}</h3>
            <div>
              <p>{character.species}</p>
              <p>{character.gender}</p>
            </div>
          </div>
        </div>

        <div className={styles.flipCardBack}>
          <div className={styles.btnCont}>
            <p onClick={handleFavourite}>
              {isFav ? <AiFillStar /> : <AiOutlineStar />}
            </p>
            {pathname.startsWith("/characters/favourites") ? null : (
              <p onClick={() => handleClose(character.id)}>
                <IoIosCloseCircleOutline />
              </p>
            )}
          </div>
          <div onClick={handleNavigationToDetail} className={styles.detailDiv}>
            <p>See more</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Card;
