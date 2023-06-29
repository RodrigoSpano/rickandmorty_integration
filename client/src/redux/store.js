import { createStore, applyMiddleware, combineReducers } from 'redux'
import favouritesReducer from './favourites/reducer'
import thunk from 'redux-thunk'
import charactersReducer from './characters/reducer'


const reducers = combineReducers({
  characters: charactersReducer,
  favourites: favouritesReducer,
})

const store = createStore(reducers, applyMiddleware(thunk))

export default store