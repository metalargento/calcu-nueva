const operacion1Input = document.getElementById('operacion1');
const operacion2Input = document.getElementById('operacion2');
const resultSpan = document.getElementById('resultado')

document.getElementById('suma').addEventListener('click', () => {
    const operacion1 = parseFloat(operacion1Input.value);
    const operacion2 = parseFloat(operacion2Input.value);
    const resultado = operacion1 + operacion2;
    resultSpan.textContent = resultado;
});

document.getElementById('resta').addEventListener('click', () => {
    const operacion1 = parseFloat(operacion1Input.value);
    const operacion2 = parseFloat(operacion2Input.value);
    const resultado = operacion1 - operacion2;
    resultSpan.textContent = resultado;
});

document.getElementById('multiplicacion').addEventListener('click', () => {
    const operacion1 = parseFloat(operacion1Input.value);
    const operacion2 = parseFloat(operacion2Input.value);
    const resultado = operacion1 * operacion2;
    resultSpan.textContent = resultado;
});

document.getElementById('division').addEventListener('click', () => {
    const operacion1 = parseFloat(operacion1Input.value);
    const operacion2 = parseFloat(operacion2Input.value);
    const resultado = operacion1 / operacion2;
    resultSpan.textContent = resultado;
});