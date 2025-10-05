alert("Bem vindo ao jogo do número secreto");
let numeroMaximo = 100;//ditando o numero maximo do intervalo para o sorteo
let numeroSecreto = parseInt( Math.random() *numeroMaximo+1);//usando o método para sortear o numero secreto
console.log(numeroSecreto);

chute = 0;
let contador = 0;

//loop para enquanto jogador não acertar o numero secreto
while(chute != numeroSecreto){
    chute = prompt("Digite um numero entre 1 a "+numeroMaximo+": ");
    if(chute < numeroSecreto){//codições para dar dicas ao jogador
        alert("O número secreto é maior que "+ chute);
    }
    if(chute > numeroSecreto){
        alert("O número secreto é menor que "+chute);
    }
    contador += 1;
}

alert("Parabens, você acertou o número secreto");
alert("Levou "+contador+" vezes até acertar");