$(document).ready(function() {
  // set user agent on html element
  $('html').attr('data-user-agent', window.navigator.userAgent);

  initToggle();
  initScrollSpy();
  initEasterEggs();
  initNavBar();

  if(window.location.pathname === '/approach.html')
    initApproach();

  if($(window).width() <= 800)
    initMobileNav();

  console.log('Looking for this? https://github.com/BraveUX/website');
});

function initApproach() {
  // cache vars
  var drawDuration = 50;
  var fadeInDuration = 500;
  var fadeInEasing = 'ease';
  var scrollDuration = 500;
  var scrollEasing = 'linear';

  // hide inner icons
  $('.approach-inner-icon, .approach-arrowhead').css('opacity', '0');

  function bindVivus(index) {
    // animate loops, fade in arrowhead and icon
    return new Vivus($('.approach-section-icon-svg').eq(index).get(0), { type: 'async', start: 'inViewport', duration: drawDuration }, function() {
      // remove drawing class
      if(index != 5)
        $('.approach-to-next').eq(index).get(0).classList.remove('drawing');

      // fade in icon and arrowhead
      $('.approach-inner-icon').eq(index).velocity({ 'opacity': 1 }, { duration: fadeInDuration, easing: fadeInEasing });
      $('.approach-arrowhead').eq(index).velocity({ 'opacity': 1 }, { duration: fadeInDuration, easing: fadeInEasing });
    });
  }

  function bindWaypoints(index) {
    $('.approach-section-icon').eq(index).waypoint(function(direction) {
      // only while scrolling down
      if(direction === 'down') {
        // drop the hidden class, let her rip
        // not sure about the browser support on this one...
        if(index != 5)
          $('.approach-to-next').eq(index).get(0).classList.remove('hidden');
      }
    });
  }

  // on each icon
  for(var i = 0; i <= 5; i++) {
    // bind vivus
    bindVivus(i);

    // bind waypoints
    bindWaypoints(i);
  }

  // bind next arrow handler
  $('.approach-section-next').click(function(e) {
    e.preventDefault();

    // get button index
    var index = $(this).index('.approach-section-next');

    // check if final arrow
    if(index == 5) {
      // scroll to approach cta
      var offset = ($(window).height() - $('.approach .cta').outerHeight()) / 2;
      $('.approach .cta').velocity('scroll', { offset: -offset, duration: scrollDuration, easing: scrollEasing });
    }
    else {
      // scroll to next section
      var offset = ($(window).height() - $('.approach-section').eq(index + 1).outerHeight()) / 2;
      $('.approach-section').eq(index + 1).velocity('scroll', { offset: -offset, duration: scrollDuration, easing: scrollEasing });
    }
  });
}

function initEasterEggs() {
  $('.footer-stars').click(function(e) {
    e.preventDefault();

    $('.footer-egg').velocity('scroll', { duration: 500, axis: 'y',  begin: function() {
       $('.footer').addClass('is-egg');
       $('.footer-stars').addClass('is-found');
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
  }, 200);

  function toggleNav() {
    // current scroll position
    var scrollCurrent = $(window).scrollTop();

    // check for scroll more than delta
    if(Math.abs(scrollPrevious - scrollCurrent) <= scrollDelta)
      return;

    // check for scrolled to top
    if(scrollCurrent === 0) {
      $('.menu').removeClass('is-collapsed');
      return;
    }

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

function initMobileNav() {
  $('.mobile-menu-toggle').click(function(e) {
    e.preventDefault();

    $('.menu, .mobile-menu-toggle').toggleClass('is-expanded');
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
  $('.overlay-exit').click(function() {
    $('.ux-toggle-frame').toggleClass('is-active');
    $('.overlay').velocity({ opacity: [0, 0.8] }, { display: 'none', duration: 500, easing: 'ease', begin: function() {
      $('.wrapper').toggleClass('is-overlayed');
    } });
  });
}
