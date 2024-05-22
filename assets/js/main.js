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