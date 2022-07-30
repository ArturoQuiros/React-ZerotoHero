import axios from "axios";
import { getENV } from "../helpers";

const { VITE_API_URL } = getENV();

const calendarApi = axios.create({
  baseURL: VITE_API_URL,
});

export default calendarApi;
