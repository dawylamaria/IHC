function adicao(a,b){
    return a + b;
}

function subtracao(a, b){
    return a - b;
}

function multiplicacao(a,b){
    return a * b;
}

function divisao(a, b){
    if (b === 0){
        return("Divisão por zero não existe!");
    }
    return a / b;
}

function numeroPar(a){
    if(a % 2 === 0){
        return "Número par!";
    } else {
        return "Número ímpar!";
    }
}

function somarIntervalo(a, b) {
    let soma = 0;
    for (let i = a; i <= b; i++) {
      soma += i;
    }
    return soma;
}

function fatorial(a) {
    let resultado = 1;
    for (let i = 1; i <= a; i++) {
      resultado *= i;
    }
    return resultado;
}

function contarVogais(palavra) {
    let contador = 0;
    const vogais = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

    for (let i = 0; i < palavra.length; i++) {
        if (vogais.includes(palavra[i])) {  
            contador++;
        }
    }

    return contador;
}

function calcular(operacao, a, b) {
    let resultado;
    switch (operacao) {
        case 'adicao':
            resultado = adicao(a, b);
            break;
        case 'subtracao':
            resultado = subtracao(a, b);
            break;
        case 'multiplicacao':
            resultado = multiplicacao(a, b);
            break;
        case 'divisao':
            resultado = divisao(a, b);
            break;
        case 'numeroPar':
            resultado = numeroPar(a);
            break;
        case 'somarIntervalo':
            resultado = somarIntervalo(a, b);
            break;  
        case 'fatorial':
            resultado = fatorial(a);  
            break;
        case 'contarVogais':
            resultado = contarVogais(a);  
            break;
        default:
            console.log("Operação não reconhecida");
            return;
    }
    console.log("Resultado:", resultado);
}


calcular('adicao', 5, 3);          
calcular('subtracao', 5, 3);       
calcular('multiplicacao', 5, 3);   
calcular('divisao', 5, 3);         
calcular('divisao', 5, 0);         
calcular('numeroPar', 4);          
calcular('somarIntervalo', 1, 5);  
calcular('fatorial', 5);           
calcular('contarVogais', "javaScript"); 