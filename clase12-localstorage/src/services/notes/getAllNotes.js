import axios from "axios";

const baseUrl = 'http://localhost:3005/api/notes'

export const getAllNotes = () => {
  return axios
    .get(baseUrl)
    .then((response) => {
      console.log(response);
      const { data } = response;
      return data
    });
};
