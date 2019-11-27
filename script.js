var nome = prompt("Digite o seu nome: ");
var altu = Number(prompt("Digite sua altura em cm: ")) / 100;
var peso = parseFloat(prompt("Digite seu peso em Kg: "));
var clientImc = imc(altu, peso).toFixed(2);

function imc(a, p) {
    return parseFloat(p / Math.pow(a, 2));
}

function defImc(imc) {
    if (imc < 16)
        return "Peso muito Baixo";
    else if (imc < 17)
        return "Peso baixo - grave";
    else if (imc < 18, 50)
        return "Peso baixo.";
    else if (imc < 25)
        return "Peso normal";
    else if (imc < 30)
        return "Sobrepeso";
    else if (35)
        return "Obesidade grau ¹";
    else if (imc < 40)
        return "Obesidade grau ²";
    else if (imc >= 40)
        return "Obesidade grau ³";
    else
        return "imc inválido";
}

function click1() {
    alert((nome + " possui indíce de massa corporal igual a " + clientImc + ", sendo classificado como " + defImc(imc)));
}