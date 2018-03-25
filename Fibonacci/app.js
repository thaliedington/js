var aux = [];

aux[0] = 0;
console.log("Sequencia de Fibonacci: "+aux[0]);
aux[1] = 1;
console.log("Sequencia de Fibonacci: "+aux[1]);

for (i=2; i<=20; i++){
	aux[i] = aux[i-2] + aux[i-1];
	console.log("Sequencia de Fibonacci: "+aux[i]);
}