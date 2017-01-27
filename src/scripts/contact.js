// CONTACT PAGE CONTROLS

// Contact Letter Flip
$(function() {
  var letter = $('.contact-letter'); // Get Letter
  var letterDistance = $('.contact-letter').offset().top;

  // Update var if window resizes
  $(window).resize(function() {
    letterDistance = $('.contact-letter').offset().top;
  });

  // Flip card when scrolled into viewport
  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll >= letterDistance/1.7) {
      letter.addClass('is-flipped');
    } else {
      letter.removeClass('is-flipped');
    }
  });
});

// Contact Letter Label Control
// $(function() {
//   $('input, textarea').each(function() {
//     $(this).blur('data', function() {
//       var checkValue = $(this).val();
//       if (checkValue !== '') {
//         $(this).next('label').addClass('has-content');
//       } else {
//         $(this).next('label').removeClass('has-content');
//       }
//     });
//   });
// });

// Contact Letter Paging & Validation
// $(function() {
//   var form = $('.contact-form');
//   var stepIndex = 0;
//   var formSteps = {
//     // input : error
//     page1 : {
//       'user-name' : 'error-name',
//       'organization' : 'error-org'
//     },
//     page2 : {
//       'comment' : 'error-comment',
//     },
//     page3 : {
//       'email' : 'error-email',
//       'telephone' : 'error-tel'
//     }
//   };
//
//   formSteps.each(function(key, value) {
//     // key = page | value = array
//     var $pageBtn = $('#' + key + ' .contact-form-cta').click(function(e) {
//       validateFormFields(value);
//     });
//   });
//
//   function configurePager() {
//     $('.contact-form-paging').each(function(e) {
//       $pagers = $(this).children('.paging-circle');
//       $pagers.each(function(index, value) {
//         $pager = $(this);
//         $pager.onclick (function(e) {
//           if((index + 1) < stepIndex) {
//             gotoFormStep(index + 1);
//           }
//         });
//       });
//     });
//   }
//
//   function validateFormFields(formFields) {
//     // validate fields based on incoming array
//     var isValid = true;
//
//     formFields.each(obj, function(key, value) {
//       var formField = document.getElementById(key);
//
//       if( !formField.validity.valid ) {
//         // reveal error message
//         $('.' + value).css('visibility','visible');
//         isValid = false;
//       }
//     });
//
//     if(isValid) {
//       gotoFormStep(stepIndex + 1);
//     }
//   }
//
//   function gotoFormStep(newIndex) {
//     $step = getCurrentStep();
//     // hide current step
//     $step.css('visibility','hidden');
//
//     // update stepIndex
//     stepIndex = newIndex;
//
//     // show next step
//     $step.css('visibility','visible');
//   }
//
//   function getCurrentStep(){
//     return $('#' + Object.keys(formSteps)[stepIndex]);
//   }
// });
