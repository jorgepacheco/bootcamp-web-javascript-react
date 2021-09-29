import { useState, useEffect } from "react";
import "./App.css";
import { Note } from "./Note";

import axios from "axios";

// EL ARRAY INICIAL DE NOTES LO DEFINIMOS EN EL INDEX.JS

function App() {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNotes] = useState("");
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    console.log("use effect");
    setLoading(true)
    setTimeout(() => {
      console.log("ahora con axios");
      axios
      .get("https://jsonplaceholder.typicode.com/posts")
        .then((response) => {
          console.log(response)
          const { data } = response;
          setNotes(data)
          setLoading(false)
        });
    }, 2000);
  }, []); // En el array se le indican las dependencias [] = sin dependencias sólo una vez se ejecuta
  /*
  fetch("https://jsonplaceholder.typicode.com/posts") // Devuelve una promesa
    .then((response) => response.json()) // response,json devuelve otra promesa (las encadenamos)
    .then((json) => {
      console.log(json); // Cuando se ha resaueltop la segunda promesa la sacamos por la consola.
      // si ponemos aqui el setNotes(json) esto actualizaria el componente, volveria a ejecutar el fecht que volveria a setNotes ...loop infinito
    });
*/
  const handleChange = (event) => {
    const newNoteToAdd = event.target.value;
    setNewNotes(newNoteToAdd);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newNoteToAddState = {
      id: notes.length + 1,
      title: newNote,
      body: newNote,
    };
    setNotes([...notes, newNoteToAddState]);
    setNewNotes("");
  };
  console.log("render");
  return (
    <div>
      <h1>Notes</h1>
      {
        loading ? 'Cargando .....' : ''
      }
      <ol>
        {notes.map((note) => (
          <Note key={note.id} {...note} />
        ))}
      </ol>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} value={newNote} />
        <button>Crear Nota</button>
      </form>
    </div>
  );
}

export default App;
