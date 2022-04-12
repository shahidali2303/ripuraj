var homeSlide = document.getElementById("home-slider");
var home_btn1 = document.getElementById("home-btn1");
var home_btn2 = document.getElementById("home-btn2");
var home_btn3 = document.getElementById("home-btn3");
var home_btn4 = document.getElementById("home-btn4");

home_btn1.onclick = function () {
  homeSlide.style.transform = "translateX(0px)";
  home_btn1.classList.add("home-active");
  home_btn2.classList.remove("home-active");
  home_btn3.classList.remove("home-active");
  home_btn4.classList.remove("home-active");
};
home_btn2.onclick = function () {
  homeSlide.style.transform = "translateX(-100%)";
  home_btn2.classList.add("home-active");
  home_btn1.classList.remove("home-active");
  home_btn3.classList.remove("home-active");
  home_btn4.classList.remove("home-active");
};
home_btn3.onclick = function () {
  homeSlide.style.transform = "translateX(-200%)";
  home_btn3.classList.add("home-active");
  home_btn1.classList.remove("home-active");
  home_btn2.classList.remove("home-active");
  home_btn4.classList.remove("home-active");
};
home_btn4.onclick = function () {
  homeSlide.style.transform = "translateX(-300%)";
  home_btn4.classList.add("home-active");
  home_btn3.classList.remove("home-active");
  home_btn1.classList.remove("home-active");
  home_btn2.classList.remove("home-active");
};
