var slide = document.getElementById("slider");
var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var btn3 = document.getElementById("btn3");

btn1.onclick = function () {
  slide.style.transform = "translateX(0px)";
  btn1.classList.add("testimonial-active");
  btn2.classList.remove("testimonial-active");
  btn3.classList.remove("testimonial-active");
};
btn2.onclick = function () {
  slide.style.transform = "translateX(-100%)";
  btn2.classList.add("testimonial-active");
  btn1.classList.remove("testimonial-active");
  btn3.classList.remove("testimonial-active");
};
btn3.onclick = function () {
  slide.style.transform = "translateX(-200%)";
  btn3.classList.add("testimonial-active");
  btn1.classList.remove("testimonial-active");
  btn2.classList.remove("testimonial-active");
};
