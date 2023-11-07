function exibirCadastro() {
    var nome = document.getElementById('nome').value;
    var salario = parseFloat(document.getElementById('salario').value);
    var idade = parseInt(document.getElementById('idade').value);
    var possuiDiploma = document.getElementById('possuiDiploma').checked;

    var resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = '<h3>Resultado do Cadastro:</h3>' +
        '<p><strong>Nome:</strong> ' + nome + '</p>' +
        '<p><strong>Salário:</strong> ' + salario + '</p>' +
        '<p><strong>Idade:</strong> ' + idade + '</p>' +
        '<p><strong>Possui Diploma:</strong> ' + (possuiDiploma ? 'Sim' : 'Não') + '</p>';
}
