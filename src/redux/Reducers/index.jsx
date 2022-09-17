import { combineReducers } from "redux"
import { uiReducer } from "./ui"

const reducer = combineReducers({
  uireducer: uiReducer,
})

export default reducer
