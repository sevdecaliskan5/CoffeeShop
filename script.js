const arrows = document.querySelectorAll(".menu i");
const movieList = document.getElementById("menu-slider");
const cards = movieList.querySelectorAll(".col");
const totalCards = cards.length;
const visibleCards = 5;
const itemWidth = 231;
let clickCounter = 0;

updateVisibleCards();

arrows.forEach((arrow) => {
  arrow.addEventListener("click", function () {
    if (arrow.id === "next") {
      if (clickCounter < totalCards - visibleCards) {
        clickCounter++;
      }
    } else if (arrow.id === "prev") {
      if (clickCounter > 0) {
        clickCounter--;
      }
    }
    updateVisibleCards();
  });
});

function updateVisibleCards() {
  const currentTranslateX = clickCounter * itemWidth;
  movieList.scrollTo({
    left:currentTranslateX,
    behavior:"smooth"
  })
}