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
    // Scene 1
    initAnimation('#animation-container-one');
    sectionAnimation('one','libOne','scene1animationv2');
    // Scene 2
    initAnimation('#animation-container-two');
    sectionAnimation('two','libTwo','scene2animationv2');
    // Scene 3
    initAnimation('#animation-container-three');
    sectionAnimation('three','libThree','scene3animationv2');
    // Scene 4
    initAnimation('#animation-container-four');
    sectionAnimation('four','libFour','scene4animationv2');
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

// Initialize Animation
function initAnimation(id) {
  // Only plays animation when in viewport
  new Waypoint.Inview({
    element: $(id),
    enter: function() {
      if (id.indexOf('one') >= 0) {
        resumeAnimation(0);
      } else if (id.indexOf('two') >= 0) {
        resumeAnimation(1);
      } else if (id.indexOf('three') >= 0) {
        resumeAnimation(2)
      } else if (id.indexOf('four') >= 0) {
        resumeAnimation(3)
      }
    },
    exited: function() {
      if (id.indexOf('one') >= 0) {
        pauseAnimation(0);
      } else if (id.indexOf('two') >= 0) {
        pauseAnimation(1);
      } else if (id.indexOf('three') >= 0) {
        pauseAnimation(2)
      } else if (id.indexOf('four') >= 0) {
        pauseAnimation(3)
      }
    }
  });
}

// pause animations
function pauseAnimation(index){
  var stage = stages[index];
  createjs.Ticker.removeEventListener('tick', stage);
}

// resume animation
function resumeAnimation(index){
   var stage = stages[index];
  createjs.Ticker.addEventListener('tick', stage);
}

// running list of all CreateJs Stage objects
var stages = [];

// index = 'one','two' etc
// lib = libOne,libTwo, etc
// scene = scene1animationv2, etc
function sectionAnimation(index,libName,scene){
  var lib = window[libName];
  var canvas = document.getElementById('canvas-'+index);
  var anim_container = document.getElementById('animation-container-'+index);
  dom_overlay_container = document.getElementById('dom-overlay-container-'+index);
  handleComplete();

  function handleComplete() {
    //This function is always called, irrespective of the content. You can use the variable 'stage' after it is created in token create_stage.
    exportRoot = new window[libName][scene];
    stage = new createjs.Stage(canvas);
    stages.push(stage);
    stage.addChild(exportRoot);

    // 'tick' event listener handled by initAnimation()
    fnStartAnimation = function() {
      createjs.Ticker.setFPS(lib.properties.fps);
    }

    makeResponsive(true, 'both', true, 1);
    fnStartAnimation();

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
  }
}
