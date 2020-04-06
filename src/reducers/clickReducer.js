import { CLICK_UPDATE_VALUE } from "../actions/actionTypes";

const initialState = {
  disease: "",
};
export const clickReducer = (state = initialState, action) => {
  switch (action.type) {
    case CLICK_UPDATE_VALUE:
      return {
        ...state,
        disease: action.disease,
      };
    default:
      return state;
  }
};
