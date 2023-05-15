const botaoAlterarTema = document.getElementById("botao-alterar-tema");
const body = document.querySelector("body");
const imagemBotaoLua = document.querySelector(".imagem-botao");
botaoAlterarTema.addEventListener("click", () => {
    const modoEscuroAtivo = body.classList.contains("modo-escuro");

    if (modoEscuroAtivo) {
        body.classList.remove("modo-escuro")
        imagemBotaoLua.setAttribute("src", "./src/image/sun.png");
    }
    else {
        body.classList.add("modo-escuro");
        imagemBotaoLua.setAttribute("src", "./src/image/moon.png");
    }
})

