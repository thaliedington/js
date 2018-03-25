var dia = parseInt (prompt("Digite um numero"));
if(isNaN(dia)){
	alert("Isso nao eh um numero!");
}
else{
	switch (dia){
		case 1:
			alert("Esse dia corresponde a Domingo");
			break;
		case 2:
			alert("Esse dia corresponde a Segunda-feira");
			break;
		case 3:
			alert("Esse dia corresponde a Terca-feira");
			break;
		case 4:
			alert("Esse dia corresponde a Quarta-feira");
			break;
		case 5:
			alert("Esse dia corresponde a Quinta-feira");
			break;
		case 6:
			alert("Esse dia corresponde a Sexta-feira");
			break;
		case 7:
			alert("Esse dia corresponde a Sabado");
			break;
		default:
			alert("Escolha um numero entre 1 e 7");
		break;
	}
}

