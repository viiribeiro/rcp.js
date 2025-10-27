let valor_compra = 321.00
let porcentagem_desconto;
let valor_desconto;
let valor_final;

if (valor_compra <= 100){
    porcentagem_desconto = 0;
} else if (valor_compra <= 300){
    porcentagem_desconto =10/100;
} else if (valor_compra <= 500){
    porcentagem_desconto = 15/100;
} else {
    porcentagem_desconto = 20/100;
}

valor_desconto = valor_compra * porcentagem_desconto;
valor_final = valor_compra - valor_desconto;

console.log(`valor original: ${valor_compra.toFixed(2)}`);
console.log(`porcentagem de desconto: ${porcentagem_desconto}`);
console.log(`valor do desconto: ${valor_desconto.toFixed(2)}`);
console.log(`valor final: ${valor_final.toFixed(2)}`);