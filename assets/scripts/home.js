"use strict"

document.querySelector(".home-blurb-action").addEventListener("click", () => {
  document.querySelector(".global-hamburger").classList.remove("global-hamburger-state-hidden");
  document.querySelector(".global-hamburger").classList.add("global-hamburger-state-visible");
});