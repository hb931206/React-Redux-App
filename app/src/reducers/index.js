import {
  FETCHING_DOGS_START,
  FETCHING_DOGS_SUCCESS,
  FETCHING_DOGS_FAILED,
} from "../actions";

const initialState = {
  message: null,
  status: false,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_DOGS_START:
      return {
        ...state,
        status: false,
      };
    case FETCHING_DOGS_SUCCESS:
      return {
        ...state,
        message: action.payload,
        status: true,
      };
    case FETCHING_DOGS_FAILED:
      return {
        ...state,
        message: null,
        status: false,
        error: "There was an error.",
      };
    default:
      return state;
  }
};
