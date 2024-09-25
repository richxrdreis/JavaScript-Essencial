function contarVogais(texto) {
    const vogais = 'aeiouAEIOU';
    let contador = 0;

    for (const letra of texto) {
        if (vogais.includes(letra)) {
            //OBS: includes é pra saber se tem algo incluso.
            contador++;
        }
    }

    return contador;
}

console.log(contarVogais('JavaScript'));
