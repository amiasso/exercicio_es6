"use strict";

var listAlunos = [{
  nome: "Antonio",
  nota: 4
}, {
  nome: "Adele",
  nota: 7
}, {
  nome: "Ozonio",
  nota: 6
}, {
  nome: "Cadimio",
  nota: 5
}];
var maiorQue6 = listAlunos.filter(function (item) {
  return item.nota >= 6;
});
console.log(maiorQue6);