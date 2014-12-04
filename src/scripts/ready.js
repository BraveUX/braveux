$(document).ready(function() {
  initToggle();
  initScrollSpy();
  initEasterEggs();
  initNavBar();

  if(window.location.pathname === '/approach.html')
    initApproach();

  console.log('Looking for this? https://github.com/BraveUX/website');
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
       $('.footer-copyright-stars').addClass('stars-disable');
    }});
  });
}

function initNavBar() {
  var scroll;
  var scrollPrevious = 0;
  var scrollDelta = 50;

  $(window).scroll(function() {
    scroll = true;
  });

  setInterval(function() {
    if(scroll) {
      toggleNav();
      scroll = false;
    }
  }, 250);

  function toggleNav() {
    // current scroll position
    var scrollCurrent = $(window).scrollTop();

    // check for scroll more than delta
    if(Math.abs(scrollPrevious - scrollCurrent) <= scrollDelta)
      return;

    // if current scroll is past navbar height
    if(scrollCurrent > 50) {
      // down
      if(scrollCurrent > scrollPrevious)
        $('.menu').addClass('is-collapsed');

      // up
      else
        $('.menu').removeClass('is-collapsed');

      // make current scroll the previous scroll
      scrollPrevious = scrollCurrent;
    }
  }
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

function initToggle() {
  $('.ux-toggle-frame').click(function(e) {
    e.preventDefault();
    $('.ux-toggle-frame').toggleClass('is-active');

    // show/hide overlay
    if($('.ux-toggle-frame').hasClass('is-active'))
      $('.overlay').velocity({ opacity: [0.8, 0] }, { display: 'block', duration: 500, easing: 'ease', begin: function() {
        $('.wrapper').toggleClass('is-overlayed');
      } });
    else
      $('.overlay').velocity({ opacity: [0, 0.8] }, { display: 'none', duration: 500, easing: 'ease', begin: function() {
        $('.wrapper').toggleClass('is-overlayed');
      } });
  });
}
