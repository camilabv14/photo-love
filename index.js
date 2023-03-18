const all = document.querySelector(".allImg");
const funny = document.querySelector(".funnyImg");
const lovely = document.querySelector(".lovelyImg");
const photoDiv = document.querySelectorAll(".photo")
const photoDivArr = [...photoDiv]


function filterByAll() {
 const containsAll = photoDivArr.classList.contains("all")
 if (!containsAll) {
  photoDivArr.classList.add("inactive")
 }
 photoDivArr.classList.toggle("inactive")
}

function filterByFunny() {
  const containsFunny = photoDiv.classList.contains("funny")
  if (!containsAll) {
    photoDivArr.classList.add("inactive")
  }
  photoDivArr.classList.toggle("inactive")
 }

all.addEventListener("click", filterByAll)

