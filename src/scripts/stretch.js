$(window).on('load', function() {
  if($('body').hasClass('stretch-brand')) {
    homeAnimation();
  }
});

// Global intro elements
const $bgWave = $('.hero .wave');
const $marquee = $('.marquee');
const $marqueeLine = $('.marquee__line');
const $marqueeLogo = $('.marquee__logo');
const $marqueeTagline = $('.marquee__tagline');
const $marqueeTaglineLogo = $('.marquee__tagline--logo');
const $item1 = $('.marquee__list-item:nth-of-type(1)');
const $item2 = $('.marquee__list-item:nth-of-type(2)');
const $item3 = $('.marquee__list-item:nth-of-type(3)');
const $item4 = $('.marquee__list-item:nth-of-type(4)');
const video = document.querySelector('.block__video--hero');

function homeAnimation() {
  // Set Home timelines
  const tl = new TimelineMax({delay: 0.5}); // standard timeline
  const tlMobile = new TimelineMax({delay: 0.5}); // mobile timeline
  const loop = new TimelineMax({repeat: -1}); // tagline looper timeline

  // Home intro elements
  // const video = document.querySelector('.block__video--hero');

  const itemIn = {
    autoAlpha: 1, 
    rotationX: '0deg'
  }
  
  function itemOut(time) {
    return {
      autoAlpha: 0, 
      rotationX: '90deg', 
      transformOrigin:'0% 0%', 
      clearProps: 'all',
      // While tweening out, change video position
      onStart: function() {
        video.currentTime = time;
      }
    }
  }

  loop
    // every run - continued
    .to($item1, 0.4, itemOut(4.15), '+=3.6')
    // every note
    .to($item2, 0.4, itemIn, '-=0.3')
    .to($item2, 0.4, itemOut(8.02), '+=3.6')
    // every turn
    .to($item3, 0.4, itemIn, '-=0.3')
    .to($item3, 0.4, itemOut(12.04), '+=3.6')
    // every moment
    .to($item4, 0.4, itemIn, '-=0.3')
    .to($item4, 0.4, itemOut(0), '+=3.6')
    // every run
    .to($item1, 0.4, itemIn, '-=0.3');
  
  if ( window.matchMedia( '(min-width: 768px)' ).matches ) {
    // Desktop Intro Timeline
    tl
      .fromTo($bgWave, 0.8, {autoAlpha: 0}, {autoAlpha: 1}, 0)
      .fromTo($marquee, 0.3, {autoAlpha: 0}, {autoAlpha: 1}, 0)
      .fromTo($marqueeLine, 0.6, {width: '0%'}, {width: '100%'}, 0)
      .fromTo($marqueeLogo, 0.6, {y: '+=200', autoAlpha: 0}, {y: '55', autoAlpha: 1}, 0.1)
      .fromTo($marqueeTaglineLogo, 0.2,{opacity: 0}, {opacity: 1, repeat: 4, repeatDelay: 0.3, yoyo: true})
      .add('content -=0.5')
      .staggerFromTo($marqueeTagline, 0.4, {autoAlpha: 0, y: 10}, {autoAlpha: 1, y: 0}, 0.15, 'content')
      .to($marqueeLogo, 0.35, {y: '0%'}, 'content')
      // video
      .fromTo(video, 1, {autoAlpha: 0}, {autoAlpha: 1, ease: Power1.easeIn, onStart: function() { video.defaultPlaybackRate = 1; video.playbackRate = 1; video.currentTime = 0; video.play(); }}, 'content')
      // every run
      .to($item1, 0.4, itemIn, 'content')
      .add(loop, 'content');
  } else {
    // Mobile Intro Timeline (marginally quicker tweening)
    tlMobile
      .fromTo($bgWave, 0.8, {autoAlpha: 0}, {autoAlpha: 1}, 0)
      .fromTo($marquee, 0.3, {autoAlpha: 0}, {autoAlpha: 1}, 0)
      .fromTo($marqueeLine, 0.6, {width: '0%'}, {width: '100%'}, 0)
      .add('content')
      .fromTo($marqueeLogo, 0.6, {y: '+=100', autoAlpha: 0}, {y: '0', autoAlpha: 1}, 0.2)
      .staggerFromTo($marqueeTagline, 0.4, {autoAlpha: 0, y: 10}, {autoAlpha: 1, y: 0}, 0.15, 'content')
      .fromTo($marqueeTaglineLogo, 0.4, {autoAlpha: 0, y: 10}, {autoAlpha: 1, y: 0}, 'content')
      // video (won't run/play on mobile but is here in case media query increases)
      .fromTo(video, 1, {autoAlpha: 0}, {autoAlpha: 1, ease: Power1.easeIn, onStart: function() { video.defaultPlaybackRate = 1; video.playbackRate = 1; video.currentTime = 0; video.play(); }}, 'content')
      // every run
      .to($item1, 0.4, itemIn, 'content')
      .add(loop, 'content');
  }
}
