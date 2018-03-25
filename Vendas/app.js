var venda = parseInt (prompt("Digite o valor das vendas: "));
var comissao;

if (venda => 1000){
		comissao = venda*(1+(10/100));
}
else {
		comissao = venda*(1+(5/100));
}

alert("O valor final sera de: R$"+comissao);
