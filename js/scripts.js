function imprimirNoConsole() {
    console.log("Olá mundo!!!");
}

imprimirNoConsole();

function imprimirUmNumero(num) {
    console.log("O número é " + num);
}

imprimirUmNumero(2);
imprimirUmNumero(4);
imprimirUmNumero(6);
imprimirUmNumero(8);

const numeroAleatorio = function () {
    console.log(Math.random());
}


numeroAleatorio();
numeroAleatorio();

const soma = function (a, b) {
    return (a + b);
}

console.log(soma(2, 3));

const saudacao = function (nome) {
    if (nome == "José") {
        return "Olá José";
    }
}

console.log(saudacao("José"));


function multiplicarNumeros(x, y, z) {
    return (x * y * z);
}

console.log(multiplicarNumeros(2, 3, 4));

const mult = multiplicarNumeros(4, 5, 6);

console.log("O valor de mult é " + mult);

function podeDirigir(idade, cnh){
    if(idade >= 18 && cnh == true){
        console.log("Pode dirigir");
    }else{  
        console.log("Não pode dirigir");
    }
}

podeDirigir(19, true);
podeDirigir(26, true);
podeDirigir(44, 0);
podeDirigir(19, 1);
podeDirigir(17, false);

let n = 10;

const numero = function(){
    let n = 25;
    console.log(n);
}

numero();

console.log(n);