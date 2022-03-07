import axios from "axios";

// Base url to make requests to the Cat database;
const instance = axios.create({
  baseURL: "https://api.thecatapi.com",
});

export default instance;
