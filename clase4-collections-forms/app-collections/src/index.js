import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
const notes = [
  {
    id: 1,
    content: "HTML is easy more easy...",
    date: "2019-05-30T17:30:31.098Z",
    important: true,
    descriptions: ["uno", "dos"],
  },
  {
    id: 2,
    content: "Browser can execute only JavaScript",
    date: "2019-05-30T18:39:34.091Z",
    important: false,
    descriptions: ["tres", "cuatro"],
  },
  {
    id: 3,
    content: "GET and POST are the most important methods of HTTP protocol",
    date: "2019-05-30T19:20:14.298Z",
    important: true,
    descriptions: ["seis", "siete"],
  },
];

ReactDOM.render(
  <React.StrictMode>
    <App notes={notes}/>
  </React.StrictMode>,
  document.getElementById('root')
);

