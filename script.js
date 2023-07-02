document.addEventListener('DOMContentLoaded', function () {
    function showHiddenButtons() {
        var hiddenButtons = document.getElementById("hidden-buttons");
        hiddenButtons.style.display = "block";
    }

    function searchFormula() {
        var input = document.getElementById("formula-search").value.toLowerCase();
        var matchingFormulas = formulas.filter(function (formula) {
            return formula.name.toLowerCase().includes(input);
        });

        var formulaList = document.getElementById("formula-list");
        formulaList.innerHTML = "";

        if (matchingFormulas.length > 0) {
            matchingFormulas.forEach(function (formula) {
                var listItem = document.createElement("li");
                listItem.textContent = formula.name;
                listItem.addEventListener("click", function () {
                    displayFormula(formula.formula);
                });
                formulaList.appendChild(listItem);
            });
        } else {
            formulaList.innerHTML = "<li>Nenhuma fórmula encontrada</li>";
        }
    }

    function displayFormula(formula) {
        var display = document.getElementById("display");
        display.value = formula;
    }

    function appendToDisplay(value) {
        var display = document.getElementById("display");
        display.value += value;
    }

    function clearDisplay() {
        var display = document.getElementById("display");
        display.value = "";
    }

    function clearLastCharacter() {
        var display = document.getElementById("display");
        display.value = display.value.slice(0, -1);
    }

    function calculateResult() {
        var display = document.getElementById("display");
        var result;
        try {
            result = eval(display.value);
            display.value = result;
        } catch (error) {
            display.value = "Erro";
        }
    }

    function calculateFactorial() {
        var display = document.getElementById("display");
        var number = parseFloat(display.value);
        if (number >= 0 && Number.isInteger(number)) {
            var factorial = 1;
            for (var i = 2; i <= number; i++) {
                factorial *= i;
            }
            display.value = factorial;
        } else {
            display.value = "Erro";
        }
    }

    function calculateSquareRoot() {
        var display = document.getElementById("display");
        var number = parseFloat(display.value);
        if (number >= 0) {
            var squareRoot = Math.sqrt(number);
            display.value = squareRoot;
        } else {
            display.value = "Erro";
        }
    }

    function calculatePower() {
        var display = document.getElementById("display");
        var number = parseFloat(display.value);
        var power = Math.pow(number, 2);
        display.value = power;
    }

    // Eventos dos botões
    document.getElementById("formula-search").addEventListener("keyup", function (event) {
        if (event.keyCode === 13) {
            searchFormula();
        }
    });

    // Defina suas fórmulas aqui
    var formulas = [];

    // Expondo funções relevantes globalmente (opcional)
    window.appendToDisplay = appendToDisplay;
    window.clearLastCharacter = clearLastCharacter;
    window.calculateResult = calculateResult;
    window.calculateFactorial = calculateFactorial;
    window.calculateSquareRoot = calculateSquareRoot;
    window.calculatePower = calculatePower;
});
