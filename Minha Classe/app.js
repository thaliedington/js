function Pessoa (){
	this.nome;
	this.idade;
	this.informarDados = function informarDados (){
		return "Nome: "+this.nome+", Idade: "+this.idade;
	}
}