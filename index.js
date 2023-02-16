const all = document.querySelector(".allImg");
const funny = document.querySelector(".funnyImg");
const lovely = document.querySelector(".lovelyImg");
const photoDiv = document.querySelector(".photo")


function filterByAll() {
 const containsAll = photoDiv.classList.contains("all")
 if (!containsAll) {
  photoDiv.classList.add("inactive")
 }
 photoDiv.classList.toggle("inactive")
}

function filterByFunny() {
  const containsFunny = photoDiv.classList.contains("funny")
  if (!containsAll) {
   photoDiv.classList.add("inactive")
  }
  photoDiv.classList.toggle("inactive")
 }

all.addEventListener("click", filterByAll)

