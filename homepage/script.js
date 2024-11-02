let currentIndex = 0;
const items = document.querySelectorAll('.carousel-item');

function showSlide(index) {
  items.forEach((item, i) => {
    item.classList.remove('active');
    if (i === index) {
      item.classList.add('active');
    }
  });
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % items.length;
  showSlide(currentIndex);
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + items.length) % items.length;
  showSlide(currentIndex);
}

// Mostra o slide inicial
showSlide(currentIndex);

// Muda automaticamente o slide a cada 3 segundos
setInterval(nextSlide, 3000);

function toggleMenu() {
  const menu = document.querySelector("nav ul");
  menu.classList.toggle("show");
}