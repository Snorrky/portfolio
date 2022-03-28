"use strict";

const menu_block = document.querySelector('.menu__block');
const menu_close = document.querySelector(".menu__close");
const hamburger = document.querySelector('.hamburger');
const cover = document.querySelector('.menu__cover');

menu_close.addEventListener("click", function() {
    document.querySelector(".menu__cover").classList.add("menu__cover_hide");
    menu_block.classList.add("menu_hide");
});
hamburger.addEventListener("click", () => {
    menu_block.classList.remove("menu_hide");
    document.querySelector(".menu__cover").classList.remove("menu__cover_hide");
});
cover.addEventListener("click", function() {
    document.querySelector(".menu__cover").classList.add("menu__cover_hide");
    menu_block.classList.add("menu_hide");
});