function createNames(num) {
    var names = [num];
    for (var i = 0; i < num; i++) {
        names[i] = " bacon"+(i+1);
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
        nome += name+" ";
    }
    return nome;
}

function typeWriter() {
    if (i < txt.length) {
        document.getElementById("demo").innerHTML += txt.charAt(i)+"";
        if (txt.charAt(i+1) === " ") {
            
        }
        i++;
        setTimeout(typeWriter, speed);
    }
}

function click1()
{
    
    var i = 0;
    alert(document.getElementById("batata").value);
}