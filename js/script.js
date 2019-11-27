function fxEtaria(yo){

    if(yo < 15 && yo >= 0)
        return "Criança";
    else
        if(yo < 30)
            return "Jovem";
        else
            if(yo <60)
                return "Adulto";
            else
                if(yo >= 60)
                    return "Idoso";
    else
        return "Idade inválida."
}
var idade =prompt("Digite sua idade");

alert(fxEtaria(idade));