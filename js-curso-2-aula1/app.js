
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

exibirMensagemInicial();

function exibirTextoNaTela(tag ,  texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function verificarChute(){
    let chute = document.querySelector('input').value;
    if(numeroSecreto == chute){
        let palavraTentaviva = tentativas > 1?'tentativas':'tentativa';
        let mensagemTentativas = `Você descobriu  o número secreto com ${tentativas} ${palavraTentaviva}`;
        exibirTextoNaTela('h1','Acertou!!');
        exibirTextoNaTela('p',mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        if(chute > numeroSecreto){
            exibirTextoNaTela('p','O número secreto é menor');
        }
        if(chute < numeroSecreto){
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

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    tentativas = 1;
    limparCampo();
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled',true);


}

function exibirMensagemInicial(){
    exibirTextoNaTela('p',"Escolha um número de 1 a 10");
    exibirTextoNaTela('h1',"Numero secreto");
}




