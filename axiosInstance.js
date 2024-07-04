import axios from "axios";
import dotenv from "dotenv";

dotenv.config();
const API_KEY = express.env.API_KEY;

const newsInstance = axios.create({
  baseURL: `https://eventregistry.org/api/v1`,
  headers: {
    Authorization: `Token ${API_KEY}`,
    Accept: "application/json",
  },
});

export default newsInstance;
