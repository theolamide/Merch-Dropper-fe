import axios from "axios";

export const axiosWithEnv = () => {
  let url;
  if (process.env.REACT_APP_BASE_URL === "development") {
    url = "https://merch-dropper.herokuapp.com";
  } else {
    url = "https://merch-dropper.herokuapp.com";
  }

  return axios.create({
    baseURL: url,
  });
};
