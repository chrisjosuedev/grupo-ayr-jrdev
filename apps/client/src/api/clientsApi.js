import axios from "axios";
import { getEnvVariables } from "../helpers";

// Prod
const { VITE_API_URL } = getEnvVariables();

const clientsApi = axios.create({
    baseURL: "/api"
})

export default clientsApi;