import { conectaApi } from "./conectaApi.js";
import { constroiCard } from "./mostrarVideos.js";

async function buscarVideo(evento) {
    evento.preventDefault();
    const dadosDePesquisa = document.querySelector("[data-pesquisa]").value
    const busca = await conectaApi.buscaVideo(dadosDePesquisa);
    //console.log(busca);

    const lista = document.querySelector("[data-lista]");

    while(lista.firstChild){
        lista.removeChild(lista.firstChild)
    }
    //Enquanto aquela lista ter um primeiro filho, quer dizer que tem coisa lá dentro. Então eu removo o primeiro filho da lista e ele fica nesse looping até apagar todos os filhos que a lista tem e após isso, eu construo a lista com item que eu quero pesquisar

    busca.forEach(elemento => lista.appendChild
        (constroiCard(elemento.titulo, elemento.descricao, elemento.url, elemento.imagem)))
    
    if (busca.length == 0) {
        lista.innerHTML = `
        <h2 class="mensagem__titulo">Não exixtem vídeos com esse termo! <br> Verifique se está tudo correto, e tente novamente :) </h2>"
        `
    }
}


const botaoDePesquisa = document.querySelector("[data-botao-pesquisa]");

botaoDePesquisa.addEventListener('click', evento => buscarVideo(evento))

//selecina o data-pesquisa e envia ele para o busca Video. Faz uma busca dinâmica. Envia o valor e depois substitui na URL pra retornar só o item que queremos

//seleciona o botao e o escutador. Quando clicar envia o evento para o buscar video