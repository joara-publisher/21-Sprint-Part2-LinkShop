import axios from "axios";

const http = axios.create({
  baseURL: "https://linkshop-api.vercel.app/21-3",

  headers: {
    "Content-Type": "application/json",
  },
});
export default http;
