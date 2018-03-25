function Aluno(){
	this.nome = ko.observable();
	this.idade = ko.observable();
}

function Turma(){
	var self = this;
	
	self.alunoDados = ko.observable(new Aluno());
	
	self.alunos = ko.observableArray([]);
	
	self.adicionarAluno = function () {
		
		self.alunos.push(self.alunoDados());
		self.alunoDados (new Aluno());
	}
	
	self.calcularIdadeMedia = ko.computed(function (){
		
		var totalIdades = 0;

		for (i=0;i<self.alunos().length;i++){
			
			console.log(self.alunos()[i].idade());
			totalIdades += parseInt(self.alunos()[i].idade());
		}
		
		return totalIdades/self.alunos().length;
	}, this);
}