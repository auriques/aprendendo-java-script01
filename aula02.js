/*Estruturas condicionais
aprendi na aula anterior
let - variaveis que podem mudar
const - variaveis que nao podem mudar.
% resto de uma divisão
=== para fazer comparação entre mesmo genero
If(se for true ele responde o Se, caso contrario sistema segue){

}
else if(se for true ele responde o Se, caso contrario sistema segue){
    testa novamente se responde a nova condicional 
    pode utilizar quandas vezes quiser
}
else{
    Seria o Senão
}
exemplo 01
let numero = 11;
let numeropar = (numero % 2) ===0;
if(numeropar){
    console.log("Par");
}
if(!numeropar){
    console.log("Impar");
}
console.log(numeropar)
let numero2 = 10;
let numeroimpar = (numero2 % 2) ===0;

if(numeroimpar){
    console.log("Par");
}
if(!numeroimpar){
    console.log("Impar");
}

if(numeroimpar){
    console.log("par");
}else{
    console.log("impar")
}
console.log(numeroimpar)
*/
gasolina = 6.66;
etanol = 5.79;
tipodocombustivel = 'Etanol';
mediadocarro = 10;
distancia = 100;


if(tipodocombustivel === 'Etano'){
    const valorgasto = ((distancia/mediadocarro)*etanol)
    console.log(valorgasto.toFixed(2))
}else{
    const valorgasto = ((distancia/mediadocarro)*gasolina)
    console.log(valorgasto.toFixed(2))
}