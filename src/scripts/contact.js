// CONTACT PAGE CONTROLS

// Contact Letter Flip
$(function() {
  var letter = $('.contact-letter'); // Get Letter
  var windowHeight = $(window).height()/8; // Flip at 1/8 window

  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll >= windowHeight) {
      letter.addClass('is-flipped');
    } else {
      letter.removeClass('is-flipped');
    }
  });
});

// Contact Letter Label Control
$(function() {
  $('input, textarea').each(function() {
    $(this).blur('data', function() {
      var checkValue = $(this).val();
      if (checkValue !== '') {
        $(this).next('label').addClass('has-content');
      } else {
        $(this).next('label').removeClass('has-content');
      }
    });
  });
});

// Contact Letter Paging & Validation
$(function() {
  var form = $('.contact-form');

  // Buttons
  var pageOneBtn = $('#page1 .contact-form-cta');
  var pageTwoBtn = $('#page2 .contact-form-cta');
  var pageThreeBtn = $('#page3 .contact-form-cta');

  // Fields
  var name = document.getElementById('user-name');
  var errorName = $('.error-name');
  var org = document.getElementById('organization');
  var errorOrg = $('.error-org');
  var comment = document.getElementById('comment');
  var errorComment = $('.error-comment');
  var email = document.getElementById('email');
  var errorEmail = $('.error-email');
  var tel = document.getElementById('telephone');
  var errorTel = $('.error-tel');

  // Page 1
  $(pageOneBtn).click(function(e) {
    if (!name.validity.valid && !org.validity.valid) {
      e.preventDefault();
      errorName.addClass('is-active');2
      errorOrg.addClass('is-active');
    } else if (!name.validity.valid) {
      e.preventDefault();
      errorOrg.removeClass('is-active');
      errorName.addClass('is-active');
    } else if (!org.validity.valid) {
      e.preventDefault();
      errorName.removeClass('is-active');
      errorOrg.addClass('is-active');
    } else {
      var nameVal = $('#user-name').val(); // Get Value
      errorName.removeClass('is-active');
      errorOrg.removeClass('is-active');
      $('#page2 .contact-form-text').html('Hello ' + nameVal + '! How can we help?');
      $('#page1').css('visibility', 'hidden');
      $('#page2').css('visibility', 'visible');
    }
  });

  // Page 2
  $(pageTwoBtn).click(function(e) {
    if (!comment.validity.valid) {
      e.preventDefault();
      errorComment.addClass('is-active');
    } else {
      errorComment.removeClass('is-active');
      $('#page2').css('visibility', 'hidden');
      $('#page3').css('visibility', 'visible');
    }
  });

  // Page 3
  $(pageThreeBtn).click(function(e) {
    if (!email.validity.valid && !tel.validity.valid) {
      e.preventDefault();
      errorEmail.addClass('is-active');
      errorTel.addClass('is-active');
    } else if (!email.validity.valid) {
      e.preventDefault();
      errorEmail.addClass('is-active');
    } else if (!tel.validity.valid) {
      e.preventDefault();
      errorEmail.removeClass('is-active');
      errorTel.addClass('is-active');
    } else {
      e.preventDefault();
      errorEmail.removeClass('is-active');
      errorTel.removeClass('is-active');
      $('#page3').css('visibility', 'hidden');
      $('#page4').css('visibility', 'visible');
    }
  });

  // Paging Dots
  $('#page2 .paging-circle:nth-of-type(1)').click(function(e) { // Page 2
    e.preventDefault();
    $('#page2').css('visibility', 'hidden');
    $('#page1').css('visibility', 'visible');
    $
  })
  $('#page3 .paging-circle:nth-of-type(1)').click(function(e) { // Page 3
    e.preventDefault();
    $('#page3').css('visibility', 'hidden');
    $('#page1').css('visibility', 'visible');
    $
  })
  $('#page3 .paging-circle:nth-of-type(2)').click(function(e) { // Page 3
    e.preventDefault();
    $('#page3').css('visibility', 'hidden');
    $('#page2').css('visibility', 'visible');
    $
  })
});


var formSteps =

[['#page1', {this:that}], ['#page1', {this:that}]]
