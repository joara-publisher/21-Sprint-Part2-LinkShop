import axios from "axios";


const http = axios.create({
  baseURL: "https://linkshop-api.vercel.app/21-3/linkshops",
  
  headers: {
    "Content-Type": "application/json",
  },
});
export default http;