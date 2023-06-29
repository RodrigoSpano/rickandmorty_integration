import { ADD_FAV, FILTER, ORDER, REMOVE_FAV } from './actions'

const initialState = {
  myFavourites: [],
  allCharactersFav: []
}

const favouritesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAV:
      return { ...state, myFavourites: action.payload, allCharactersFav: action.payload };

    case REMOVE_FAV:
      return {
        ...state,
        myFavourites: action.payload,
        allCharactersFav: action.payload
      }

    case FILTER:
      if (action.payload === 'all') {
        return {
          ...state,
          myFavourites: state.allCharactersFav
        }
      }
      let filteredArr = state.allCharactersFav.filter(el => el.gender === action.payload)
      return {
        ...state,
        myFavourites: filteredArr
      }
    case ORDER:
      const allCharactersFavCopy = [...state.allCharactersFav]
      return {
        ...state,
        myFavourites: action.payload === 'A' ?
          allCharactersFavCopy.sort((a, b) => a.id - b.id) :
          allCharactersFavCopy.sort((a, b) => b.id - a.id)
      }
    default:
      return { ...state }
  }
}

export default favouritesReducer