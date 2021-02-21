let slides = document.querySelectorAll(".pictures__item");
let indicator = document.querySelectorAll(".flip__item");
let prev = document.querySelector(".prev");
let next = document.querySelector(".next");

let index = 0;

for (let i = 0; i < slides.length; i++) {
  if (slides[i].classList.contains("flip__item‐‐active")) {
    index = i
  }
}

prev.onclick = prevSlide;
next.onclick = nextSlide;

indicator.forEach(x => {
  x.onclick = display;
});

function display() {
  let num;
  for (let i = 0; i < indicator.length; i++) {
    indicator[i].classList.remove("flip__item‐‐active");
    slides[i].classList.remove("flip__item‐‐active");
  }
  this.classList.add("flip__item‐‐active");
  for (let i =0; i < indicator.length; i++) {
    if (indicator[i].classList.contains("flip__item‐‐active")) {
     num = i;
    }
  }
  slides[num].classList.add("flip__item‐‐active");
  index = num;
}

function prevSlide() {
  slides[index].classList.remove("flip__item‐‐active");
  indicator[index].classList.remove("flip__item‐‐active");
  index--;
  console.log(index);
  if (index < 0) {
    index = slides.length - 1;
  }
  slides[index].classList.add("flip__item‐‐active");
  indicator[index].classList.add("flip__item‐‐active");
}

function nextSlide() {
  slides[index].classList.remove("flip__item‐‐active");
  indicator[index].classList.remove("flip__item‐‐active");
  index++;
  console.log(index);
  if (index == slides.length) {
    index = 0;
  }
  console.log(index);
  slides[index].classList.add("flip__item‐‐active");
  indicator[index].classList.add("flip__item‐‐active");
}
