// Burger menu
const burger = document.querySelector(".burger");
const nav = document.querySelector("nav");
burger.addEventListener("click", () => nav.classList.toggle("active"));

// Scroll animation for services cards
const cards = document.querySelectorAll(".card");
window.addEventListener("scroll", () => {
  cards.forEach(card => {
    const rect = card.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      card.classList.add("show");
    }
  });
});

// Slider
const workItems = document.querySelectorAll(".work-item");

window.addEventListener("scroll", () => {
  workItems.forEach(item => {
    const rect = item.getBoundingClientRect();
    if(rect.top < window.innerHeight - 100) {
      item.classList.add("show");
    }
  });
});

function showSlide(i) {
  if(i < 0) index = images.length - 1;
  else if(i >= images.length) index = 0;
  else index = i;
  slides.style.transform = `translateX(${-index * 100}%)`;
}

prev.addEventListener('click', () => showSlide(index - 1));
next.addEventListener('click', () => showSlide(index + 1));

setInterval(() => showSlide(index + 1), 4000);
function showSlide(i) {
  slides.forEach((img, index) => {
    img.classList.remove('active');
    if(index === i) img.classList.add('active');
  });
  current = i;
}

// أزرار
document.querySelector('.prev').addEventListener('click', () => {
  let nextIndex = current - 1 < 0 ? slides.length - 1 : current - 1;
  showSlide(nextIndex);
});
document.querySelector('.next').addEventListener('click', () => {
  let nextIndex = current + 1 >= slides.length ? 0 : current + 1;
  showSlide(nextIndex);
});

// تلقائي كل 4 ثواني
setInterval(() => {
  let nextIndex = current + 1 >= slides.length ? 0 : current + 1;
  showSlide(nextIndex);
}, 4000);

// تفعيل أول صورة
showSlide(current);
function showSlide(i) {
  if(i < 0) index = images.length - 1;
  else if(i >= images.length) index = 0;
  else index = i;
  slides.style.transform = `translateX(${-index * 100}%)`;
}

// أزرار السابق والتالي
document.querySelector('.prev').addEventListener('click', () => showSlide(index - 1));
document.querySelector('.next').addEventListener('click', () => showSlide(index + 1));

// تغيير تلقائي كل 4 ثواني
setInterval(() => showSlide(index + 1), 4000);

// تفعيل أول صورة
showSlide(index);
function showSlide(i) {
  if(i < 0) index = images.length - 1;
  else if(i >= images.length) index = 0;
  else index = i;
  slides.style.transform = `translateX(${-index * 100}%)`;
}

prev.addEventListener('click', () => showSlide(index - 1));
next.addEventListener('click', () => showSlide(index + 1));

// Auto slide every 4 seconds
setInterval(() => { showSlide(index + 1); }, 4000);

// زر رجوع للأعلى
const toTop = document.getElementById("toTop");
window.addEventListener("scroll", () => {
  toTop.style.display = window.scrollY > 200 ? "block" : "none";
});
toTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

// Initialize first slide
showSlide(index);