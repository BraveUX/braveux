// Run on page load
$(document).ready(function() {
  ctaScroll();
  mediaCheck();
});

// Returns a function, that, as long as it continues to be invoked, will not
// be triggered. The function will be called after it stops being called for
// N milliseconds. If `immediate` is passed, trigger the function on the
// leading edge, instead of the trailing.
function debounce(func, wait, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
}

// Run on window resize
var checkMediaWidth = debounce(function() {
  mediaCheck();
}, 250);
window.addEventListener('resize', checkMediaWidth);

function mediaCheck() {
  // Check if not on mobile
  if (! $('.menu-mobile-toggle').is(':visible') ) {
    initAnimation('#animation-container-one');
    initAnimation('#animation-container-two');
    initAnimation('#animation-container-three');
    initAnimation('#animation-container-four');
  }
}

// Hero CTA Controls
function ctaScroll() {
  var btn = $('.approach-cta');
  btn.click(function(e) {
    // disable href if JS is enabled
    e.preventDefault();
    e.stopPropagation();
    // animate to page content
    $('html, body').animate({
      scrollTop: $('#approach-section').offset().top
    }, 900);
  });
}

var animationOneVisible, animationTwoVisible, animationThreeVisible, animationFourVisible = false;

// Initialize Animation
function initAnimation(id) {
  $(id).waypoint(function() {
    // Check ID and see whether it's visible
    if ($(id + '[id*="one"]').length && !animationOneVisible) {
      animationOneVisible = true;
      animationOne();
      console.log()
    } else if ($(id + '[id*="two"]').length && !animationTwoVisible) {
      animationTwoVisible = true;
      animationTwo();
    } else if ($(id + '[id*="three"]').length && !animationThreeVisible) {
      animationThreeVisible = true;
      animationThree();
    } else if ($(id + '[id*="four"]').length && !animationFourVisible) {
      animationFourVisible = true;
      animationFour();
    }
  }, {
    offset: '100%'
  });
}

var canvas, stage, exportRoot, anim_container, dom_overlay_container, fnStartAnimation;

//Code to support hidpi screens and responsive scaling.
function makeResponsive(isResp, respDim, isScale, scaleType) {
  var lastW, lastH, lastS = 1;
  window.addEventListener('resize', resizeCanvas);
  resizeCanvas();

  function resizeCanvas() {
    var w = libOne.properties.width,
      h = libOne.properties.height;
    var iw = window.innerWidth,
      ih = window.innerHeight;
    var pRatio = window.devicePixelRatio || 1,
      xRatio = iw / w,
      yRatio = ih / h,
      sRatio = 1;
    if (isResp) {
      if ((respDim == 'width' && lastW == iw) || (respDim == 'height' && lastH == ih)) {
        sRatio = lastS;
      } else if (!isScale) {
        if (iw < w || ih < h)
          sRatio = Math.min(xRatio, yRatio);
      } else if (scaleType == 1) {
        sRatio = Math.min(xRatio, yRatio);
      } else if (scaleType == 2) {
        sRatio = Math.max(xRatio, yRatio);
      }
    }
    canvas.width = w * pRatio * sRatio;
    canvas.height = h * pRatio * sRatio;
    canvas.style.width = dom_overlay_container.style.width = anim_container.style.width = w * sRatio + 'px';
    canvas.style.height = anim_container.style.height = dom_overlay_container.style.height = h * sRatio + 'px';
    stage.scaleX = pRatio * sRatio;
    stage.scaleY = pRatio * sRatio;
    lastW = iw;
    lastH = ih;
    lastS = sRatio;
  }
}

function animationOne() {
  canvas = document.getElementById('canvas-one');
  anim_container = document.getElementById('animation-container-one');
  dom_overlay_container = document.getElementById('dom-overlay-container-one');
  handleComplete();

  function handleComplete() {
    //This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
    exportRoot = new libOne.scene1animationv2();
    stage = new createjs.Stage(canvas);
    stage.addChild(exportRoot);
    //Registers the "tick" event listener.
    fnStartAnimation = function() {
      createjs.Ticker.setFPS(libOne.properties.fps);
      createjs.Ticker.addEventListener("tick", stage);
    }

    makeResponsive(false, 'both', false, 1);
    fnStartAnimation();
    console.log("Launched One");
  }
}

function animationTwo() {
  canvas = document.getElementById("canvas-two");
  anim_container = document.getElementById("animation-container-two");
  dom_overlay_container = document.getElementById("dom-overlay-container-two");
  handleComplete();

  function handleComplete() {
    //This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
    exportRoot = new libTwo.scene2animationv2();
    stage = new createjs.Stage(canvas);
    stage.addChild(exportRoot);
    //Registers the "tick" event listener.
    fnStartAnimation = function() {
      createjs.Ticker.setFPS(libTwo.properties.fps);
      createjs.Ticker.addEventListener("tick", stage);
    }

    makeResponsive(false, 'both', false, 1);
    fnStartAnimation();
    console.log("Launched Two");
  }
}

function animationThree() {
  canvas = document.getElementById("canvas-three");
  anim_container = document.getElementById("animation-container-three");
  dom_overlay_container = document.getElementById("dom-overlay-container-three");
  handleComplete();

  function handleComplete() {
    //This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
    exportRoot = new libThree.scene3animationv2();
    stage = new createjs.Stage(canvas);
    stage.addChild(exportRoot);
    //Registers the "tick" event listener.
    fnStartAnimation = function() {
      createjs.Ticker.setFPS(libThree.properties.fps);
      createjs.Ticker.addEventListener("tick", stage);
    }

    makeResponsive(false, 'both', false, 1);
    fnStartAnimation();
    console.log("Launched Three");
  }
}

function animationFour() {
  canvas = document.getElementById("canvas-four");
  anim_container = document.getElementById("animation-container-four");
  dom_overlay_container = document.getElementById("dom-overlay-container-four");
  handleComplete();

  function handleComplete() {
    //This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
    exportRoot = new libFour.scene4animationv2();
    stage = new createjs.Stage(canvas);
    stage.addChild(exportRoot);
    //Registers the "tick" event listener.
    fnStartAnimation = function() {
      createjs.Ticker.setFPS(libFour.properties.fps);
      createjs.Ticker.addEventListener("tick", stage);
    }

    makeResponsive(false, 'both', false, 1);
    fnStartAnimation();
    console.log("Launched Four");
  }
}
