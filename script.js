// Cambiar texto
document.getElementById("cambiar-texto").addEventListener("click", () => {
    document.getElementById("texto-js").textContent = "¡Texto cambiado!";
});

// Cambiar estilo
document.getElementById("cambiar-estilo").addEventListener("click", () => {
    const parrafo = document.getElementById("estilo-js");
    parrafo.style.color = "red";
    parrafo.style.fontSize = "1.5rem";
    parrafo.style.fontWeight = "bold";
});

// Crear un nuevo elemento
document.getElementById("crear-elemento").addEventListener("click", () => {
    const nuevoParrafo = document.createElement("p");
    nuevoParrafo.textContent = "Este es un párrafo añadido dinámicamente.";
    document.getElementById("contenedor").appendChild(nuevoParrafo);
});

// Slider Manual
let currentSlide = 0;
const slides = document.querySelectorAll(".slider-manual .slides-container img");
const totalSlides = slides.length;

document.getElementById("next").addEventListener("click", () => {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateSlider();
});

document.getElementById("prev").addEventListener("click", () => {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    updateSlider();
});

function updateSlider() {
    const offset = currentSlide * -600; // Ajusta al ancho del slider
    document.querySelector(".slider-manual .slides-container").style.transform = `translateX(${offset}px)`;
}
