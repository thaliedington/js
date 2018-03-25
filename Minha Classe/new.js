var nome = prompt("Qual o seu nome?");
var idade = parseInt(prompt("Qual a sua idade?"));

var Eu = new Pessoa();
Eu.nome = nome;
Eu.idade = idade;

alert(Eu.informarDados());