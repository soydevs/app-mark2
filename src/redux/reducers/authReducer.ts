import { SET_USER } from "../constants";

const INITIAL_STATE = {
  user: {}
};

const authReducer = (state = INITIAL_STATE, action) => {
  // eslint-disable-next-line prettier/prettier
  const { type, payload } = action;
  switch (type) {
    case SET_USER:
      return {
        ...state,
        user: payload
      }

    default:
      return state;
  }
};

export default authReducer;
