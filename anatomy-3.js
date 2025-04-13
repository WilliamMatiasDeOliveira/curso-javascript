// function expression
const increment1 = function(n){
    return n + 1
}

// function arrow
const increment2 = (n) => {
    return n + 1
}
/*
Quando a função arrow recebe apenas
1 parametro vc pode remover os parenteses ()
*/
const increment3 = n => {
    return n + 1
}
/*
Vc pode remover os parenteses de uma
arrow function ela retornara o resultado
automaticamente sem a necessidade do return
*/
const increment4 = n => n + 1


console.log(increment1(1))
console.log(increment2(5))
console.log(increment3(24))
console.log(increment3(199))

const sum = (a, b) => a + b
console.log(sum(6, 5))