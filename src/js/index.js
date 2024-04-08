/*

OBJETIVO 1 - quando o usuário clicar no botão de ver trailer, devemos abrir o modal com ovídeo do trailer
    - passo 1 - dar um jeito de pegar o elemento que representa o botão na tela usando js
    - passo 2- dar um jeito de identificar quando o usuário clicar no botão
    - passo 3 - dar um jeito de pegar o elemento da modal no js
    - passo 4 - abrir a modal na tela

OBJETIVO 2 - quando o usuário clicar no X devemos fechar a modal
    - passo 1 - dar um jeito de pegar o elemento de fechar a modal usando js
    - passo 2- dar um jeito de identificar quando o usuário clicar no botão X
    - passo 3 - fechar a modal na tela

*/



//  passo 1 - dar um jeito de pegar o elemento que representa o botão na tela usando js

const botaoTrailer = document.querySelector(".botao");


// passo 3 - dar um jeito de pegar o elemento da modal no js

const modal = document.querySelector(".modal");

function alternarModal (){
    modal.classList.toggle("aberto");
    // se o modal estiver aberto ele fecha e se estiver fechado ele abre
}


// passo 2- dar um jeito de identificar quando o usuário clicar no botão

botaoTrailer.addEventListener("click", () => {
    // passo 4 - abrir a modal na tela

    alternarModal();

video.setAttribute("src", linkVideo)
// para voltar com o src

    
})



// passo 1 - dar um jeito de pegar o elemento de fechar a modal usando js

const botaoFecharModal = document.querySelector(".fechar-modal");

// passo 2- dar um jeito de identificar quando o usuário clicar no botão X

botaoFecharModal.addEventListener("click", () => {
    // passo 3 - fechar a modal na tela
    alternarModal();
    video.setAttribute("src", "");
    // para o video não ficar rodando
});


const video = document.getElementById("video");
const linkVideo = video.src;













print(1 + 2)
print(5 * 10)