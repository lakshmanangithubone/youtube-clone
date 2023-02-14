import axios from "axios";

const BASE_URL = "https://youtube-v31.p.rapidapi.com";

const options = {
  method: "GET",
  url: BASE_URL,
  params: {
    // relatedToVideoId: "7ghhRHRP6t4",
    // part: "id,snippet",
    // type: "video",
    maxResults: 50,
  },
  headers: {
    "X-RapidAPI-Key": "71f00d0e9amsh40d9fd3154969a3p1529e6jsndd23fdb96e29",
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  console.log(data);
  return data;
};
