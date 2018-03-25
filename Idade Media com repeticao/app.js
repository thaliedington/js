var confirmar = true;
var turma = new Turma();

while (confirmar){
	var novoAluno = new Aluno();
	novoAluno.nome = prompt("Digite o nome");
	novoAluno.idade = parseInt(prompt("Digite a idade"));
	turma.adicionarAluno(novoAluno);
	confirmar = confirm("Gostaria de continuar?");
}

alert(turma.calcularIdadeMedia());







