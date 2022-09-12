 //===== close navbar-collapse when a  clicked
 let navbarTogglerNine = document.querySelector(
  ".navbar-nine .navbar-toggler"
);
navbarTogglerNine.addEventListener("click", function () {
  navbarTogglerNine.classList.toggle("active");
});

// ==== left sidebar toggle
let sidebarLeft = document.querySelector(".sidebar-left");
let overlayLeft = document.querySelector(".overlay-left");
let sidebarClose = document.querySelector(".sidebar-close .close");

overlayLeft.addEventListener("click", function () {
  sidebarLeft.classList.toggle("open");
  overlayLeft.classList.toggle("open");
});
sidebarClose.addEventListener("click", function () {
  sidebarLeft.classList.remove("open");
  overlayLeft.classList.remove("open");
});

// ===== navbar nine sideMenu
let sideMenuLeftNine = document.querySelector(".navbar-nine .menu-bar");

sideMenuLeftNine.addEventListener("click", function () {
  sidebarLeft.classList.add("open");
  overlayLeft.classList.add("open");
});


//  ===== Price


var con1;
var con2;
var con3;
window.onload = function(){
 
   

con1 = document.getElementById("con1");
con2 = document.getElementById("con2");
con3 = document.getElementById("con3");

 var plan1 = document.getElementById ("plan1");
plan1.onclick = MostrarCon1;

var plan2 = document.getElementById ("plan2");
plan2.onclick = MostrarCon2;
var plan3 = document.getElementById ("plan3");
plan3.onclick = MostrarCon3;

con1.classList.remove("escondido");
con2.classList.add("escondido");
con3.classList.add("escondido");
}
function MostrarCon1(){
  con1.classList.remove("escondido")
  con2.classList.add("escondido")
  con3.classList.add("escondido")
}
function MostrarCon2(){
  con1.classList.add("escondido")
  con2.classList.remove("escondido")
  con3.classList.add("escondido")
}
function MostrarCon3(){
  con1.classList.add("escondido")
  con2.classList.add("escondido")
  con3.classList.remove("escondido")
}