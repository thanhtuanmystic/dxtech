// Loading khi trang còn load

// $(document).ready(function () {
//   var backgroundImage = new Image();
//   backgroundImage.src = "./assets/img/main_background3.png";
//   $(backgroundImage).on("load", function () {
//     $("#loading").fadeOut("slow", function () {
//       $("#dxt_main_body").fadeIn("slow");
//       $("header").fadeIn("slow");
//       $("body").css("overflow", "auto");
//     });
//   });
// });
$(window).on("load", function () {
  $("#loading").fadeOut("slow", function () {
    $("#dxt_main_body").fadeIn("slow");
    $("header").fadeIn("slow");
    // Bỏ khóa cuộn trang
    $("body").css("overflow", "auto");
  });
});

// Các element từ từ hiện lên khi load trang
function scrollMouse1(classFirst, nameClassAdd) {
  $(classFirst).addClass("hidden");
  $(classFirst).each(function () {
    var spaceTop = $(this).offset().top;
    var chieucao = $(this).height();
    var spaceBottom = $(document).height() - $(this).offset().top - chieucao;
    var scrollBottom =
      $(document).height() + $(window).height() - $(window).scrollTop();
    var scrollSpaceTop = $(window).scrollTop();
    if (
      spaceBottom < scrollBottom - $(window).height() &&
      spaceTop < scrollSpaceTop + $(window).height()
    ) {
      $(this).addClass(nameClassAdd);
    }
  });
}
var width = $(window).width();

if (width > 767) {
  $(window).scroll(function () {
    scrollMouse1(".featured-box", "slide-right");
    scrollMouse1(".animation_img_right", "slide-right");
    scrollMouse1(".animation_img_left", "slide-left");
    scrollMouse1(".animation_slide_bottom_to_show", "slide-bottom-to-show");
  });
}

$(document).ready(function () {
  // Xử lý click ẩn hiện ở phần sản phẩm trang chủ
  $("#ekyc").show();
  $(".product-click").click(function () {
    $(".product-click").removeClass("product-active");
    $(this).addClass("product-active");
    var contentId = $(this).data("content");
    $(".product-content").hide();
    $("#" + contentId).show();
  });

  // Xử lý slide feedback trang chủ
  $(document).ready(function () {
    $("#nextBtn").click(function () {
      $("#feedbackCarousel").carousel("next");
    });

    $("#prevBtn").click(function () {
      $("#feedbackCarousel").carousel("prev");
    });
  });
});
