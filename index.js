//Script do compotamento dos links internos

const menuItens = document.querySelectorAll(".links-container a");

menuItens.forEach((item) => {
  item.addEventListener("click", scrollToIdOnClick);
});

function scrollToIdOnClick(event) {
  event.preventDefault();

  const to = getScrollTopByHref(event.target) - 90;

  scrolToPosition(to);
}

function scrolToPosition(to) {
  window.scroll({
    top: to,
    behavior: "smooth",
  });
}

function getScrollTopByHref(element) {
  const id = element.getAttribute("href");
  return document.querySelector(id).offsetTop;
}

//Fim Script de comportamento dos links internos

//Script para comportamento do link do logo

const logoItens = document.querySelectorAll(".logo a");

logoItens.forEach((item) => {
  item.addEventListener("click", scrollToIdOnClick);
});

function scrollToIdOnClickLogo(event) {
  event.preventDefault();

  const to = getScrollTopByHrefLogo(event.target) - 75;

  scrolToLogoPosition(to);
}

function scrolToLogoPosition(to) {
  window.scroll({
    top: to,
    behavior: "smooth",
  });
}

//Fim no script para comportamento do link do logo

//Script para link ativo

const links = document.querySelectorAll(".links-container a");

links.forEach((link) => {
  link.addEventListener("click", function () {
    links.forEach((l) => l.classList.remove("active")); // Remove 'active' de todos os links
    this.classList.add("active"); // Adiciona 'active' ao link clicado
  });
});

//Script para link ativo Fim

//Script efeito máquina de escrever título

function typeWriter(elemento) {
  const textArray = elemento.innerHTML.split(''); // Divide o texto em um array de caracteres
  elemento.innerHTML = ''; // Limpa o conteúdo da tag para começar a digitar

  // Função para escrever o texto
  textArray.forEach((letra, i) => {
    setTimeout(() => {
      elemento.innerHTML += letra; // Adiciona a letra uma por uma
    }, 100 * i); // Define o intervalo de tempo entre as letras
  });

  // Quando a escrita terminar, chamamos a função novamente
  setTimeout(() => {
    typeWriter(elemento); // Reinicia o efeito de digitação
  }, 200 * textArray.length); // Espera o tempo necessário para terminar de digitar
}

const title = document.querySelector('.hero-container h1');
typeWriter(title); // Inicializa o efeito de digitação

