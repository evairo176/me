import config from "@/utils/config";
import axios from "axios";

const BASE_URL = config["BACKEND_URL"];

export default axios.create({
  baseURL: BASE_URL,
});

export const axiosAuth = axios.create({
  baseURL: BASE_URL,
});
