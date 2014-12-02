$(document).ready(function() {

  initToggle();
  initScrollSpy();
  initEasterEggs();
  console.log('Looking for this? https://github.com/BraveUX/website');


});

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