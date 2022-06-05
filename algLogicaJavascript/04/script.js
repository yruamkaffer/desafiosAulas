/*
  Solicitar o nome do aluno e as 3 notas
  do bimestre calcular a média daquele aluno.

  A média positiva deverá ser maior que 6

  Se o aluno passou no bimestre, dar os 
  parabéns.

  Se o aluno não passou no bimestre, 
  motivar o aluno a dar seu melhor na prova
  de recuperação.

  Em ambos os casos, mostre uma mensagem com o nome do aluno e a nota
*/

let student = prompt('Informe o nome do aluno!')
let n1 = prompt('Informe a primeira nota:')
let n2 = prompt('Informe a segunda nota:')
let n3 = prompt('Informe a terceira nota:')

let average = (Number(n1) + Number(n2) + Number(n3)) / 3

average = average.toFixed(2)

let result = average >= 6

if (result) {
  alert(student + '. Parabéns, sua nota foi:' + average)
} else {
  alert(student + ',estude para prova de recuperação, sua nota foi:' + average)
}
