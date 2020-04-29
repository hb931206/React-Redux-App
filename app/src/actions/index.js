import axios from "axios";

export const FETCHING_DOGS_START = "FETCHING_DOGS_START";
export const FETCHING_DOGS_SUCCESS = "FETCHING_DOGS_SUCCESS";
export const FETCHING_DOGS_FAILED = "FETCHING_DOGS_FAILED";

export const getDogs = () => (dispatch) => {
  dispatch({ type: FETCHING_DOGS_START });

  axios
    .get("https://dog.ceo/api/breeds/image/random/3")
    .then((res) => {
      console.log(res);
      dispatch({ type: FETCHING_DOGS_SUCCESS, payload: res.message });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: FETCHING_DOGS_FAILED, payload: "Failed" });
    });
};
