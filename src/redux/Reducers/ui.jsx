import { ActionTypes } from "../actionType"

const initialState = {
  isMobile: false,
}
export const uiReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.IS_MOBILE:
      return { ...state, isMobile: payload }

    default:
      return state
  }
}
