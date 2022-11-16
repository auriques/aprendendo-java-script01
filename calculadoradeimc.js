/*
Math.pow(altura,2); colocar potenciação
*/

let altura = 1.83;
let peso = 100;
let imc = peso/(altura*altura);
console.log(imc.toFixed(2));

if(imc>40){
    console.log('Obesidade Grave')
}else if(imc>30){
    console.log('Obesidade')
}else if(imc>25){
    console.log('Acima do Peso')
}else if(imc>18.5){
    console.log('Peso Normal')
}else {
    console.log('Abaixo do Peso')
}