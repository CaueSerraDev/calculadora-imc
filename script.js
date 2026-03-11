function calcularIMC() {

let peso = document.getElementById("peso").value;
let altura = document.getElementById("altura").value;

let imc = peso / (altura * altura);

document.getElementById("resultado").innerHTML = "Seu IMC é: " + imc.toFixed(2);

let classificacao = "";

if (imc < 18.5) {
    classificacao = "Abaixo do peso";
}
else if (imc >= 18.5 && imc <= 24.9) {
    classificacao = "Peso ideal (parabéns)";
}
else if (imc >= 25 && imc <= 29.9) {
    classificacao = "Levemente acima do peso";
}
else if (imc >= 30 && imc <= 34.9) {
    classificacao = "Obesidade grau I";
}
else if (imc >= 35 && imc <= 39.9) {
    classificacao = "Obesidade grau II (severa)";
}
else {
    classificacao = "Obesidade grau III (mórbida)";
}

document.getElementById("classificacao").innerHTML = "Classificação: " + classificacao;

}