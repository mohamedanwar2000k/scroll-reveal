const revealElement = document.querySelectorAll("[data-reveal]");

const scrollReveal = () => {
  for (let i = 0; i < revealElement.length; i++) {
    const isElementOnScreen = (revealElement[i].getBoundingClientRect().top < window.innerHeight)
      && (revealElement[i].getBoundingClientRect().top > -revealElement[i].getBoundingClientRect().height);

    if (isElementOnScreen) {
      revealElement[i].classList.add("revealed");
    } else {
      revealElement[i].classList.remove("revealed");
    }
  }
};

window.addEventListener("load", scrollReveal);
window.addEventListener("scroll", scrollReveal);