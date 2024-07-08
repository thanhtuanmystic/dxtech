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

// Other Field - Solution

document.addEventListener("DOMContentLoaded", function () {
  const swiper = new Swiper(".mySwiper", {
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    spaceBetween: 30,
    loop: true,
    // Tính toán số lượng slide hiển thị theo tỉ lệ màn hình
    slidesPerView: calculateSlidesPerView(),
  });

  // Hàm tính toán số lượng slide per view
  function calculateSlidesPerView() {
    // Lấy chiều rộng của cửa sổ trình duyệt
    const windowWidth = window.innerWidth;

    // Tùy chỉnh số lượng slide per view dựa trên kích thước cửa sổ
    if (windowWidth >= 1024) {
      return 3.5; // Ví dụ: hiển thị 3.5 slide khi chiều rộng >= 1024px
    } else if (windowWidth >= 768) {
      return 2.5; // Ví dụ: hiển thị 2.5 slide khi chiều rộng >= 768px
    } else {
      return 1.5; // Ví dụ: hiển thị 1.5 slide mặc định cho các kích thước cửa sổ nhỏ hơn
    }
  }

  // Đảm bảo sự thay đổi số lượng slide khi thay đổi kích thước cửa sổ
  window.addEventListener("resize", function () {
    swiper.params.slidesPerView = calculateSlidesPerView();
    swiper.update(); // Cập nhật Swiper
  });
  document.querySelector(".arrow-prev").addEventListener("click", function () {
    swiper.slidePrev();
  });

  document.querySelector(".arrow-next").addEventListener("click", function () {
    swiper.slideNext();
  });
});

// Hover khám phá thêm lĩnh vực khác
$(document).ready(function () {
  $(".slide-hover").hover(
    function () {
      $(this)
        .find(".field-hover")
        .stop(true, true)
        .fadeIn(500)
        .css("display", "flex");
    },
    function () {
      $(this).find(".field-hover").stop(true, true).fadeOut(500);
    }
  );
});

// Xử lý slide trang giải pháp bán lẻ

$(document).ready(function () {
  var $carousel = $("#retailCarousel");
  var $indicators = $(".carousel-indicators .indicator");

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
