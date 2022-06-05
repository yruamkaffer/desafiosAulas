/*Nesse desafio, você irá solicitar ao usuário que ele insira **dois números** e, a partir daí, calcular:

- [ ]  A soma dos dois números;
- [ ]  A subtração dos dois números;
- [ ]  A multiplicação dos dois números;
- [ ]  A divisão dos dois números;
- [ ]  O resto da divisão dos dois números;

Fácil até aqui, né? Bora se desafiar?

- [ ]  Verifique se a soma dos dois números é par ~~(ou ímpar)~~;
- [ ]  Verifique se os dois números inseridos são iguais ~~(ou diferentes)~~.*/

alert('Desafio 01 JS - Calculadora de dois números')

let number01 = prompt('Insira o primeiro número:')
let number02 = prompt('Insira o segundo número:')

number01 = Number(number01)
number02 = Number(number02)

const sum = number01 + number02
const sub = number01 - number02
const multi = number01 * number02
const div = number01 / number02
const divRest = number01 % number02

alert('A soma dos dois números é: ' + sum)
alert('A subtração dos dois números é: ' + sub)
alert('A multiplicação dos dois números é: ' + multi)
alert('A divisão dos dois números é: ' + div)
alert('O resto da divisão dos dois números é: ' + divRest)

if (sum / 2 == true) {
  alert('A soma dos dois números é par')
} else {
  alert('A soma dos dois números é ímpar')
}

if (number01 === number02) {
  alert('Os dois números inseridos são iguais')
} else {
  alert('Os dois números inseridos são diferentes')
}
