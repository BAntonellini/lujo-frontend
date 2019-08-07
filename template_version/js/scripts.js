var alto = screen.height;

// Nav transparente
var nav = document.querySelector(".navbar");
// Achicamos el logo
var logo = document.querySelector("#logo");
$(function() {
  $(window).scroll(function() {
  if ($(window).scrollTop() > 1500) {
    nav.classList.remove("bg-transparent");
    nav.classList.add("bg-dark");
    logo.setAttribute("style","width:50px;");
  } else {
    nav.classList.remove("bg-dark");
    nav.classList.add("bg-transparent");
    logo.setAttribute("style","width:100px;");
  }
    });
});

// Padding dinamico
var fullsize = document.querySelector("#header");
var info = "padding: " + "500px" + " 0 " + String(alto) +"px";
fullsize.setAttribute("style",info);
