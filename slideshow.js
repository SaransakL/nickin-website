const slides = document.querySelectorAll('#slideshow .slide');
const prevBtn = document.querySelector('.slide-btn.prev');
const nextBtn = document.querySelector('.slide-btn.next');

let index = 0;
let interval = null;

function showSlide(i) {
    slides.forEach(slide => slide.classList.remove('active'));
    slides[i].classList.add('active');
}

function nextSlide() {
    index = (index + 1) % slides.length;
    showSlide(index);
}

function prevSlide() {
    index = (index - 1 + slides.length) % slides.length;
    showSlide(index);
}

function startAutoSlide() {
    interval = setInterval(nextSlide, 5000);
}

function resetAutoSlide() {
    clearInterval(interval);
    startAutoSlide();
}

// ปุ่มกด
if (nextBtn && prevBtn) {
    nextBtn.addEventListener('click', () => {
        nextSlide();
        resetAutoSlide();
    });

    prevBtn.addEventListener('click', () => {
        prevSlide();
        resetAutoSlide();
    });
}

// เริ่มอัตโนมัติ
startAutoSlide();
