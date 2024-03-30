"use strict";

var alunos = [{
  nome: "Tiago",
  nota: 8
}, {
  nome: "Lucas",
  nota: 5
}, {
  nome: "Michele",
  nota: 6
}, {
  nome: "Fernanda",
  nota: 7
}, {
  nome: "Luan",
  nota: 3
}, {
  nome: "Ryu",
  nota: 9
}];
function alunosAprovados(arrayAlunos) {
  return arrayAlunos.filter(function (aluno) {
    return aluno.nota >= 6;
  });
}
var alunosComNotaAcimaDeSeis = alunosAprovados(alunos);
console.log(alunosComNotaAcimaDeSeis);