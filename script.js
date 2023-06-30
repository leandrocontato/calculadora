// Função para adicionar o texto do botão no campo de entrada
function appendToInput(text) {
    var inputField = document.getElementById('inputField');
    inputField.value += text;
}

// Função para calcular o resultado da expressão matemática inserida
function calculate() {
    var inputField = document.getElementById('inputField');
    var expression = inputField.value;
    var result = eval(expression); // Função eval() avalia a expressão como JavaScript

    inputField.value = result;
}

// Função para pesquisar e exibir sugestões de fórmulas
$(document).ready(function () {
    var suggestions = [
        'Fórmula 1',
        'Fórmula 2',
        'Fórmula 3'
    ];

    $('#searchBar').on('input', function () {
        var searchTerm = $(this).val();
        var matchingSuggestions = suggestions.filter(function (suggestion) {
            return suggestion.toLowerCase().includes(searchTerm.toLowerCase());
        });

        var suggestionsContainer = $('#suggestions');
        suggestionsContainer.empty();

        matchingSuggestions.forEach(function (suggestion) {
            var suggestionItem = $('<div>').addClass('suggestion').text(suggestion);
            suggestionsContainer.append(suggestionItem);
        });
    });
});
const formulas = require('./formulas.js');

// Acessar as fórmulas de matemática
const formulasMatematica = formulas.matematica;

// Acessar as fórmulas de física
const formulasFisica = formulas.fisica;

// Acessar as fórmulas de química
const formulasQuimica = formulas.quimica;

// Usar as fórmulas conforme necessário
console.log(formulasMatematica[0]); // Fórmula da velocidade média: v = Δx/Δt
console.log(formulasFisica[1]); // Fórmula da aceleração média: a = Δv/Δt
console.log(formulasQuimica[2]); // Fórmula da concentração molar: C = n/V


function appendToDisplay(value) {
    var display = document.getElementById('display');
    display.value += value;
}

function calculate() {
    var display = document.getElementById('display');
    var expression = display.value;

    try {
        var result = eval(expression);
        display.value = result;
    } catch (error) {
        display.value = 'Erro';
    }
}
