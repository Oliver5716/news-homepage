const toggleMenu = document.querySelector(".toggle-menu");
const closeMenu = document.querySelector(".close-btn");
const hideMenu = document.querySelector(".remove-menu");

toggleMenu.addEventListener("click", function () {
    document.querySelector(".overlay").style.width = "65%";
});

closeMenu.addEventListener("click", function () {
    document.querySelector(".overlay").style.width = "0%";
});
