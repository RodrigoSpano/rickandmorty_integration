import { ACTION_TYPES } from './actions'

const initialState = {
  characters: []
}

const charactersReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.ADD_CHARACTER:
      return {
        ...state,
        characters: [...state.characters, action.payload]
      }
    case ACTION_TYPES.REMOVE_CHARACTER:
      const filteredCharactersArray = state.characters.filter(el => el.id !== action.payload)
      return {
        ...state,
        characters: filteredCharactersArray
      }
    default:
      return { ...state }
  }
}

export default charactersReducer