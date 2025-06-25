function gerarNumerosEntre(min, max) {
    if (min > max) [max, min] = [min, max];

    return new Promise(resolve => {
        const aleatorio = 10; // Forçando o número 10
        resolve(aleatorio);
    });
}

gerarNumerosEntre(1, 60)
    .then(num => num * 10)
    .then(numX10 => `O número gerado foi ${numX10}`)
    .then(console.log)