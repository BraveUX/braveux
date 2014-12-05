(function($) {


  var test = [
    {
      selector: $('.typewriter-1'),
      words: ['happy users.', 'better user flow.', 'to understand your users.', 'user experience.']
    }, {
      selector: $('.typewriter-2'),
      words: ['designing awesome apps.', 'smart and capable.', 'research-driven.', 'Brave.']
    }
];

  $.fn.typewriter = function() {
    var current = {
      selector: test[0].selector,
      phrase: test[0].words,
      word: test[0].words[0].split('')
    }
    var iterator = 0;

    function type (word) {
      current.selector.siblings('.typewriter-cursor').text('|');
      if (word.length) {
        current.selector.text(current.selector.text() + word[0])
        word.shift();
        setTimeout(type, 80, word);
      } else {

        setTimeout(function() {
          current.selector.siblings('.typewriter-cursor').text('');
          iterator ++;
          // if second, start highlights
          if (iterator % 2 === 0) {
            // start first highlight
            current.selector.addClass('typewriter-highlight');
            setTimeout(function() {
              current.selector.text('');
              current.selector.removeClass('typewriter-highlight');
              test[1].selector.addClass('typewriter-highlight');
            }, 1000);

            setTimeout(function() {
              test[1].selector.text('');
              test[1].selector.removeClass('typewriter-highlight');
              current.phrase.push(current.phrase.shift());
              test.push(test.shift());
              current = {
                selector: test[0].selector,
                phrase: test[0].words,
                word: test[0].words[0].split('')
              }
              type(current.word)
            }, 2000);

          } else {
            // swap current phrases
            current.phrase.push(current.phrase.shift());

            // swap current with other
            test.push(test.shift());

            //reset
            current = {
              selector: test[0].selector,
              phrase: test[0].words,
              word: test[0].words[0].split('')
            }
            type(current.word)  
          }
        }, 1000);
      }
    }
    type(current.word);
  };

})(jQuery);
