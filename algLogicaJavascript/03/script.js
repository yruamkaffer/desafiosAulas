/*
Capturar 2 número e fazer as operações matemáticas de soma, subtração, multiplicação, divisão e resto da divisão.
E para cada operação, mostrar um alerta com o resultado
*/

let numberOne = prompt('Digite o primerio número:')
let numberTwo = prompt('Digite o segundo número:')

numberOne = Number(numberOne)
numberTwo = Number(numberTwo)

const sum = numberOne + numberTwo
const sub = numberOne - numberTwo
const mult = numberOne * numberTwo
const div = numberOne / numberTwo
const restDiv = numberOne % numberTwo

alert('Soma: ' + sum)
alert('Subtração: ' + sub)
alert('Multiplicação: ' + mult)
alert('Divisão: ' + div)
alert('Resto da divisão: ' + restDiv)
