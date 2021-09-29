import { useState } from "react";
import "./App.css";
import { Note } from "./Note";

// EL ARRAY INICIAL DE NOTES LO DEFINIMOS EN EL INDEX.JS

function App(props) {
  const [notes, setNotes] = useState(props.notes);
  const [newNote, setNewNotes] = useState('')
  const [showAll, setShowAll] = useState(true)

  if (typeof notes === "undefined") {
    return <h1>No hay notas</h1>;
  }
  if (notes.length === 0) {
    return <h1>No hay notas disponibles</h1>;
  }

  const handleChange = (event) => {
    const newNoteToAdd = event.target.value
    setNewNotes(newNoteToAdd)
  };

  const handleSubmit= (event) => {
    // Previene el comportamiento del evento por defecto, en este caso del submit
    // que recarge la pagina entera y realize una redirección
    event.preventDefault();
    const newNoteToAddState =   {
      id: notes.length + 1,
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random < 0.5,
    };

    //setNotes(notes.concat(newNoteToAddState));
    setNotes([...notes, newNoteToAddState]);
    setNewNotes("")
  };

  const handleShowAll = () => {
      setShowAll(() => !showAll)
  };

  return (
    // Al renderizar colleciones indicar el atributo key para que react sepa como iterar en la coleccion y el arbol DOM
    <div>
      <h1>Notes</h1>
      <button onClick={handleShowAll}>
       { showAll ?  'Show only important' : 'Show All'}
      </button>
      <ol>
        {notes.filter((note) => {
            if (showAll === true) return true;
            return note.important === true;

        })
        .map((note) => (
          <Note key={note.id} {...note} />
        ))}
      </ol>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} value={newNote}/>
        <button>Crear Nota</button>
      </form>
    </div>
  );
}

export default App;
