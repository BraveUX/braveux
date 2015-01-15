$(document).ready(function() {
  // set user agent on html element
  $('html').attr('data-user-agent', window.navigator.userAgent);

  // initToggle();
  initScrollSpy();
  initEasterEggs();
  initNavBar();

  // if(window.location.pathname.indexOf('/work/') !== -1)
  //   initCarousels();

  if(window.location.pathname === '/' || window.location.pathname === '/index.html')
    initWork();

  if(window.location.pathname === '/approach' || window.location.pathname === '/approach.html')
    initApproach();

  if(window.location.pathname === '/team' || window.location.pathname === '/team.html')
    initTeam();

  if($(window).width() <= 800)
    initMobileNav();

  console.log('Looking for this? https://github.com/BraveUX/website');
});

// function initCarousels() {
//   $('.carousel').each(function() {
//     // init carousels as they scroll into view
//     bindCarousel($(this));
//   });

//   function bindCarousel(element) {
//     element.waypoint(function(direction) {
//       // only while scrolling down
//       if(direction === 'down') {
//         element.slick({
//           // init carousel
//           lazyLoad: 'ondemand',
//           arrows: false,
//           autoplay: true,
//           autoplaySpeed: 2500
//         });
//       }
//     }, {
//       offset: '100%'
//     });
//   }
// }

function initWork() {
  // case study images moved above test for responsive
  if($(window).width() < 800) {
    $('.work-landing:odd').each(function() {
      var firstCol = $(this).find('.col').eq(0);
      var secondCol = $(this).find('.col').eq(1);

      secondCol.insertBefore(firstCol);
    });
  }
}

function initApproach() {
  // cache vars
  var drawDuration = 50;
  var fadeInDuration = 500;
  var fadeInEasing = 'ease';
  var scrollDuration = 500;
  var scrollEasing = 'linear';

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

  // check for IE
  var isIE = !$('#ie-test').get(0).classList;

  // if IE, dont bind Vivus or Waypoints
  if(isIE) {
    // delete svgs
    $('.approach-section-icon-svg').remove();

    // show jpgs
    $('.approach-ie-only').removeClass('hidden');

    // remove hidden classes
    $('.approach-to-next').removeAttr('class');

    // exit approach init
    return false;
  }
  else {
    // hide inner icons
    $('.approach-inner-icon, .approach-arrowhead').css('opacity', '0');

    // bind Vivus and Waypoints on each approach section svg
    for(var i = 0; i <= 5; i++) {
      bindVivus(i);
      bindWaypoints(i);
    }
  }
}

function initTeam() {
  var selector = null;

  // hashchange event
  $(window).on('hashchange', function() {
    // build member selector and scroll
    selector = '.member-' + location.hash.slice(1);
    $(selector).velocity('scroll', { duration: 1000, axis: 'y' });
  });

  // fire the event on page load too
  if(window.location.hash) {
    $(window).trigger('hashchange');
  }
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

      if($('.wrapper.work').length > 0)
        $('.logo, .menu').addClass('is-home');

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

      if($('.wrapper.work').length > 0) {
        // if in work section on homepage, show normal nav
        if(scrollCurrent > $('.wrapper.work').offset().top)
          $('.logo, .menu').removeClass('is-home');
        else
          $('.logo, .menu').addClass('is-home');
      }

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

// function initToggle() {
//   // ux button click handler
//   $('.ux-toggle-frame').click(function(e) {
//     e.preventDefault();

//     // toggle button class
//     $('.ux-toggle-frame').toggleClass('is-active');

//     // show/hide overlay
//     if($('.ux-toggle-frame').hasClass('is-active')) {
//       $('.overlay').velocity({ opacity: [0.8, 0] }, { display: 'block', duration: 500, easing: 'ease' });
//       $('.overlay-exit').velocity({ opacity: [1, 0] }, { display: 'block', duration: 500, easing: 'ease' });
//     }
//     else {
//       $('.overlay').velocity({ opacity: [0, 0.8] }, { display: 'none', duration: 500, easing: 'ease' });
//       $('.overlay-exit').velocity({ opacity: [0, 1] }, { display: 'none', duration: 500, easing: 'ease' });
//     }

//     // toggle wrapper class
//     $('.wrapper').toggleClass('is-overlayed');
//   });

//   // close button click handler
//   $('.overlay-exit').click(function() {
//     // remove classes
//     $('.ux-toggle-frame').removeClass('is-active');
//     $('.wrapper').removeClass('is-overlayed');

//     // fade out
//     $('.overlay').velocity({ opacity: [0, 0.8] }, { display: 'none', duration: 500, easing: 'ease' });
//     $('.overlay-exit').velocity({ opacity: [0, 1] }, { display: 'none', duration: 500, easing: 'ease' });
//   });
// }
