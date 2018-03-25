var dia = lerNumero("Digite um numero");

function verificar (diaParaVerificacao){
	var isNumber = isNaN(diaParaVerificacao);
	var isEntre1e7 = diaParaVerificacao>=1 && diaParaVerificacao<=7;	
	return (isNumber || !isEntre1e7);
}

while (verificar(dia)){
	dia = lerNumero("Digite um numero entre 1 e 7");
}

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
}