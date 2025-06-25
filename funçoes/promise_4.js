const numerosFixos = [24, 24, 39, 16, 26, 34]
let indice = 0

function gerarNumerosEntre(min, max, tempo) {
    if (min > max) [max, min] = [min, max]
    return new Promise(resolve => {
        setTimeout(function () {
            const aleatorio = numerosFixos[indice++]
            resolve(aleatorio)
        }, tempo)
    })
}

function gerarVariosNumeros() {
    return Promise.all([
        gerarNumerosEntre(1, 60, 4000),
        gerarNumerosEntre(1, 60, 1000),
        gerarNumerosEntre(1, 60, 500),
        gerarNumerosEntre(1, 60, 3000),
        gerarNumerosEntre(1, 60, 100),
        gerarNumerosEntre(1, 60, 1500),
    ])
}

console.time('promise')

gerarVariosNumeros()
    .then(console.log)
    .then(() => {
        console.timeEnd('promise')
        console.timeEnd('promise')  
    })