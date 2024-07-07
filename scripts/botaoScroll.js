const botao = document.getElementById("scroll-up");

botao.style.display = 'none'; // Inicia com o botão escondido

window.addEventListener('scroll', () => { // Quando ocorrer o evento do scroll, aqui funciona
    const scrollPosicao = window.scrollY;

    if (scrollPosicao > 100) { // Verifique se a página desceu mais de 100px
        botao.style.display = 'block'; // Aparece o botão
    } else {
        botao.style.display = 'none'; // Caso a condição inicial seja falsa, o botão desaparece de novo
    }
});

const acaoBotao = () => { // Função com a ação do botão
    botao.addEventListener('click', () => { // Ao clicar nele, o scroll é manipulado para cima
        window.scroll({
            top: 0,
            left: 0,
            behavior: "smooth"
        });
    });
};

// Chama a função acaoBotao uma vez para adicionar o event listener ao botão
acaoBotao();
