$(document).ready(function() {
    // pageFade();
    initMobileNav();
    homeHeroNav();
    initNavHide();
    initEgg();
    caseTeaseNext();
    imageRatio();
    toggleSection('.career');
    sectionJump();
    contactCardFlip();
    videoPlay();
    navCurrent();
    introAnimate();
    animateGCrit();
    animateMhg();
    ludusFrame();

    // Repo Info
    console.log('Looking for this? https://github.com/BraveUX/braveux');
});

if ($('video').length) {
    $(window).on(
        'scroll',
        _.throttle(function() {
            // throttle waypoint location to account for image resize
            Waypoint.refreshAll();
        }, 1000)
    );
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

// Check for IE
function isIE(userAgent) {
    userAgent = userAgent || navigator.userAgent;
    return (
        userAgent.indexOf('MSIE ') > -1 || userAgent.indexOf('Trident/') > -1
    );
}

// Hides menu on scroll-down
function initNavHide() {
    let lastScroll = 0;
    const $window = $(window);
    const menu = $('.menu, .subnav');

    $window.on('scroll', function() {
        const scrollTop = $window.scrollTop();

        // If scrolling down and document is more than 300px down
        if (scrollTop > lastScroll && $(document).scrollTop() >= 300) {
            // Hide Menu
            menu.addClass('hidden');
            lastScroll = scrollTop;
        } else {
            // Show Menu
            menu.removeClass('hidden');
            lastScroll = scrollTop;
        }
    });
}

// Controls the home navigation expand/collapse
function homeHeroNav() {
    if (
        window.location.pathname == '/' ||
        window.location.pathname == '/index.html' ||
        window.location.pathname == '/braveux/' ||
        window.location.pathname == '/braveux/index.html'
    ) {
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
    $('.subnav-container').animate(
        {
            scrollLeft: '-=150px'
        },
        'normal'
    );
});

$('.subnav-scroll-indicator--right').on('click', function(e) {
    e.preventDefault();
    $('.subnav-container').animate(
        {
            scrollLeft: '+=150px'
        },
        'normal'
    );
});

// Or on horizontal subnav scroll
$('.subnav-container').scroll(function() {
    // Check for subnav on page
    if ($('body').find('.subnav').length) {
        subnavIndicators();
    }
});

// Or on Resize
$(window).on('resize', function() {
    if ($('body').find('.subnav').length) {
        subnavIndicators();
    }
});

// Run nav once ready
$(document).ready(function() {
    // Check for subnav on page
    if ($('body').find('.subnav').length) {
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
        $('html, body').animate(
            {
                scrollTop: toggleEgg.offset().top
            },
            900
        );
    });
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
            $(box).css('max-height', $(box).get(0).scrollHeight);
        } else {
            // if NOT active, set max-height to 0
            $(box).css('max-height', 0);
        }
    });
}

// Same Page CTA Controls
function sectionJump() {
    const btn = $('a.btn');
    btn.click(function(e) {
        // get href info
        const checkURL = $('html')
            .find(this)
            .attr('href');
        // if href starts with a hash, execute page scroll to section
        if (checkURL[0] == '#') {
            e.preventDefault();
            e.stopPropagation();
            // animate to page content
            $('html, body').animate(
                {
                    scrollTop: $(checkURL).offset().top
                },
                900
            );
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
        duration: 700,
        distance: '30%',
        easing: 'ease-in-out',
        origin: 'top',
        scale: 1,
        viewFactor: 0.5
    };

    const revealRight = {
        duration: 700,
        distance: '30%',
        easing: 'ease-in-out',
        origin: 'right',
        scale: 1,
        viewFactor: 0.5
    };

    const revealBottom = {
        duration: 700,
        distance: '30%',
        easing: 'ease-in-out',
        origin: 'bottom',
        scale: 1,
        viewFactor: 0.5
    };

    const revealLeft = {
        duration: 700,
        distance: '30%',
        easing: 'ease-in-out',
        origin: 'left',
        scale: 1,
        viewFactor: 0.5
    };

    const revealContent = {
        duration: 700,
        distance: '40px',
        easing: 'ease-in-out',
        origin: 'bottom',
        scale: 1,
        viewFactor: 0.5
    };

    const reveal = {
        duration: 700,
        distance: '0',
        easing: 'ease-in-out',
        scale: 1,
        viewFactor: 0.5
    };

    const rotate = {
        duration: 700,
        distance: '30px',
        easing: 'ease-in-out',
        rotate: {
            z: 10
        },
        scale: 1.1,
        viewFactor: 0.6
    };

    const tall = {
        duration: 1000,
        distance: '30%',
        easing: 'ease-in-out',
        origin: 'bottom',
        scale: 1,
        viewFactor: 0.1
    };

    sr.reveal('.case-referral-quote-icon', {
        duration: 1000,
        distance: '40px',
        easing: 'ease-out',
        origin: 'top',
        scale: 1,
        viewFactor: 0.9
    });

    sr.reveal(
        '.pin',
        {
            duration: 700,
            distance: '40px',
            easing: 'ease-out',
            origin: 'top',
            scale: 1,
            viewFactor: 0.9
        },
        300
    );

    sr.reveal(
        '.rokt-hiw .inner-block-image.absolute-top',
        {
            duration: 700,
            delay: 600,
            distance: '200px',
            easing: 'ease-out',
            origin: 'bottom',
            scale: 1,
            viewFactor: 0.1
        },
        300
    );

    sr.reveal(
        '.card',
        {
            duration: 600,
            distance: '60px',
            easing: 'ease-out',
            // rotate     : { z: 5 },
            origin: 'bottom',
            scale: 1,
            viewFactor: 0.5,
            beforeReveal: function(el) {
                el.classList.add('is-visible');
            }
        },
        150
    );

    // sr.reveal('.card img', {
    //   duration   : 1000,
    //   scale      : 1.05,
    //   origin     : 'bottom',
    //   distance   : '25%',
    //   easing     : 'ease-out',
    //   viewFactor : 0.5,
    // }, 150);

    // sr.reveal('.card-title', {
    //   delay      : 300,
    //   duration   : 500,
    //   scale      : 1,
    //   distance   : '20px',
    //   origin     : 'bottom',
    //   easing     : 'ease-out',
    //   viewFactor : 0.5,
    // }, 150);
    //
    // sr.reveal('.card-tagline', {
    //   delay      : 150,
    //   duration   : 500,
    //   scale      : 1,
    //   distance   : '20px',
    //   origin     : 'bottom',
    //   easing     : 'ease-out',
    //   viewFactor : 0.5,
    // }, 150);

    // General Reveals (works multiple times per page)
    sr.reveal('.inner-block-content', revealContent);
    sr.reveal('.case-exec-summary-text', reveal);
    sr.reveal('.sr-delay', {
        delay: 200
    });
    sr.reveal('.sr-delay-double', {
        delay: 400
    });
    sr.reveal('.sr-delay-tripple', {
        delay: 600
    });
    sr.reveal('.sr-half-view', {
        viewFactor: 0.5
    });
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
    sr.reveal('.sr-stagger-tall', tall, 300);
    sr.reveal('.sr-stagger-left', revealLeft, 200);

    // Unbox forklift animation
    sr.reveal('.unbox-forklift .inner-block-image:nth-of-type(1)', {
        distance: '50px',
        origin: 'bottom'
    });
    sr.reveal('.unbox-forklift .inner-block-image:nth-of-type(2)', {
        distance: '100px',
        origin: 'left',
        delay: '500'
    });
    sr.reveal('.unbox-forklift .inner-block-image:nth-of-type(3)', {
        distance: '50px',
        origin: 'right',
        delay: '1000'
    });
    sr.reveal('.unbox-forklift .inner-block-image:nth-of-type(4)', {
        distance: '20px',
        origin: 'top',
        delay: '1500'
    });
}

function contactCardFlip() {
    // Check that 'contact-letter' is on page
    if ($('body').find('.contact-letter').length && !isIE()) {
        const card = $('.contact-letter');
        card.on('click', function() {
            card.toggleClass('is-flipped');
        });

        new Waypoint({
            element: card,
            handler: function(direction) {
                if (direction == 'down') {
                    card.addClass('is-flipped');
                }
            },
            offset: '25%'
        });
    }
}

// Video play/pause toggle based on whether in view or not
function videoPlay() {
    const video = $('video');
    video.each(function(index, vid) {
        if (!$(this).hasClass('marquee__video')) {
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

/* eslint-disable */
// LAZYR (lazy load images)
const instance = Layzr({
    threshold: 200 // Load within 200% of viewport
});

// add callbacks
instance.on('src:after', element => {
    if (element.classList.contains('bg-image')) {
        element.style.backgroundImage = `url("${element.getAttribute('src')}")`;
        element.removeAttribute('src');
    }
});

// start it up, when the DOM is ready
document.addEventListener('DOMContentLoaded', event => {
    instance
        .update() // track initial elements
        .check() // check initial elements
        .handlers(true); // bind scroll and resize handlers
    scrollReveal(); // run scrollReveal after element loads
});
/* eslint-enable */

/*
  The following functions purpose is to set the image size for lazy-loaded images
  that do not have a set height.

  Without this, the images would take up 0 height on load, and then reposition the
  content once they load in. This function also fixes the subnav autoscroller on
  'Explore' page as the image height is now accounted for. In addition, the page
  scrolls better as content sizing is all accounted for before lazy-loading images.
*/
function imageRatio() {
    const $image = $('.lazy-ratio');

    // Get each desktop frame
    $image.each(function() {
        const $this = $(this);
        // Find the % width of $this (subtract parent padding left/right if it has it)
        const getEleWidth =
            100 *
            parseFloat($this.css('width')) /
            (parseFloat($this.parent().css('width')) -
                (parseFloat($this.parent().css('padding-left')) +
                    parseFloat($this.parent().css('padding-right'))));

        // Calculate ratio based on data image size and element width -- (2 decimal places)
        const getRatio = (
            this.dataset.height /
            this.dataset.width *
            getEleWidth
        ).toFixed(2);

        // Make sure that the image has a ratio
        if (getRatio >= 0) {
            // apply a padding-bottom and height 0 for ratio scaling
            $this
                .css('padding-bottom', `${getRatio}%`) // give padding-bottom based on image ratio
                .removeAttr('data-height data-width'); // remove data from HTML
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
    if ($('body').find('.subnav').length) {
        navLink.addClass('is-active');
    }
}

function introAnimate() {
    const content = $(
        '.case-header-logo, .case-header-client-name, .case-header-tagline, .case-header-type'
    );
    const tl = new TimelineMax({
        delay: 0.5
    });

    tl
        .staggerFromTo(
            content,
            2,
            {
                autoAlpha: 0
            },
            {
                autoAlpha: 1
            },
            0.25,
            0
        )
        .staggerFrom(
            content,
            0.8,
            {
                y: '100px',
                ease: Power1.easeOut
            },
            0.15,
            0
        );
}

function animateGCrit() {
    if ($('.gcrit-image-break').length) {
        let hasRun = false;
        const tl = new TimelineMax({
            delay: 0.5
        });

        function generalTimeline(tileNum) {
            return new TimelineMax()
                .to(
                    `.gcrit-image-break .container > .lazy-ratio:nth-of-type(${tileNum}) .inner-block-image`,
                    2,
                    {
                        autoAlpha: 1
                    },
                    0
                )
                .fromTo(
                    `.gcrit-image-break .container > .lazy-ratio:nth-of-type(${tileNum}) .inner-block-image`,
                    1.5,
                    {
                        scale: 0,
                        y: '100%'
                    },
                    {
                        scale: 1,
                        y: '0%',
                        ease: Power4.easeOut
                    },
                    0
                )
                .to(
                    `.gcrit-image-break .container > .lazy-ratio:nth-of-type(${tileNum}) .inner-block-image`,
                    1,
                    {
                        scale: 0.9,
                        autoAlpha: 0.35,
                        ease: Power1.easeIn
                    },
                    1
                );
        }

        // Hover Timeline
        function hoverTimeline() {
            const tlHover = new TimelineMax();
            const tileBox = '.gcrit-image-break .box.lazy-ratio';
            const tile =
                '.gcrit-image-break .box.lazy-ratio > .inner-block-image:nth-of-type(1)';
            const tileHover =
                '.gcrit-image-break .box.lazy-ratio > .inner-block-image:nth-of-type(2)';

            return tlHover
                .to(
                    tile,
                    2,
                    {
                        autoAlpha: 1
                    },
                    0
                )
                .fromTo(
                    tileBox,
                    1.5,
                    {
                        scale: 0,
                        y: '100%'
                    },
                    {
                        scale: 1,
                        y: '4%',
                        ease: Power4.easeOut
                    },
                    0
                )
                .fromTo(
                    tileBox,
                    1,
                    {
                        y: '4%'
                    },
                    {
                        y: '0%',
                        boxShadow:
                            '0 0 0 1px rgba(0, 0, 0, 0.05), 0 10px 20px rgba(0, 0, 0, 0.15), 0 10px 10px rgba(0, 0, 0, 0.1)'
                    },
                    2
                )
                .to(
                    tileHover,
                    1,
                    {
                        autoAlpha: 1
                    },
                    2
                );
        }

        new Waypoint.Inview({
            element: $('.gcrit-image-break .inner-block-image'),
            enter: function() {
                if (!hasRun) {
                    tl
                        .add(generalTimeline(1), 0)
                        .add(hoverTimeline(), 0.25)
                        .add(generalTimeline(3), 0.5)
                        .add(generalTimeline(4), 0.75);

                    hasRun = true;
                }
            }
        });
    }
}

function animateMhg() {
    if ($('.mhg').length) {
        let hasRun = false;
        const tl = new TimelineMax({
            paused: true,
            delay: 0.5
        });

        const graphTop = $('.graph-top');
        const graphBottom = $('.graph-bottom');
        const numTop = $('.num-top');
        const numBottom = $('.num-bottom');

        tl
            .staggerFrom(
                graphTop,
                0.5,
                {
                    attr: {
                        height: 0
                    }
                },
                0.15
            )
            .staggerFrom(
                graphBottom,
                0.5,
                {
                    attr: {
                        height: 0
                    }
                },
                0.15,
                0.5
            )
            .staggerFrom(
                numTop,
                1,
                {
                    y: 10,
                    autoAlpha: 0
                },
                0.15,
                0.5
            )
            .staggerFrom(
                numBottom,
                1,
                {
                    y: -10,
                    autoAlpha: 0
                },
                0.15,
                1
            );

        new Waypoint.Inview({
            element: $('.mhg-graph'),
            enter: function() {
                if (!hasRun) {
                    tl.play();
                    hasRun = true;
                }
            }
        });
    }
}

// Builds Ludus iFrame on page based on url
function ludusFrame() {
    // Only run on a presentation page
    if (document.querySelector('.presentation-box')) {
        // split URL based on '/'
        const splitUrl = window.location.href.split('/');
        // get ending string of URL and remove '?' from start of string
        const getLudusId = splitUrl[splitUrl.length - 1].substr(1);

        // Build iFrame
        const iframe = document.createElement('iframe');
        // set src to ludus if ID is given, else build nothing in iFrame
        iframe.src = getLudusId ? `https://app.ludus.one/${getLudusId}` : '';
        iframe.frameBorder = 0;
        document.querySelector('.presentation-box').appendChild(iframe);
    }
}
