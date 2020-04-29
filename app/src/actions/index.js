import axios from "axios";

// Fill in reducer types later

export const getDogs = () => {
  axios.get("https://dog.ceo/api/breeds/image/random/3").then((res) => {
    console.log(res);
  });
};
