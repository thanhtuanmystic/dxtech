// search-box open close js code
let navbar = document.querySelector(".navbar");
// sidebar open close js code
let navLinks = document.querySelector(".nav-links");
let menuOpenBtn = document.querySelector(".navbar .bx-menu");
let menuCloseBtn = document.querySelector(".nav-links .bx-x");
menuOpenBtn.onclick = function () {
  navLinks.style.left = "0";
};
menuCloseBtn.onclick = function () {
  navLinks.style.left = "-100%";
};

// sidebar submenu open close js code
let htmlcssArrow = document.querySelector(".htmlcss-arrow");
htmlcssArrow.onclick = function () {
  navLinks.classList.toggle("show1");
};
// Xử lý slide feedback trang chủ
$(document).ready(function () {
  $("#nextBtn").click(function () {
    $("#feedbackCarousel").carousel("next");
  });

  $("#prevBtn").click(function () {
    $("#feedbackCarousel").carousel("prev");
  });
});
