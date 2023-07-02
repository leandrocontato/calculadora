$(document).ready(function () {
    var suggestions = [];
    suggestions = suggestions.concat(formulasMatematica);
    suggestions = suggestions.concat(formulasFisica);
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

    function appendToInput(text) {
        var inputField = document.getElementById('inputField');
        inputField.value += text;
    }

    function calculate() {
        var display = document.getElementById('display');
        var expression = display.value;
        var result = eval(expression);
        display.value = result;
        inputField.value = result;
    }
});