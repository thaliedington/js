var depinicial = parseFloat(prompt("Qual o valor do deposito inicial?"));
var taxa = parseFloat(prompt("Qual a taxa de juros?"));
taxa = 1+(taxa/100);
var valor = [];

for(i=0;i<=23;i++){
	if(i==0){
		valor[i] = depinicial*taxa;
	}
	else{
		valor[i] = valor[i-1]*taxa;
	}
	console.log("O valor ganho no mes "+ (i+1) +" sera de: "+valor[i]);
}

console.log("O total ganho sera: "+valor[23]);