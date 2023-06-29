import axios from "axios"

export const ADD_FAV = 'ADD_FAV'
export const REMOVE_FAV = 'REMOVE_FAV'
export const FILTER = 'FILTER'
export const ORDER = 'ORDER'

export const addFav = (character) => {
  const url = 'http://localhost:8080/rickandmorty/fav';
  return async (dispatch) => {
    const resp = await axios.post(url, { character })
    return dispatch({
      type: ADD_FAV,
      payload: resp.data
    })
  }

}

export const removeFav = (id) => {
  const url = `http://localhost:8080/rickandmorty/fav/${id}`;
  return async (dispatch) => {
    const resp = await axios.delete(url)
    return dispatch({
      type: REMOVE_FAV,
      payload: resp.data
    })
  }
}

export const filter = (gender) => {
  return {
    type: FILTER,
    payload: gender
  }
}
export const order = (param) => {
  return {
    type: ORDER,
    payload: param
  }
}