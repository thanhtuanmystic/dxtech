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
  var $carousel = $("#feedbackCarousel");
  var $indicators = $(".carousel-indicators .indicator");

  $("#prevBtn").click(function () {
    $carousel.carousel("prev");
  });

  $("#nextBtn").click(function () {
    $carousel.carousel("next");
  });

  $carousel.on("slide.bs.carousel", function (e) {
    var newIndex = $(e.relatedTarget).index();
    $indicators.removeClass("active");
    $indicators.eq(newIndex).addClass("active");
  });

  $indicators.click(function () {
    var index = $(this).data("slide-to");
    $carousel.carousel(index);
  });
});

// Solution
$(document).ready(function () {
  // Xử lý click ẩn hiện ở phần sản phẩm trang chủ
  $("#solution1").show();
  $(".solution-click").click(function () {
    $(".solution-click").removeClass("solution-active");
    $(this).addClass("solution-active");
    var contentId = $(this).data("content");
    $(".solution-content").hide();
    $("#" + contentId).show();
  });
});
