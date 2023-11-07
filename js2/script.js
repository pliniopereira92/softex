var nota1 = Number(prompt("Insira a primeira nota (entre 0 e 10):"));
var nota2 = Number(prompt("Insira a segunda nota (entre 0 e 10):"));
var nota3 = Number(prompt("Insira a terceira nota (entre 0 e 10):"));

var media = (nota1 + nota2 + nota3) / 3;

console.log("A média das notas é: " + media);

var resultadoDiv = document.createElement('div');
resultadoDiv.innerHTML = "<h3>Resultado do Cálculo:</h3>" +
    "<p><strong>Nota 1:</strong> " + nota1 + "</p>" +
    "<p><strong>Nota 2:</strong> " + nota2 + "</p>" +
    "<p><strong>Nota 3:</strong> " + nota3 + "</p>" +
    "<p><strong>Média:</strong> " + media + "</p>";

document.body.appendChild(resultadoDiv);
