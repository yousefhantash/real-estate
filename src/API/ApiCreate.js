import axios from "axios";

// Create an axios instance with the base URL
export const api = axios.create({
  baseURL: "http://palestinerealestate.somee.com",
});