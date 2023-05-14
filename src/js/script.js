
// 1. Colocando o elemento botão dentro de uma variável
const botaoAlterarTema = document.getElementById("botao-alterar-tema");

// 2. Colocar o elemento body em uma variável
const body = document.querySelector("body");
const imagemTrocaImg = document.querySelector(".imagem_botao");

// 3. Identificar o clique do usuário no botão
botaoAlterarTema.addEventListener('click', () => {

    // 6. Caso já esteja no modo escuro, ele reverta essas mudanças
    const modoEscudoAtivo = body.classList.contains("modo_escuro");

    // 4. Adicionar a classe Modo Escuro no body
    body.classList.toggle("modo_escuro");

    if (modoEscudoAtivo) {
        imagemTrocaImg.setAttribute("src", "imagens/sun.png");
    }
    else {
        // 5. Alterar imagem pra lua
        imagemTrocaImg.setAttribute("src", "imagens/moon.png");
    }
});
