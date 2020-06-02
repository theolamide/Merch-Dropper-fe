import axios from "axios";

axios.interceptors.response.use((res) => {
  if (res.data.token) {
    localStorage.setItem("token", res.data.token);
  }
  return res;
});

export const axiosWithAuth = () => {
  const token = localStorage.getItem("token");
  let url;
  if (process.env.REACT_APP_BASE_URL === "development") {
    url = "https://merch-dropper.herokuapp.com";
  } else {
    url = "https://merch-dropper.herokuapp.com";
  }

  return axios.create({
    baseURL: url,
    headers: {
      Authorization: token,
      "Content-Type": "application/json",
    },
  });
};
