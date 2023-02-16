const all = document.querySelector(".allImg");
const funny = document.querySelector(".funnyImg");
const lovely = document.querySelector(".lovelyImg");

function allClicked() {
  let x = document.querySelector(".main-container");
  let y = x.querySelectorAll("div");
  if (all.onclick) {
    for (i = 0; i < y.length; i++) {
      if (y[i].classList.contains("all")) {
        y[i].style.display = "inline-block";
      } else {
        y[i].style.display = "none";
      }
    }
  }
}
function funnyClicked() {
  let y = x.querySelectorAll(".all");
  if (funny.onclick) {
      if (y.classList.contains("funny")) {
        y.style.display = "inline-block";
      } else {
        y.style.display = "none";
      }
    }
  }
