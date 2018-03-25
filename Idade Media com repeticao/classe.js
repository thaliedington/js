function Aluno(){
	this.nome;
	this.idade;
}

function Turma(){
	this.alunos = ko.observablearray();
	this.adicionarAluno = function (al) {
		this.alunos.push(al);
	}
	
	this.calcularIdadeMedia = function (){
		var totalIdades = 0;
		for (i=0;i<this.alunos.length;i++){
			totalIdades += this.alunos[i].idade;
		}
		return totalIdades/this.alunos.length;
	}
}