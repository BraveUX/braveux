(function($) {
  
  $.fn.typewriter = function(phrases, opts) {
    var $selector = this.find('.typewriter');
    return typewriter($selector, phrases, _setOpts(opts));
  };

  function typewriter($selector, phrases, opts) {
    function typeit(word) {
      if (word.length) {
        _setText($selector, word[0]);
        word.shift();
        return setTimeout(typeit, opts.characterDelay, word);
      }
      else {
        _swap(phrases);
        setTimeout(function() {
          $selector.addClass('typewriter-highlight');
          $selector.siblings('.typewriter-cursor').text('');
          return setTimeout(typewriter, opts.clearTiming, $selector, phrases, opts);
        }, opts.delay)
      }
    }
    _reset($selector)
    return typeit(phrases[0].split(''));
  }


// ---- private

  function _setOpts(opts) {
    opts = opts || {}
    opts.characterDelay = opts.characterDelay || 80;
    opts.delay = opts.delay || 4500;
    opts.clearTiming = opts.clearTiming || 1000;
    return opts;
  }

  function _setText($selector, word) {
    $selector.text($selector.text() + word);
  }

  function _swap(arr) {
    arr.push(arr.shift());
  }

  function _reset($selector) {
    $selector.removeClass('typewriter-highlight');
    $selector.text('');
    $selector.siblings('.typewriter-cursor').text('|');
  }

})(jQuery);




