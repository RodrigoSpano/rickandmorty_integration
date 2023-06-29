export const ACTION_TYPES = {
  ADD_CHARACTER: 'ADD_CHARACTER',
  REMOVE_CHARACTER: 'REMOVE_CHARACTER',
}

export const addCharacter = (character) => {
  return {
    type: ACTION_TYPES.ADD_CHARACTER,
    payload: character
  }
}

export const removeCharacter = (id) => {
  return {
    type: ACTION_TYPES.REMOVE_CHARACTER,
    payload: id
  }
}
