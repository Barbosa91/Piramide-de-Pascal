const lerLinha = require('readline-sync');
//var lerLinha = require('readline-sync');

console.log("Digite o numero de linhas para a Pirâmide de Pascal: ");
const linhas = parseInt(lerLinha.prompt());

//var linhas = lerLinha.question("Digite o numero de linhas para a Pirâmide de Pascal: ");

for(let i = 0; i < linhas; i++){
    let numero = 1;

    for (let j = 0; j <= i; j++){
        process.stdout.write(numero + " ");
        numero = Math.floor(numero * (i - j) / (j + 1));
    }
    console.log();
}
