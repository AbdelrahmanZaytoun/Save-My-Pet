import axios from "axios";

const client = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: { "Content-Type": "application/json" },
});
const getAuthHeader = () => ({
  Authorization: `bearer ${localStorage.getItem("token")}`,
});

export const register = (data) => client.post("/users/register", data);
export const login = (data) => client.post("/users/login", data);
export const user = () => client.get("/users", { headers: getAuthHeader() });
export const addPet = (data) =>
  client.post("/pets", data, { headers: getAuthHeader() });
export const listPet = () => client.get("/pets", { headers: getAuthHeader() });
export const viewPet = (id) =>
  client.get(`/pets/${id}`, { headers: getAuthHeader() });
