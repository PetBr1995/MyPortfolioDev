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


//Animação ao scroll 

// Função para verificar se elemento está visível na viewport
function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Função para adicionar classe de animação quando elemento estiver visível
function handleScrollAnimation() {
  const elements = document.querySelectorAll('.scroll-reveal');
  
  elements.forEach(element => {
    if (isElementInViewport(element)) {
      element.classList.add('reveal-active');
    }
  });
}

// Adicionar listener para scroll
window.addEventListener('scroll', handleScrollAnimation);
window.addEventListener('load', handleScrollAnimation);

// Adicionar classes aos elementos que queremos animar
document.addEventListener('DOMContentLoaded', function() {
  // About section
  document.querySelector('#about').classList.add('scroll-reveal', 'reveal-from-left');
  
  // Project cards
  document.querySelectorAll('.cards').forEach(card => {
    card.classList.add('scroll-reveal', 'reveal-from-bottom');
  });
  
  // Skills cards
  document.querySelectorAll('.cardSkills').forEach(skill => {
    skill.classList.add('scroll-reveal', 'reveal-from-right');
  });
  
  // Footer sections
  document.querySelectorAll('.footer-section').forEach(section => {
    section.classList.add('scroll-reveal', 'reveal-fade-in');
  });
  
  // Project description
  document.querySelector('.projets-desc').classList.add('scroll-reveal', 'reveal-from-top');
});


// Mobile menu functionality
const mobileMenuBtn = document.createElement('div');
mobileMenuBtn.className = 'mobile-menu-btn';
mobileMenuBtn.innerHTML = `
  <div></div>
  <div></div>
  <div></div>
`;

const nav = document.querySelector('.nav-container');
nav.insertBefore(mobileMenuBtn, nav.firstChild);

const linksContainer = document.querySelector('.links-container');

mobileMenuBtn.addEventListener('click', () => {
  linksContainer.classList.toggle('active');
  document.body.style.overflow = linksContainer.classList.contains('active') ? 'hidden' : '';
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
  if (!linksContainer.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
    linksContainer.classList.remove('active');
    document.body.style.overflow = '';
  }
});

// Animation on scroll
const fadeElems = document.querySelectorAll('.cards, .cardSkills, .about-desc p');

const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

fadeElems.forEach(elem => {
  elem.classList.add('fade-in');
  observer.observe(elem);
});