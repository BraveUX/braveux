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

  // Repo Info
  console.log('Looking for this? https://github.com/BraveUX/braveux');
});

// function pageFade() {
//   var newLocation;
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
  var lastScroll = 0;
  var $window = $(window);
  var menu =  $('.menu');

  $window.on('scroll', function() {
      var scrollTop = $window.scrollTop();

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


  // $window.on('scroll', function() {
  //   // Only run if on homepage
  //   if ( window.location.pathname == '/' || window.location.pathname == '/index.html' ) {
  //     if ( $(document).scrollTop() >= 150) {
  //       body.removeClass('home-menu');
  //     } else {
  //       body.addClass('home-menu');
  //     }
  //   }
  // })
}

function initEgg() {
  var toggleEgg = $('.footer-stars');
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
  var button = $(section + '-btn');
  var box = $(section + '-box');
  button.click(function(e) {
    e.stopPropagation();
    e.preventDefault();
    $(this).toggleClass('is-active');
    var checkActive = $(this).hasClass('is-active'); // chack if active
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
  var btn = $('a.btn');
  btn.click(function(e) {
    // get href info
    var checkURL = $('html').find(this).attr('href');
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
  var btn = $('.cta-button-right');

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

  var revealTop = {
    duration   : 600,
    distance   : '60px',
    easing     : 'ease-in-out',
    // rotate     : { z: 5 },
    origin     : 'top',
    scale      : 1,
    viewFactor : 0.5,
  };

  var revealRight = {
    duration   : 700,
    distance   : '30%',
    easing     : 'ease-in-out',
    origin     : 'right',
    scale      : 1,
    viewFactor : 0.5,
  };

  var revealBottom = {
    duration   : 700,
    distance   : '30%',
    easing     : 'ease-in-out',
    origin     : 'bottom',
    // scale      : 1,
    viewFactor : 0.5,
  };

  var revealLeft = {
    duration   : 700,
    distance   : '30%',
    easing     : 'ease-in-out',
    origin     : 'left',
    scale      : 1,
    viewFactor : 0.5,
  };

  var revealContent = {
    duration   : 700,
    distance   : '40px',
    easing     : 'ease-in-out',
    origin     : 'bottom',
    scale      : 1,
    viewFactor : 0.9,
  }

  var reveal = {
    duration   : 700,
    distance   : '0',
    easing     : 'ease-in-out',
    scale      : 0.9,
    viewFactor : 0.5,
  }

  var rotate = {
    duration   : 700,
    distance   : '30px',
    easing     : 'ease-in-out',
    rotate     : { z: 10 },
    scale      : 1.1,
    viewFactor : 0.6,
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
  sr.reveal('.sr-reveal', reveal);
  sr.reveal('.sr-rotate', rotate);
  sr.reveal('.sr-top', revealTop);
  sr.reveal('.sr-right', revealRight);
  sr.reveal('.sr-bottom', revealBottom);
  sr.reveal('.sr-left', revealLeft);

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
