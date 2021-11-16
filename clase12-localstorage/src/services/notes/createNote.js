import axios from "axios";
const baseUrl = 'http://localhost:3005/api/notes'
export const createNote = ({content, important}) => {
  const newNoteToAddState = {
    content: content,
    important: important
  };

  return axios
    .post(baseUrl, newNoteToAddState)
    .then((response) => {
      const { data } = response;
      console.log(data);
      return data;
    });
};


/*
   "content": "Otra nota con token3",
    "important": false
*/