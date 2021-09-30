import axios from "axios";

export const createNote = ({title, body, userId}) => {
  const newNoteToAddState = {
    title: title,
    body: body,
    userId: userId,
  };

  return axios
    .post("https://jsonplaceholder.typicode.com/posts", newNoteToAddState)
    .then((response) => {
      const { data } = response;
      console.log(data);
      return data;
    });
};
