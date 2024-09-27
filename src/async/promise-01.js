const promessaSimples = new Promise((resolve, reject) => {
    resolve('Promessa resolvida!');
});

console.log('Antes da promessa');
promessaSimples.then((resultado) => console.log(resultado));
console.log('Depois da promessa');

// teste e veja que a linha 6, será a última a surgir no console.log, pq? pq é uma promessa e aguarda com que aconteça algo pra ela aparecer.
