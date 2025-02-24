// Carousel
const carousel = document.querySelector(".carousel-container");
const images = document.querySelectorAll(".carousel img");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

// Menu toggle
const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

// Reviews
const reviews = document.querySelectorAll(".review");

// Chat button
const chatButton = document.getElementById("chat-button");

// Hero section background
const heroSection = document.getElementById("hero");
const backgrounds = [
  "images/logoM.png",
  "images/l1.jpg",
  "images/l2.jpg",
  "images/l3.jpg",
  "images/l4.jpeg",
  "images/p9.jpg",
  "images/p10.jpg",
  "images/download.jpeg",
];

let currentBackground = 0;
let index = 0;
let currentReview = 0;

// Funzione generica per aggiungere eventi
function addEventListeners(elements, event, callback) {
  elements.forEach((el) => el.addEventListener(event, callback));
}

// Funzione per aggiornare il carosello
function updateCarousel() {
  if (carousel) {
    carousel.style.transform = `translateX(-${index * 100}%)`;
  }
}

// Eventi per il carosello
[prev, next].forEach((button, i) => {
  if (button) {
    button.addEventListener("click", () => {
      index = (i === 0)
        ? (index - 1 + images.length) % images.length
        : (index + 1) % images.length;
      updateCarousel();
    });
  }
});

// Menu toggle
if (menuToggle && navMenu) {
  menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });
}

// Ciclo per nascondere/mostrare recensioni
function showNextReview() {
  reviews.forEach((review, i) => {
    review.classList.toggle("active", i === currentReview);
  });
  currentReview = (currentReview + 1) % reviews.length;
}

// Chat button
if (chatButton) {
  chatButton.addEventListener("click", () => {
    alert("Chat non disponibile al momento. Contattaci via email!");
  });
}

// Cambia sfondo hero ogni 3 secondi
function changeBackground() {
  if (heroSection) {
    heroSection.style.backgroundImage = `url('${backgrounds[currentBackground]}')`;
    currentBackground = (currentBackground + 1) % backgrounds.length;
  }
}

// Avvia gli intervalli se gli elementi esistono
if (reviews.length > 0) setInterval(showNextReview, 2500);
if (heroSection) setInterval(changeBackground, 2500);

