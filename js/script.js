// ========== CARROSSEL ==========
document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll(".slide");
  const btnAnterior = document.querySelector(".anterior");
  const btnProximo = document.querySelector(".proximo");
  const indicadores = document.querySelectorAll(".indicador");
  let slideAtual = 0;

  // Função para mostrar o slide atual
  function mostrarSlide(index) {
    // Verifica se o índice é válido
    if (index < 0) {
      slideAtual = slides.length - 1;
    } else if (index >= slides.length) {
      slideAtual = 0;
    } else {
      slideAtual = index;
    }

    // Move o carrossel
    const offset = -slideAtual * 100;
    document.querySelector(".carrossel-slides").style.transform =
      `translateX(${offset}%)`;

    // Atualiza os indicadores
    indicadores.forEach((ind, i) => {
      if (i === slideAtual) {
        ind.classList.add("ativo");
      } else {
        ind.classList.remove("ativo");
      }
    });
  }

  // Próximo slide
  function proximoSlide() {
    mostrarSlide(slideAtual + 1);
  }

  // Slide anterior
  function anteriorSlide() {
    mostrarSlide(slideAtual - 1);
  }

  // Eventos dos botões
  if (btnProximo) {
    btnProximo.addEventListener("click", proximoSlide);
  }

  if (btnAnterior) {
    btnAnterior.addEventListener("click", anteriorSlide);
  }

  // Eventos dos indicadores
  indicadores.forEach((indicador, index) => {
    indicador.addEventListener("click", () => {
      mostrarSlide(index);
    });
  });
});
// ========== MENU HAMBURGUER ==========
document.addEventListener('DOMContentLoaded', function() {
    const menuHamburger = document.getElementById('menu-hamburger');
    const navMenu = document.getElementById('nav-menu');
    
    if (menuHamburger && navMenu) {
        // Abrir/fechar menu ao clicar no hambúrguer
        menuHamburger.addEventListener('click', function() {
            menuHamburger.classList.toggle('ativo');
            navMenu.classList.toggle('ativo');
        });
        
        // Fechar menu ao clicar em um link
        const links = navMenu.querySelectorAll('a');
        links.forEach(link => {
            link.addEventListener('click', function() {
                menuHamburger.classList.remove('ativo');
                navMenu.classList.remove('ativo');
            });
        });
        
        // Fechar menu ao clicar fora (opcional)
        document.addEventListener('click', function(event) {
            if (!navMenu.contains(event.target) && !menuHamburger.contains(event.target)) {
                menuHamburger.classList.remove('ativo');
                navMenu.classList.remove('ativo');
            }
        });
    }
});