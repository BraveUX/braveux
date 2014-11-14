$(document).ready(function() {
  console.log('Looking for this? https://github.com/BraveUX/website');

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