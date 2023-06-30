// Função para pesquisar e exibir sugestões de fórmulas
$(document).ready(function () {
    var suggestions = [];

    // Acessar as fórmulas de matemática
    const formulasMatematica = formulas.matematica;
    suggestions = suggestions.concat(formulasMatematica);

    // Acessar as fórmulas de física
    const formulasFisica = formulas.fisica;
    suggestions = suggestions.concat(formulasFisica);

    // Acessar as fórmulas de química
    const formulasQuimica = formulas.quimica;
    suggestions = suggestions.concat(formulasQuimica);

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

// Função para adicionar o texto ao campo de exibição
function appendToDisplay(value) {
    var display = document.getElementById('display');
    display.value += value;
}

// Função para calcular o resultado da expressão inserida no campo de exibição
function calculateResult() {
    var display = document.getElementById('display');
    var expression = display.value;

    try {
        var result = eval(expression);
        display.value = result;
    } catch (error) {
        display.value = 'Erro';
    }
}
