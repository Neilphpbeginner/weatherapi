import axios from "axios";

export const axiosBaseURL = axios.create({
  baseURL: process.env.baseURL,
});
