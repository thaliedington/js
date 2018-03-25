var num = [];
var resultado;

for (i=0; i<4; i++){
	num[i] = parseInt (prompt("Digite o numero "+ [i+1]));
	num[i] = num[i] * num[i];
	console.log("O numero "+ [i+1] +" elevado ao quadrado: "+num[i]);
	resultado = num++;
}

console.log("Resultado: "+resultado);