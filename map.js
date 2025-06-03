const numbers = [1, 2, 3, 4, 5, 6]

const numbersV2 = numbers.map( (el) => {
    return el * 2
})

console.log(numbers, numbersV2)

const studants = [
    {
        name: 'jake', score: 6.4
    },
    {
        name: 'susan', score: 8.6
    },
    {
        name: 'emma', score: 9.4
    },
    {
        name: 'peter', score: 9.1
    }
]

const getScore = el => el.score

const result = studants.map(getScore).map(Math.ceil)

console.log(studants, result)