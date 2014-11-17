$(document).ready(function() {
  console.log('Looking for this? https://github.com/BraveUX/website');

  initScrollSpy();
  initEasterEggs();
});

function initEasterEggs() {
  $('.footer-copyright-stars').click(function() {
    // scroll to bottom
    $('footer').velocity('scroll', { duration: 500, axis: 'y', begin: function() {
      // show easter egg
      $('footer').addClass('is-egg');
    }});
  });
}

function initScrollSpy() {
  window.sr = new scrollReveal({
    move: '0px',
    over: '0.5s',
    wait: '0s',
    easing: 'ease',
    mobile: true,
    delay: 'once',

    vFactor: 0.30     // 70% of element onscreen to trigger reveal
  });
}