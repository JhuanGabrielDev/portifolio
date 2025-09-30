// Seleciona os elementos
const hamburguer = document.querySelector(".hamburguer");
const menuOne = document.querySelector(".menuOne");

// Evento de clique
hamburguer.addEventListener("click", () => {
  hamburguer.classList.toggle("active");
  menuOne.classList.toggle("active");
});

// Fechar o menu quando clicar em um link
document.querySelectorAll(".menuOne .linkMenuMobile").forEach(link =>
  link.addEventListener("click", () => {
    hamburguer.classList.remove("active");
    menuOne.classList.remove("active");
  })
);
