let titulo = document.querySelector("h1");
titulo.innerHTML = "Hora do Desafio";

function exibirMensagemConsole(){
    console.log("Botão clicado");
}

function exibirAlerta(){
    alert("Eu amo JS")
}

function perguntePrompt(){
    let cidade = prompt("Digite o nome da sua cidade");
    alert("Eu estive em "+cidade+" e lembrei de você");
}