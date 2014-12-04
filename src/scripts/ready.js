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
  var drawDuration = 100;
  var fadeInDuration = 500;
  var fadeInEasing = 'ease';

  // hide inner icons
  $('.approach-inner-icon, .approach-arrowhead').css('opacity', '0');

  function bindVivus(index) {
    return new Vivus($('.approach-section-icon-svg').eq(index).get(0), {type: 'async', start: 'inViewport', duration: drawDuration}, function() {
      $('.approach-inner-icon').eq(index).velocity({ 'opacity': 1 }, { duration: fadeInDuration, easing: fadeInEasing });
      $('.approach-arrowhead').eq(index).velocity({ 'opacity': 1 }, { duration: fadeInDuration, easing: fadeInEasing });
    });
  }

  function bindWaypoints(index) {

  }

  // on each icon
  for(var i = 0; i <= 5; i++) {
    // bind vivus
    bindVivus(i);

    // bind waypoints
    bindWaypoints(i);
  }

  // $('.approach-section-icon').eq(0).waypoint(function(direction) {
  //   // only while scrolling down
  //   if(direction === 'down') {
  //     // fire vivus
  //     console.log('hit top')
  //   }
  // }, {
  //   offset: 0
  //   // fire when bottom of image hits bottom of screen
  //   // offset: function() {
  //   //   return -$(this).height() + $(window).height();
  //   // }
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
