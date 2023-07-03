document.getElementById("formula-search").addEventListener("keyup", searchFormula);

function showHiddenButtons() {
    document.getElementById("hidden-buttons").style.display = "block";
}

function hideHiddenButtons() {
    document.getElementById("hidden-buttons").style.display = "none";
}

document.addEventListener('keydown', function (event) {
    const display = document.getElementById("display");
    const key = event.key;
    if (/[0-9]/.test(key)) {
        appendToDisplay(key);
    } else if (/[\+\-\*\/]/.test(key)) {
        appendToDisplay(' ' + key + ' ');
    } else if (key === 'Enter') {
        calculateResult();
    } else if (key === 'Backspace') {
        clearLastCharacter();
    }
});

const formulaSearch = document.getElementById("formula-search");
if (formulaSearch) {
    formulaSearch.addEventListener("keyup", event => {
        if (event.keyCode === 13) searchFormula();
    });
}

function searchFormula() {
    const input = document.getElementById("formula-search").value.toLowerCase();
    const matchingFormulas = formulas.filter(formula => formula.name.toLowerCase().includes(input));

    const formulaList = document.getElementById("formula-list");
    formulaList.innerHTML = matchingFormulas.length > 0 ?
        matchingFormulas.map(formula => `<li>${formula.name}</li>`).join('') :
        "<li>Nenhuma fórmula encontrada</li>";

    formulaList.querySelectorAll("li").forEach((item, index) => {
        item.addEventListener("click", () => displayFormula(matchingFormulas[index].formula));
    });
}

function displayFormula(formula) {
    document.getElementById("display").value = formula;
}

function appendToDisplay(value) {
    document.getElementById("display").value += value;
}

function clearDisplay() {
    document.getElementById("display").value = "";
}

function clearLastCharacter() {
    var display = document.getElementById("display");
    display.value = display.value.slice(0, -1);
}

function calculateResult() {
    try {
        const display = document.getElementById("display");
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Erro";
    }
}

function calculateFactorial() {
    const display = document.getElementById("display");
    const number = parseFloat(display.value);
    const factorial = number >= 0 && Number.isInteger(number) ?
        [...Array(number).keys()].reduce((acc, val) => acc * (val + 1), 1) :
        "Erro";
    display.value = factorial;
}

function calculateSquareRoot() {
    const display = document.getElementById("display");
    const number = parseFloat(display.value);
    display.value = number >= 0 ? Math.sqrt(number) : "Erro";
}

function calculatePower() {
    const display = document.getElementById("display");
    const number = parseFloat(display.value);
    display.value = Math.pow(number, 2);
}