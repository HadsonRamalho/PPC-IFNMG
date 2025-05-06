import axios from "axios";

const client = axios.create({
  baseURL: 'https://g6v9psc0-3033.brs.devtunnels.ms/api',
});

export { client };
