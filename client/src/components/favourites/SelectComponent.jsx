import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { filter, order } from "../../redux/favourites/actions";
import styles from "./favourites.module.css";

const SelectComponent = () => {
  const [aux, setAux] = useState(false);

  const dispatch = useDispatch();

  const handleOrder = (e) => {
    dispatch(order(e.target.value));
    setAux(!aux);
  };

  const handleFilter = (e) => {
    dispatch(filter(e.target.value));
  };

  return (
    <div className={styles.selectContainer}>
      <select onChange={handleOrder}>
        <option disabled selected>
          Order
        </option>
        <option value={"A"}>Ascendente</option>
        <option value={"B"}>Descendente</option>
      </select>
      <select onChange={handleFilter}>
        <option disabled selected>
          Choose filter
        </option>
        <option value="all">All</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Genderless">Genderless</option>
        <option value="unknown">unknown</option>
      </select>
    </div>
  );
};

export default SelectComponent;
