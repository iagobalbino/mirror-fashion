var inputTamanho = document.querySelector('[name=tamanho]');
var outputTamanho = document.querySelector('[name=valortamanho]');

function mostraTamanho() {
    outputTamanho = inputTamanho.value;
}

inputTamanho.oninput = mostraTamanho;