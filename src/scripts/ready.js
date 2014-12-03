$(document).ready(function() {
  typewriter('.typewriter');

  initToggle();
  initScrollSpy();
  initEasterEggs();
  console.log('Looking for this? https://github.com/BraveUX/website');

  initApproach();
});

function initApproach() {
  // cache vars
  var approachIcon1 = $('.approach-section-icon-svg').eq(0).get(0);
  var approachIcon2 = $('.approach-section-icon-svg').eq(1).get(0);
  var approachIcon3 = $('.approach-section-icon-svg').eq(2).get(0);
  var approachIcon4 = $('.approach-section-icon-svg').eq(3).get(0);
  var approachIcon5 = $('.approach-section-icon-svg').eq(4).get(0);
  var approachIcon6 = $('.approach-section-icon-svg').eq(5).get(0);

  // hide inner icons
  $('.approach-section-inner-icon').hide();

  // init vivus
  new Vivus(approachIcon1, {type: 'async', start: 'inViewport', duration: 80}, function() {

  });

  new Vivus(approachIcon2, {type: 'async', start: 'inViewport', duration: 80}, function() {

  });

  new Vivus(approachIcon3, {type: 'async', start: 'inViewport', duration: 80}, function() {

  });

  new Vivus(approachIcon4, {type: 'async', start: 'inViewport', duration: 80}, function() {

  });

  new Vivus(approachIcon5, {type: 'async', start: 'inViewport', duration: 80}, function() {

  });

  new Vivus(approachIcon6, {type: 'async', start: 'inViewport', duration: 80}, function() {

  });

  // $('.approach-section-icon').eq(0).waypoint(function(direction) {
  //   // only while scrolling down
  //   if(direction === 'down') {
  //     // fire vivus

  //   }

  // }, {
  //   // fire when bottom of image hits bottom of screen
  //   offset: function() {
  //     return -$(this).height() + $(window).height();
  //   }
  // });
}

function initEasterEggs() {
  $('.footer-copyright-stars').click(function() {
    $('footer').velocity('scroll', { duration: 500, axis: 'y',  begin: function() {
       $('footer').addClass('is-egg');

       // disable from clicking
       $('.footer-copyright-stars').addClass('stars-disable');
    }});
  });
}

function initScrollSpy() {
  window.sr = new scrollReveal({
    move: '0px',
    over: '0.75s',
    wait: '0s',
    easing: 'ease',
    scale: {
      direction: 'up',
      power: '0%'
    },
    mobile: true,
    delay: 'once',

    vFactor: 0.30     // 70% of element onscreen to trigger reveal
  });
}

function typewriter(selector) {
  // cache vars
  var object   = $(selector);
  var rotating = $(selector + '-rotating');

  // time between letter
  var betweenLetters = 120;    // ms
  var betweenWords   = 5000;  // ms
  var letterArray = [];
  var timeArray = [];

  // phrases
  var phrases = [
    'abcdefghij',
    'klmnopqr',
    'uvwxyz'
  ];

  // loop through phrases
  for(var i = 0; i < phrases.length; i++) {
    // add cumulative type time (this word and all previous) to timeArray
    timeArray[i] = (timeArray[i - 1] || 0) + phrases[i].length * betweenLetters;

    // add letters to letterArray
    letterArray[i] = [];
    letterArray[i].push.apply(letterArray[i], phrases[i].split(''));
  }

  // timeout function
  function doTimeout(letterIndex, wordIndex) {
    setTimeout(function() {
      // first letter
      if(letterIndex == 0) {
        rotating.text('');
      }

      // add letter by letter
      rotating.append(letterArray[wordIndex][letterIndex]);

      // last letter
      if(letterIndex == letterArray[wordIndex].length - 1) {
        console.log('last letter');
      }
    }, (letterIndex * betweenLetters) + (wordIndex * betweenWords) + (timeArray[wordIndex - 1] || 0));
  }

  // loop through letterArray
  for(var wordIndex = 0; wordIndex < letterArray.length; wordIndex++) {
    for(var letterIndex = 0; letterIndex < letterArray[wordIndex].length; letterIndex++) {
      doTimeout(letterIndex, wordIndex);
    }
  }
}

function initToggle() {
  $('.ux-toggle-frame').click(function(e) {
    e.preventDefault();
    $('.ux-toggle-frame').toggleClass('is-active');

    // show/hide overlay
    if($('.ux-toggle-frame').hasClass('is-active'))
      $('.overlay').velocity({ opacity: [.8, 0] }, { display: 'block', duration: 500, easing: 'ease', begin: function() {
        $('.wrapper').toggleClass('is-overlayed');
      } });
    else
      $('.overlay').velocity({ opacity: [0, .8] }, { display: 'none', duration: 500, easing: 'ease', begin: function() {
        $('.wrapper').toggleClass('is-overlayed');
      } });
  });
}
