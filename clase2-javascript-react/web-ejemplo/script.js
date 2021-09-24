console.log('Cargando pagina');

// Variables y se pueden reasignar
let firstName = 'Jordi'

// Constante
const lastName = 'Pacheco'

// Variable que se puede acceder fuera del scope (Global) evitar
var isDeveloper = true

console.log(firstName)

// Tipo debil y dinamico (se define cuando se asigna)

firstName = 3
console.log(lastName)

// Tipo primitivos son inmutables

let cadena = 'cadena'
// undefined, null son tipos

// Objetos es un tipo en si.

const nombre = 'Miguel'

const nombreMayus  = nombre.toUpperCase()

console.log(nombre)

console.log(nombreMayus)

// Listas son mutables

const list = []

list.push(1)

console.log(list[0])

// Add element
const otherlist = list.concat(157)
console.log(otherlist)

// OBJETOS
const persona = {
    firstName: 'Pakito',
    twitter: '@pakito',
    age: 13,
    isDeveloper: true,
    links: ['http://adictosaltrabajo', 'https://codely']
}

console.log(persona.firstName)
console.log(persona.twitter)

const field = 'twitter'
console.log(persona[field])
console.log(persona)

// Funciones

// Function expresion
const sumar = (operando1, operando2) => {
    console.log(operando1)
    console.log(operando2)
    return operando1 + operando2
}

const res = sumar(2,2)

console.log(res)

// Funciones se pueden devolver .... son ciudadanos de 1er nivel

// FUNCION DECLARATIVA

function restar (a,b){
    return a - b
}

// esta funcion se puede usar arriba del codigo, mejor usar la primera hoisting
