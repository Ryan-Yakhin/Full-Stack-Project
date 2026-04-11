import axios from "axios";

const API = axios.create({
  baseURL: "full-stack-project-production-8eba.up.railway.app"
});

export default API;