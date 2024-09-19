const inputNum1 = document.getElementById("inputNum1");
const inputNum2 = document.getElementById("inputNum2");
const selectOperacao = document.getElementById("selectOperacao");
const btnCalcular = document.getElementById("btnCalcular");
const resultadoDiv = document.getElementById("resultado");

btnCalcular.addEventListener("click", () => {
    const num1 = parseFloat(inputNum1.value);
    const num2 = parseFloat(inputNum2.value);
    const operacao = selectOperacao.value;
    let resultado;

    if (isNaN(num1) || isNaN(num2)) {
        resultadoDiv.textContent = "RESULTADO: Digite números válidos!";
        return;
    }

    if (operacao === "soma") {
        resultado = num1 + num2;
    } else if (operacao === "subtracao") {
        resultado = num1 - num2;
    } else if (operacao === "divisao") {
        if (num2 === 0) {
            resultadoDiv.textContent = "RESULTADO: Não pode dividir por zero!";
            return;
        }
        resultado = num1 / num2;
    } else if (operacao === "multiplicacao") {
        resultado = num1 * num2;
    }

    resultadoDiv.textContent = `RESULTADO: ${resultado}`;
});
