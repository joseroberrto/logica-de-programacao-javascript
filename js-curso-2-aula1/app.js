let listaNumerosSorteados =[];
let quantidadeLimiteDeNumeros = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

exibirMensagemInicial();

function exibirTextoNaTela(tag ,  texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    if ('speechSynthesis' in window) {
        let utterance = new SpeechSynthesisUtterance(texto);
        utterance.lang = 'pt-BR'; 
        utterance.rate = 1.4; 
        window.speechSynthesis.speak(utterance); 
    } else {
        console.log("Web Speech API não suportada neste navegador.");
    }
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
    let numeroEscolido = parseInt(Math.random()*quantidadeLimiteDeNumeros+1);
    let quantidadeElementosNaLista = listaNumerosSorteados.length;

    if(quantidadeElementosNaLista == quantidadeLimiteDeNumeros){
        listaNumerosSorteados = [];
    }
    if(listaNumerosSorteados.includes(numeroEscolido)){
       return gerarNumeroAleatorio();
    }else{
        listaNumerosSorteados.push(numeroEscolido);
        console.log(listaNumerosSorteados);
        return numeroEscolido;
    }
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
    
    exibirTextoNaTela('p',`Escolha um número de 1 a ${quantidadeLimiteDeNumeros}`);
    exibirTextoNaTela('h1','Jogo do Número Secreto');
}




