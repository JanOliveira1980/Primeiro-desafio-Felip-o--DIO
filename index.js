const prompt = require("prompt-sync")();

while (true) {
    let user = prompt("Digite seu Nick name:  ");
    let xpLevel = parseInt(prompt("Digite seu nível XP: "));

    if (xpLevel <= 1000) {
        console.log(user + " Seu nível é:  Ferro");
    } else if (xpLevel >= 1001 && xpLevel <= 2000){
        console.log(user + " Seu nível é: Bronze");

    }else if (xpLevel >= 2001 && xpLevel <= 5000){
        console.log(user + " Seu nível é: Prata");

    }else if (xpLevel >= 6001 && xpLevel <= 7000){
        console.log(user + " Seu nível é: Ouro");

    }else if (xpLevel >= 7001 && xpLevel <= 8000){
        console.log(user + " Seu nível é: Platina");

    }else if (xpLevel >= 8001 && xpLevel <= 9000){
        console.log(user + " Seu nível é: Ascendente");

    }else if (xpLevel >= 9001 && xpLevel <= 10000){
        console.log(user + " Seu nível é: Imortal");

    }else if (xpLevel >= 10001){
        console.log(user + " Seu nível é: Radiante");

    } else {
        console.log("Nível não especificado para " + user);
        break;
    }
}
