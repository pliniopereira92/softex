function realizarCalculo() {
    var numero1 = parseFloat(document.getElementById('numero1').value);
    var numero2 = parseFloat(document.getElementById('numero2').value);
    var resultadoDiv = document.getElementById('resultado');

    try {
        if (isNaN(numero1) || isNaN(numero2)) {
            throw "Um dos valores não é um número válido.";
        }
        var resultado = numero1 / numero2;
        if (!isFinite(resultado)) {
            throw "O resultado não é um número finito.";
        }
        resultadoDiv.innerHTML = "<p>O resultado da divisão é: " + resultado + "</p>";
    } catch (error) {
        resultadoDiv.innerHTML = "<p>Ocorreu um erro: " + error + "</p>";
    } finally {
        console.log("Operação concluída.");
    }
}