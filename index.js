$(document).ready(function() {
  const textElements = $(".text-rotator .text");
  let currentIndex = 0;
  let isReversed = false;

 function rotateText() {
    if (!isReversed) {
      textElements.removeClass("active");
      textElements.eq(currentIndex).addClass("active");
      currentIndex = (currentIndex + 1) % textElements.length;
    } else {
      textElements.removeClass("active");
      textElements.eq(currentIndex).addClass("active");
      currentIndex = (currentIndex - 1 + textElements.length) % textElements.length;
    }

  const meanElement = $(".mean");
    meanElement.css("color", "rgb(255, 0, 0)").css("font-weight", "bold"); // Change color to RGB (Red) and make it bold

    setTimeout(function() {
      meanElement.css("color", "black").css("font-weight", "normal"); // Change color back to black and remove bold style after 3 seconds
    }, 3000);

    if (currentIndex === 0) {
      isReversed = !isReversed; // Reverse the direction when reaching the first element
    }

    setTimeout(rotateText, 3000);
  }

  rotateText();
});

