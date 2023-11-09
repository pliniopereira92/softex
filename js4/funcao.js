// Função tradicional sem parâmetros
function bemvindo() {
    return "Bem-vindo à função sem parametros!";
}

// Função tradicional com parâmetros e retorno de valor
function soma(a, b) {
    return a + b;
}

// Arrow function com parâmetros e retorno de valor
const multiplicacao = (a, b) => a * b;

// Função para mostrar resultados na tela
function mostrarResultados() {
    var valor1 = parseFloat(document.getElementById('valor1').value);
    var valor2 = parseFloat(document.getElementById('valor2').value);

    var resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = "<p>" + bemvindo() + "</p>" +
        "<p>A soma de " + valor1 + " e " + valor2 + " é: " + soma(valor1, valor2) + "</p>" +
        "<p>O produto de " + valor1 + " e " + valor2 + " é: " + multiplicacao(valor1, valor2) + "</p>";
}
