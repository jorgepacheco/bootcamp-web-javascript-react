import axios from "axios";
const baseUrl = 'http://localhost:3001/api/notes'
export const createNote = ({title, body, userId}) => {
  const newNoteToAddState = {
    title: title,
    body: body,
    userId: userId,
  };

  return axios
    .post(baseUrl, newNoteToAddState)
    .then((response) => {
      const { data } = response;
      console.log(data);
      return data;
    });
};
