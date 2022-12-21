const imgTeste = document.querySelector(".scroll-animation");

function scrollAnimation() {
  const scrollNumber = scrollY;

  if (scrollNumber <= 482) {
    imgTeste.style.animation = "toDown .5s ease-out";
    imgTeste.style.opacity = "0";
  } else {
    imgTeste.style.opacity = "1";
    imgTeste.style.animation = "toTop 1s ease-out";
  }
}

window.addEventListener("scroll", scrollAnimation);
