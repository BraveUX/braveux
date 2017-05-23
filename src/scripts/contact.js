// Contact Page JS

// Letter Flip
(function() {
  // Set variables
  var $window = $(window);
  var letter = $('.contact-letter');
  var letterDistance;

  // Get offset after element has loaded
  if (letter.length) {
    var letterOffset = letter.offset().top;
  }

  // Update offset if window resizes
  $window.resize(function() {
    letterDistance = letterOffset;
  });

  // Flip letter when scrolled into viewport
  $window.scroll(function() {
    var scroll = $window.scrollTop();
    letterDistance = letterOffset;

    if (scroll >= letterDistance/4) {
      letter.addClass('is-flipped');
    } else {
      letter.removeClass('is-flipped');
    }
  });
})();
