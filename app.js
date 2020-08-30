const sectionOne = document.querySelector("#service");
const sectionTwo = document.querySelector(".services-container");
const animator = document.getElementById("animator");
const unanimator = document.getElementById("unanimator");

animator.addEventListener("click", animate);
unanimator.addEventListener("click", unAnimate);


function animate() {
  sectionTwo.classList.add("animate");
  sectionOne.classList.add("animated");
}

function unAnimate() {
  sectionTwo.classList.remove("animate");
  sectionOne.classList.remove("animated");
}
