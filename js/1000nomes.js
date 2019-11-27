/* function createNames(num) {
    var names = [num];
    for (var i = 0; i < num; i++) {
        names[i] = " Olá!" + (i + 1);
    }
    return names;
}

function writeNames(names) {
    for (var name of names) {
        document.write(name);
    }
}

function names2txt(names) {
    var nome = "";
    for (var name of names) {
        nome += name + " ";
    }
    return nome;
}

function typeWriter() {
    if (i < txt.length) {
        document.getElementById("demo").innerHTML += txt.charAt(i) + "";
        if (txt.charAt(i + 1) === " ") {}
        i++;
        setTimeout(typeWriter, speed);
    }
}

function click1() {
    var i = 0;
    alert(document.getElementById("batata").value);
}

function menor3(a, b, c) {
    if (a < b) {
        if (a < c) {
            return a;
        } else {
            return c;
        }
    } else {
        return b;
    }
}

function concatena(...args){
    var r = "";
        args.forEach(str => {
            r += str+" ";
        });
    return r;
}

console.log(concatena(1,4,5,4));
 */
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