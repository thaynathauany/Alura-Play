import { conectaApi } from "./conectaApi.js";
const formulario = document.querySelector("[data-formulario]");

async function criarVideo(evento) {
    evento.preventDefault();

    const imagem = document.querySelector("[data-imagem]").value;
    const url = document.querySelector("[data-url]").value;
    const titulo = document.querySelector("[data-titulo]").value;
    const descricao = Math.floor(Math.random() * 10).toString();

    try {
        await conectaApi.criarVideo(titulo, descricao, url, imagem);
        window.location.href = "../pages/envio-concluido.html";
    } catch (e) {
        alert(e)
    }
}

formulario.addEventListener("submit", evento => criarVideo(evento))

//Math random trás númerações entre 0 e 1 e pra trasnformar em número inteiro multiplicamos por 10 e após isso, transforma o número em string
//Math floor transforma em número inteiroi