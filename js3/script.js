var valor1 = Number(prompt("Insira o primeiro valor:"));
var valor2 = Number(prompt("Insira o segundo valor:"));
var operador = prompt("Insira o operador (+, -, *, /):");

var resultado;
var resto;

if (operador === '+') {
    resultado = valor1 + valor2;
} else if (operador === '-') {
    resultado = valor1 - valor2;
} else if (operador === '*') {
    resultado = valor1 * valor2;
} else if (operador === '/') {
    resultado = Math.floor(valor1 / valor2);
    resto = valor1 % valor2;
} else {
    alert("Operador inválido!");
}

var resultadoDiv = document.createElement('div');
resultadoDiv.innerHTML = "<h3>Resultado da Operação:</h3>" +
    "<p><strong>Valor 1:</strong> " + valor1 + "</p>" +
    "<p><strong>Valor 2:</strong> " + valor2 + "</p>" +
    "<p><strong>Operador:</strong> " + operador + "</p>" +
    "<p><strong>Resultado:</strong> " + resultado + "</p>" +
    (resto !== undefined ? "<p><strong>Sobra:</strong> " + resto + "</p>" : "");

document.body.appendChild(resultadoDiv);
