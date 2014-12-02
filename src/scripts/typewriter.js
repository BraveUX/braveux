(function($) {
 

  var test = [
    {
      selector: $('.typewriter-1'),
      words: ['This is test1 ', 'this is test2 ']
    }, {
      selector: $('.typewriter-2'),
      words: ['This is test3 ', 'this is test4 ']
    }
];
  
  function reset() {

  }

  $.fn.typewriter = function() {
    var current = {
      selector: test[0].selector,
      phrase: test[0].words,
      word: test[0].words[0].split('')
    }
    var iterator = 0;

    function type (word) {
      if (word.length) {
        current.selector.text(current.selector.text() + word[0])
        word.shift();
        setTimeout(type, 80, word);
      } else {
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

        

      }
    }
    type(current.word);
  };

})(jQuery);
