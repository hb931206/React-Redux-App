const initialState = {
  message: null,
  status: false,
  error: "",
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
      return { ...state, status: false, error: "There was an error." };
    default:
      return state;
  }
};
