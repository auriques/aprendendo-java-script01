/*
verificar a media de um aluno
3 notas
media
se a nota for acima de 7 aprovado, maior que 5 recuperação e se for abaixo reprovado
Exercicio01
*/
let nota1 = 7;
let nota2 = 9;
let nota3 = 4;
let media = ((nota1+nota2+nota3)/3);
console.log(media);
/*
if(media>7){
    console.log('Aprovado')
}else if(media>5){
    console.log('Recuperação')
}else{
    console.log('reprovado')
}
programa resolvido por mim sozinho
*/
if(media>5){
    console.log('reprovado')
}else if(media <=5 && media <=6){
    console.log('Recuperação')
}else{
    console.log('aprovado')
}
//programa resolvido pelo instrutor do dio