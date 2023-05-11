$(document).ready(function () {
  // Check if there are any slides
  const $slides = $(".slides");
  if ($slides.length) {
    // Declare variables
    const totalImages = $slides.children().length,
      imageWidth = $slides.children().first().outerWidth(true),
      totalWidth = imageWidth * totalImages,
      $carousel = $("#carousel"),
      visibleImages = Math.round($carousel.width() / imageWidth),
      visibleWidth = visibleImages * imageWidth,
      stopPosition = visibleWidth - totalWidth;
    $slides.width(totalWidth);

    // Previous button click event
    $("#sliderPrev").click(function () {
      const leftPosition = $slides.position().left;
      if (leftPosition < 0 && !$slides.is(":animated")) {
        $slides.animate({
          left: "+=" + imageWidth + "px",
        });
      }
      return false;
    });

    // Next button click event
    $("#sliderNext").click(function () {
      const leftPosition = $slides.position().left;
      if (leftPosition > stopPosition && !$slides.is(":animated")) {
        $slides.animate({
          left: "-=" + imageWidth + "px",
        });
      }
      return false;
    });
  }
});
