const botao = document.getElementById("scroll-up");

botao.style.display = 'none'; // Inicia com o botão escondido

// Função para verificar se o dispositivo é touchscreen
const verificaTouchscreen = () => {
  return ('ontouchstart' in window || navigator.maxTouchPoints > 0);
};

window.addEventListener('scroll', () => {
  const scrollPosicao = window.scrollY;

  if (scrollPosicao > 100) { // Verifique se a página desceu mais de 100px
    botao.style.display = 'block'; // Aparece o botão
  } else {
    botao.style.display = 'none'; // Caso a condição inicial seja falsa, o botão desaparece de novo
  }
});

const acaoBotao = () => {
  // Adiciona event listener baseado se é touchscreen ou não
  if (verificaTouchscreen()) {
    botao.addEventListener('touchstart', () => { // Para dispositivos touchscreen
      window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth"
      });
    });
  } else {
    botao.addEventListener('click', () => { // Para dispositivos não touchscreen
      window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth"
      });
    });
  }
};

// Chama a função acaoBotao uma vez para adicionar o event listener ao botão
acaoBotao();
