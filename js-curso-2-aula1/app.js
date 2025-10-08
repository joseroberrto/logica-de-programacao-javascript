
let numeroAleatorio = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag ,  texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function verificarChute(){
    let chute = document.querySelector('input').value;
    if(numeroAleatorio == chute){
        let palavraTentaviva = tentativas > 1?'tentativas':'tentativa';
        let mensagemTentativas = `Você descobriu  o número secreto com ${tentativas} ${palavraTentaviva}`;
        exibirTextoNaTela('h1','Acertou!!');
        exibirTextoNaTela('p',mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        if(chute > numeroAleatorio){
            exibirTextoNaTela('p','O número secreto é menor');
        }
        if(chute < numeroAleatorio){
            exibirTextoNaTela('p','O número secreto é maior');
        }
        tentativas++;
        limparCampo();
    }

}

function gerarNumeroAleatorio(){
    return parseInt(Math.random()*10+1);
}

function limparCampo() {
    let chute = document.querySelector('input');
    chute.value = '';
    
}

exibirTextoNaTela('p',"Escolha um número de 1 a 10");
exibirTextoNaTela('h1',"Numero secreto");


