import "./App.css";
const notes = [
  {
    id: 1,
    content: "HTML is easy",
    date: "2019-05-30T17:30:31.098Z",
    important: true
  },
  {
    id: 2,
    content: "Browser can execute only JavaScript",
    date: "2019-05-30T18:39:34.091Z",
    important: false,
  },
  {
    id: 3,
    content: "GET and POST are the most important methods of HTTP protocol",
    date: "2019-05-30T19:20:14.298Z",
    important: true,
  },
];

function App() {
  if (typeof notes === "undefined") {
    return <h1>No hay notas</h1>;
  }
  if (notes.length === 0) {
    return <h1>No hay notas disponibles</h1>;
  }
  return (
    // Al renderizar colleciones indicar el atributo key para que react sepa como iterar en la coleccion y el arbol DOM
    <ol>
      {notes.map((note) => {
        return (
          <li key={note.id}>
            <p>
              <strong>{note.content}</strong>
            </p>
            <small>
              <time>{note.date}</time>
            </small>
            Ò
          </li>
        );
      })}
    </ol>
  );
}

export default App;
