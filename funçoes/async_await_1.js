function esperarPor(tempo = 2000) {
    return new Promise(function (resolve){
        setTimeout(() => resolve(), tempo)
    })
}

esperarPor(2000)
    .then(() => console.log("Executando a promise 1..."))
    .then(esperarPor)
    .then(() => console.log("Executando a promise 2..."))
    .then(esperarPor)
    .then( ()=> console.log("Executando a promise 3..."))

    function retornarValor(){
        return new Promise( resolve => {
            setTimeout( () => resolve(10), 5000)
        })
    }

    async function retornarValorRapido(){
        return 20
    }


    async function executar(){
        let valor = await retornarValorRapido()

        await esperarPor(2000)
        console.log(`Asinc/await ${valor}`)
        await esperarPor(2000)
        console.log(`Asinc/await 2 ${valor + 1}`)
        await esperarPor(2000)
        console.log(`Asinc/await 3 ${valor + 2}`)

        return valor + 3
    }

    async function executarDeVerdade(){
        const valor = await executar()
        console.log(valor)
    }

    executarDeVerdade()

    // executar().then(console.log)

