// Seleção dos elementos do DOM
const detectButton = document.getElementById('detect');
const inputNumber = document.getElementById('number');
const resultP = document.getElementById('result');

/**
 * Atualiza o texto e a classe do parágrafo de resultado
 * @param {string} text - Texto a ser exibido
 * @param {string} cls - Classe CSS para estilização (positive, negative, zero, error)
 */
function setResult(text, cls) {
    resultP.textContent = text;

    resultP.className = cls || '';
}

/**

 * @param {string} value 
 * @returns {number|null}
 */
function validateNumber(value) {
    const trimmed = value.trim();
    
    if (trimmed === '') {
        setResult('Por favor, digite um número.', 'error');
        return null;
    }

    const normalized = trimmed.replace(',', '.');
    const num = Number(normalized);

    if (Number.isNaN(num)) {
        setResult('Valor inválido. Digite um número válido.', 'error');
        return null;
    }

    return num;
}

function checkNumber(num) {
    if (num > 0) {
        setResult(`O número ${num} é positivo `, 'positive');
    } else if (num < 0) {
        setResult(`O número ${num} é negativo `, 'negative');
    } else {
        setResult(`O número é nulo (zero) `, 'zero');
    }
}


function detectNumber() {
    const num = validateNumber(inputNumber.value);
    if (num !== null) {
        checkNumber(num);
    }
}


detectButton.addEventListener('click', detectNumber);

setResult('---', '');
