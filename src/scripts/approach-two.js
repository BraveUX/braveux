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


(lib.Tween7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#262628").ss(1,2,1).p("AAwoeQgYBRgYBuQgxDdABCRQABCJAhB7QAgB8AAAaQABA3gEAmQgDASgBAH");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.9,-55.5,12,111);


(lib.Tween5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#424242").s().p("EhGTBK1MAAAiVpMCMnAAAMAAACVpg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-450,-478.9,900,957.9);


(lib.Tween4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.898)"],[0,1],27.9,71.8,89.7,-263.5).s().p("A9SekMA3NhFfIAAABQAFgIAKAAQAGAAAEAFQAFAFAAAGMAC6BN1g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-187.5,-249.9,375.1,499.9);


(lib.Tween3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#262628").s().p("EhGTBK1MAAAiVpMCMnAAAMAAACVpgACvVZIBACaIDgBsIBJivIA0AXIApBUIBjqQIA2hoQAEgFAGABQAGABABAGIArFVICXB0IA0EPIFIhdIDAohIgOntIBpqaIgxwpIhVnxIm8qeIh5AGIhfBnIhFMsQAAAAgBAAQAAAAAAAAQAAAAAAAAQgBAAAAAAIgqr4IhAg0IiFhVIiEAGIl7kSIgoDrQgBAAAAABQAAAAAAAAQAAABgBAAQgBAAgBAAQgFAAAAgCIgukxIgpgeIgIAEIg1DEQAAAAAAAAQgBAAAAABQgBAAgBAAQAAAAgBAAQgFAAgBgBIghiRIssGwIhGF4QAAAAAAABQAAAAgBABQAAAAAAAAQgBAAgBAAQAAAAgBAAQAAAAAAAAQgBgBAAAAQAAgBAAAAIAFlTIhRArIhWDNIgQCaIgnA6IgVBsQAAABAAAAQAAABgBAAQAAAAAAABQgBAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAgBQAAAAAAgBIgfk+IgTgeIgnAtIgRDgQAAAAAAAAQAAAAAAAAQgBAAAAAAQAAAAAAAAIgNi+IphKsIjxBkIAPgcInuMNIAZBTINCjtICghMICCAPIDTABIA0gXIg/AFIhXgHIi2gBIA7gwIFtiuICEgqIgOAHICfAJIA0gKIiAgIIATgaIDohKIDuiOICXg6IgSggIAIgFIAIANIIKjaIBEg8IAIAGIggBUIAkYXIgJABIgk3/IhACsIAAF3IlPG6IitKIIgtKOIDGG8ID2B3IAThzIBDg9IAjhyQABgCAEAAQAFAAAAACIA0FNIAZg5QACgEAHAAQAHAAACAFgAxtB2IDYAXICMgPIgmgSIhogJgA1oklIAADDIArjOgA1vlRIGOhMIj8AAIiwAeIkLAAgAlf0TIB0APIBWgJIBeAFIg1gdIg7AEIiAgLIAWgXIAZgKIC+gqIB6hsIntDPIAFALIA2gVgAA61UIAAAjIA/ioQgFADgGAAQgIAAgHgGQgGgGAAgIIAAgCIh/BxIAjgIgABq30IgBAAQgGADAAAHQAAAEAEADQADADAEAAQAEAAAEgDQADgDAAgEQAAgFgDgDQgEgDgEAAgABv3/QAOABAFANIAQgtg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-450,-478.9,900,957.9);


(lib.Tween1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D2D3D4").s().p("AgEAAQgBgFAFAAQAFAAABAFQgBAGgFAAQgFAAABgGg");
	this.shape.setTransform(7.6,-16.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#545454").s().p("AgIAJQgEgEABgFQgBgEAEgEQAEgDAEAAQAFAAAEADQAEAEAAAEQAAAFgEAEQgEADgFAAQgEAAgEgDg");
	this.shape_1.setTransform(7.6,-16.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AgqgEIAGgMIBPAVIgGAMg");
	this.shape_2.setTransform(-3.9,-7.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#424242").s().p("AgRAQIAAgNQAAgNADgCIAMgJIAMgEIAIABIgUAMIABAKIAGACIAGAGIAAAIIADABIgSALgAgBADIABABIAFAHIAAABIACAAIAAgCQAAgBAAgBQAAAAAAgBQAAAAgBgBQAAAAAAgBIgBgBQgBgBAAAAQAAgBgBAAQAAAAgBAAQgBAAAAAAIgCgBg");
	this.shape_3.setTransform(3.8,-15.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("AAVAaQABgDgDgKQgDgKgCgDIgUgtIgNANQgcgPgEgGQgDgEgCgJIgBgJQgCgMAJgRIACgEIBJAUIAPAoQAQArABALQADAVgOBJIgfAJg");
	this.shape_4.setTransform(-3.5,4.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#333333").s().p("AAMgeIADALIgRAoIgMAKg");
	this.shape_5.setTransform(2.3,-10.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#333333").s().p("AgeBZIAMhIQAJgVABgHQADgMgIgeIgFgtIAtAYIADAqQACAOgBAHIgGAUQgPAvgGArg");
	this.shape_6.setTransform(-7.2,7.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#262628").s().p("AggARQgCgFAAgGIgBgVIASgFQAIALAOAEIAXADIACABQAIACgDAIQgDAFgEAAIg3AGIgBABQgBAAgBgBQAAAAgBAAQAAgBAAAAQgBgBAAgBg");
	this.shape_7.setTransform(1.9,15.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#202022").s().p("AAAAHIgZgFQgPAAAEgLQABgDAkAGIAlAHQAAAIgHABIgFABQgIAAgSgEg");
	this.shape_8.setTransform(-7.1,20.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#202022").s().p("AgZAJQgEgCgDgEQgCgDABgDIADgEQACgEAfABIAfABQADAJgLADQgGACgQADIgWADIgBAAIgGgCg");
	this.shape_9.setTransform(2,17.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#262628").s().p("AAIAdIgogIQgEgCgBgFQAAgEAEgKIADgGIAEgLQADgHgBgEIAYACIAAAYIAbAFIADACQAGAEACAGQABAHgDAFIgBABIAAABg");
	this.shape_10.setTransform(-7.1,18.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#424242").s().p("AgWAhIgggfIARgqIAIAUIATAYQAFAHAHgCIArgOIAKAcIgwAQQgGACgEAAQgLAAgIgIg");
	this.shape_11.setTransform(7.2,-9.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#545454").s().p("AgBgDQAFgEACADQACACgBACQAAABAAAAQAAABgBAAQAAABAAAAQgBAAAAAAIgGAAIgFADQgBgGAGgDg");
	this.shape_12.setTransform(4.2,-18);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#333333").s().p("AgJgJIgNgIIAFgEQAGgEAEACQADAAAEAEQAIAFAEAHQAOARgEAGQgDAHgMACQgEgWgMgMg");
	this.shape_13.setTransform(6.3,-17.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#424242").s().p("AAAgJIAUAMIgMAAQgEAAgMADIgLAEg");
	this.shape_14.setTransform(4.4,-18.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#545454").s().p("AgcANQgCgEgBgDIAAgDIATgQQADgEAEgCIAFgEIAfAAIAAAhIgUANIgdABQgFgEgFgHg");
	this.shape_15.setTransform(3.9,-15.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#545454").s().p("AgMgIIAWgJIABADQAEAKgEAJQgEAJgJAEg");
	this.shape_16.setTransform(12.8,-9.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#424242").s().p("AAGAZIgdgrQALgJAMADQAKACAHAKQAMAQgIANQgGAJgHAAIgCgBg");
	this.shape_17.setTransform(7,-17.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#333333").s().p("AgdAMIA9glIAFAJIhJAqg");
	this.shape_18.setTransform(-1.8,-14.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#424242").s().p("AgdA3IAqhVQgDgCgGACQgEACgCACIg+A8IgYgTIACgCIA9g7QAHgHAQgHIAigNIAhAQIAWArIACAFIgpBTg");
	this.shape_19.setTransform(-5.2,-11.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#333333").s().p("Ag6A7QgCgBgEgIIAuhrQAFgMAJgGQAKgHAKgBIAEAAQAKgBAEAKIAdBFQAEAJgGAIIg8BIg");
	this.shape_20.setTransform(-2.1,-12.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#545454").s().p("AgEASIgCgCQgGgGABgKQABgJAFgIIAAAAIARARQgNASgCAAIgBAAg");
	this.shape_21.setTransform(-12.9,-7.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.1,-21.2,28.3,42.4);


(lib.flashlightflare = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(15,1,1).p("ABLAAQAAAfgWAWQgWAWgfAAQgeAAgWgWQgWgWAAgfQAAgeAWgWQAWgWAeAAQAfAAAWAWQAWAWAAAeg");
	this.shape.setTransform(448.5,305.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(18,1,1).p("AhaAAQAAglAbgaQAbgbAkAAQAmAAAaAbQAbAaAAAlQAAAmgbAaQgaAbgmAAQgkAAgbgbQgbgaAAgmg");
	this.shape_1.setTransform(448.6,305.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(27,1,1).p("AiIAAQAAg4AogoQAogoA4AAQA4AAApAoQAoAoAAA4QAAA4goApQgpAog4AAQg4AAgogoQgogpAAg4g");
	this.shape_2.setTransform(448.8,305.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FFFFFF").ss(42,1,1).p("AjVAAQAAhYA/g+QA/g/BXAAQBZAAA+A/QA/A+AABYQAABYg/A/Qg+A/hZAAQhXAAg/g/Qg/g/AAhYg");
	this.shape_3.setTransform(449.1,305.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FFFFFF").ss(63,1,1).p("AFDAAQAACFhfBfQhfBfiFAAQiEAAhfhfQhehfAAiFQAAiFBeheQBfhfCEAAQCFAABfBfQBfBeAACFg");
	this.shape_4.setTransform(449.6,305.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#FFFFFF").ss(35.9,1,1).p("AndAAQAAjFCMiMQCMiMDFAAQDFAACMCMQCNCMAADFQAADFiNCNQiMCMjFAAQjFAAiMiMQiMiNAAjFg");
	this.shape_5.setTransform(449.6,305.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FFFFFF").ss(16.5,1,1).p("ApLAAQAAjyCsitQCtisDyAAQDzAACsCsQCuCtAADyQAADziuCuQisCsjzAAQjyAAitisQisiuAAjzg");
	this.shape_6.setTransform(449.6,305.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#FFFFFF").ss(4.9,1,1).p("AqOAAQAAkODAjAQDAjAEOAAQEPAAC/DAQDBDAAAEOQAAEPjBDAQi/DAkPAAQkOAAjAjAQjAjAAAkPg");
	this.shape_7.setTransform(449.6,305.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#FFFFFF").ss(1,1,1).p("AKlAAQAAEXjHDIQjHDGkXAAQkXAAjHjGQjGjIAAkXQAAkXDGjHQDHjGEXAAQEXAADHDGQDHDHAAEXg");
	this.shape_8.setTransform(449.6,305.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(433.5,290.5,30,30);


(lib.bg1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(255,255,255,0.02)").p("ALJyoIAPKQIFULKIhxHUIgDGxImyEeIplg4IldkVIpnxjICyBhQC1BeAQgPQAPgPglkTIgokSIDan3IJRl+g");
	this.shape.setTransform(107.3,137);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.898)").s().p("AhjUdIldkVIpnxjICzBhQC0BeAQgPQAPgPglkUIgokRIDbn3IJQl+IKICsIAQKQIFTLKIhxHTIgDGxImyEfg");
	this.shape_1.setTransform(107.7,137.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg1, new cjs.Rectangle(0,-0.4,215.1,275), null);


(lib.Path_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D2D3D4").s().p("Ag0DdIAOigQABgEAEAAQAEAAABADIAUAqIAIk/QAAgBAAgBQAAAAAAgBQAAAAABAAQAAAAABgBQABABABAAQAAAAABAAQAAABAAAAQABABAAABIAvG2g");
	this.shape.setTransform(5.3,22.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_1, new cjs.Rectangle(0,0,10.6,44.3), null);


(lib.Path = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D2D3D4").s().p("Ag0FtIAvrVQABgEAEAAQACAAABAEIAyLVg");
	this.shape.setTransform(5.3,36.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path, new cjs.Rectangle(0,0,10.7,72.9), null);


(lib.Tween6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Path_1();
	this.instance.parent = this;
	this.instance.setTransform(12.6,15.8,1,1,0,0,0,5.3,22.2);
	this.instance.alpha = 0.398;

	this.instance_1 = new lib.Path();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-12.5,-1.3,1,1,0,0,0,5.3,36.5);
	this.instance_1.alpha = 0.398;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17.8,-37.8,35.7,75.7);


(lib.Tween2 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// miner
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#262628").s().p("AAABZQABgIACguQABgwgEgLQgLgdABglIAKAAQAAAIAAATQAAAUAGASQAFALAAAuQABAtgDAOg");
	this.shape.setTransform(0.8,-54.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#424242").s().p("AAIAkIgohGIAWgDIAqBKg");
	this.shape_1.setTransform(0.9,-38.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AgTgsIAJgFIAeBTIgDAQg");
	this.shape_2.setTransform(10.5,-49.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AgogHIACgNIBPAaIgCAPg");
	this.shape_3.setTransform(7.7,-42.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#424242").s().p("AAhBRIAJg2IgCgoQAAgDgGgDQgFgDgEgBIgPBkIhNgeIAOhhIA7ggQALgEAGAHIAiAoQAKAQgDASIAEBag");
	this.shape_4.setTransform(10.4,-47.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#424242").s().p("AgPAZIgGgYIAEAEIAGgFIAJgBIAGAEIAIgGIgFgZIAGAGIAGANIACAPQABAFgVASgAgHADQgBAAAAAAQAAAAgBAAQAAAAgBAAQAAABgBAAIgCACIABABIALAAIABgBIABgBIgBgBQgCgCgDAAg");
	this.shape_5.setTransform(6,-56.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#333333").s().p("Ah0BKIAXiKQABgEATgCIBugLIBOAeIACAFQgIAdgZAPQgJAGgLgEIhlgeQgRgGgCAHIgVBvg");
	this.shape_6.setTransform(-0.1,-34.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#424242").s().p("AguASQgFg8ACACIAOgSQAPgTAMgBIAagBIAhAsIgwACQgEgBgFAEQgEADgBAFIANBjIgsADIgEg+g");
	this.shape_7.setTransform(1.5,-30.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#333333").s().p("AgCAJQgVgCgHgCQgJgCgCgGIAAgHIAoACQAnADADAEQADADgGAFQgFAEgGAAIgEAAIgZgCg");
	this.shape_8.setTransform(-12.9,-23.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#545454").s().p("AgLANIgEgBQgBAAADgMIAEgMIAZADIAAABQgEAIgHAGQgHAHgHAAIgCAAg");
	this.shape_9.setTransform(15.2,-37.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#262628").s().p("AAiAYIhEgCQgFAAgDgFQgFgJAJgGIACgBIAdgFQAQgFAIgPIAcADIgEAZIAAADQAAAGgBAHQgBAFgEAAIgBgBg");
	this.shape_10.setTransform(-12.7,-25.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgIAMQgFgEgBgGQAAgGADgFQAEgEAGgBQAFgBAFAEQAFAEABAGQAAAGgEAFQgDAFgGAAIgCAAQgEAAgEgDg");
	this.shape_11.setTransform(4.3,-59.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#545454").s().p("AAAADQgEgDgBgCQAAAAAAgBQAAAAAAgBQABAAAAAAQAAgBAAAAQACgDACAAQADAAACAHQACAGgGAEg");
	this.shape_12.setTransform(7.8,-58);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#3A3A3C").s().p("AgLALQgFgEAAgHQAAgFAFgFQAFgFAGAAQAHAAAFAFQAFAFAAAFQAAAHgFAEQgFAEgHABQgGgBgFgEg");
	this.shape_13.setTransform(4.6,-59.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#333333").s().p("AgbAIQgDgHACgEQABgDAIgDQAIgDAJgBQAOgBAMAGQAGADAAAMQgGgEgKAAQgSgCgUANIgDgGg");
	this.shape_14.setTransform(5.9,-59.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#424242").s().p("AAKAQQgJgRgEgEIgIgKIAXAHIgCAYIAAAAg");
	this.shape_15.setTransform(7.5,-58.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#545454").s().p("AgPAIQAAgLAIgGQAHgHAMAAIAFAAIAAAhg");
	this.shape_16.setTransform(-1.4,-60.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#424242").s().p("AgdAAQAEgOAXgDQAMgBAJAGQALAHABAOIg3AJQgIgEADgOg");
	this.shape_17.setTransform(5.6,-60.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#545454").s().p("AgUAGIgEgTIAVgdIAcAfIABAGIAAAkIgKAIIgUAEg");
	this.shape_18.setTransform(5.9,-56.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#333333").s().p("AggAKQgIgBAAgHIACgGIAmgEQAogDABAEQADALgQAAQgoAGgPAAIgFAAg");
	this.shape_19.setTransform(-2.4,-18.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#262628").s().p("AglAcQgEgGACgHQACgHAHgEIADgDIAdgEIABgYIAfgBQgDAMADALIADAFQAEALgBAFQgCAGgDABIgrAGg");
	this.shape_20.setTransform(-2.4,-20.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#333333").s().p("AA8BhIhKgLIgEg4IgCANIgGgRIACgNIgtgUQgTgJgBgUIgCg6IAigCIADAzQABALAJADIAYAGQACgHAGgFIA8g4QAKgHAJAGIAEADQAKAHAHANQAGANgDAOIgVCDQgCAFgDADQAAABgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAIgBAAg");
	this.shape_21.setTransform(6.1,-49.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// rope
	this.instance = new lib.Tween7("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(1.5,-46.1,1,1,0,0,0,5.2,-54.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17.2,-63.4,34.4,127.6);


// stage content:
(lib.scene2animationv2 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_193 = function() {
		this.stop();
		this.gotoAndPlay(102);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(193).call(this.frame_193).wait(1));

	// mask
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#262628").s().p("EhGTBK1MAAAiVqMCMnAAAMAAACVrgArnQ9IAhGEICyByIExI1IDYGmIR2K9IK5gnIBZptQhqhwguhfQgnhPgLhiIgMjGQgJiKggiCIi2rwIhyh3IgLkGIgejnICXhmIBFj0QABgDAEAAQADAAABADIB9EtIAgglIA2iVIgFiUIgVk0QABgFAFAAQAGABgBAGICmGuIBABGQADgfgGgjMgHhgm0IprmQIpiiwIm7jbImeAAImcIsIoAD4IviZqIAACxIBSAbIAwiYQACgGAFABQAFAAACAFIAjA9IB1mQQAAgBAAAAQAAAAABAAQAAAAAAAAQABAAAAAAQAAAAABAAQAAAAABAAQAAAAAAABQAAAAAAAAIAlJAICeA0IC9OVIBUCWIEZEAIA9rHQABgHAHAAQAGAAABAHIAlKTIAUhUQADgIAHABQAJAAAAAIIApEPIDhCQIAjnoQABgEADABQAEAAABAEIAhIYICpBsIAIg2QAAgDAEgBQAFAAAAAEIAKApIASlAQAAgBAAAAQAAgBABAAQAAgBABAAQABAAAAAAQABAAABAAQABAAAAABQABAAAAABQAAAAAAABg");
	this.shape.setTransform(450,479);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(194));

	// foreground highlight
	this.instance = new lib.Tween6("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(363.9,592.6);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(78).to({_off:false},0).to({alpha:1},14).wait(102));

	// lens flare
	this.instance_1 = new lib.flashlightflare("synched",0,false);
	this.instance_1.parent = this;
	this.instance_1.setTransform(2.3,1.8,1,1,0,0,0,1.9,1.8);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(19).to({_off:false},0).to({_off:true},10).wait(31).to({_off:false,x:24.3,y:123.8},0).wait(134));

	// main flood
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0)"],[0,0.98],2.3,267.3,-195.9,-260.6).s().p("EgVJgsNIAKgDMA0/BRnMgm2AEZMgJChAbQgNg0gGgLQgDgHgGgIIgHgHQgUgdgKAAQgHAAgIAEIgSAKIACgtQABgHgCgGIgBgFQgCgDgEgEQgJgHgNAAQgPABgHAHQgJAJAEANQAFAQAGAyIgbgIQAAgWgCgXQgDgsgMgCQgNgCgJAKQgHAKACARIACAqQADAgARAHQAtARACAHIgCA3IgjAGIgtAFQgvAEgCAEQgCACgKA9QgLA9gFAMQgEAMgXACQgXADgBAFQgDAJBefLIBdfLItdBdg");
	this.shape_1.setTransform(586.4,587.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.063)"],[0,0.98],2.3,267.3,-195.9,-260.6).s().p("EgVKgsNIALgDMA0/BRnMgm1AEZMgJDhAbQgMg0gHgMQgDgGgHgIIgFgHQgWgegKABQgGAAgIAEIgSAKIADguQAAgFgBgHIgCgFQgCgEgEgDQgJgIgMABQgQAAgIAJQgIAIAEANQAEARAIAwIgcgHQAAgWgBgXQgEgtgLgCQgOgCgJAKQgHALACAQIABArQAEAhARAGQAtARABAHIgBA3IgkAGIgtAEQgtAFgDAEQgCADgKA8QgLA+gEALQgFAMgXACQgXACgCAHQgCAIBdfLIBffLIteBdg");
	this.shape_2.setTransform(586.4,587.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.122)"],[0,0.98],2.3,267.3,-195.9,-260.6).s().p("EgVKgsNIALgDMA0/BRnMgm1AEZMgJDhAbQgMg0gHgMQgDgGgHgIIgFgHQgWgegKABQgGAAgIAEIgSAKIADguQAAgFgBgHIgCgFQgCgEgEgDQgJgIgMABQgQAAgIAJQgIAIAEANQAEARAIAwIgcgHQAAgWgBgXQgEgtgLgCQgOgCgJAKQgHALACAQIABArQAEAhARAGQAtARABAHIgBA3IgkAGIgtAEQgtAFgDAEQgCADgKA8QgLA+gEALQgFAMgXACQgXACgCAHQgCAIBdfLIBffLIteBdg");
	this.shape_3.setTransform(586.4,587.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.176)"],[0,0.98],2.3,267.3,-195.9,-260.6).s().p("EgVKgsNIALgDMA0/BRnMgm1AEZMgJDhAbQgMg0gHgMQgDgGgHgIIgFgHQgWgegKABQgGAAgIAEIgSAKIADguQAAgFgBgHIgCgFQgCgEgEgDQgJgIgMABQgQAAgIAJQgIAIAEANQAEARAIAwIgcgHQAAgWgBgXQgEgtgLgCQgOgCgJAKQgHALACAQIABArQAEAhARAGQAtARABAHIgBA3IgkAGIgtAEQgtAFgDAEQgCADgKA8QgLA+gEALQgFAMgXACQgXACgCAHQgCAIBdfLIBffLIteBdg");
	this.shape_4.setTransform(586.4,587.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.224)"],[0,0.98],2.3,267.3,-195.9,-260.6).s().p("EgVKgsNIALgDMA0/BRnMgm1AEZMgJDhAbQgMg0gHgMQgDgGgHgIIgFgHQgWgegKABQgGAAgIAEIgSAKIADguQAAgFgBgHIgCgFQgCgEgEgDQgJgIgMABQgQAAgIAJQgIAIAEANQAEARAIAwIgcgHQAAgWgBgXQgEgtgLgCQgOgCgJAKQgHALACAQIABArQAEAhARAGQAtARABAHIgBA3IgkAGIgtAEQgtAFgDAEQgCADgKA8QgLA+gEALQgFAMgXACQgXACgCAHQgCAIBdfLIBffLIteBdg");
	this.shape_5.setTransform(586.4,587.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.263)"],[0,0.98],2.3,267.3,-195.9,-260.6).s().p("EgVKgsNIALgDMA0/BRnMgm1AEZMgJDhAbQgMg0gHgMQgDgGgHgIIgFgHQgWgegKABQgGAAgIAEIgSAKIADguQAAgFgBgHIgCgFQgCgEgEgDQgJgIgMABQgQAAgIAJQgIAIAEANQAEARAIAwIgcgHQAAgWgBgXQgEgtgLgCQgOgCgJAKQgHALACAQIABArQAEAhARAGQAtARABAHIgBA3IgkAGIgtAEQgtAFgDAEQgCADgKA8QgLA+gEALQgFAMgXACQgXACgCAHQgCAIBdfLIBffLIteBdg");
	this.shape_6.setTransform(586.4,587.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.302)"],[0,0.98],2.3,267.3,-195.9,-260.6).s().p("EgVKgsNIALgDMA0/BRnMgm1AEZMgJDhAbQgMg0gHgMQgDgGgHgIIgFgHQgWgegKABQgGAAgIAEIgSAKIADguQAAgFgBgHIgCgFQgCgEgEgDQgJgIgMABQgQAAgIAJQgIAIAEANQAEARAIAwIgcgHQAAgWgBgXQgEgtgLgCQgOgCgJAKQgHALACAQIABArQAEAhARAGQAtARABAHIgBA3IgkAGIgtAEQgtAFgDAEQgCADgKA8QgLA+gEALQgFAMgXACQgXACgCAHQgCAIBdfLIBffLIteBdg");
	this.shape_7.setTransform(586.4,587.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.329)"],[0,0.98],2.3,267.3,-195.9,-260.6).s().p("EgVKgsNIALgDMA0/BRnMgm1AEZMgJDhAbQgMg0gHgMQgDgGgHgIIgFgHQgWgegKABQgGAAgIAEIgSAKIADguQAAgFgBgHIgCgFQgCgEgEgDQgJgIgMABQgQAAgIAJQgIAIAEANQAEARAIAwIgcgHQAAgWgBgXQgEgtgLgCQgOgCgJAKQgHALACAQIABArQAEAhARAGQAtARABAHIgBA3IgkAGIgtAEQgtAFgDAEQgCADgKA8QgLA+gEALQgFAMgXACQgXACgCAHQgCAIBdfLIBffLIteBdg");
	this.shape_8.setTransform(586.4,587.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.357)"],[0,0.98],2.3,267.3,-195.9,-260.6).s().p("EgVKgsNIALgDMA0/BRnMgm1AEZMgJDhAbQgMg0gHgMQgDgGgHgIIgFgHQgWgegKABQgGAAgIAEIgSAKIADguQAAgFgBgHIgCgFQgCgEgEgDQgJgIgMABQgQAAgIAJQgIAIAEANQAEARAIAwIgcgHQAAgWgBgXQgEgtgLgCQgOgCgJAKQgHALACAQIABArQAEAhARAGQAtARABAHIgBA3IgkAGIgtAEQgtAFgDAEQgCADgKA8QgLA+gEALQgFAMgXACQgXACgCAHQgCAIBdfLIBffLIteBdg");
	this.shape_9.setTransform(586.4,587.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.376)"],[0,0.98],2.3,267.3,-195.9,-260.6).s().p("EgVKgsNIALgDMA0/BRnMgm1AEZMgJDhAbQgMg0gHgMQgDgGgHgIIgFgHQgWgegKABQgGAAgIAEIgSAKIADguQAAgFgBgHIgCgFQgCgEgEgDQgJgIgMABQgQAAgIAJQgIAIAEANQAEARAIAwIgcgHQAAgWgBgXQgEgtgLgCQgOgCgJAKQgHALACAQIABArQAEAhARAGQAtARABAHIgBA3IgkAGIgtAEQgtAFgDAEQgCADgKA8QgLA+gEALQgFAMgXACQgXACgCAHQgCAIBdfLIBffLIteBdg");
	this.shape_10.setTransform(586.4,587.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)"],[0,0.98],2.3,267.3,-195.9,-260.6).s().p("EgVKgsNIALgDMA0/BRnMgm1AEZMgJDhAbQgMg0gHgMQgDgGgHgIIgFgHQgWgegKABQgGAAgIAEIgSAKIADguQAAgFgBgHIgCgFQgCgEgEgDQgJgIgMABQgQAAgIAJQgIAIAEANQAEARAIAwIgcgHQAAgWgBgXQgEgtgLgCQgOgCgJAKQgHALACAQIABArQAEAhARAGQAtARABAHIgBA3IgkAGIgtAEQgtAFgDAEQgCADgKA8QgLA+gEALQgFAMgXACQgXACgCAHQgCAIBdfLIBffLIteBdg");
	this.shape_11.setTransform(586.4,587.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.396)"],[0,0.98],2.3,267.3,-195.9,-260.6).s().p("EgVKgsNIALgDMA0/BRnMgm1AEZMgJDhAbQgMg0gHgMQgDgGgHgIIgFgHQgWgegKABQgGAAgIAEIgSAKIADguQAAgFgBgHIgCgFQgCgEgEgDQgJgIgMABQgQAAgIAJQgIAIAEANQAEARAIAwIgcgHQAAgWgBgXQgEgtgLgCQgOgCgJAKQgHALACAQIABArQAEAhARAGQAtARABAHIgBA3IgkAGIgtAEQgtAFgDAEQgCADgKA8QgLA+gEALQgFAMgXACQgXACgCAHQgCAIBdfLIBffLIteBdg");
	this.shape_12.setTransform(586.4,587.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.4)"],[0,0.98],2.3,267.3,-195.9,-260.6).s().p("EgVJgsNIAKgDMA0/BRnMgm2AEZMgJChAbQgNg0gGgLQgDgHgGgIIgHgHQgUgdgKAAQgHAAgIAEIgSAKIACgtQABgHgCgGIgBgFQgCgDgEgEQgJgHgNAAQgPABgHAHQgJAJAEANQAFAQAGAyIgbgIQAAgWgCgXQgDgsgMgCQgNgCgJAKQgHAKACARIACAqQADAgARAHQAtARACAHIgCA3IgjAGIgtAFQgvAEgCAEQgCACgKA9QgLA9gFAMQgEAMgXACQgXADgBAFQgDAJBefLIBdfLItdBdg");
	this.shape_13.setTransform(586.4,587.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.4)"],[0,0.98],2.3,267.3,-195.9,-260.6).s().p("EgVKgsNIALgDMA0/BRnMgm1AEZMgJDhAbQgMg0gHgMQgDgGgHgIIgFgHQgWgegKABQgGAAgIAEIgSAKIADguQAAgFgBgHIgCgFQgCgEgEgDQgJgIgMABQgQAAgIAJQgIAIAEANQAEARAIAwIgcgHQAAgWgBgXQgEgtgLgCQgOgCgJAKQgHALACAQIABArQAEAhARAGQAtARABAHIgBA3IgkAGIgtAEQgtAFgDAEQgCADgKA8QgLA+gEALQgFAMgXACQgXACgCAHQgCAIBdfLIBffLIteBdg");
	this.shape_14.setTransform(586.4,587.8);
	this.shape_14._off = true;

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.4)"],[0,0.98],2.3,267.3,-195.9,-260.6).s().p("EgVKgsNIALgDMA0/BRnMgm2AEZMgJChAaQgMg0gHgMQgDgGgHgIIgFgHQgWgegKABQgGAAgIAEIgSAKIADguQAAgFgBgHIgCgFQgCgEgEgDQgJgIgMABQgQAAgIAJQgIAIAEAMQAEASAIAwIgcgHQAAgWgBgWQgEgugLgCQgOgCgJAKQgHALACAQIABArQAEAgARAHQAtARABAHIgBA2IgkAHIgtAEQgtAFgDAEQgCADgKA7QgLA/gEALQgFAMgXACQgXADgCAGQgCAIBdfLIBffKIteBdg");
	this.shape_15.setTransform(586.4,587.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.4)"],[0,0.98],2.3,267.3,-195.9,-260.6).s().p("EgVKgsNIALgDMA0/BRnMgm3AEZMgJBhAWQgMg1gHgLQgDgGgHgJIgFgHQgWgdgKAAQgGAAgIAFIgSAKIADguQAAgGgBgHIgCgEQgCgEgEgDQgJgIgMAAQgQABgIAIQgIAIAEANQAEARAIAxIgcgHQAAgXgBgWQgEgtgLgCQgOgCgJAKQgHAKACARIABAqQAEAhARAHQAtARABAGIgBA3IgkAGIgtAFQgtAFgDAEQgCACgKA8QgLA+gEAMQgFALgXACQgXADgCAGQgCAIBdfKIBefIItdBdg");
	this.shape_16.setTransform(586.4,587.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.4)"],[0,0.98],2.3,267.3,-195.9,-260.6).s().p("EgVKgsNIALgDMA0/BRnMgm5AEZMgI/hARQgMgzgHgMQgDgHgHgHIgFgIQgWgdgKABQgGAAgIADIgSAKIADgtQAAgGgBgGIgCgGQgCgDgEgDQgJgIgMABQgQAAgIAIQgIAJAEAMQAEARAIAxIgcgHQAAgWgBgXQgEgtgLgCQgOgCgJAKQgHAKACARIABArQAEAgARAGQAtASABAGIgBA3IgkAHIgtAEQgtAFgDADQgCADgKA8QgLA+gEALQgFAMgXADQgXACgCAGQgCAIBcfGIBefGItcBdg");
	this.shape_17.setTransform(586.4,587.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.4)"],[0,0.98],2.3,267.3,-195.9,-260.6).s().p("EgVKgsNIALgDMA0/BRnMgm8AEZMgI8hAJQgMg0gHgLQgDgHgHgHIgFgHQgWgegKABQgGAAgIADIgSAKIADgtQAAgGgBgGIgCgGQgCgDgEgEQgJgHgMABQgQAAgIAIQgIAJAEAMQAEARAIAxIgcgIQAAgVgBgXQgEgtgLgCQgOgCgJAKQgHAKACARIABArQAEAgARAGQAtARABAIIgBA2IgkAHIgtAEQgtAFgDADQgCADgKA8QgLA+gEALQgFAMgXADQgXACgCAGQgCAJBcfBIBcfCItaBdg");
	this.shape_18.setTransform(586.4,587.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.4)"],[0,0.98],2.3,267.3,-195.9,-260.6).s().p("EgVKgsNIALgDMA0/BRnMgm/AEZMgI5g/+QgMg0gHgMQgDgGgHgIIgFgHQgWgegKABQgGAAgIAEIgSAKIADguQAAgFgBgHIgCgFQgCgEgEgDQgJgHgMAAQgQAAgIAJQgIAIAEAMQAEARAIAxIgcgHQAAgWgBgWQgEgtgLgDQgOgBgJAJQgHALACAQIABArQAEAgARAHQAtARABAHIgBA2IgkAHIgtAEQgtAFgDAEQgCADgKA7QgLA/gEALQgFAMgXACQgXADgCAGQgCAIBbe9IBbe8ItYBdg");
	this.shape_19.setTransform(586.4,587.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.4)"],[0,0.98],2.3,267.3,-195.9,-260.6).s().p("EgVKgsNIALgDMA0/BRnMgnEAEZMgI0g/xQgMg1gHgLQgDgGgHgJIgFgHQgWgdgKAAQgGAAgIAFIgSAKIADguQAAgGgBgHIgCgEQgCgEgEgDQgJgIgMAAQgQABgIAIQgIAIAEANQAEARAIAxIgcgHQAAgXgBgWQgEgtgLgCQgOgCgJAKQgHAKACARIABAqQAEAhARAHQAtARABAGIgBA3IgkAGIgtAFQgtAFgDAEQgCACgKA8QgLA+gEAMQgFALgXACQgXADgCAGQgCAIBae4IBbe1ItXBdg");
	this.shape_20.setTransform(586.4,587.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.4)"],[0,0.98],2.3,267.3,-195.9,-260.6).s().p("EgVKgsNIALgDMA0/BRnMgnIAEZMgIwg/iQgMg0gHgMQgDgHgHgHIgFgIQgWgdgKABQgGAAgIADIgSAKIADgtQAAgGgBgHIgCgFQgCgDgEgDQgJgIgMABQgQAAgIAIQgIAJAEAMQAEARAIAxIgcgHQAAgWgBgXQgEgtgLgCQgOgCgJAKQgHAKACARIABAqQAEAhARAGQAtASABAGIgBA3IgkAHIgtAEQgtAFgDADQgCADgKA8QgLA+gEALQgFAMgXACQgXADgCAGQgCAIBZewIBZeuItUBdg");
	this.shape_21.setTransform(586.4,587.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.4)"],[0,0.98],2.3,267.3,-195.9,-260.6).s().p("EgVKgsNIALgDMA0/BRnMgnOAEZMgIqg/RQgMg0gHgMQgDgGgHgIIgFgHQgWgegKABQgGAAgIAEIgSAKIADguQAAgFgBgHIgCgFQgCgDgEgEQgJgHgMAAQgQAAgIAJQgIAIAEAMQAEARAIAxIgcgHQAAgWgBgWQgEgtgLgDQgOgBgJAJQgHALACAQIABArQAEAgARAHQAtARABAHIgBA2IgkAHIgtAEQgtAFgDAEQgCADgKA7QgLA/gEALQgFAMgXACQgXADgCAGQgCAIBYenIBXelItRBdg");
	this.shape_22.setTransform(586.4,587.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.4)"],[0,0.98],2.3,267.3,-195.9,-260.6).s().p("EgVKgsNIALgDMA0/BRnMgnVAEZMgIjg+9QgMg0gHgMQgDgGgHgJIgFgHQgWgdgKAAQgGAAgIAEIgSALIADguQAAgGgBgHIgCgEQgCgEgEgDQgJgIgMABQgQAAgIAIQgIAJAEAMQAEARAIAxIgcgHQAAgXgBgWQgEgtgLgCQgOgCgJAKQgHAKACARIABAqQAEAhARAHQAtARABAGIgBA3IgkAGIgtAFQgtAFgDADQgCADgKA8QgLA+gEAMQgFALgXACQgXADgCAGQgCAIBWedIBWecItOBdg");
	this.shape_23.setTransform(586.4,587.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.4)"],[0,0.98],2.3,267.3,-195.9,-260.6).s().p("EgVKgsNIALgDMA0/BRnMgncAEZMgIcg+oQgMg0gHgLQgDgHgHgIIgFgGQgWgegKAAQgGABgIAEIgSAJIADgtQAAgGgBgGIgCgFQgCgEgEgEQgJgHgMAAQgQABgIAIQgIAJAEAMQAEARAIAxIgcgIQAAgWgBgWQgEgtgLgCQgOgCgJAKQgHAKACARIABArQAEAgARAHQAtAQABAIIgBA2IgkAGIgtAFQgtAFgDAEQgCACgKA8QgLA+gEALQgFAMgXADQgXACgCAGQgCAJBUeRIBVeRItLBdg");
	this.shape_24.setTransform(586.4,587.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.4)"],[0,0.98],2.3,267.3,-195.9,-260.6).s().p("EgVKgsNIALgDMA0/BRnMgnkAEZMgIUg+PQgMg1gHgLQgDgGgHgJIgFgHQgWgdgKAAQgGAAgIAFIgSAKIADguQAAgGgBgHIgCgEQgCgEgEgDQgJgIgMAAQgQABgIAIQgIAIAEANQAEARAIAxIgcgHQAAgXgBgWQgEgtgLgCQgOgCgJAKQgHAKACARIABAqQAEAhARAHQAtARABAGIgBA3IgkAGIgtAFQgtAFgDAEQgCACgKA8QgLA+gEAMQgFALgXACQgXADgCAGQgCAIBSeGIBSeFItGBdg");
	this.shape_25.setTransform(586.4,587.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.4)"],[0,0.98],2.3,267.3,-195.9,-260.6).s().p("EgVKgsNIALgDMA0/BRnMgnsAEZMgIMg91QgMg0gHgLQgDgHgHgIIgFgHQgWgdgKAAQgGAAgIAEIgSAKIADgtQAAgHgBgGIgCgFQgCgDgEgEQgJgHgMAAQgQAAgIAJQgIAIAEAMQAEASAIAxIgcgIQAAgWgBgWQgEgtgLgCQgOgCgJAKQgHAJACASIABAqQAEAhARAGQAtARABAHIgBA2IgkAHIgtAFQgtAFgDADQgCACgKA8QgLA+gEAMQgFALgXADQgXADgCAFQgCAJBQd5IBQd3ItCBdg");
	this.shape_26.setTransform(586.4,587.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.4)"],[0,0.98],2.3,267.3,-195.9,-260.6).s().p("EgVKgsNIALgDMA0/BRnMgn2AEZMgICg9YQgMg0gHgLQgDgHgHgIIgFgHQgWgdgKAAQgGAAgIAEIgSAKIADgtQAAgHgBgGIgCgFQgCgDgEgEQgJgHgMAAQgQABgIAHQgIAJAEANQAEAQAIAyIgcgIQAAgWgBgXQgEgsgLgCQgOgCgJAKQgHAJACASIABAqQAEAgARAHQAtARABAHIgBA3IgkAGIgtAFQgtAEgDAEQgCACgKA9QgLA9gEAMQgFAMgXACQgXADgCAFQgCAJBNdqIBOdpIs9Bdg");
	this.shape_27.setTransform(586.4,587.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.4)"],[0,0.98],2.3,267.3,-195.9,-260.6).s().p("EgVKgsNIALgDMA0/BRnMgoBAEZMgH3g85QgMg0gHgMQgDgGgHgIIgFgHQgWgegKABQgGAAgIAEIgSAKIADguQAAgFgBgHIgCgFQgCgEgEgDQgJgIgMABQgQAAgIAJQgIAIAEAMQAEASAIAwIgcgHQAAgWgBgWQgEgugLgCQgOgCgJAKQgHALACAQIABArQAEAgARAHQAtARABAHIgBA2IgkAHIgtAEQgtAFgDAEQgCADgKA7QgLA/gEALQgFAMgXACQgXADgCAGQgCAIBLdaIBLdaIs4Bdg");
	this.shape_28.setTransform(586.4,587.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.4)"],[0,0.98],2.3,267.3,-195.9,-260.6).s().p("EgVKgsNIALgDMA0/BRnMgotAEZMgHLg6zQgMg0gHgLQgDgHgHgHIgFgHQgWgegKABQgGAAgIADIgSAKIADgtQAAgGgBgGIgCgGQgCgDgEgEQgJgHgMABQgQAAgIAIQgIAJAEAMQAEARAIAxIgcgIQAAgVgBgXQgEgtgLgCQgOgCgJAKQgHAKACARIABArQAEAgARAGQAtARABAIIgBA2IgkAHIgtAEQgtAFgDADQgCADgKA8QgLA+gEALQgFAMgXADQgXACgCAGQgCAJBAcWIBAcXIsiBdg");
	this.shape_29.setTransform(586.4,587.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.4)"],[0,0.98],2.3,267.3,-195.9,-260.6).s().p("EgVKgsNIALgDMA0/BRnMgpIAEZMgGwg5iQgMg0gHgMQgDgGgHgIIgFgHQgWgegKABQgGAAgIAEIgSAKIADguQAAgFgBgHIgCgFQgCgEgEgDQgJgIgMABQgQAAgIAJQgIAIAEANQAEARAIAwIgcgHQAAgWgBgXQgEgtgLgCQgOgCgJAKQgHALACAQIABArQAEAhARAGQAtARABAHIgBA3IgkAGIgtAEQgtAFgDAEQgCADgKA8QgLA+gEALQgFAMgXACQgXACgCAHQgCAIA5bvIA6buIsVBdg");
	this.shape_30.setTransform(586.4,587.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.4)"],[0,0.98],2.3,267.3,-195.9,-260.6).s().p("EgVKgsNIALgDMA0/BRnMgpRAEZMgGng5HQgMg0gHgMQgDgGgHgIIgFgHQgWgegKABQgGAAgIAEIgSAKIADguQAAgFgBgHIgCgFQgCgEgEgDQgJgIgMABQgQAAgIAJQgIAIAEANQAEARAIAwIgcgHQAAgWgBgXQgEgtgLgCQgOgCgJAKQgHALACAQIABArQAEAhARAGQAtARABAHIgBA3IgkAGIgtAEQgtAFgDAEQgCADgKA7QgLA/gEALQgFALgXADQgXACgCAHQgCAIA3bhIA3bhIsQBdg");
	this.shape_31.setTransform(586.4,587.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.4)"],[0,0.98],2.3,267.3,-195.9,-260.6).s().p("EgVKgsNIALgDMA0/BRnMgpXAEZMgGhg4zQgMg0gHgMQgDgGgHgIIgFgHQgWgegKABQgGAAgIAEIgSAKIADguQAAgFgBgHIgCgFQgCgDgEgEQgJgHgMAAQgQAAgIAJQgIAIAEAMQAEARAIAxIgcgHQAAgWgBgWQgEgtgLgDQgOgBgJAJQgHALACAQIABArQAEAgARAHQAtARABAHIgBA2IgkAHIgtAEQgtAGgDADQgCADgKA7QgLA/gEALQgFAMgXACQgXADgCAGQgCAIA2bYIA1bWIsNBdg");
	this.shape_32.setTransform(586.4,587.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.4)"],[0,0.98],2.3,267.3,-195.9,-260.6).s().p("EgVKgsNIALgDMA0/BRnMgpeAEZMgGag4gQgMg0gHgMQgDgHgHgHIgFgIQgWgdgKABQgGAAgIADIgSAKIADgtQAAgGgBgHIgCgFQgCgDgEgDQgJgIgMABQgQAAgIAIQgIAJAEAMQAEARAIAxIgcgHQAAgWgBgXQgEgtgLgCQgOgCgJAKQgHAKACARIABAqQAEAhARAGQAtASABAGIgBA3IgkAHIgtAEQgtAFgDADQgCADgKA8QgLA+gEALQgFAMgXACQgXADgCAGQgCAIA0bPIAzbNIsJBdg");
	this.shape_33.setTransform(586.4,587.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.4)"],[0,0.98],2.3,267.3,-195.9,-260.6).s().p("EgVKgsNIALgDMA0/BRnMgpjAEZMgGVg4QQgMg0gHgMQgDgGgHgIIgFgHQgWgegKABQgGAAgIAEIgSAKIADguQAAgFgBgHIgCgFQgCgDgEgEQgJgIgMABQgQAAgIAJQgIAIAEAMQAEASAIAwIgcgHQAAgWgBgWQgEgugLgCQgOgCgJAKQgHALACAQIABArQAEAgARAHQAtARABAHIgBA3IgkAGIgtAEQgtAFgDAEQgCADgKA7QgLA/gEALQgFAMgXACQgXADgCAGQgCAIAybGIAzbFIsHBdg");
	this.shape_34.setTransform(586.4,587.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.4)"],[0,0.98],2.3,267.3,-195.9,-260.6).s().p("EgVKgsNIALgDMA0/BRnMgpoAEZMgGQg4BQgMg0gHgLQgDgHgHgIIgFgGQgWgegKAAQgGABgIAEIgSAJIADgtQAAgGgBgGIgCgGQgCgDgEgEQgJgHgMAAQgQABgIAIQgIAIAEANQAEARAIAxIgcgIQAAgWgBgWQgEgtgLgCQgOgCgJAKQgHAKACARIABArQAEAgARAGQAtARABAIIgBA2IgkAGIgtAFQgtAFgDAEQgCACgKA8QgLA+gEAMQgFALgXADQgXACgCAGQgCAJAxa9IAya+IsFBdg");
	this.shape_35.setTransform(586.4,587.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.4)"],[0,0.98],2.3,267.3,-195.9,-260.6).s().p("EgVKgsNIALgDMA0/BRnMgptAEZMgGLg3zQgMg0gHgLQgDgHgHgIIgFgHQgWgegKABQgGAAgIAEIgSAKIADguQAAgGgBgGIgCgFQgCgEgEgDQgJgHgMAAQgQAAgIAJQgIAIAEAMQAEARAIAyIgcgIQAAgWgBgWQgEgugLgBQgOgDgJAKQgHAKACARIABArQAEAhARAGQAtARABAHIgBA2IgkAHIgtAEQgtAGgDADQgCADgKA7QgLA/gEALQgFALgXADQgXADgCAFQgCAJAwa3IAwa3IsCBdg");
	this.shape_36.setTransform(586.4,587.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.4)"],[0,0.98],2.3,267.3,-195.9,-260.6).s().p("EgVKgsNIALgDMA0/BRnMgpxAEZMgGHg3nQgMg0gHgLQgDgHgHgIIgFgHQgWgdgKAAQgGAAgIAEIgSAKIADgtQAAgHgBgGIgCgFQgCgDgEgEQgJgHgMAAQgQABgIAHQgIAJAEANQAEAQAIAyIgcgIQAAgWgBgXQgEgsgLgCQgOgCgJAKQgHAJACASIABAqQAEAgARAHQAtARABAHIgBA3IgkAGIgtAFQgtAEgDAEQgCACgKA9QgLA9gEAMQgFAMgXACQgXADgCAFQgCAJAvayIAvawIsABdg");
	this.shape_37.setTransform(586.4,587.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.4)"],[0,0.98],2.3,267.3,-195.9,-260.6).s().p("EgVKgsNIALgDMA0/BRnMgp0AEZMgGEg3dQgMg0gHgMQgDgGgHgIIgFgHQgWgdgKAAQgGAAgIAEIgSAKIADgtQAAgHgBgGIgCgFQgCgEgEgDQgJgIgMABQgQABgIAHQgIAJAEANQAEAQAIAyIgcgIQAAgWgBgXQgEgsgLgDQgOgCgJALQgHAKACARIABAqQAEAhARAGQAtARABAHIgBA3IgkAGIgtAFQgtAEgDAEQgCACgKA9QgLA+gEALQgFALgXADQgXACgCAGQgCAJAuasIAuasIr+Bdg");
	this.shape_38.setTransform(586.4,587.8);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.4)"],[0,0.98],2.3,267.3,-195.9,-260.6).s().p("EgVKgsNIALgDMA0/BRnMgp3AEZMgGBg3UQgMg0gHgMQgDgGgHgIIgFgHQgWgdgKAAQgGAAgIAEIgSAKIADgtQAAgHgBgGIgCgFQgCgEgEgDQgJgIgMABQgQABgIAHQgIAJAEANQAEAQAIAyIgcgIQAAgWgBgXQgEgsgLgCQgOgDgJALQgHAKACARIABAqQAEAhARAGQAtARABAHIgBA3IgkAGIgtAFQgtAEgDAEQgCADgKA8QgLA+gEALQgFAMgXACQgXACgCAGQgCAJAtaoIAuanIr9Bdg");
	this.shape_39.setTransform(586.4,587.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.4)"],[0,0.98],2.3,267.3,-195.9,-260.6).s().p("EgVKgsNIALgDMA0/BRnMgp6AEZMgF+g3NQgMg0gHgLQgDgHgHgIIgFgHQgWgdgKAAQgGAAgIAEIgSAKIADgtQAAgHgBgGIgCgFQgCgDgEgEQgJgHgMAAQgQABgIAHQgIAJAEAMQAEASAIAxIgcgIQAAgWgBgWQgEgtgLgCQgOgCgJAKQgHAJACASIABAqQAEAhARAGQAtARABAHIgBA2IgkAHIgtAFQgtAFgDADQgCACgKA9QgLA9gEAMQgFAMgXACQgXADgCAFQgCAJAtakIAtakIr8Bdg");
	this.shape_40.setTransform(586.4,587.8);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.4)"],[0,0.98],2.3,267.3,-195.9,-260.6).s().p("EgVKgsNIALgDMA0/BRnMgp7AEZMgF9g3HQgMg0gHgMQgDgGgHgIIgFgHQgWgegKABQgGAAgIAEIgSAKIADguQAAgFgBgHIgCgFQgCgEgEgDQgJgHgMAAQgQAAgIAJQgIAIAEAMQAEASAIAwIgcgHQAAgWgBgWQgEgtgLgDQgOgBgJAJQgHALACAQIABArQAEAgARAHQAtARABAHIgBA2IgkAHIgtAEQgtAGgDADQgCADgKA7QgLA/gEALQgFAMgXACQgXACgCAHQgCAIAsaiIAtagIr7Bdg");
	this.shape_41.setTransform(586.4,587.8);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.4)"],[0,0.98],2.3,267.3,-195.9,-260.6).s().p("EgVKgsNIALgDMA0/BRnMgp8AEZMgF8g3DQgMg0gHgLQgDgHgHgIIgFgHQgWgdgKAAQgGAAgIAEIgSAKIADgtQAAgHgBgGIgCgFQgCgDgEgEQgJgHgMAAQgQABgIAHQgIAJAEANQAEAQAIAyIgcgIQAAgWgBgXQgEgsgLgCQgOgCgJAKQgHAJACASIABAqQAEAgARAHQAtARABAHIgBA3IgkAGIgtAFQgtAEgDAEQgCACgKA9QgLA9gEAMQgFAMgXACQgXADgCAFQgCAJAsagIAsaeIr6Bdg");
	this.shape_42.setTransform(586.4,587.8);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.4)"],[0,0.98],2.3,267.3,-195.9,-260.6).s().p("EgVKgsNIALgDMA0/BRnMgp9AEZMgF7g3BQgMg0gHgMQgDgGgHgIIgFgHQgWgdgKAAQgGAAgIAEIgSAKIADgtQAAgGgBgHIgCgFQgCgEgEgDQgJgIgMABQgQABgIAHQgIAJAEANQAEAQAIAxIgcgHQAAgWgBgXQgEgtgLgCQgOgCgJAKQgHALACARIABAqQAEAhARAGQAtARABAHIgBA3IgkAGIgtAFQgtAEgDAEQgCADgKA8QgLA9gEAMQgFALgXADQgXACgCAHQgCAIAsafIAsadIr6Bdg");
	this.shape_43.setTransform(586.4,587.8);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.4)"],[0,0.98],2.3,267.3,-195.9,-260.6).s().p("EgVJgsNIAKgDMA0/BRnMgp+AEZMgF6g3AQgNg0gGgMQgDgGgGgIIgHgHQgUgegKABQgHAAgIAEIgSAKIACguQABgFgCgHIgBgFQgCgEgEgDQgJgIgNABQgPAAgHAJQgJAIAEANQAFARAGAwIgbgHQAAgWgCgXQgDgtgMgCQgNgCgJAKQgHALACAQIACArQADAhARAGQAtARABAHIgBA3IgjAGIgtAEQgvAFgCAEQgCADgKA7QgLA/gFALQgEAMgXACQgXACgBAHQgDAIAraeIAsadIr5Bdg");
	this.shape_44.setTransform(586.4,587.8);
	this.shape_44._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1}]},24).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_44}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_14).wait(37).to({_off:false},0).wait(31).to({_off:true},1).wait(125));
	this.timeline.addTween(cjs.Tween.get(this.shape_44).wait(99).to({_off:false},0).wait(95));

	// miner 1
	this.instance_2 = new lib.Tween1("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(443.9,321.1);
	this.instance_2.alpha = 0.199;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(24).to({_off:false},0).wait(1).to({alpha:0.208},0).wait(1).to({alpha:0.233},0).wait(1).to({alpha:0.271},0).wait(1).to({alpha:0.327},0).wait(1).to({alpha:0.413},0).wait(1).to({alpha:0.727},0).wait(1).to({alpha:0.907},0).wait(1).to({alpha:0.962},0).wait(1).to({alpha:0.987},0).wait(1).to({alpha:0.996},0).wait(1).to({alpha:1},0).wait(1).to({startPosition:0},0).wait(158));

	// second flood
	this.instance_3 = new lib.Tween4("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(471.3,424.7,1,1,-25.7,0,0,168,-251);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(65).to({_off:false},0).wait(1).to({regX:0,regY:0,x:428.7,y:723.7},0).wait(1).to({x:428.6},0).wait(1).to({rotation:-25.6,x:428.2,y:723.8},0).wait(1).to({rotation:-25.5,x:427.8,y:724},0).wait(1).to({rotation:-25.4,x:427.2,y:724.2},0).wait(1).to({rotation:-25.2,x:426.4,y:724.4},0).wait(1).to({rotation:-25.1,x:425.4,y:724.7},0).wait(1).to({rotation:-24.8,x:424.2,y:725.1},0).wait(1).to({rotation:-24.5,x:422.7,y:725.5},0).wait(1).to({rotation:-24.2,x:420.9,y:726},0).wait(1).to({rotation:-23.8,x:418.8,y:726.6},0).wait(1).to({rotation:-23.3,x:416.3,y:727.3},0).wait(1).to({rotation:-22.7,x:413.3,y:728.1},0).wait(1).to({rotation:-22,x:409.7,y:729.1},0).wait(1).to({rotation:-21.1,x:405.2,y:730.2},0).wait(1).to({rotation:-20,x:399.4,y:731.5},0).wait(1).to({rotation:-18.5,x:391.6,y:733.1},0).wait(1).to({rotation:-16,x:379.1,y:735.2},0).wait(1).to({rotation:-9.7,x:347.9,y:738.3},0).wait(1).to({rotation:-7,x:335.3,y:738.6},0).wait(1).to({rotation:-5.4,x:327.8,y:738.5},0).wait(1).to({rotation:-4.3,x:322.6,y:738.3},0).wait(1).to({rotation:-3.4,x:318.5,y:738.1},0).wait(1).to({rotation:-2.7,x:315.4,y:737.9},0).wait(1).to({rotation:-2.2,x:312.8,y:737.7},0).wait(1).to({rotation:-1.7,x:310.7,y:737.5},0).wait(1).to({rotation:-1.3,x:309,y:737.3},0).wait(1).to({rotation:-1,x:307.6,y:737.2},0).wait(1).to({rotation:-0.7,x:306.4,y:737},0).wait(1).to({rotation:-0.5,x:305.5,y:736.9},0).wait(1).to({rotation:-0.3,x:304.7,y:736.8},0).wait(1).to({rotation:-0.2,x:304.2},0).wait(1).to({rotation:-0.1,x:303.7,y:736.7},0).wait(1).to({rotation:0,x:303.5},0).wait(1).to({x:303.3},0).wait(1).to({regX:168,regY:-251,x:471.3,y:485.7},0).wait(1).to({regX:0,regY:0,x:303.2,y:736.6},0).wait(1).to({rotation:0.1,x:303.1,y:736.5},0).wait(1).to({x:302.8,y:736.3},0).wait(1).to({rotation:0.2,x:302.3,y:736},0).wait(1).to({rotation:0.4,x:301.6,y:735.5},0).wait(1).to({rotation:0.6,x:300.8,y:734.9},0).wait(1).to({rotation:0.8,x:299.6,y:734.2},0).wait(1).to({rotation:1.2,x:298.2,y:733.2},0).wait(1).to({rotation:1.6,x:296.5,y:731.9},0).wait(1).to({rotation:2.1,x:294.3,y:730.4},0).wait(1).to({rotation:2.7,x:291.6,y:728.4},0).wait(1).to({rotation:3.5,x:288.2,y:725.9},0).wait(1).to({rotation:4.5,x:283.9,y:722.5},0).wait(1).to({rotation:5.9,x:278.4,y:718.1},0).wait(1).to({rotation:7.8,x:270.9,y:711.7},0).wait(1).to({rotation:10.7,x:259.5,y:701},0).wait(1).to({rotation:20.5,x:226,y:661.9},0).wait(1).to({rotation:25.6,x:211.4,y:639.5},0).wait(1).to({rotation:28,x:205.2,y:628.5},0).wait(1).to({rotation:29.6,x:201.3,y:621},0).wait(1).to({rotation:30.7,x:198.6,y:615.6},0).wait(1).to({rotation:31.6,x:196.7,y:611.5},0).wait(1).to({rotation:32.3,x:195.3,y:608.3},0).wait(1).to({rotation:32.8,x:194.2,y:605.9},0).wait(1).to({rotation:33.2,x:193.4,y:604},0).wait(1).to({rotation:33.4,x:192.8,y:602.5},0).wait(1).to({rotation:33.7,x:192.3,y:601.4},0).wait(1).to({rotation:33.8,x:192,y:600.7},0).wait(1).to({rotation:33.9,x:191.8,y:600.2},0).wait(1).to({rotation:34,x:191.7,y:599.9},0).wait(1).to({regX:168,regY:-250.9,x:471.3,y:485.8},0).wait(1).to({regX:0,regY:0,x:191.7,y:599.9},0).wait(1).to({x:191.8,y:600},0).wait(1).to({rotation:33.9,x:191.9,y:600.3},0).wait(1).to({rotation:33.8,x:192.1,y:600.7},0).wait(1).to({rotation:33.7,x:192.3,y:601.3},0).wait(1).to({rotation:33.5,x:192.6,y:602.1},0).wait(1).to({rotation:33.3,x:193.1,y:603.1},0).wait(1).to({rotation:33.1,x:193.6,y:604.3},0).wait(1).to({rotation:32.8,x:194.2,y:605.8},0).wait(1).to({rotation:32.4,x:195.1,y:607.7},0).wait(1).to({rotation:31.9,x:196.1,y:610},0).wait(1).to({rotation:31.3,x:197.3,y:612.7},0).wait(1).to({rotation:30.6,x:198.9,y:616.1},0).wait(1).to({rotation:29.7,x:201,y:620.4},0).wait(1).to({rotation:28.6,x:203.7,y:625.7},0).wait(1).to({rotation:27.1,x:207.5,y:632.6},0).wait(1).to({rotation:25,x:213.1,y:642.3},0).wait(1).to({rotation:21.3,x:223.7,y:658.6},0).wait(1).to({rotation:11.2,x:257.9,y:699.4},0).wait(1).to({rotation:7.7,x:271.1,y:711.7},0).wait(1).to({rotation:5.7,x:279.1,y:718.6},0).wait(1).to({rotation:4.3,x:284.8,y:723.2},0).wait(1).to({rotation:3.3,x:289.1,y:726.5},0).wait(1).to({rotation:2.5,x:292.5,y:729},0).wait(1).to({rotation:1.9,x:295.2,y:731},0).wait(1).to({rotation:1.4,x:297.3,y:732.5},0).wait(1).to({rotation:1,x:299,y:733.7},0).wait(1).to({rotation:0.7,x:300.3,y:734.6},0).wait(1).to({rotation:0.4,x:301.4,y:735.3},0).wait(1).to({rotation:0.3,x:302.1,y:735.8},0).wait(1).to({rotation:0.1,x:302.7,y:736.2},0).wait(1).to({x:303,y:736.4},0).wait(1).to({rotation:0,x:303.2,y:736.6},0).wait(1).to({regX:168,regY:-251,x:471.3,y:485.7},0).wait(28));

	// miner 2
	this.instance_4 = new lib.Tween2("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(466.4,486.9);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(27).to({_off:false},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({y:487},0).wait(1).to({y:487.1},0).wait(1).to({y:487.4},0).wait(1).to({y:487.6},0).wait(1).to({y:488},0).wait(1).to({y:488.4},0).wait(1).to({y:489},0).wait(1).to({y:489.6},0).wait(1).to({y:490.4},0).wait(1).to({y:491.4},0).wait(1).to({y:492.5},0).wait(1).to({y:493.9},0).wait(1).to({y:495.5},0).wait(1).to({y:497.5},0).wait(1).to({y:500.2},0).wait(1).to({y:503.7},0).wait(1).to({y:509.5},0).wait(1).to({y:524.3},0).wait(1).to({y:530.5},0).wait(1).to({y:534.2},0).wait(1).to({y:536.9},0).wait(1).to({y:538.9},0).wait(1).to({y:540.5},0).wait(1).to({y:541.9},0).wait(1).to({y:543},0).wait(1).to({y:543.9},0).wait(1).to({y:544.6},0).wait(1).to({y:545.2},0).wait(1).to({y:545.7},0).wait(1).to({y:546.1},0).wait(1).to({y:546.4},0).wait(1).to({y:546.6},0).wait(1).to({y:546.8},0).wait(1).to({y:546.9},0).wait(1).to({startPosition:0},0).wait(93));

	// cavern floor
	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#262628").s().p("Egm4gHyIhKw8IReMlINiBSIDliGIEmnFMAo6gAPMAAAAtAMhOzAAAg");
	this.shape_45.setTransform(644.1,799.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_45).wait(194));

	// mask
	this.instance_5 = new lib.Tween3("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(450.4,478.9);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(24).to({_off:false},0).wait(41).to({startPosition:0},0).wait(1).to({alpha:0.972},0).wait(1).to({alpha:0.944},0).wait(1).to({alpha:0.917},0).wait(1).to({alpha:0.889},0).wait(1).to({alpha:0.861},0).wait(1).to({alpha:0.833},0).wait(1).to({alpha:0.806},0).wait(1).to({alpha:0.778},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.722},0).wait(1).to({alpha:0.694},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.639},0).wait(1).to({alpha:0.611},0).wait(1).to({alpha:0.583},0).wait(1).to({alpha:0.556},0).wait(1).to({alpha:0.528},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.472},0).wait(1).to({alpha:0.444},0).wait(1).to({alpha:0.417},0).wait(1).to({alpha:0.389},0).wait(1).to({alpha:0.361},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.306},0).wait(1).to({alpha:0.278},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.222},0).wait(1).to({alpha:0.194},0).wait(1).to({alpha:0.167},0).wait(1).to({alpha:0.139},0).wait(1).to({alpha:0.111},0).wait(1).to({alpha:0.083},0).wait(1).to({alpha:0.056},0).wait(1).to({alpha:0.028},0).wait(1).to({alpha:0},0).wait(93));

	// cavern level 3
	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#333333").s().p("EhGTBK1MAAAiVpMCMnAAAMAAACVpgACvVZIBACaIDhBsIBIivIA0AXIApBUIBjqQIA2hoQADgFAHABQAGABABAGIArFVICXB0IA0EPIFIhdIDAohIgOntIBpqaIgxwpIhVnxIm8qeIh5AGIhfBnIhFMsQAAAAgBAAQAAAAAAAAQAAAAAAAAQgBAAAAAAIgqr4IhAg0IiFhVIiEAGIl7kSIgoDrQgBAAAAABQAAAAAAAAQAAABgBAAQgBAAgBAAQgFAAAAgCIgukxIgpgeIgIAEIg1DEQAAAAAAAAQgBAAAAABQgBAAgBAAQAAAAgBAAQgFAAAAgBIgiiRIssGwIhGF4QAAAAAAABQAAAAgBABQAAAAAAAAQgBAAgBAAQAAAAgBAAQAAAAAAAAQgBgBAAAAQAAgBAAAAIAFlTIhRArIhWDNIgQCaIgnA6IgVBsQAAABAAAAQAAABgBAAQAAAAAAABQgBAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAgBQAAAAAAgBIgfk+IgTgeIgnAtIgRDgQAAAAAAAAQAAAAAAAAQgBAAAAAAQAAAAAAAAIgNi+IphKsIjxBkIAPgcInuMNIAZBTINCjtICghMICCAPIDTABIA0gXIg/AFIhWgHIi3gBIA7gwIFtiuICEgqIgOAHICfAJIA0gKIiAgIIATgaIDohKIDuiOICXg6IgSggIAIgFIAIANIIKjaIBEg8IAIAGIggBUIAkYXIgJABIgk3/Ig/CsIAAF3IlQG6IitKIIgtKOIDGG8ID2B3IAThzIBDg9IAjhyQABgCAEAAQAFAAAAACIA0FNIAZg5QACgEAHAAQAHAAACAFgAxtB2IDYAXICMgPIgmgSIhogJgA1oklIAADDIArjOgA1vlRIGOhMIj8AAIiwAeIkLAAgAlf0TIB0APIBWgJIBeAFIg1gdIg7AEIiAgLIAWgXIAZgKIC+gqIB6hsIntDPIAFALIA2gVgAA71UIAAAjIA+ioQgFADgGAAQgIAAgHgGQgGgGAAgIIAAgCIh/BxIAjgIgABq30IgBAAQgGADAAAHQAAAEAEADQADADAEAAQAEAAAEgDQADgDAAgEQAAgFgDgDQgEgDgEAAgABv3/QAOABAFANIAQgtg");
	this.shape_46.setTransform(450.4,478.9);
	this.shape_46._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_46).wait(24).to({_off:false},0).wait(170));

	// cavern bg 1
	this.instance_6 = new lib.bg1();
	this.instance_6.parent = this;
	this.instance_6.setTransform(434.9,400.9,1,1,0,0,0,107.3,137.1);
	this.instance_6.alpha = 0.031;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(24).to({_off:false},0).wait(1).to({regY:137,y:400.8},0).wait(14).to({regY:137.1,y:400.9},0).wait(155));

	// cavern bg 2
	this.instance_7 = new lib.Tween5("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(450.4,478.9);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(24).to({_off:false},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({alpha:0.001},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({alpha:0.002},0).wait(1).to({alpha:0.003},0).wait(1).to({startPosition:0},0).wait(1).to({alpha:0.004},0).wait(1).to({alpha:0.005},0).wait(1).to({alpha:0.006},0).wait(1).to({alpha:0.007},0).wait(1).to({alpha:0.008},0).wait(1).to({alpha:0.01},0).wait(1).to({alpha:0.011},0).wait(1).to({alpha:0.013},0).wait(1).to({alpha:0.015},0).wait(1).to({alpha:0.017},0).wait(1).to({alpha:0.019},0).wait(1).to({alpha:0.021},0).wait(1).to({alpha:0.023},0).wait(1).to({alpha:0.026},0).wait(1).to({alpha:0.028},0).wait(1).to({alpha:0.031},0).wait(1).to({alpha:0.034},0).wait(1).to({alpha:0.037},0).wait(1).to({alpha:0.041},0).wait(1).to({alpha:0.044},0).wait(1).to({alpha:0.048},0).wait(1).to({alpha:0.052},0).wait(1).to({alpha:0.057},0).wait(1).to({alpha:0.061},0).wait(1).to({alpha:0.066},0).wait(1).to({alpha:0.071},0).wait(1).to({alpha:0.077},0).wait(1).to({alpha:0.083},0).wait(1).to({alpha:0.089},0).wait(1).to({alpha:0.096},0).wait(1).to({alpha:0.103},0).wait(1).to({alpha:0.11},0).wait(1).to({alpha:0.118},0).wait(1).to({alpha:0.127},0).wait(1).to({alpha:0.136},0).wait(1).to({alpha:0.145},0).wait(1).to({alpha:0.156},0).wait(1).to({alpha:0.167},0).wait(1).to({alpha:0.179},0).wait(1).to({alpha:0.192},0).wait(1).to({alpha:0.206},0).wait(1).to({alpha:0.221},0).wait(1).to({alpha:0.238},0).wait(1).to({alpha:0.256},0).wait(1).to({alpha:0.277},0).wait(1).to({alpha:0.299},0).wait(1).to({alpha:0.324},0).wait(1).to({alpha:0.352},0).wait(1).to({alpha:0.383},0).wait(1).to({alpha:0.419},0).wait(1).to({alpha:0.459},0).wait(1).to({alpha:0.505},0).wait(1).to({alpha:0.554},0).wait(1).to({alpha:0.606},0).wait(1).to({alpha:0.657},0).wait(1).to({alpha:0.705},0).wait(1).to({alpha:0.747},0).wait(1).to({alpha:0.785},0).wait(1).to({alpha:0.819},0).wait(1).to({alpha:0.848},0).wait(1).to({alpha:0.875},0).wait(1).to({alpha:0.898},0).wait(1).to({alpha:0.919},0).wait(1).to({alpha:0.938},0).wait(1).to({alpha:0.956},0).wait(1).to({alpha:0.972},0).wait(1).to({alpha:0.986},0).wait(1).to({alpha:1},0).wait(93));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(450,475,900.4,958);
// library properties:
lib.properties = {
	width: 900,
	height: 950,
	fps: 30,
	color: "#262628",
	opacity: 1.00,
	webfonts: {},
	manifest: [],
	preloads: []
};




})(libTwo = libTwo||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var libTwo, images, createjs, ss, AdobeAn;