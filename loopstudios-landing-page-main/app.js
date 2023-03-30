const mainMenu = document.querySelector(".mainMenu");
const closeMenu = document.querySelector(".closeMenu");
const openMenu = document.querySelector(".openMenu");

openMenu.addEventListener("click", show);
closeMenu.addEventListener("click", close);

function show() {
  mainMenu.style.display = "block";
  mainMenu.style.top = "0px";
  document.body.style.overflow = "hidden";
}
show();
function close() {
  mainMenu.style.display = "none";
  mainMenu.style.top = "-100%";
  document.body.style.overflow = "visible";
}
close();
