import axios from "axios";

const API = axios.create({
  baseURL: "https://full-stack-project-production-8eba.up.railway.app"
});

export default API;