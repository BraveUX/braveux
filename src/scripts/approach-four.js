(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {};
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [];



lib.updateListCache = function (cacheList) {
	for(var i = 0; i < cacheList.length; i++) {
		if(cacheList[i].cacheCanvas)
			cacheList[i].updateCache();
	}
};

lib.addElementsToCache = function (textInst, cacheList) {
	var cur = textInst;
	while(cur != exportRoot) {
		if(cacheList.indexOf(cur) != -1)
			break;
		cur = cur.parent;
	}
	if(cur != exportRoot) {
		var cur2 = textInst;
		var index = cacheList.indexOf(cur);
		while(cur2 != cur) {
			cacheList.splice(index, 0, cur2);
			cur2 = cur2.parent;
			index++;
		}
	}
	else {
		cur = textInst;
		while(cur != exportRoot) {
			cacheList.push(cur);
			cur = cur.parent;
		}
	}
};

lib.gfontAvailable = function(family, totalGoogleCount) {
	lib.properties.webfonts[family] = true;
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];
	for(var f = 0; f < txtInst.length; ++f)
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);

	loadedGoogleCount++;
	if(loadedGoogleCount == totalGoogleCount) {
		lib.updateListCache(gFontsUpdateCacheList);
	}
};

lib.tfontAvailable = function(family, totalTypekitCount) {
	lib.properties.webfonts[family] = true;
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];
	for(var f = 0; f < txtInst.length; ++f)
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);

	loadedTypekitCount++;
	if(loadedTypekitCount == totalTypekitCount) {
		lib.updateListCache(tFontsUpdateCacheList);
	}
};
// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Tween6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#566468").s().p("AB4AiIACgOIgxAAIgCAOIgOAAIACgOIiKAAIgDAOIgNAAIACgOIg2AAIAAgBIgCAPIgOAAQADgbANgVIAQgSIAOAAIgEAFIA2AAIAEgFIAOAAIgEAFICJAAIAEgGIAOAAIgEAGIAwAAIAEgGIAOAAIgOATQgOAVgCAbgABKAPIAxAAIAEgMIgxAAIgEAMgAhOAPICLAAIADgMIiKAAIgEAMgAiSAPIA2AAIAEgMIg2AAIgEAMgABQAAIAxAAIAFgLIgwAAIgGALgAhIAAICKAAIAGgLIiLAAIgFALgAiMAAIA2AAIAFgLIg1AAIgGALgABYgPIAxAAIAFgIIgwAAgAhAgPICKAAIAGgIIiJAAgAiEgPIA2AAIAHgIIg2AAg");
	this.shape.setTransform(-1.9,0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#566468").s().p("AgVABQANgaALgGQARgIAPAeIhFArQAFgRAIgQg");
	this.shape_1.setTransform(17.9,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#414B4E").s().p("AjGAhQACgQAIgQQAPghAcAAIFYAAQgEAAgGAGQgRAPgPAsg");
	this.shape_2.setTransform(-1.4,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.3,-3.3,42.7,6.8);


(lib.Tween5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("EhGoBGUMAAAiMnMCNRAAAMAAACMng");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-452,-449.9,904.1,900);


(lib.Tween4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#566468").s().p("AgWA0IAthnIgCA0QgJAzggAAIgCAAg");
	this.shape.setTransform(17.2,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#566468").s().p("AigAnIAjhNIEeAAIgkBNg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#414B4E").s().p("AjDA0IAuhnIFYAAIguBng");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.5,-5.1,39.1,10.4);


(lib.Tween3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("AjSASIFeAAIBHgk");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22,-2.8,44.2,5.7);


(lib.Tween1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D2D3D4").s().p("AA0FPQgMgMgJgNQgfAbgqAAQgvAAggghIgHgGQgZAOgfAAQgwAAgigiQghghgBgwQAAgPAFgPIgCAAQgeAAgVgVQgWgVAAgeQAAgeAWgWIABgBQgqhBgBhUQABhKAhg9QgBgEAdgkQAcgjACABQBRhMBxAAQB0AABUBUQARARAOATQAWgPAcAAQAnAAAaAbQAbAbAAAnIgCArQgBAYAEAAQAbAAATATQATATAAAbQAAAYgPASIAFAEQAPAPAAAVQAAASgLAOIADADQA7A6AABSQAABSg7A6Qg6A6hRAAQhSAAg7g6g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39,-39.2,78.1,78.6);


(lib.tintmc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#262628").s().p("EgwcArnMAAAhXNMBg5AAAMAAABXNg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.tintmc, new cjs.Rectangle(-310,-279,620.2,558.2), null);


(lib.flowmaskmc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#262628").s().p("EhJ1A9RMAAAhysQWCAAAKAJIC3AtQDiBADbBdQK8EqFrHhQC3DzB2DeQBBB5BLCkQA7BzBLA5QBYBDDFA9QC5A5CChyQBWhLBsjWQBGiMAQgeQA0heAvg6QB5iYCkAAQCrAABPAcQA3AUAqA1QA3BGAkAbQBPA7CZArQCgAsCehtQBzhQCejLICDitQBOhnA4g/QCcizCLg3QCNg3B6hgQA0gpCWiLQB8h0BkhCQCRhgC6g9QFYhwK0iqQFbhVEVg/MAAAB6hg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.flowmaskmc, new cjs.Rectangle(-472.6,-392,945.3,784.2), null);


(lib.flashlightflare = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(15,1,1).p("ABLAAQAAAfgWAWQgWAWgfAAQgeAAgWgWQgWgWAAgfQAAgeAWgWQAWgWAeAAQAfAAAWAWQAWAWAAAeg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(16.4,1,1).p("AhRAAQAAghAYgYQAYgYAhAAQAiAAAYAYQAYAYAAAhQAAAigYAYQgYAYgiAAQghAAgYgYQgYgYAAgig");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(20.4,1,1).p("AhmAAQAAgqAegeQAegeAqAAQArAAAeAeQAeAeAAAqQAAArgeAeQgeAegrAAQgqAAgegeQgegeAAgrg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FFFFFF").ss(27,1,1).p("AiIAAQAAg4AogoQAogoA4AAQA5AAAoAoQAoAoAAA4QAAA5goAoQgoAog5AAQg4AAgogoQgogoAAg5g");

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FFFFFF").ss(36.4,1,1).p("Ai4AAQAAhMA2g2QA2g2BMAAQBNAAA2A2QA2A2AABMQAABNg2A2Qg2A2hNAAQhMAAg2g2Qg2g2AAhNg");

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#FFFFFF").ss(48.4,1,1).p("Aj2AAQAAhlBIhJQBJhIBlAAQBmAABIBIQBJBJAABlQAABmhJBJQhIBIhmAAQhlAAhJhIQhIhJAAhmg");

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FFFFFF").ss(63,1,1).p("AFDAAQAACFhfBfQhfBfiFAAQiFAAhehfQhfhfAAiFQAAiFBfheQBehfCFAAQCFAABfBfQBfBeAACFg");

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#FFFFFF").ss(50,1,1).p("AmMAAQAAijB0h1QB1h0CjAAQCkAAB0B0QB1B1AACjQAACkh1B1Qh0B0ikAAQijAAh1h0Qh0h1AAikg");

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#FFFFFF").ss(38.5,1,1).p("AnOAAQAAi/CIiHQCHiIC/AAQC/AACICIQCICHAAC/QAAC/iICIQiICIi/AAQi/AAiHiIQiIiIAAi/g");

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#FFFFFF").ss(28.6,1,1).p("AoHAAQAAjWCZiYQCYiZDWAAQDXAACYCZQCZCYAADWQAADXiZCZQiYCYjXAAQjWAAiYiYQiZiZAAjXg");

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#FFFFFF").ss(20.2,1,1).p("Ao3AAQAAjqCnimQCminDqAAQDrAACmCnQCnCmAADqQAADrinCnQimCmjrAAQjqAAimimQininAAjrg");

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#FFFFFF").ss(13.3,1,1).p("ApeAAQAAj6CyiyQCyiyD6AAQD7AACxCyQCzCyAAD6QAAD7izCzQixCxj7AAQj6AAiyixQiyizAAj7g");

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#FFFFFF").ss(7.9,1,1).p("Ap9AAQAAkHC7i7QC7i7EHAAQEHAAC7C7QC8C7AAEHQAAEHi8C8Qi7C7kHAAQkHAAi7i7Qi7i8AAkHg");

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#FFFFFF").ss(4.1,1,1).p("AqTAAQAAkQDCjBQDBjCEQAAQERAADADCQDDDBAAEQQAAERjDDCQjADBkRAAQkQAAjBjBQjCjCAAkRg");

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#FFFFFF").ss(1.8,1,1).p("AqgAAQAAkVDFjGQDGjFEVAAQEWAADFDFQDGDGAAEVQAAEWjGDGQjFDFkWAAQkVAAjGjFQjFjGAAkWg");

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#FFFFFF").ss(1,1,1).p("AKlAAQAAEXjHDIQjGDGkYAAQkXAAjHjGQjGjIAAkXQAAkXDGjHQDHjGEXAAQEYAADGDGQDHDHAAEXg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15,-15,30,30);


(lib.waterblue = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#6F7F84").s().p("EhGTAdKMAAAg6TMCMnAAAMAAAA6Tg");
	this.shape.setTransform(450,186.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.waterblue, new cjs.Rectangle(0,0,900,373.3), null);


(lib.lightray4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.898)","rgba(255,255,255,0.898)"],[0,0.769,1],1.1,-108.9,8.7,266.9).s().p("AmN4KIMbheMgEJAy6IglAWIklABg");
	this.shape.setTransform(39.8,164.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.lightray4, new cjs.Rectangle(0,0,79.6,328.3), null);


(lib.lightray3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.898)","rgba(255,255,255,0.898)"],[0,0.769,1],0.1,-24.2,0.6,334.1).s().p("AkSbWMgd2gocMAgTgOPMAj+AQaMgfyAlmIhGArgAi0a1IgqAWIElgBIAlgWg");
	this.shape.setTransform(218.5,175);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.lightray3, new cjs.Rectangle(0,0,437.1,350.1), null);


(lib.lightray2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.898)","rgba(255,255,255,0.898)"],[0,0.769,1],-0.5,-26.9,0.5,254.3).s().p("Am+cPMgrggKmMAm/gt3MAkZALbMAZlAhfMgwdALKIjbAZgAlfbuIgqAWIElgBIAlgXg");
	this.shape.setTransform(323.1,180.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.lightray2, new cjs.Rectangle(0,0,646.2,361.4), null);


(lib.lightray1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.898)","rgba(255,255,255,0.898)"],[0,0.769,1],-0.3,-29.2,0.9,286).s().p("AhoYRIllAAMg/FAHHMAAAgs0MBBrgSFMBK6ARgMAAAAtjgAluXwIgqAWIElgBIAlgXg");
	this.shape.setTransform(449.9,201.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.lightray1, new cjs.Rectangle(0,0,899.8,403.6), null);


(lib.Path_10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#6F7F84").s().p("AiqAIQg2gIgPgLQgOgKAagGQgXAaD2AQQB5AICAADIhiACQjLAAhygUg");
	this.shape.setTransform(24.4,2.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_10, new cjs.Rectangle(0,0,48.9,5.5), null);


(lib.Path_9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.898)").s().p("AgFAGQgDgCAAgEQAAgCADgDQADgDACAAQAEAAACADQADADAAACQAAAEgDACQgCADgEAAQgCAAgDgDg");
	this.shape.setTransform(0.9,0.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_9, new cjs.Rectangle(0,0,1.8,1.8), null);


(lib.Path_8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.898)").s().p("AgFAGQgDgCAAgEQAAgDADgCQADgDACAAQADAAADADQADACAAADQAAAEgDACQgDADgDAAQgCAAgDgDg");
	this.shape.setTransform(0.9,0.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_8, new cjs.Rectangle(0,0,1.8,1.9), null);


(lib.Path_5_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.898)").s().p("AgFAGQgDgCAAgEQAAgCADgDQADgDACAAQAEAAACADQADADAAACQAAAEgDACQgCADgEAAQgCAAgDgDg");
	this.shape.setTransform(0.9,0.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_5_0, new cjs.Rectangle(0,0,1.8,1.8), null);


(lib.Path_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#6F7F84").s().p("AhRrIICjAAIhFWRg");
	this.shape.setTransform(8.2,71.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_5, new cjs.Rectangle(0,0,16.4,142.6), null);


(lib.Path_4_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#6F7F84").s().p("AofgGQj+gahNgVQhLgVCIgEQgHAyPXA/QFxAYFyAUQtpgao8g7g");
	this.shape.setTransform(90,7.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_4_1, new cjs.Rectangle(-0.2,0,180.4,15.9), null);


(lib.Path_4_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.898)").s().p("AgFAGQgDgCAAgEQAAgCADgDQADgDACAAQAEAAACADQADADAAACQAAAEgDACQgCADgEAAQgCAAgDgDg");
	this.shape.setTransform(0.9,0.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_4_0, new cjs.Rectangle(0,0,1.8,1.8), null);


(lib.Path_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#6F7F84").s().p("AgpmAIBSI2IhHDLg");
	this.shape.setTransform(4.2,38.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_4, new cjs.Rectangle(0,0,8.3,77), null);


(lib.Path_3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#6F7F84").s().p("AlSgHQhjgKgUgJQgTgIA7gCQgqAMHJAfQDkAQDtAOQoegRkDgbg");
	this.shape.setTransform(46.2,3.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_3_1, new cjs.Rectangle(0,0,92.6,7.4), null);


(lib.Path_3_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(149,166,180,0.898)","rgba(142,158,171,0.906)","rgba(122,136,147,0.929)","rgba(89,101,108,0.969)","#414B4E"],[0,0.165,0.439,0.776,1],20.8,-2.6,-17.6,2.5).s().p("AjUAWIBRgrIFYAAIhGArg");
	this.shape.setTransform(21.3,2.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_3_0, new cjs.Rectangle(0,0,42.7,4.4), null);


(lib.Path_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#6F7F84").s().p("AgbkBIA3F7IgwCIg");
	this.shape.setTransform(2.8,25.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_3, new cjs.Rectangle(0,0,5.6,51.7), null);


(lib.Path_2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#6F7F84").s().p("AvZAwQI2gEH+gPQP+gdkYgyQCNgFALATQANAUisAUQmEAwt4AAQj4AAkfgEg");
	this.shape.setTransform(98.6,5.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_2_1, new cjs.Rectangle(0,0,197.3,10.4), null);


(lib.Path_2_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.898)").s().p("AgFAGQgDgCAAgEQAAgCADgDQADgDACAAQAEAAACADQADADAAACQAAAEgDACQgCADgEAAQgCAAgDgDg");
	this.shape.setTransform(0.9,0.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_2_0, new cjs.Rectangle(0,0,1.8,1.8), null);


(lib.Path_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#6F7F84").s().p("AgtqrIBaAAIg0VXg");
	this.shape.setTransform(4.6,68.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_2, new cjs.Rectangle(0,0,9.1,136.8), null);


(lib.Path_1_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#6F7F84").s().p("AnWAKQAXgKBrgHQElgXILAPQj1gBjqAEQnVAIAzAaQhGgDAVgJg");
	this.shape.setTransform(47.5,2.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_1_3, new cjs.Rectangle(-0.1,0,95.2,4.4), null);


(lib.Path_1_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.898)").s().p("AgFAGQgDgDAAgDQAAgCADgDQACgDADAAQAEAAACADQADADAAACQAAADgDADQgCADgEAAQgDAAgCgDg");
	this.shape.setTransform(0.9,0.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_1_2, new cjs.Rectangle(0,0,1.9,1.8), null);


(lib.Path_1_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AhRgpICjAAIgTAzIhjAgg");
	this.shape.setTransform(8.2,4.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_1_0, new cjs.Rectangle(0,0,16.4,8.4), null);


(lib.Path_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#6F7F84").s().p("Eg83AAUQgJnoAXggMB4qAABQA5BPAABQQAAFFsEDWQk+BYmgA7Ql3A0mDAUQoQAbvcALItwAGMgwrAAmQgJjtgFjzg");
	this.shape.setTransform(389.8,50.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_1, new cjs.Rectangle(0,0,779.7,100.1), null);


(lib.Path_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AgiAJIgLgwIBaAAIgZBPg");
	this.shape.setTransform(4.6,4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_0, new cjs.Rectangle(0,0,9.1,8.1), null);


(lib.Path = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#6F7F84").s().p("EgvzgC1MBnOAAAQhbAuhxBKQiSBfhaAdQiRAujQgYQjVgZmYATQmCASjlAnQjoAokhARQkbAQm+AAQlOAAiUgGQkFgKjPglQiegciZgFQjbgIkxAdUgHEAArghVACLQPunoAlgTgEA4MgC1IgxAAQAngUAjgOQDIhSEXgcQAfgDkFBRQjXBEgwAAQgIAAgDgCgEA3bgC1g");
	this.shape.setTransform(410.3,32.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path, new cjs.Rectangle(0,0,820.6,65.3), null);


(lib.Path_23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = getMCSymbolPrototype(lib.Path_23, null, null);


(lib.Path_22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = getMCSymbolPrototype(lib.Path_22, null, null);


(lib.Path_21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgBAAIADgBIgCACg");
	this.shape.setTransform(0.2,0.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_21, new cjs.Rectangle(0,0,0.4,0.3), null);


(lib.Path_20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = getMCSymbolPrototype(lib.Path_20, null, null);


(lib.Group_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = getMCSymbolPrototype(lib.Group_5, null, null);


(lib.waterripplesmc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// <Path>_10
	this.instance = new lib.Path_10();
	this.instance.parent = this;
	this.instance.setTransform(-133.4,42.6,0.936,0.936,0,0,0,24.4,2.8);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.94,scaleY:0.94,x:-134.2,y:42.9,alpha:0.025},0).wait(1).to({scaleX:0.95,scaleY:0.95,x:-134.9,y:43.1,alpha:0.05},0).wait(1).to({scaleX:0.95,scaleY:0.95,x:-135.7,y:43.4,alpha:0.075},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:-136.5,y:43.7,alpha:0.1},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:-137.2,y:43.9,alpha:0.125},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:-138,y:44.2,alpha:0.15},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:-138.8,y:44.4,alpha:0.175},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:-139.5,y:44.7,alpha:0.201},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:-140.3,y:44.9,alpha:0.226},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:-141.1,y:45.2,alpha:0.251},0).wait(1).to({scaleX:1,scaleY:1,x:-141.9,y:45.5,alpha:0.276},0).wait(1).to({scaleX:1,scaleY:1,x:-142.7,y:45.8,alpha:0.301},0).wait(1).to({scaleX:1,scaleY:1,x:-143.6,alpha:0.29},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:-144.7,alpha:0.279},0).wait(1).to({scaleX:1.02,scaleY:1.02,x:-145.6,alpha:0.267},0).wait(1).to({scaleX:1.02,scaleY:1.02,x:-146.6,alpha:0.256},0).wait(1).to({scaleX:1.03,scaleY:1.03,x:-147.7,y:45.9,alpha:0.245},0).wait(1).to({scaleX:1.03,scaleY:1.03,x:-148.6,alpha:0.234},0).wait(1).to({scaleX:1.04,scaleY:1.04,x:-149.6,alpha:0.223},0).wait(1).to({scaleX:1.04,scaleY:1.04,x:-150.7,alpha:0.212},0).wait(1).to({scaleX:1.05,scaleY:1.05,x:-151.6,alpha:0.201},0).wait(1).to({scaleX:1.06,scaleY:1.06,x:-152.6,alpha:0.189},0).wait(1).to({scaleX:1.06,scaleY:1.06,x:-153.6,alpha:0.178},0).wait(1).to({scaleX:1.07,scaleY:1.07,x:-154.6,y:46,alpha:0.167},0).wait(1).to({scaleX:1.07,scaleY:1.07,x:-155.6,alpha:0.156},0).wait(1).to({scaleX:1.08,scaleY:1.08,x:-156.6,alpha:0.145},0).wait(1).to({scaleX:1.08,scaleY:1.08,x:-157.6,y:46.1,alpha:0.134},0).wait(1).to({scaleX:1.09,scaleY:1.09,x:-158.6,alpha:0.123},0).wait(1).to({scaleX:1.09,scaleY:1.09,x:-159.6,alpha:0.111},0).wait(1).to({scaleX:1.1,scaleY:1.1,x:-160.6,alpha:0.1},0).wait(1).to({scaleX:1.1,scaleY:1.1,x:-161.6,alpha:0.089},0).wait(1).to({scaleX:1.11,scaleY:1.11,x:-162.6,alpha:0.078},0).wait(1).to({scaleX:1.12,scaleY:1.12,x:-163.6,alpha:0.067},0).wait(1).to({scaleX:1.12,scaleY:1.12,x:-164.6,y:46.2,alpha:0.056},0).wait(1).to({scaleX:1.13,scaleY:1.13,x:-165.6,alpha:0.045},0).wait(1).to({scaleX:1.13,scaleY:1.13,x:-166.6,alpha:0.033},0).wait(1).to({scaleX:1.14,scaleY:1.14,x:-167.6,alpha:0.022},0).wait(1).to({scaleX:1.14,scaleY:1.14,x:-168.6,y:46.3,alpha:0.011},0).wait(1).to({scaleX:1.15,scaleY:1.15,x:-169.6,y:46.2,alpha:0},0).wait(1));

	// <Path>_1_3
	this.instance_1 = new lib.Path_1_3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(164.7,12.4,0.936,0.936,0,0,0,47.6,2.2);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:47.5,scaleX:0.94,scaleY:0.94,x:163.3,y:12.5,alpha:0.018},0).wait(1).to({scaleX:0.94,scaleY:0.94,x:162.1,y:12.6,alpha:0.035},0).wait(1).to({scaleX:0.95,scaleY:0.95,x:160.9,alpha:0.053},0).wait(1).to({scaleX:0.95,scaleY:0.95,x:159.7,y:12.7,alpha:0.071},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:158.4,alpha:0.088},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:157.2,y:12.8,alpha:0.106},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:155.9,alpha:0.124},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:154.7,y:12.9,alpha:0.142},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:153.5,y:13,alpha:0.159},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:152.2,alpha:0.177},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:151,y:13.1,alpha:0.195},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:149.8,alpha:0.212},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:148.5,y:13.2,alpha:0.23},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:147.3,y:13.3,alpha:0.248},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:146.1,alpha:0.265},0).wait(1).to({scaleX:1,scaleY:1,x:144.8,y:13.4,alpha:0.283},0).wait(1).to({regY:2.1,scaleX:1,scaleY:1,x:143.7,alpha:0.301},0).wait(1).to({regY:2.2,scaleX:1.01,scaleY:1.01,x:143.2,alpha:0.287},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:142.9,y:13.3,alpha:0.273},0).wait(1).to({scaleX:1.02,scaleY:1.02,x:142.4,y:13.2,alpha:0.26},0).wait(1).to({scaleX:1.03,scaleY:1.03,x:142.1,y:13.1,alpha:0.246},0).wait(1).to({scaleX:1.03,scaleY:1.03,x:141.6,y:13,alpha:0.232},0).wait(1).to({scaleX:1.04,scaleY:1.04,x:141.2,y:12.9,alpha:0.219},0).wait(1).to({scaleX:1.05,scaleY:1.05,x:140.8,y:12.8,alpha:0.205},0).wait(1).to({scaleX:1.05,scaleY:1.05,x:140.4,y:12.7,alpha:0.191},0).wait(1).to({scaleX:1.06,scaleY:1.06,x:140,y:12.6,alpha:0.178},0).wait(1).to({scaleX:1.07,scaleY:1.07,x:139.6,y:12.5,alpha:0.164},0).wait(1).to({scaleX:1.07,scaleY:1.07,x:139.2,y:12.4,alpha:0.15},0).wait(1).to({scaleX:1.08,scaleY:1.08,x:138.8,y:12.3,alpha:0.137},0).wait(1).to({scaleX:1.09,scaleY:1.09,x:138.4,y:12.2,alpha:0.123},0).wait(1).to({scaleX:1.09,scaleY:1.09,x:138,y:12.1,alpha:0.109},0).wait(1).to({scaleX:1.1,scaleY:1.1,x:137.6,y:11.9,alpha:0.096},0).wait(1).to({scaleX:1.11,scaleY:1.11,x:137.2,alpha:0.082},0).wait(1).to({scaleX:1.12,scaleY:1.12,x:136.8,y:11.7,alpha:0.068},0).wait(1).to({scaleX:1.12,scaleY:1.12,x:136.4,y:11.6,alpha:0.055},0).wait(1).to({scaleX:1.13,scaleY:1.13,x:136,alpha:0.041},0).wait(1).to({scaleX:1.14,scaleY:1.14,x:135.6,y:11.4,alpha:0.027},0).wait(1).to({scaleX:1.14,scaleY:1.14,x:135.2,y:11.3,alpha:0.014},0).wait(1).to({regX:47.6,scaleX:1.15,scaleY:1.15,x:134.8,y:11.2,alpha:0},0).wait(1));

	// <Path>_2_1
	this.instance_2 = new lib.Path_2_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(100.2,43.8,0.936,0.936,0,0,0,98.7,5.2);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({regX:98.6,scaleX:0.94,scaleY:0.94,x:100.4,alpha:0.015},0).wait(1).to({scaleX:0.94,scaleY:0.94,x:100.7,alpha:0.03},0).wait(1).to({scaleX:0.95,scaleY:0.95,x:101.1,y:43.7,alpha:0.045},0).wait(1).to({scaleX:0.95,scaleY:0.95,x:101.4,y:43.8,alpha:0.06},0).wait(1).to({scaleX:0.95,scaleY:0.95,x:101.8,alpha:0.075},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:102.1,y:43.7,alpha:0.09},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:102.4,y:43.8,alpha:0.105},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:102.8,alpha:0.12},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:103.1,y:43.7,alpha:0.135},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:103.4,y:43.8,alpha:0.15},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:103.7,alpha:0.165},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:104.1,y:43.7,alpha:0.18},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:104.4,y:43.8,alpha:0.196},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:104.7,alpha:0.211},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:105.1,y:43.7,alpha:0.226},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:105.4,y:43.8,alpha:0.241},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:105.7,alpha:0.256},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:106.1,y:43.7,alpha:0.271},0).wait(1).to({scaleX:1,scaleY:1,x:106.4,y:43.8,alpha:0.286},0).wait(1).to({scaleX:1,scaleY:1,x:106.8,alpha:0.301},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:109.5,y:43.9,alpha:0.285},0).wait(1).to({scaleX:1.02,scaleY:1.02,x:112.2,y:44.1,alpha:0.269},0).wait(1).to({scaleX:1.02,scaleY:1.02,x:114.9,alpha:0.253},0).wait(1).to({scaleX:1.03,scaleY:1.03,x:117.6,y:44.3,alpha:0.237},0).wait(1).to({scaleX:1.04,scaleY:1.04,x:120.2,y:44.4,alpha:0.222},0).wait(1).to({scaleX:1.05,scaleY:1.05,x:122.9,y:44.5,alpha:0.206},0).wait(1).to({scaleX:1.06,scaleY:1.06,x:125.6,y:44.6,alpha:0.19},0).wait(1).to({scaleX:1.06,scaleY:1.06,x:128.3,y:44.8,alpha:0.174},0).wait(1).to({scaleX:1.07,scaleY:1.07,x:131,alpha:0.158},0).wait(1).to({scaleX:1.08,scaleY:1.08,x:133.7,y:45,alpha:0.142},0).wait(1).to({scaleX:1.09,scaleY:1.09,x:136.4,y:45.1,alpha:0.127},0).wait(1).to({scaleX:1.09,scaleY:1.09,x:139.1,y:45.2,alpha:0.111},0).wait(1).to({scaleX:1.1,scaleY:1.1,x:141.7,y:45.3,alpha:0.095},0).wait(1).to({scaleX:1.11,scaleY:1.11,x:144.5,y:45.4,alpha:0.079},0).wait(1).to({scaleX:1.12,scaleY:1.12,x:147.1,y:45.6,alpha:0.063},0).wait(1).to({scaleX:1.13,scaleY:1.13,x:149.8,y:45.7,alpha:0.047},0).wait(1).to({scaleX:1.13,scaleY:1.13,x:152.5,y:45.8,alpha:0.032},0).wait(1).to({scaleX:1.14,scaleY:1.14,x:155.2,y:45.9,alpha:0.016},0).wait(1).to({scaleX:1.15,scaleY:1.15,x:157.9,y:46,alpha:0},0).wait(1));

	// <Path>_3_1
	this.instance_3 = new lib.Path_3_1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-44.9,-47.2,0.936,0.936,0,0,0,46.2,3.6);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({regY:3.7,scaleX:0.94,scaleY:0.94,x:-45.8,y:-46.9,alpha:0.02},0).wait(1).to({scaleX:0.95,scaleY:0.95,x:-46.7,y:-46.8,alpha:0.04},0).wait(1).to({scaleX:0.95,scaleY:0.95,x:-47.7,y:-46.6,alpha:0.06},0).wait(1).to({scaleX:0.95,scaleY:0.95,x:-48.6,y:-46.4,alpha:0.08},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:-49.5,y:-46.3,alpha:0.1},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:-50.4,y:-46.2,alpha:0.12},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:-51.3,y:-46,alpha:0.14},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:-52.3,y:-45.8,alpha:0.16},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:-53.2,y:-45.7,alpha:0.18},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:-54.2,y:-45.6,alpha:0.201},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:-55.1,y:-45.4,alpha:0.221},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:-56,y:-45.2,alpha:0.241},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:-56.9,y:-45.1,alpha:0.261},0).wait(1).to({scaleX:1,scaleY:1,x:-57.8,y:-44.9,alpha:0.281},0).wait(1).to({regY:3.6,scaleX:1,scaleY:1,x:-58.8,alpha:0.301},0).wait(1).to({regY:3.7,scaleX:1.01,scaleY:1.01,x:-59.3,y:-44.4,alpha:0.282},0).wait(1).to({scaleX:1.02,scaleY:1.02,x:-59.9,y:-44.1,alpha:0.263},0).wait(1).to({scaleX:1.03,scaleY:1.03,x:-60.4,y:-43.8,alpha:0.244},0).wait(1).to({scaleX:1.04,scaleY:1.04,x:-61,y:-43.5,alpha:0.226},0).wait(1).to({scaleX:1.05,scaleY:1.05,x:-61.6,y:-43.2,alpha:0.207},0).wait(1).to({scaleX:1.06,scaleY:1.06,x:-62.1,y:-42.9,alpha:0.188},0).wait(1).to({scaleX:1.07,scaleY:1.07,x:-62.7,y:-42.5,alpha:0.169},0).wait(1).to({scaleX:1.07,scaleY:1.07,x:-63.2,y:-42.3,alpha:0.15},0).wait(1).to({scaleX:1.08,scaleY:1.08,x:-63.8,y:-41.9,alpha:0.132},0).wait(1).to({scaleX:1.09,scaleY:1.09,x:-64.4,y:-41.6,alpha:0.113},0).wait(1).to({scaleX:1.1,scaleY:1.1,x:-65,y:-41.3,alpha:0.094},0).wait(1).to({scaleX:1.11,scaleY:1.11,x:-65.5,y:-41,alpha:0.075},0).wait(1).to({scaleX:1.12,scaleY:1.12,x:-66.1,y:-40.6,alpha:0.056},0).wait(1).to({scaleX:1.13,scaleY:1.13,x:-66.6,y:-40.3,alpha:0.038},0).wait(1).to({scaleX:1.14,scaleY:1.14,x:-67.2,y:-40,alpha:0.019},0).wait(1).to({regX:46.1,regY:3.6,scaleX:1.15,scaleY:1.15,x:-67.8,y:-39.8,alpha:0},0).wait(9));

	// <Path>_4_1
	this.instance_4 = new lib.Path_4_1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-97.7,-43.6,0.936,0.936,0,0,0,90,7.9);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(9).to({_off:false},0).wait(1).to({scaleX:0.94,scaleY:0.94,x:-98.8,y:-43.4,alpha:0.02},0).wait(1).to({scaleX:0.95,scaleY:0.95,x:-100,y:-43.2,alpha:0.04},0).wait(1).to({scaleX:0.95,scaleY:0.95,x:-101.2,y:-43,alpha:0.06},0).wait(1).to({scaleX:0.95,scaleY:0.95,x:-102.3,y:-42.8,alpha:0.08},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:-103.5,y:-42.7,alpha:0.1},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:-104.7,y:-42.5,alpha:0.12},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:-105.8,y:-42.3,alpha:0.14},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:-107,y:-42.2,alpha:0.16},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:-108.2,y:-42,alpha:0.18},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:-109.3,y:-41.8,alpha:0.201},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:-110.5,y:-41.7,alpha:0.221},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:-111.7,y:-41.5,alpha:0.241},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:-112.8,y:-41.3,alpha:0.261},0).wait(1).to({scaleX:1,scaleY:1,x:-114,y:-41.1,alpha:0.281},0).wait(1).to({scaleX:1,scaleY:1,x:-115.2,y:-41,alpha:0.301},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:-116.3,y:-40.3,alpha:0.281},0).wait(1).to({scaleX:1.02,scaleY:1.02,x:-117.4,y:-39.6,alpha:0.261},0).wait(1).to({scaleX:1.03,scaleY:1.03,x:-118.6,y:-38.9,alpha:0.241},0).wait(1).to({scaleX:1.04,scaleY:1.04,x:-119.8,y:-38.2,alpha:0.221},0).wait(1).to({scaleX:1.05,scaleY:1.05,x:-120.9,y:-37.5,alpha:0.201},0).wait(1).to({scaleX:1.06,scaleY:1.06,x:-122.1,y:-36.8,alpha:0.18},0).wait(1).to({scaleX:1.07,scaleY:1.07,x:-123.2,y:-36,alpha:0.16},0).wait(1).to({scaleX:1.08,scaleY:1.08,x:-124.4,y:-35.3,alpha:0.14},0).wait(1).to({scaleX:1.09,scaleY:1.09,x:-125.6,y:-34.6,alpha:0.12},0).wait(1).to({scaleX:1.1,scaleY:1.1,x:-126.7,y:-33.9,alpha:0.1},0).wait(1).to({scaleX:1.11,scaleY:1.11,x:-127.9,y:-33.2,alpha:0.08},0).wait(1).to({scaleX:1.12,scaleY:1.12,x:-129,y:-32.5,alpha:0.06},0).wait(1).to({scaleX:1.13,scaleY:1.13,x:-130.2,y:-31.8,alpha:0.04},0).wait(1).to({scaleX:1.14,scaleY:1.14,x:-131.4,y:-31.1,alpha:0.02},0).wait(1).to({scaleX:1.15,scaleY:1.15,x:-132.5,y:-30.4,alpha:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-156.3,-50.6,365.5,99.2);


(lib.Tween2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Path_9();
	this.instance.parent = this;
	this.instance.setTransform(-68.6,54.8,1,1,0,0,0,0.9,0.9);
	this.instance.alpha = 0.75;

	this.instance_1 = new lib.Path_1_2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-99.2,58.6,1,1,0,0,0,0.9,0.9);
	this.instance_1.alpha = 0.5;

	this.instance_2 = new lib.Path_2_0();
	this.instance_2.parent = this;
	this.instance_2.setTransform(73.8,-46.9,1,1,0,0,0,0.9,0.9);
	this.instance_2.alpha = 0.75;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.898)").s().p("AgGAGQgCgCAAgEQAAgCACgDQADgDADAAQAEAAADADQACADAAACQAAAEgCACQgDADgEAAQgDAAgDgDg");
	this.shape.setTransform(-8.3,55.7);

	this.instance_3 = new lib.Path_4_0();
	this.instance_3.parent = this;
	this.instance_3.setTransform(107.3,17.5,1,1,0,0,0,0.9,0.9);
	this.instance_3.alpha = 0.5;

	this.instance_4 = new lib.Path_5_0();
	this.instance_4.parent = this;
	this.instance_4.setTransform(26.1,14.2,1,1,0,0,0,0.9,0.9);
	this.instance_4.alpha = 0.75;

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.898)").s().p("AgGAGQgCgCAAgEQAAgCACgDQADgDADAAQAEAAADADQACADAAACQAAAEgCACQgDADgEAAQgDAAgDgDg");
	this.shape_1.setTransform(-8.3,-58.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.898)").s().p("AgGAGQgCgCAAgEQAAgDACgCQADgDADAAQADAAADADQADACAAADQAAAEgDACQgCADgEAAQgDAAgDgDg");
	this.shape_2.setTransform(-39.8,-15.5);

	this.instance_5 = new lib.Path_8();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-107.2,-15.5,1,1,0,0,0,0.9,0.9);
	this.instance_5.alpha = 0.75;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.shape_2},{t:this.shape_1},{t:this.instance_4},{t:this.instance_3},{t:this.shape},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-108.1,-59.5,216.3,119);


(lib.lightbeamsmc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// light-ray4
	this.instance = new lib.lightray4();
	this.instance.parent = this;
	this.instance.setTransform(-21.3,157.3,1,0.425,0,-85.9,0,39.5,329.3);
	this.instance.alpha = 0.801;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:39.8,regY:164.1,scaleY:0.66,skewX:-51.2,x:-105.5,y:89.2},0).wait(1).to({scaleY:0.74,skewX:-38.8,x:-97.6,y:62.1},0).wait(1).to({scaleY:0.8,skewX:-30.6,x:-87.7,y:44.2},0).wait(1).to({scaleY:0.84,skewX:-24.4,x:-78,y:31.4},0).wait(1).to({scaleY:0.87,skewX:-19.5,x:-68.9,y:21.9},0).wait(1).to({scaleY:0.9,skewX:-15.6,x:-60.8,y:14.9},0).wait(1).to({scaleY:0.92,skewX:-12.5,x:-53.6,y:9.5},0).wait(1).to({scaleY:0.93,skewX:-9.9,x:-47.3,y:5.3},0).wait(1).to({scaleY:0.95,skewX:-7.7,x:-41.9,y:2.1},0).wait(1).to({scaleY:0.96,skewX:-5.9,x:-37.2,y:-0.5},0).wait(1).to({scaleY:0.97,skewX:-4.5,x:-33.3,y:-2.4},0).wait(1).to({scaleY:0.98,skewX:-3.3,x:-30.1,y:-4},0).wait(1).to({scaleY:0.98,skewX:-2.4,x:-27.5,y:-5.1},0).wait(1).to({scaleY:0.99,skewX:-1.6,x:-25.4,y:-6.1},0).wait(1).to({scaleY:0.99,skewX:-1,x:-23.8,y:-6.7},0).wait(1).to({scaleY:1,skewX:-0.6,x:-22.7,y:-7.2},0).wait(1).to({scaleY:1,skewX:-0.3,x:-21.8,y:-7.5},0).wait(1).to({scaleY:1,skewX:-0.1,x:-21.3,y:-7.7},0).wait(1).to({scaleY:1,skewX:0,x:-21,y:-7.8},0).wait(1).to({x:-20.9,y:-7.9},0).wait(1).to({regY:329.2,x:-21.1,y:157.3},0).wait(4));

	// light-ray3
	this.instance_1 = new lib.lightray3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-18.6,157.5,1,0.622,0,-72.1,0,218.5,350.1);
	this.instance_1.alpha = 0.301;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2).to({_off:false},0).wait(1).to({regY:175,scaleY:0.78,skewX:-42.3,x:-110.3,y:56.9},0).wait(1).to({scaleY:0.83,skewX:-31.8,x:-95.5,y:33.6},0).wait(1).to({scaleY:0.87,skewX:-24.8,x:-82.5,y:19.3},0).wait(1).to({scaleY:0.9,skewX:-19.6,x:-71.2,y:9.5},0).wait(1).to({scaleY:0.92,skewX:-15.5,x:-61.6,y:2.6},0).wait(1).to({scaleY:0.94,skewX:-12.3,x:-53.4,y:-2.5},0).wait(1).to({scaleY:0.95,skewX:-9.7,x:-46.5,y:-6.3},0).wait(1).to({scaleY:0.96,skewX:-7.5,x:-40.6,y:-9.2},0).wait(1).to({scaleY:0.97,skewX:-5.8,x:-35.6,y:-11.4},0).wait(1).to({scaleY:0.98,skewX:-4.3,x:-31.5,y:-13.1},0).wait(1).to({scaleY:0.98,skewX:-3.2,x:-28.2,y:-14.4},0).wait(1).to({scaleY:0.99,skewX:-2.3,x:-25.5,y:-15.3},0).wait(1).to({scaleY:0.99,skewX:-1.6,x:-23.3,y:-16.1},0).wait(1).to({scaleY:1,skewX:-1,x:-21.6,y:-16.6},0).wait(1).to({scaleY:1,skewX:-0.6,x:-20.4,y:-17},0).wait(1).to({scaleY:1,skewX:-0.3,x:-19.6,y:-17.3},0).wait(1).to({scaleY:1,skewX:-0.1,x:-19,y:-17.4},0).wait(1).to({scaleY:1,skewX:0,x:-18.7,y:-17.5},0).wait(1).to({x:-18.6},0).wait(1).to({regY:350.1,x:-18.7,y:157.5},0).wait(3));

	// light-ray2
	this.instance_2 = new lib.lightray2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-20.5,155.9,1,0.692,0,-76.1,0,303.9,359.8);
	this.instance_2.alpha = 0.199;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(5).to({_off:false},0).wait(1).to({regX:323.1,regY:180.7,scaleY:0.83,skewX:-43.2,x:-102.5,y:48},0).wait(1).to({scaleY:0.87,skewX:-31.7,x:-83.4,y:23.1},0).wait(1).to({scaleY:0.9,skewX:-24.2,x:-67.5,y:8.5},0).wait(1).to({scaleY:0.93,skewX:-18.6,x:-54.3,y:-1},0).wait(1).to({scaleY:0.94,skewX:-14.4,x:-43.3,y:-7.5},0).wait(1).to({scaleY:0.96,skewX:-11.1,x:-34.2,y:-12},0).wait(1).to({scaleY:0.97,skewX:-8.4,x:-26.6,y:-15.3},0).wait(1).to({scaleY:0.98,skewX:-6.3,x:-20.4,y:-17.6},0).wait(1).to({scaleY:0.98,skewX:-4.6,x:-15.4,y:-19.3},0).wait(1).to({scaleY:0.99,skewX:-3.2,x:-11.4,y:-20.6},0).wait(1).to({scaleY:0.99,skewX:-2.2,x:-8.2,y:-21.5},0).wait(1).to({scaleY:0.99,skewX:-1.4,x:-5.8,y:-22.1},0).wait(1).to({scaleY:1,skewX:-0.9,x:-4,y:-22.6},0).wait(1).to({scaleY:1,skewX:-0.5,x:-2.8,y:-22.9},0).wait(1).to({scaleY:1,skewX:-0.2,x:-2,y:-23.1},0).wait(1).to({scaleY:1,skewX:-0.1,x:-1.5,y:-23.2},0).wait(1).to({skewX:0,x:-1.4},0).wait(1).to({regX:304.1,regY:359.8,x:-20.5,y:155.9},0).wait(2));

	// light-ray1
	this.instance_3 = new lib.lightray1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(0,145.7,1,0.13,0,0,0,449.9,202);
	this.instance_3.alpha = 0.051;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(9).to({_off:false},0).wait(1).to({regY:201.8,scaleY:0.54,y:78.2},0).wait(1).to({scaleY:0.68,y:55.6},0).wait(1).to({scaleY:0.76,y:41},0).wait(1).to({scaleY:0.83,y:30.6},0).wait(1).to({scaleY:0.87,y:22.9},0).wait(1).to({scaleY:0.91,y:17},0).wait(1).to({scaleY:0.94,y:12.5},0).wait(1).to({scaleY:0.96,y:9},0).wait(1).to({scaleY:0.97,y:6.5},0).wait(1).to({scaleY:0.98,y:4.7},0).wait(1).to({scaleY:0.99,y:3.4},0).wait(1).to({scaleY:1,y:2.6},0).wait(1).to({scaleY:1,y:2.2},0).wait(1).to({scaleY:1,y:2},0).wait(1).to({y:2.2},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-200.4,147.2,218.7,10);


(lib.foammc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Tween2("synched",0);
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-360},240).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-108.1,-59.5,216.3,119);


(lib.water = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Path();
	this.instance.parent = this;
	this.instance.setTransform(412,32.6,1,1,0,0,0,410.3,32.6);
	this.instance.alpha = 0.5;

	this.instance_1 = new lib.Path_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(389.8,64.5,1,1,0,0,0,389.8,50.1);
	this.instance_1.alpha = 0.301;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.water, new cjs.Rectangle(0,0,822.3,114.5), null);


(lib.churnmc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Tween1("synched",0);
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:360},199).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39,-39.2,78.1,78.6);


(lib.chestbottom = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#566468").s().p("AiUA0IAAhnIAOAAIAAAXIA2AAIAAgXIAOAAIAAAXICKAAIAAgXIAOAAIAAAXIAxAAIAAgXIAOAAIAABngABWAvIAxAAIAAgVIgxAAgAhCAvICKAAIAAgVIiKAAgAiGAvIA2AAIAAgVIg2AAgABWAVIAxAAIAAgUIgxAAgAhCAVICKAAIAAgUIg5AAQgCALgLAAQgJAAgDgLIg4AAgAiGAVIA2AAIAAgUIg2AAgAgCAAQAAADAEAAQAFAAAAgDQAAgGgFAAQgEAAAAAGgABWgDIAxAAIAAgVIgxAAgAAPgDIA5AAIAAgVIiKAAIAAAVIA4AAQACgLAKAAQALAAACALgAiGgDIA2AAIAAgVIg2AAg");
	this.shape.setTransform(-3.5,1.1);

	this.instance = new lib.Path_3_0();
	this.instance.parent = this;
	this.instance.setTransform(0,-6.3,1,1,0,0,0,21.3,2.1);
	this.instance.alpha = 0.5;

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AjUAWIBRgrIFYAAIhGArg");
	this.shape_1.setTransform(0,-6.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#566468").s().p("AgigoIBFgrIAACDIhFAkg");
	this.shape_2.setTransform(17.9,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#414B4E").s().p("AixA+IAAh8IFjAAIAAB8g");
	this.shape_3.setTransform(-3.5,2.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.instance},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.chestbottom, new cjs.Rectangle(-21.3,-8.4,42.7,16.9), null);


(lib.waterfallmc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// rocks
	this.instance = new lib.Path_0();
	this.instance.parent = this;
	this.instance.setTransform(41.1,40.9,1,1,0,0,0,4.5,4);
	this.instance.alpha = 0.5;

	this.instance_1 = new lib.Path_1_0();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-84.4,-30.1,1,1,0,0,0,8.2,4.2);
	this.instance_1.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(11));

	// <Path>_2
	this.instance_2 = new lib.Path_2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(41.1,105.3,1,1,0,0,0,4.5,68.4);
	this.instance_2.alpha = 0.102;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({skewX:-0.2,x:41.4},0).wait(1).to({skewX:-1.4,x:42.7},0).wait(1).to({skewX:-1.6,x:43},0).wait(1).to({skewX:-1.5,x:42.9},0).wait(1).to({skewX:-1.4,x:42.8},0).wait(1).to({skewX:-1.1,x:42.5},0).wait(1).to({skewX:-0.4,x:41.6},0).wait(1).to({skewX:-0.1,x:41.3},0).wait(1).to({skewX:0,x:41.2},0).wait(1).to({x:41.1},0).wait(1));

	// <Path>_3
	this.instance_3 = new lib.Path_3();
	this.instance_3.parent = this;
	this.instance_3.setTransform(18.3,-4.6,1,1,0,0,0,2.8,25.8);
	this.instance_3.alpha = 0.102;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({scaleY:1.01,y:-4.5},0).wait(1).to({scaleY:1.07,y:-4.6},0).wait(1).to({scaleY:1.2},0).wait(1).to({scaleY:1.58,y:-4.7},0).wait(1).to({scaleY:1.95},0).wait(1).to({scaleY:2.08,y:-4.8},0).wait(1).to({scaleY:2.13},0).wait(1).to({regX:2.9,regY:25.7,scaleY:2.14,x:18.4},0).wait(1).to({regX:2.8,regY:25.8,scaleY:1.56,x:18.3,y:-4.5},0).wait(1).to({scaleY:1,y:-4.6},0).wait(1));

	// <Path>_4
	this.instance_4 = new lib.Path_4();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-88.6,181.1,1,1,0,0,0,4.2,38.5);
	this.instance_4.alpha = 0.102;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({scaleY:0.98,skewY:0.4},0).wait(1).to({scaleX:1,scaleY:0.81,skewY:3.2},0).wait(1).to({scaleX:1.01,scaleY:0.65,skewY:5.8},0).wait(1).to({scaleY:0.63,skewY:6.2},0).wait(1).to({scaleY:0.63,skewY:6.1},0).wait(1).to({scaleX:1,scaleY:0.67,skewY:5.4},0).wait(1).to({scaleX:1,scaleY:0.82,skewY:3,y:181},0).wait(1).to({scaleX:1,scaleY:0.96,skewY:0.7},0).wait(1).to({scaleX:1,scaleY:0.99,skewY:0.1},0).wait(1).to({scaleY:1,skewY:0,y:181.1},0).wait(1));

	// <Path>_5
	this.instance_5 = new lib.Path_5();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-84.4,37,1,1,0,0,0,8.2,71.3);
	this.instance_5.alpha = 0.102;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(2).to({skewX:-0.1,x:-84.3},0).wait(1).to({skewX:-0.4,x:-84},0).wait(1).to({skewX:-1,x:-83.2},0).wait(1).to({skewX:-1.3,x:-82.9},0).wait(1).to({x:-82.8},0).wait(1).to({regX:8.1,skewX:-1.4},0).wait(1).to({regX:8.2,skewX:-1.2,x:-82.9},0).wait(1).to({skewX:-0.2,x:-84.1},0).wait(1).to({skewX:0,x:-84.4},0).wait(1));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AVAKxQiGgFiHgXQiCAKiAAAQiwAAixgUIwvAAIAGAMQhWAMhOAAQhOAAhbgMQh3AKhWAAQhfAAiEgLIhxgLIAAgBIpKAAIAA07MBAiAAAIAAU7Il7AAIABADQh1AliqAAIg4gBg");
	mask.setTransform(-10.3,194.1);

	// churn
	this.instance_6 = new lib.churnmc();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-136.9,266.3,1.146,1.141,0,22.2,-157.8,0.1,0.1);

	this.instance_7 = new lib.churnmc();
	this.instance_7.parent = this;
	this.instance_7.setTransform(89.7,253.9);

	var maskedShapeInstanceList = [this.instance_6,this.instance_7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7},{t:this.instance_6}]}).wait(11));

	// waterfall
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D2D3D4").s().p("EATYApHQiFgFiIgYQiBAKiAAAQiwAAiygTIwvAAIAGALQhVAMhOAAQhOAAhcgLQh2AKhXAAQheAAiFgLIhwgLIAKgVQAmhJBCgzQBFg2BSgPQARgWAZgNQAZgOAcAAIACAAMAAAhNgIeSAAMAAABMUQA8AUAoAyQBeAWBPA9QAhgbAoAAQAiAAAeAUQA8gaBEAAQBrAABaA/QBUA6AtBhIABACQh0AlirAAIg4AAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(11));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-195.1,-263.1,353.5,526.3);


// stage content:
(lib.scene4animationv2 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_127 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(127).call(this.frame_127).wait(1));

	// mask
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#262628").s().p("EhGbBGUMAAAiMnMCM3AAAMAAACMngA16K6IA3KtIBbBWICpHDIAEAJQAFALgBAOQgBAqgyAsQiHB5j0AfQheANisAIQjVAJh/AHQizAKAgAiQAcAeCxApQCjAmDWAfQDaAfCXAHIHkAfQGWAbFcAIQROAdQVh8QJFhFB/g3QBtgujdgiQi2gclzgOQk9gMknACQj4AChugSQhngRA7gaQA9gbDMgWQDogYFTgIQFPgIAZgZQAUgWjCgdQiogaj4gUQjygUh+AAQjXAAhqg0QhMglAHgmQAGghCphTQBgguBigpICqjxIBqkjQABgLALAAQALgBADALIA1ByIA4rzQABgNAMAAQANAAABANIBJNuIAkgFIAjlxQAAgGAJAAQAJAAAAAGIAdFlIBcgNIEohEIBWlmICdo5In65/Ik9hxImlkhIgxDjQgBAHgHAAQgHAAgCgHIgZhdIg0N7QAAAEgFAAQgFAAAAgEIgjoRIhEhlIg+plIgEgDInYngIrGiAQjdgMhsAFIuqGzIiLGzQgCAJgKABQgLABgDgKIgbhpIgsMFQgBAMgMAAQgMAAgBgLIhFsBImYOZQAAAfhGBeIhcB9QgUAlgoBUQgmBPgXAqQhRCPixEVIheFAIE0FGIMdgEIAXFeIB+D7IAPjkQAAgFAGABQAFgBAAAFIAREeIAcAaIA0otQABgJAOAAQAOAAABAJg");
	this.shape.setTransform(450.8,450);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(128));

	// mask flow
	this.instance = new lib.flowmaskmc();
	this.instance.parent = this;
	this.instance.setTransform(458.7,310,0.653,1.505,0,0,0,0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:0,scaleX:1,x:458.6,y:1150},33,cjs.Ease.get(-1)).to({_off:true},1).wait(94));

	// lens flare
	this.instance_1 = new lib.flashlightflare("synched",0,false);
	this.instance_1.parent = this;
	this.instance_1.setTransform(427.1,481.6,1,1,0,0,0,1.9,1.8);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(89).to({_off:false},0).wait(39));

	// light line
	this.instance_2 = new lib.Tween3("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(426.8,481);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(61).to({_off:false},0).to({alpha:1},3).to({startPosition:0},27,cjs.Ease.get(-1)).to({alpha:0},6,cjs.Ease.get(-1)).wait(31));

	// tint
	this.instance_3 = new lib.tintmc();
	this.instance_3.parent = this;
	this.instance_3.setTransform(450.1,443.1);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(14).to({_off:false},0).wait(1).to({alpha:0.977},0).wait(1).to({alpha:0.957},0).wait(1).to({alpha:0.939},0).wait(1).to({alpha:0.923},0).wait(1).to({alpha:0.908},0).wait(1).to({alpha:0.896},0).wait(1).to({alpha:0.884},0).wait(1).to({alpha:0.874},0).wait(1).to({alpha:0.866},0).wait(1).to({alpha:0.858},0).wait(1).to({alpha:0.851},0).wait(1).to({alpha:0.846},0).wait(1).to({alpha:0.841},0).wait(1).to({alpha:0.837},0).wait(1).to({alpha:0.834},0).wait(1).to({alpha:0.831},0).wait(1).to({alpha:0.829},0).wait(1).to({alpha:0.828},0).wait(60).to({alpha:0.646},0).wait(1).to({alpha:0.502},0).wait(1).to({alpha:0.388},0).wait(1).to({alpha:0.297},0).wait(1).to({alpha:0.225},0).wait(1).to({alpha:0.167},0).wait(1).to({alpha:0.122},0).wait(1).to({alpha:0.086},0).wait(1).to({alpha:0.058},0).wait(1).to({alpha:0.037},0).wait(1).to({alpha:0.022},0).wait(1).to({alpha:0.012},0).wait(1).to({alpha:0.005},0).wait(1).to({alpha:0.001},0).wait(1).to({alpha:0},0).wait(22));

	// cave glint
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.898)","rgba(255,255,255,0.898)"],[0,0.769,1],-14.8,0,14.8,0).s().p("AArJ4Ig4oRIhFhlIhBp9IEkEbIADC7QgBAHgHAAQgIAAgCgHIgwhdIgcN6QAAAEgFAAQgFAAgBgEg");
	this.shape_1.setTransform(564.8,305.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.898)","rgba(255,255,255,0.898)"],[0,0.769,1],-0.6,-52.9,6.3,57.1).s().p("Ah5IsIg3vGIFhicIiwHEQgBAKgKABQgLAAgDgKIgCg+IhFLaQgBAMgMAAIgBAAQgLAAgBgLg");
	this.shape_2.setTransform(293.2,280.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.898)","rgba(255,255,255,0.898)"],[0,0.769,1],-25,0,25.1,0).s().p("AhfFVIB1kXQACgLAMABQAMABAAAIIAjB0IBLr0QABgMAMAAQAMgBABANIBCRAInzBUg");
	this.shape_3.setTransform(608.2,545.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.898)","rgba(255,255,255,0.898)"],[0,0.769,1],-0.6,32.4,1.7,-15.7).s().p("AgqCZIAvlzQABgFAIAAQAKAAAAAFIATG6g");
	this.shape_4.setTransform(640.5,559.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.898)","rgba(255,255,255,0.898)"],[0,0.769,1],-0.5,22.7,1.1,-4.1).s().p("AgJicQAAgFAGABQAEgBAAAFIAcEnIg5AXg");
	this.shape_5.setTransform(297.7,560);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.898)","rgba(255,255,255,0.898)"],[0,0.769,1],-1.6,43.7,3.4,-5).s().p("AgSllQABgJAOAAQAOAAAAAJIBDK3IibAdg");
	this.shape_6.setTransform(309.4,555.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]},91).wait(37));

	// light beams
	this.instance_4 = new lib.lightbeamsmc("synched",0,false);
	this.instance_4.parent = this;
	this.instance_4.setTransform(451.6,325.5);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(87).to({_off:false},0).wait(41));

	// chest closed
	this.instance_5 = new lib.Tween6("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(448,478.5,1,1,0,0,0,21.4,-1);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(15).to({_off:false},0).to({startPosition:0},72).to({regX:21.5,regY:-0.8,scaleY:0.69,skewX:10.9,skewY:1.2,x:448.1,y:478.6},3).to({_off:true},1).wait(37));

	// chest open
	this.instance_6 = new lib.Tween4("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(429.9,472.5,1,1.365,0,-28,0,0.1,0.1);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(95).to({_off:false},0).wait(1).to({regX:0,regY:0,scaleY:1.3,skewX:-22.9,x:430.3},0).wait(1).to({scaleY:1.25,skewX:-19,x:430.8,y:472.7},0).wait(1).to({scaleY:1.21,skewX:-15.8,x:431.1,y:472.8},0).wait(1).to({scaleY:1.17,skewX:-13.1,x:431.5,y:472.9},0).wait(1).to({scaleY:1.14,skewX:-10.7,x:431.7,y:473},0).wait(1).to({scaleY:1.11,skewX:-8.6,x:432},0).wait(1).to({scaleY:1.09,skewX:-6.8,x:432.2,y:473.1},0).wait(1).to({scaleY:1.07,skewX:-5.1,x:432.4,y:473.2},0).wait(1).to({scaleY:1.05,skewX:-3.5,x:432.5},0).wait(1).to({scaleY:1.03,skewX:-2.2,x:432.7,y:473.3},0).wait(1).to({scaleY:1.01,skewX:-0.9,x:432.8},0).wait(1).to({scaleY:1,skewX:-0.4,x:432.9},0).wait(1).to({scaleY:1.03,skewX:-2.2,x:432.7},0).wait(1).to({scaleY:1.04,skewX:-3.2,x:432.6,y:473.2},0).wait(1).to({scaleY:1.05,skewX:-3.9,x:432.5},0).wait(1).to({scaleY:1.05,skewX:-4.2},0).wait(1).to({scaleY:1.06},0).wait(1).to({scaleY:1.05,skewX:-4},0).wait(1).to({scaleY:1.05,skewX:-3.6},0).wait(1).to({scaleY:1.04,skewX:-3,x:432.6},0).wait(1).to({scaleY:1.03,skewX:-2.1,x:432.7,y:473.3},0).wait(1).to({scaleY:1.01,skewX:-0.7,x:432.9},0).wait(1).to({scaleY:1.01,skewX:-0.5},0).wait(1).to({scaleY:1.01,skewX:-1.1,x:432.8},0).wait(1).to({scaleY:1.02,skewX:-1.5},0).wait(1).to({scaleY:1.02,skewX:-1.6},0).wait(1).to({startPosition:0},0).wait(1).to({scaleY:1.02,skewX:-1.3},0).wait(1).to({scaleY:1.01,skewX:-0.8,x:432.9},0).wait(1).to({scaleY:1,skewX:0,x:433.1,y:473.4},0).wait(3));

	// chest bottom
	this.instance_7 = new lib.chestbottom();
	this.instance_7.parent = this;
	this.instance_7.setTransform(426.7,487);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(15).to({_off:false},0).wait(113));

	// plinth
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#333333").s().p("AiYAGIDjgFIBOgRIhBAhg");
	this.shape_7.setTransform(432,499.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#333333").s().p("AgPARIhAgbIBRgGIBOAfIgvACIgiAAIgOAAg");
	this.shape_8.setTransform(537.6,542.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#333333").s().p("ABHCjIh1k4IhyiOICNBhIBdFOIBXCZg");
	this.shape_9.setTransform(469.9,520.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#333333").s().p("AhfA7IB1iNICfgWIiTA6IiCB2IhUAhg");
	this.shape_10.setTransform(397.5,539.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#262628").s().p("AxLHjIC5ioIFTn1IBYAAQBxAACvh+QCsh8AfhjIALgrIAxADIEcHPQAmA1AdBLQAPAnAHAbIBdAvICChBIB4AsIBKBCIByAeICEEDQimA1jygHQk7AylwAPQh4AFhxAAQn6AAlxhgg");
	this.shape_11.setTransform(453.7,512.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7}]},15).wait(113));

	// miners
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#424242").s().p("AgfguIACgJIAKgDIAUANIgNAkQACAEAIAEIANAEIAcAFIgEAIIgrgIIgGgHIgGA3IgSADg");
	this.shape_12.setTransform(214.4,466.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#424242").s().p("AgMBMIAchqQAJgUgHgIQgEgGgUgIIgVgHIAQADQAQACAGADQANAGADAEQACAEgBALQgCANgXBxg");
	this.shape_13.setTransform(215.6,484.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#424242").s().p("AAygiQgBgFgDgIQgEgIgGgDQgFgCgagGIhMgOIANgCIBpAPQASAGAAAcQgBAbAIBYIgNABg");
	this.shape_14.setTransform(218.3,481.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#424242").s().p("AgUAxIALhFQACgWAIgEQAHgEANADIgHAAIgEABQgFACAAADIgLAnIgHA0g");
	this.shape_15.setTransform(202.9,467.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#424242").s().p("AgKAOIgDgcIAbAFIgBAEQgCAJgHAGQgEAFgHAAIgDgBg");
	this.shape_16.setTransform(220.2,469.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#525252").s().p("AgDgFIACABIAAgBIABAAIAAAAIgCgEIABgEIAFAGIAEgGIgFAZIgKACg");
	this.shape_17.setTransform(214,459);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#525252").s().p("AgFANIgBgGQAEgBABgCQADgEgEgEIgEgBIgBgJQAGAAADADQAFAEAAAGQABAFgEAFQgEAGgGAAg");
	this.shape_18.setTransform(214.7,454.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#424242").s().p("AgDAWQgKgKABgDIACgPIACgGQAEgDAAgBQABgFgEgBIgDgBQAAAAgBAAQAAAAgBABQAAAAAAABQgBAAAAABQgCAEAAAEQAAACADAEIgEAGQgBABgCgZIAYgHIgFAHIABgBIgEAZIAHAGIAGgFIAKABIgBAEIgDgBIgCAAQgDAAgCABIgCACIABABIACABIAIAAIgEAUIgIACIgJgKg");
	this.shape_19.setTransform(211.8,457.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#4A4A4A").s().p("AgBAMQgFgEgBgGQgBgFAEgFQAEgGAGAAIABAJQgEAAgBACQgBABAAAAQAAABgBAAQAAABAAAAQAAAAAAABQABADACABIAEACIABAGIgBACQgFAAgDgDg");
	this.shape_20.setTransform(213.3,454.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#424242").s().p("AAIAOQgHgBgGgJQgGgIgBgJIAAAAIAZACQABAZgBAAg");
	this.shape_21.setTransform(199.9,474);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#D2D3D4").s().p("AgDAFQgCgBgBgDQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAABgBQABgDADABIAEABQAFAEgEAEQgBACgEAAIgDgBg");
	this.shape_22.setTransform(214,454.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#262628").s().p("AgBA+IgIhoIgFgEIAGgBIADgPIATAIIABACQgFAAgFAGQgEAFAAAEIADA/IgFAkg");
	this.shape_23.setTransform(252.1,462.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#262628").s().p("AgcAUIgHgBIgEAAIgEgBQAAAAAAAAQAAAAgBAAQAAAAAAgBQAAAAAAgBIAAgDQAAgFAEgIIAEgHIAFgOQACgIgBgEIAYACIgEAQIADANIAJAJIAdAGQgYgKgEgDIgDgDIAfAGIAEADQAMAHgCANIgDAHIAAAAIgBAAIAAABg");
	this.shape_24.setTransform(243.6,500.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#262628").s().p("AgfBWIABg3IAPghQACgEAFgEQAGgFADABIANg3IgKgBIgSAQIgQAPIAAgDQAAgPAKgOQAKgNALgGIAGgCQAEgCAGABIALAEIADABIABAVIgHgBIggBmIgJA1IgDAHQgDAAgJgIg");
	this.shape_25.setTransform(243.4,463.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#262628").s().p("AgbAQQgCAAgCgIQgCgJABgCIACgOIAQgEIAAANIAfAQIAPAMIABACg");
	this.shape_26.setTransform(253.3,498.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#424242").s().p("AhBgfIAKAMIAFARIAgAWIAGAAQADABADgCIAEgDIA6gvIADAEQAHAHAAAKQAAAKgHAHIgXgSIgdAjQgNAMgRgIIgggRIgHAVg");
	this.shape_27.setTransform(258.8,461.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#424242").s().p("AAKCxIgIABIAOhCIgIgrIgMgXIgchfIAAgnIAehfIAFBaIgGAsIAIAaQAaBUACAKQADAXgQBPIgCAKIgEABg");
	this.shape_28.setTransform(251.6,478);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#424242").s().p("AgGAWQgMgLABgDIABgRIAGgQIAHgHIgFAdIAJAGIAHgEIALABIAAAAIgBAEQgBAAAAgBQgBAAAAAAQgBAAAAAAQAAAAgBAAIgCAAQgDgCgCADIgDACIADACIAKAAIgEAWIgIACIgLgKg");
	this.shape_29.setTransform(248.8,454.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#424242").s().p("AgPBkIAAgSIgFgBIAShQQAIgdABgLQADgPgFgXIgDgSIAOgGIAEAuQACAQgCAJQAAAFgHAUQgNAsgHAqIgDAVg");
	this.shape_30.setTransform(245.1,489.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#424242").s().p("AgJgNQAHgEAMAAIgFAGIgEgBQgFAAAAAKIAAACIgBATg");
	this.shape_31.setTransform(247.1,453.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#363636").s().p("AgIAFIgDgGIgGgGIANAAIgDAGIAHAEIASAFg");
	this.shape_32.setTransform(226.1,490.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#363636").s().p("AgUAHIgCgTIgBAAIALACIAAAKIACAAIAiANg");
	this.shape_33.setTransform(216.6,493.2);

	this.instance_8 = new lib.Group_5();
	this.instance_8.parent = this;
	this.instance_8.setTransform(262.7,460.2);
	this.instance_8.alpha = 0.051;

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#D2D3D4").s().p("AgEAFQgEgEAEgEQACgCADgBIADACQAFAEgEAEQAAABgBAAQgBABAAAAQgBAAAAAAQgBABAAAAIgFgCg");
	this.shape_34.setTransform(251.3,451);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#4A4A4A").s().p("AgBALQgFgEAAgGQgBgFAEgFQAEgFAHAAIAAAIQgEAAgCADQgDADAEAFIAFABIAAAGIgBADQgGgBgCgDg");
	this.shape_35.setTransform(250.5,451);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#525252").s().p("AgGAMIAAgGQABAAAAAAQABAAABAAQAAAAABgBQAAAAABgBQADgEgEgEIgEgCIAAgIQAGAAACAEQAFADABAHQAAAFgEAEQgEAGgHAAg");
	this.shape_36.setTransform(252,451);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#525252").s().p("AgDgGIACABIACgCIgCgCIgBgBIABgFIAGAGIADgBIgEAXIgLADg");
	this.shape_37.setTransform(250.9,456.3);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#333333").s().p("AgHAQIgKgKIgDgLIAEgRIAFABIABAaIAEAFQAEACAXAKg");
	this.shape_38.setTransform(244.6,499.7);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#262628").s().p("AgHAQIgKgKIgDgLIAEgRIAFABIABAaIAEAFQAEACAXAKg");
	this.shape_39.setTransform(244.6,499.7);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#333333").s().p("AAAAIIgcgGQgRgBADgMIAAADQAAABABAAQAAAAAAABQAAAAAAAAQAAAAABAAIAEABIADAAIAIABIBEANIgFADIgEAAQgKAAgYgEg");
	this.shape_40.setTransform(243.4,503.1);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#333333").s().p("AA0ELQgTgBgJgBQgDgBgEgDIgDgEIA+AFIgCgBIgPgMIgfgRIgCgSIgOAHIgGADIAIhhQABgFgDgMQgEgLgDgEIgZg2IgCADIgPAGIAEARQAFAXgDAPQgCALgIAdIgTBRIgYgCQABAEgCAIIgHgCIAPhVQAKgaACgJQADgNgKgkIgHg8QgDgNAGgOIADgHIAJg1IAhhnIAHABIAAgiIAAAAQAAgEACgEQACgDACAAQABAAAAABQAAAAABAAQAAAAABAAQAAABABAAIAEgHQgHABgIACIgGADIAAgFQABgGACgEQADgNALgGQAJgFAMABQAGAAAIADIACALIAAAaIgEAJIgBAFIACAFIgDADIgHAjIAFgBIAGAEIABAPIgSAyIgIAsIgCAmIAAACIAbBeIANAWIAHAtIgDAdIgLAjIgBAAIAAACIABgBIAIAAIAEAGIABACQAIAJAKAFIACABIARAFQAIACACACIADACQACAEABAFIAAABQgBADgCADQgEAGgIABIgOABIgMAAg");
	this.shape_41.setTransform(249.1,474.8);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#333333").s().p("Ag1BFIABgEIArhaQAFgMAMgMIACgBIAOgOIATgQIALABIgOA3QgEgBgGAFQgFAEgCAEIgqBdg");
	this.shape_42.setTransform(239.5,464.1);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#333333").s().p("AAAAHIgJgLQAAgDAEgGQAFgGAFAAQAFAHAAAJIgBABIgBAGIgFAQg");
	this.shape_43.setTransform(253.2,459.1);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#333333").s().p("AgUAeIgogSIAHgUIAgAQQARAIANgMIAdgkIAXAUIguAlQgKAIgKAAQgIAAgHgDg");
	this.shape_44.setTransform(258.6,463.8);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#333333").s().p("Ag3BGIAShWQABgIAJgKIAQgOIAYgTQANgIAaAFIAEAEIgxBIIADgeIgPAGIgMAmIgHA1g");
	this.shape_45.setTransform(204,465.5);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#333333").s().p("AgeDCIAahiQAAgFgDgEQgFgDgEAAIgvgIQgWgCgMgOQgIgIgCgPIAAgNIACgMIAGg1IA3hVIAAAAIACgRQgCgHABgDIABgFQgBgEACgDQACgEACAAIADABIACgDIABgBIgMACIgFACIAAgEIACgHQADgNAKgGQAJgFALABQAXADADASQAEAPgIAFQACgHAAgEIgCAGIgDAGIgEATIgKAaIgIAPIADADIACADIgLBfIBpAXQASAEAAAeQAAAbAIBZIgoADIgHhyQAAgGgTADIgHABQADAFgBAHIgCAKIgXB4g");
	this.shape_46.setTransform(214.6,472);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#333333").s().p("AABAHIgdgCQgHgBgDgEQgEgDABgDQAAADAFABIBDAGQAGAAAEgEQACgCAAgFQAAAMgOACIgKABIgSgBg");
	this.shape_47.setTransform(226.2,493.2);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#333333").s().p("AgaADIgCgBQgKgDgBgEQgBgDAoADIAoAEIAAABIgBAEIgBABQgCACgGAAg");
	this.shape_48.setTransform(215.8,496.5);

	this.instance_9 = new lib.Path_20();
	this.instance_9.parent = this;
	this.instance_9.setTransform(254,459.5);
	this.instance_9.alpha = 0.051;

	this.instance_10 = new lib.Path_21();
	this.instance_10.parent = this;
	this.instance_10.setTransform(253.2,496.4,1,1,0,0,0,0.2,0.1);
	this.instance_10.alpha = 0.051;

	this.instance_11 = new lib.Path_22();
	this.instance_11.parent = this;
	this.instance_11.setTransform(257.5,463.7);
	this.instance_11.alpha = 0.051;

	this.instance_12 = new lib.Path_23();
	this.instance_12.parent = this;
	this.instance_12.setTransform(253.4,495.3);
	this.instance_12.alpha = 0.051;

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#262628").s().p("AgkAOQgFgBAAgDIAAgBQgBgIABgFIABgCIgBgMIAXgCIAGAGIACAIIAuAGIACABIABAAQAEAEAAAEQAAAEgCADQgEAEgGABg");
	this.shape_49.setTransform(226.2,491.5);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#262628").s().p("AAoAXIgogEQgogDABADQgCgHAFgIIADgGQACgKgDgMIAUAFIACATIArAGQAMAHgDAMg");
	this.shape_50.setTransform(215.8,494);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#262628").s().p("Ag5BHIAAhuQABgOAJgLQAIgKAMgGIAFgBQALgEAIAJIA5AqQAHAJgDAMIgOAgIgHA9IhYADQgGgBAAgLg");
	this.shape_51.setTransform(208.6,464.1);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#363636").s().p("AgHAMIADgEIgCgEIABgFIADgJIAAgaIgBgKIANAJQAMANgRAVIgIAvIgLADg");
	this.shape_52.setTransform(251.6,453.2);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#424242").s().p("AAEASIgEgCQgGgEgFgOIgCgPIAbAKQgIAZgCAAIAAAAg");
	this.shape_53.setTransform(235.9,472.9);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#262628").s().p("AonCqIgQnfIDnA7IBAALIAzhMICXAeIARBSIB6AUIEpBNIDKB5ImuEtg");
	this.shape_54.setTransform(224.1,505.5);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#262628").s().p("AgZAcIAvhIIAFAFIAAgBIABABIg3BUg");
	this.shape_55.setTransform(207.3,463.3);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#262628").s().p("AgZAcIAvhIIAFAFIAAgBIABABIg3BUg");
	this.shape_56.setTransform(207.3,463.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.instance_8},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12}]}).wait(128));

	// foam
	this.instance_13 = new lib.foammc();
	this.instance_13.parent = this;
	this.instance_13.setTransform(383.6,428.9,1,1.101,0,61.2,-118.8);

	this.instance_14 = new lib.foammc();
	this.instance_14.parent = this;
	this.instance_14.setTransform(446.6,378.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_14},{t:this.instance_13}]},15).wait(113));

	// water ripples 2
	this.instance_15 = new lib.waterripplesmc();
	this.instance_15.parent = this;
	this.instance_15.setTransform(438.6,636.4);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(33).to({_off:false},0).wait(95));

	// water ripples
	this.instance_16 = new lib.waterripplesmc();
	this.instance_16.parent = this;
	this.instance_16.setTransform(438.6,636.4);
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(15).to({_off:false},0).wait(113));

	// waterfall
	this.instance_17 = new lib.waterfallmc();
	this.instance_17.parent = this;
	this.instance_17.setTransform(453,267.5);
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(15).to({_off:false},0).wait(113));

	// water
	this.instance_18 = new lib.water();
	this.instance_18.parent = this;
	this.instance_18.setTransform(411.1,569.6,1,1,0,0,0,411.1,57.2);
	this.instance_18.alpha = 0.398;
	this.instance_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(15).to({_off:false},0).wait(113));

	// cave cieling
	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#424242").s().p("EAinAbdIiQgvIgyrOQAAgHgHAAQgIAAAAAHIgbHrIgQhCQgCgGgGAAQgHABgBAGIgkDvImAh/IgOi3QgBgDgFAAQgFgBAAAEIgQCfIkFlkIlAj8IhQlZIAOsDIzoB8ItRjiIhOLQIieFYIghHPIhqA7IgPi7QgBgDgFAAQgEAAAAADIgVDUInYEHIgcmUQgBgFgFAAQgGAAgBAGIgVF6IgMgzQgBgFgFABQgFAAgBAFIgUCHIplFeI5dAQMAAAhEVMCM3AAAMgADBFYI3LheIluG5gA+wNkQAAAJAIAAQAJAAABgJIBEvZIjIC6IAtEvQABAIAHAAQAIABACgIIAThNgAZFMKQABAFAGAAQAFABABgGIAemzIh1heIAdDJQABAFAFAAQAEAAACgFIANgzgAczKuQAAADAFAAQAFAAABgDIAXkCIg3AAgA3QFdQAAAFAJAAQAJAAAAgFIAqm7IhgAAg");
	this.shape_57.setTransform(450.8,241.5);
	this.shape_57._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_57).wait(15).to({_off:false},0).wait(113));

	// water blue
	this.instance_19 = new lib.waterblue();
	this.instance_19.parent = this;
	this.instance_19.setTransform(451.7,713.4,1,1,0,0,0,450,186.6);
	this.instance_19.alpha = 0.148;
	this.instance_19._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(15).to({_off:false},0).wait(113));

	// background lightness
	this.instance_20 = new lib.Tween5("synched",0);
	this.instance_20.parent = this;
	this.instance_20.setTransform(452.1,450);
	this.instance_20.alpha = 0;
	this.instance_20._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(92).to({_off:false},0).wait(1).to({alpha:0.008},0).wait(1).to({alpha:0.039},0).wait(1).to({alpha:0.112},0).wait(1).to({alpha:0.279},0).wait(1).to({alpha:0.534},0).wait(1).to({alpha:0.707},0).wait(1).to({alpha:0.811},0).wait(1).to({alpha:0.879},0).wait(1).to({alpha:0.925},0).wait(1).to({alpha:0.956},0).wait(1).to({alpha:0.977},0).wait(1).to({alpha:0.991},0).wait(1).to({alpha:0.998},0).wait(1).to({alpha:1},0).wait(22));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(450,169.9,901.7,1180.3);
// library properties:
lib.properties = {
	width: 900,
	height: 900,
	fps: 30,
	color: "#262628",
	opacity: 1.00,
	webfonts: {},
	manifest: [],
	preloads: []
};




})(libFour = libFour||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var libFour, images, createjs, ss, AdobeAn;
