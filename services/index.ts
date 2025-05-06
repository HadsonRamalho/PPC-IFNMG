import axios from "axios";

const client = axios.create({
  baseURL: 'http://localhost:3033/api',
});

export { client };
