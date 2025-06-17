
// Arrays simples
const nums = [1, 2, 3, 4, 5]
const dobro = n => n * 2 
console.log(nums.map(dobro)) // [2, 4, 6, 8, 10]

const nomes = ['Ana', 'Bia', 'Gui', 'Lia', 'Rafa']
const primeiraLetra = texto => texto[0]
const letras = nomes.map(primeiraLetra)
console.log(nomes, letras) // ['Ana',...], ['A', 'B', 'G', 'L', 'R']

// Array de objetos
const carrinho = [
    { nome: 'Caneta', qtde: 10, preco: 7.99 },
    { nome: 'Impressora', qtde: 0, preco: 649.50 },
    { nome: 'Caderno', qtde: 4, preco: 27.10 },
    { nome: 'Lapis', qtde: 3, preco: 5.82 },
    { nome: 'Tesoura', qtde: 1, preco: 19.20 },
]

// Funções únicas e reutilizáveis
const getNome = item => item.nome
const getTotal = item => item.qtde * item.preco

// Usando map
console.log(carrinho.map(getNome))     // ['Caneta', 'Impressora', ...]
console.log(carrinho.map(getTotal))    // [79.9, 0, 108.4, 17.46, 19.2]

// Criando método personalizado
Array.prototype.meumap = function(fn) {
    const novoArray = []
    for(let i = 0; i < this.length; i++) {
        novoArray.push(fn(this[i], i, this))
    }
    return novoArray
}

// Usando meumap
console.log(carrinho.meumap(getNome))  // ['Caneta', 'Impressora', ...]
console.log(carrinho.meumap(getTotal)) // [79.9, 0, 108.4, 17.46, 19.2]