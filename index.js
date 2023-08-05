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

    if (currentIndex === 0) {
      isReversed = !isReversed; // Reverse the direction when reaching the first element
    }

    setTimeout(rotateText, 3000);
  }

  rotateText();
});

/* For Adding Particles*/

const GoogleColors = ['#9EBCE6', '#E4A29E', '#F4E89C', '#AED0A7'];
