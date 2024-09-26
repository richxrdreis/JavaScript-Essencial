const frutas = ['Maçã', 'Banana', 'Laranja'];
console.log(frutas);

console.log(frutas[1]);
console.log(frutas.length);

frutas.push('Uva');
console.log('push:', frutas); // comando para ADICIONAR um novo array

console.log('pop:', frutas.pop()); // comando feito para retirar o último elemento do array
console.log(frutas);

frutas.unshift('Manga'); // comando feito para ADICIONAR um novo elemento no INÍCIO do array
console.log('unshift:', frutas);

console.log('shift', frutas.shift());
console.log(frutas);
