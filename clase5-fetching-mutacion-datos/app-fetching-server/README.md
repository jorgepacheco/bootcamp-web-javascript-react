# Fetching de server

## Servicio de Mocks

- json-server

- https://jsonplaceholder.typicode.com/


## Promesa

- En el futuro devolvera algo : resspuesta / error

- fetch('url') devuelve una promesa

## useEffect

- Es otro hook que nos dice cuando se renderiza el componente

```javascript
  fetch("https://jsonplaceholder.typicode.com/posts") // Devuelve una promesa
    .then((response) => response.json()) // response,json devuelve otra promesa (las encadenamos)
    .then((json) => {
      console.log(json); // Cuando se ha resaueltop la segunda promesa la sacamos por la consola.
      // si ponemos aqui el setNotes(json) esto actualizaria el componente, volveria a ejecutar el fecht que volveria a setNotes ...loop infinito
    });
```

## npm install axios -> mejora de fetch