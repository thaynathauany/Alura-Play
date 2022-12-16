import { conectaApi } from "./conectaAPI.js";

const lista = document.querySelector("[data-lista");

export function constroiCard(titulo, descricao, url, imagem) {
    const video = document.createElement("li");
    video.className = "videos__item";
    video.innerHTML = `
    <iframe width="100%" height="72%" src="${url}"
    title="${titulo}" frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen></iframe>
<div class="descricao-video">
    <img src="${imagem}" alt="logo canal alura">
    <h3>${titulo}</h3>
    <p>${descricao}</p>
</div>
    `
    return video
}

async function listaVideos() {
    try {

    const listaAPI = await conectaApi.listaVideos();
    listaAPI.forEach(elemento => lista.appendChild(constroiCard(elemento.titulo, elemento.descricao, elemento.url, elemento.imagem)))
    }catch {
        lista.innerHTML= `<h2 class=mensagem__titulo>Ops! Houve algum problema e não foi possível carregar a lista de vídeos :( <br> Recarregue a página e tente novamente!</h2>`
    }
}

listaVideos()

//para cada item da lista da nossa API, um item da lista do index.html deve ser criado.