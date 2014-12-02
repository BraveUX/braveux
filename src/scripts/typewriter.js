(function($) {
  
  $.fn.typewriter = function(phrases, opts) {
    return typewriter(this, phrases, _setOpts(opts));
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
        setTimeout(_highlight, 1500, $selector, phrases, opts);
      }
    }

    $selector.text('');
    window.getSelection().removeAllRanges();
    return typeit(phrases[0].split(''));
  }

// ---- private

  function _setOpts(opts) {
    opts                = opts || {}
    opts.characterDelay = opts.characterDelay || 130;
    opts.delay          = opts.delay || 4000;
    opts.startDelay     = opts.startDelay || false;
    opts.cursor         = opts.cursor || true;
    opts.highlight      = opts.highlight || true;
    return opts;
  }

  function _setText($selector, word) {
    $selector.text($selector.text() + word);
  }

  function _swap(arr) {
    arr.push(arr.shift());
  }

  function _highlight($selector, phrases, opts) {
    var $el = document.getElementsByClassName('typewriter').item(0).firstChild;
    var range = document.createRange();
    var selection = window.getSelection();
    range.setStart($el, $el.length);
    selection.addRange(range);

    function _moveHighlight(arr) {
      if (arr.length) {
        selection.modify('extend', 'backward', 'character');
        arr.shift();
        setTimeout(_moveHighlight, 5, arr);
      } 
      else {
       return setTimeout(typewriter, opts.delay - 1500, $selector, phrases, opts);
      }
    }

  return _moveHighlight($el.data.split(''));
}
})(jQuery);
