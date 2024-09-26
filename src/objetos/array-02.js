const frutas = ['Maçã', 'Banana', 'Laranja', 'Tomate'];
const vegetais = ['Cenoura', 'Tomate', 'Batata'];

const comida = frutas.concat(vegetais);
console.log(comida);

const index = comida.indexOf('Tomate'); // se ele achar algum tomate
if (index !== -1) {
    comida.splice(index, 1); // feito para excluir determinado elemento dentro do array
}

console.log(comida);
comida.sort(); // organiza de acordo com o alfabeto
console.log(comida);

console.log(typeof comida);
