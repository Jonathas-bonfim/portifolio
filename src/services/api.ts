import axios from "axios";

export const api = axios.create({
  baseURL: "https://api.github.com/users/jonathas-bonfim/repos",
  params: {
    visibility: "public",
    affiliation: "owner",
  },
});
