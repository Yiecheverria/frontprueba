import  axios  from "axios";

const api = axios.create({
  baseURL: "https://api.unsplash.com/photos/?client_id=",
  params: {
    client_id: "b9rqwtzSwgHm8Bj30S31vghfcap_gtetoj3hlzKAGl4",
  },
});

export default api