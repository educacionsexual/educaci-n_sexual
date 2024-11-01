let currentIndex = 0;
const slides = document.querySelectorAll('.carrusel-item');
const totalSlides = slides.length;
let autoScroll;

function showSlide(index) {
    if (index >= totalSlides) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalSlides - 1;
    } else {
        currentIndex = index;
    }
    const offset = -currentIndex * 100; // Mueve el carrusel
    document.querySelector('.carrusel').style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
    showSlide(currentIndex + 1);
    resetAutoScroll();
}

function prevSlide() {
    showSlide(currentIndex - 1);
    resetAutoScroll();
}

function startAutoScroll() {
    autoScroll = setInterval(() => {
        showSlide(currentIndex + 1);
    }, 5000); // Cambia de imagen cada 3 segundos
}

function resetAutoScroll() {
    clearInterval(autoScroll);
    startAutoScroll();
}

// Iniciar el carrusel al cargar la página
window.onload = () => {
    showSlide(currentIndex);
    startAutoScroll();
};
