const numbers = [1, 2, 3, 4, 5, 6]

const greaterThanZero = el => el > 0
console.log(numbers.filter(greaterThanZero))

const greaterThanTen = el => el > 10
console.log(numbers.filter(greaterThanTen))

const even = el => el % 2 == 0
console.log(numbers.filter(even))


const studants = [
    {name: 'jake', score: 6.4},
    {name: 'susan', score: 8.6},
    {name: 'emma', score: 9.4},
    {name: 'peter', score: 9.1}
]

const greatStudent = studant => studant.score >= 9
console.log(studants.filter(greatStudent))

console.log(studants)