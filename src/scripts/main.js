$(document).ready(function() {

  // pageFade();
  initMobileNav();
  homeHeroNav();
  initNavHide();
  initEgg();
  caseTeaseNext();
  scrollReveal();
  toggleSection('.career');
  sectionJump();
  videoPlay();
  navCurrent();
  introAnimate();
  
  // Repo Info
  console.log('Looking for this? https://github.com/BraveUX/braveux');
});

if ( $('video').length ) {
  $(window).on('scroll', _.throttle(function() {
    // throttle waypoint location to account for image resize
    Waypoint.refreshAll();
  }, 1000));
}

// function pageFade() {
//   const newLocation;
//   $('body').addClass('fade-in');
//
//   $('.menu-logo, .menu-link').click(function() {
//     event.preventDefault();
//     newLocation = this.href;
//     setTimeout(function() {
//       $('body').toggleClass('fade-in fade-out', 800).promise().done(newpage);
//
//     })
//   });
//
//   function newpage() {
//     window.location = newLocation;
//   }
// }

function initMobileNav() {
  $('.menu-mobile-toggle').click(function(e) {
    e.preventDefault();

    $('.menu, .menu-mobile-toggle').toggleClass('is-active');
  });
}

// Hides menu on scroll-down
function initNavHide() {
  let lastScroll = 0;
  const $window = $(window);
  const menu =  $('.menu, .subnav');

  $window.on('scroll', function() {
      const scrollTop = $window.scrollTop();

      // If scrolling down and document is more than 300px down
      if ( scrollTop > lastScroll && $(document).scrollTop() >= 300) {
        // Hide Menu
        menu.addClass('hidden');
        lastScroll = scrollTop;
      } else {
        // Show Menu
        menu.removeClass('hidden');
        lastScroll = scrollTop;
      }
    }
  );
}

// Controls the home navigation expand/collapse
function homeHeroNav() {
  if ( window.location.pathname == '/' || window.location.pathname == '/index.html' || window.location.pathname == '/braveux/' || window.location.pathname == '/braveux/index.html' ) {
    $('.menu-home-trigger').waypoint(function(direction) {
      if (direction === 'down') {
        $('.menu-home').removeClass('active');
      } else {
        $('.menu-home').addClass('active');
      }
    });
  }
}

// Subnav indicators
function subnavIndicators() {
  const subnav = document.querySelector('.subnav-container');
  const subnavWidth = subnav.scrollWidth - subnav.clientWidth;
  const $indicatorLeft = $('.subnav-scroll-indicator--left');
  const $indicatorRight = $('.subnav-scroll-indicator--right');
  const $subnavScroll = $('.subnav-container').scrollLeft();

  // Check if scroll bar exists or not
  if (subnav.scrollWidth == subnav.clientWidth) {
    $indicatorLeft.addClass('is-hidden');
    $indicatorRight.addClass('is-hidden');
    // if can scroll left
  } else if ($subnavScroll <= 0) {
    $indicatorLeft.addClass('is-hidden');
    $indicatorRight.removeClass('is-hidden');
    // if can not scroll right
  } else if ($subnavScroll >= subnavWidth) {
    $indicatorRight.addClass('is-hidden');
    $indicatorLeft.removeClass('is-hidden');
    $('.subnav__scroll-indicator').removeClass('scrolled');
    // if can scroll either left or right
  } else {
    $indicatorLeft.removeClass('is-hidden');
    $indicatorRight.removeClass('is-hidden');
  }
}

// Click events for indicators
$('.subnav-scroll-indicator--left').on('click', function(e) {
  e.preventDefault();
  $('.subnav-container').animate({
    scrollLeft: '-=150px'
  }, 'normal');
});

$('.subnav-scroll-indicator--right').on('click', function(e) {
  e.preventDefault();
  $('.subnav-container').animate({
    scrollLeft: '+=150px'
  }, 'normal');
});

// Or on horizontal subnav scroll
$('.subnav-container').scroll(function() {
  // Check for subnav on page
  if ( $('body').find('.subnav').length ) {
    subnavIndicators();
  }
})

// Or on Resize
$(window).on('resize',function() {
  if ( $('body').find('.subnav').length ) {
    subnavIndicators();
  }
}); 

// Run nav once ready
$(document).ready(function() {  
  // Check for subnav on page
  if ( $('body').find('.subnav').length ) {
    subnavIndicators();
  }
});

function initEgg() {
  const toggleEgg = $('.footer-stars');
  toggleEgg.click(function(e) {
    e.preventDefault();
    // toggle easter egg class
    $('.footer').toggleClass('footer-egg');
    // scroll to bottom of page
    $('html, body').animate({
			scrollTop: toggleEgg.offset().top
		}, 900);
  })
}

function toggleSection(section) {
  const button = $(section + '-btn');
  const box = $(section + '-box');
  button.click(function(e) {
    e.stopPropagation();
    e.preventDefault();
    $(this).toggleClass('is-active');
    const checkActive = $(this).hasClass('is-active'); // chack if active
    if (checkActive) {
      // if active, set max-height to the height of container
      $(box).css( 'max-height', $(box).get(0).scrollHeight );
    } else {
      // if NOT active, set max-height to 0
      $(box).css( 'max-height', 0 );
    }
  });
}

// Same Page CTA Controls
function sectionJump() {
  const btn = $('a.btn');
  btn.click(function(e) {
    // get href info
    const checkURL = $('html').find(this).attr('href');
    // if href starts with a hash, execute page scroll to section
    if (checkURL[0] == '#') {
      e.preventDefault();
      e.stopPropagation();
      // animate to page content
      $('html, body').animate({
        scrollTop: $(checkURL).offset().top
      }, 900);
    }
  });
}

function caseTeaseNext() {
  const btn = $('.cta-button-right');

  btn.waypoint({
    handler: function(direction) {
      if (direction === 'down') {
        btn.addClass('is-expanded');
      } else {
        btn.removeClass('is-expanded');
      }
    },
    offset: 'bottom-in-view'
  });
}

// Scroll Reveal Declarations
function scrollReveal() {
  window.sr = ScrollReveal();

  const revealTop = {
    duration   : 700,
    distance   : '30%',
    easing     : 'ease-in-out',
    origin     : 'top',
    scale      : 1,
    viewFactor : 0.5,
  };

  const revealRight = {
    duration   : 700,
    distance   : '30%',
    easing     : 'ease-in-out',
    origin     : 'right',
    scale      : 1,
    viewFactor : 0.5,
  };

  const revealBottom = {
    duration   : 700,
    distance   : '30%',
    easing     : 'ease-in-out',
    origin     : 'bottom',
    scale      : 1,
    viewFactor : 0.5,
  };

  const revealLeft = {
    duration   : 700,
    distance   : '30%',
    easing     : 'ease-in-out',
    origin     : 'left',
    scale      : 1,
    viewFactor : 0.5,
  };

  const revealContent = {
    duration   : 700,
    distance   : '40px',
    easing     : 'ease-in-out',
    origin     : 'bottom',
    scale      : 1,
    viewFactor : 0.9,
  }

  const reveal = {
    duration   : 700,
    distance   : '0',
    easing     : 'ease-in-out',
    scale      : 1,
    viewFactor : 0.5,
  }

  const rotate = {
    duration   : 700,
    distance   : '30px',
    easing     : 'ease-in-out',
    rotate     : { z: 10 },
    scale      : 1.1,
    viewFactor : 0.6,
  }

  const tall = {
    duration   : 1000,
    distance   : '30%',
    easing     : 'ease-in-out',
    origin     : 'bottom',
    scale      : 1,
    viewFactor : 0.1,
  }

  sr.reveal('.case-referral-quote-icon', {
    duration   : 1000,
    distance   : '40px',
    easing     : 'ease-out',
    origin     : 'top',
    scale      : 1,
    viewFactor : 0.9,
  });

  sr.reveal('.pin', {
    duration   : 700,
    distance   : '40px',
    easing     : 'ease-out',
    origin     : 'top',
    scale      : 1,
    viewFactor : 0.9,
  }, 300);

  sr.reveal('.work-card', {
    duration   : 600,
    distance   : '60px',
    easing     : 'ease-out',
    // rotate     : { z: 5 },
    origin     : 'bottom',
    scale      : 1,
    viewFactor : 0.5,
    beforeReveal: function (el) { el.classList.add('is-visible') },
  }, 150);

  sr.reveal('.work-card img', {
    duration   : 1000,
    scale      : 1.05,
    origin     : 'bottom',
    distance   : '25%',
    easing     : 'ease-out',
    viewFactor : 0.5,
  }, 150);

  // sr.reveal('.work-card-title', {
  //   delay      : 300,
  //   duration   : 500,
  //   scale      : 1,
  //   distance   : '20px',
  //   origin     : 'bottom',
  //   easing     : 'ease-out',
  //   viewFactor : 0.5,
  // }, 150);
  //
  // sr.reveal('.work-card-tagline', {
  //   delay      : 150,
  //   duration   : 500,
  //   scale      : 1,
  //   distance   : '20px',
  //   origin     : 'bottom',
  //   easing     : 'ease-out',
  //   viewFactor : 0.5,
  // }, 150);


  // General Reveals (works multiple times per page)
  sr.reveal('.case-study .inner-block-content', revealContent);
  sr.reveal('.case-exec-summary-text', reveal);
  sr.reveal('.sr-delay', { delay : 300 });
  sr.reveal('.sr-delay-double', { delay : 600 });
  sr.reveal('.sr-delay-tripple', { delay : 900 });
  sr.reveal('.sr-half-view', {viewFactor : 0.5});
  sr.reveal('.sr-reveal', reveal);
  sr.reveal('.sr-rotate', rotate);
  sr.reveal('.sr-top', revealTop);
  sr.reveal('.sr-right', revealRight);
  sr.reveal('.sr-bottom', revealBottom);
  sr.reveal('.sr-left', revealLeft);
  sr.reveal('.sr-tall', tall);

  // Stagger Specific Reveals (only works once per page per class)
  sr.reveal('.case-breakdown-box', revealContent, 200);
  sr.reveal('.sr-stagger-rotate', rotate, 200);
  sr.reveal('.sr-stagger-reveal', reveal, 200);
  sr.reveal('.sr-stagger-top', revealTop, 200);
  sr.reveal('.sr-stagger-right', revealRight, 200);
  sr.reveal('.sr-stagger-bottom', revealBottom, 150);
  sr.reveal('.sr-stagger-left', revealLeft, 200);

  // Unbox forklift animation
  sr.reveal('.unbox-forklift .inner-block-image:nth-of-type(1)', {
    distance   : '50px',
    origin     : 'bottom',
  });
  sr.reveal('.unbox-forklift .inner-block-image:nth-of-type(2)', {
    distance   : '100px',
    origin     : 'left',
    delay      : '500',
  });
  sr.reveal('.unbox-forklift .inner-block-image:nth-of-type(3)', {
    distance   : '50px',
    origin     : 'right',
    delay      : '1000',
  });
  sr.reveal('.unbox-forklift .inner-block-image:nth-of-type(4)', {
    distance   : '20px',
    origin     : 'top',
    delay      : '1500',
  });
}

// Video play/pause toggle based on whether in view or not
function videoPlay() {
  const video = $('video');
  video.each(function(index, vid) {
    if ( !$(this).hasClass('marquee__video') ) {
      new Waypoint.Inview({
        element: $(this),
        enter: function() {
          vid.play();
        },
        exited: function() {
          vid.pause();
        } 
      });
    }
  });
}

// Shows current state for nav items based on URL 
function navCurrent() {
  const current_location = window.location.href.split('/');
  const page = current_location[current_location.length - 1];

  // Find a link in the nav that corresponds to current page URL for menu link
  const navLink = $('.subnav-item[href*="' + page + '"]');

  // Check if submenu link or not
  if ( $('body').find('.subnav').length ) {
    navLink.addClass('is-active'); 
  }
}

function introAnimate() {
  const content = $('.case-header-client-name, .case-header-tagline, .case-header-type');
  const tl = new TimelineMax({delay: 0.5});

  if ( window.matchMedia( '(min-width: 768px)' ).matches ) {
    tl
      .staggerFromTo(content, 2, {autoAlpha: 0}, {autoAlpha: 1}, 0.25, 0)
      .staggerFrom(content, 0.8, {y: '100px', ease: Power1.easeOut}, 0.15, 0);
  }
}