d = document;
// Cambiamos el contenido de la etiqueta h1
let titulo = d.querySelector('h1');
titulo.innerHTML = 'Hora del Desafío';

// Función para mostrar mensaje en consola
const clickeado = () => console.log('El botón fue clicado');

// Función para mostrar alerta con el mensaje "Yo amo JS"
function ciudadDeBrasil() {
    const ciudad = prompt('nombre de una ciudad de Brasil: ')
    alert(`Estuve en ${ciudad} y me acordé de ti`)
}

// Función para mostrar prompt y alerta
const YoAmoJS = () => alert('Yo amo JS')

// Función para mostrar alerta con la suma de 2 números
function sumaDosNumeros() {
    const a = parseInt(prompt('introduce el primer número: '))
    const b = parseInt(prompt('introduce el segundo número: '))

    if (isNaN(a)) {
        alert('el primer valor no es un número');
    } else if (isNaN(b)) {
        alert('el segundo valor no es un número'); 
    } else {
        alert(`El resultado de ${a} + ${b} = ${a + b}`)
    } 
}



