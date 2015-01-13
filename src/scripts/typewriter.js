(function($) {
  var test = [ {
    selector: $('.typewriter-1'),
    words: ['happy users.', 'better user flow.', 'to understand your users.', 'user experience.']
  }, {
    selector: $('.typewriter-2'),
    words: ['designing awesome apps.', 'smart and capable.', 'research-driven.', 'Brave.']
  }];

  $.fn.typewriter = function(callback) {
    var iterator = 0;

    var current = {
      selector: test[0].selector,
      phrase: test[0].words,
      word: test[0].words[0].split('')
    }

    function type (word) {
      current.selector.siblings('.typewriter-cursor').text('|');
      if (word.length) {
        current.selector.text(current.selector.text() + word[0])
        word.shift();
        setTimeout(type, 64, word);
      }
      else {
        setTimeout(function() {
          current.selector.siblings('.typewriter-cursor').text('');
          iterator ++;

          if (iterator % 2 === 0) {
            if (current.phrase.length < 2) return callback();
            current.selector.addClass('highlight');

            setTimeout(function() {
              current.selector.text('');
              current.selector.removeClass('highlight');
              test[1].selector.addClass('highlight');
            }, 1000);

            setTimeout(function() {
              test[1].selector.text('');
              test[1].selector.removeClass('highlight');
              current.phrase.shift()
              test.push(test.shift());

              current = {
                selector: test[0].selector,
                phrase: test[0].words,
                word: test[0].words[0].split('')
              }

              type(current.word);
            }, 2000);
          }
          else {
            current.phrase.shift();
            test.push(test.shift());

            current = {
              selector: test[0].selector,
              phrase: test[0].words,
              word: test[0].words[0].split('')
            }

            type(current.word);
          }
        }, 1000);
      }
    }
    type(current.word);
  };

})(jQuery);
