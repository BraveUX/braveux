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


(lib.waterfallwater = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D2D3D4").s().p("ABhQtIACh+QgFgagEgSIgGgVQgMgvAMgsIgPhBQgKgwAEgxQAEgyASgoQAIgTADgPIADpuQgFgagEgSIgGgVQgMgvAMgsIgPhBQgKgwAEgxQAEgyASgoQAIgTADgPIADn5IA5AAMAAAAhZgAibQtMAAAghRICYAAIAAADIABAAQAAAnAPAiQATApAFAxQAFAxgKAwIgOBAQANAtgLAuIgFAWQgOA4ABA6IgEH+IgBAAIAAADIABAAQAAAnAPAiQATApAFAxQAFAxgKAwIgOBAQANAtgLAuIgFAWQgOA4ABA6IgEH/g");
	this.shape.setTransform(15.6,106.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.waterfallwater, new cjs.Rectangle(0,0,31.3,213.8), null);


(lib.Tween7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.898)"],[0,1],-67.8,75.6,75.5,-238.4).s().p("A+0KXIpF38MBPWgTdIAAABIAAgBIAAAAQAFgIAJABQAHAAAEAFQAEAEAAAHIAAABMgTXBCDg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-255.4,-212.2,510.8,424.5);


(lib.Tween6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#282829").s().p("AAABZQAHhggHgQQgLgdABgmIAKAAQAAAIAAATQAAAUAGATQAFAKAAAuQABAtgEAOg");
	this.shape.setTransform(0.9,-54.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#424242").s().p("AgqAmQgFg8ACABQABACANgUIAfAJIgkg/IAUgFIAsBNIASAGIgnACQgGgBgDAEQgEADgBAEIANBkIgsADIgEg+g");
	this.shape_1.setTransform(1.2,-32.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AgTgsIAJgFIAeBTIgDAQg");
	this.shape_2.setTransform(10.5,-49.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AgogHIACgNIBPAaIgCAPg");
	this.shape_3.setTransform(7.8,-42.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#424242").s().p("AgPAaIgFgZIADAEIAGgFIAKAAIAFADIAIgGIgFgZIAHAFIAFAPIACAOQABAFgVASgAgLAEIgCADIABABIABAAIAKgBIABAAIABgCIgBgCQgCgBgDAAIgCAAQAAAAgBABQAAAAgBAAQAAAAgBABQAAAAgBAAg");
	this.shape_4.setTransform(6,-56.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#333333").s().p("Ah0BKIAXiKQABgEATgCIBugLIBOAeIACAFQgIAdgYAQQgLAFgLgEIhkgeQgSgFgBAGIgVBvg");
	this.shape_5.setTransform(-0.1,-34.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#333333").s().p("AgCAKQgVgCgHgCQgJgDgCgGIAAgHIAoACQAnADADAEQADADgGAFQgFAEgGAAIgGAAIgXgBg");
	this.shape_6.setTransform(-12.9,-23.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#545454").s().p("AgLANIgEgBQgBAAADgMIADgMIAaAEIAAAAQgEAIgIAHQgGAGgHAAIgCAAg");
	this.shape_7.setTransform(15.3,-37.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#282829").s().p("AgiAXQgFgBgEgFQgEgKAIgFIABAAIACgBIAcgEQAQgFAJgQIAcADIgFAZIABADQAAAGgBAIQgBAEgFAAg");
	this.shape_8.setTransform(-12.7,-25.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgIAMQgFgEgBgGQAAgGADgFQAEgEAGgBQAFgBAFAEQAEAEABAGQABAGgEAFQgDAFgHAAIgBAAQgEAAgEgDg");
	this.shape_9.setTransform(4.3,-59.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#545454").s().p("AAAADIgEgFQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAgBABAAQABgDACAAQAEAAABAHQACAGgGAEg");
	this.shape_10.setTransform(7.8,-57.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#545454").s().p("AAAADIgEgFQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAgBABAAQABgDACAAQAEAAABAHQACAGgGAEg");
	this.shape_11.setTransform(7.8,-57.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#3A3A3C").s().p("AgLALQgFgFAAgGQAAgGAFgEQAFgFAGABQAHgBAEAFQAFAEAAAGQABAGgFAFQgFAFgHgBQgGABgFgFg");
	this.shape_12.setTransform(4.7,-59.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#333333").s().p("AgcAIQgCgHACgEQABgDAIgDQAIgDAJgBQAKgBAQAGQAGADAAAMQgGgDgKgBQgSgCgUANIgEgGg");
	this.shape_13.setTransform(6,-59.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#424242").s().p("AAcAdIgEgIQAEgEgCgGQgBgGgDAAQgDAAgDADIgGgGIgjAFQgHgEADgNQAEgPAXgDQALgBAKAGQALAIAAAPIABAEQgCAZgBAAIAAAAg");
	this.shape_14.setTransform(5.7,-59.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#545454").s().p("AgUAGIgFgTIAWgdIATAWIADAAQAAAAABAAQAAAAAAAAQABABAAAAQABABAAAAIACAGIAAABIABAGQABAFgBAEIAAAbIgKAIIgTAEg");
	this.shape_15.setTransform(6,-56.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#545454").s().p("AgPAIQAAgLAHgGQAIgHAMAAIAEAAIAAAhg");
	this.shape_16.setTransform(-1.3,-60.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#333333").s().p("AgfAKQgJgBAAgHIACgGQBNgJACAGQADALgQAAQgoAGgOAAIgFAAg");
	this.shape_17.setTransform(-2.4,-18.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#282829").s().p("AglAdQgDgHABgHQACgIAHgDIAEgCIAcgFIACgYIAfgCQgEAMADAMIADAGQAFAIgCAHQgBAHgEAAIgqAHg");
	this.shape_18.setTransform(-2.4,-20.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#424242").s().p("AAhBRIAJg2IgDgoQABgDgGgDQgEgDgFgBIgPBkIhNgeIARhiIA4gfQALgEAGAHQAKALAYAdQAJAQgCASIAEBag");
	this.shape_19.setTransform(10.4,-47.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#333333").s().p("AA8BhIhKgLIgEg4IgCANIgFgRIACgNIgugUQgIgDgGgIQgFgIAAgKIgDg6IAjgBIACAzQAAAKALADIAXAGQADgHAFgFIA8g4QAKgHAJAHIAFACQAKAHAGANQAGAOgCANIgWCDQgDAKgGAAIgBAAg");
	this.shape_20.setTransform(6.1,-49.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#282829").p("AAxogIgxDuQgwD/AABUQAAAxAuDfQAkC7gXA0");
	this.shape_21.setTransform(-3.6,9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17.2,-63.3,34.5,127.7);


(lib.Tween5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#424242").s().p("EhFVBFmMAAAiLLMCKrAAAMAAACLLg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-443.8,-445.4,887.7,890.8);


(lib.Tween4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#282829").s().p("EhFQBFhMgAIiLBMCKvAAAMAACCLBgEgwYAFRIq3PgIELK8ISuigIAIg0IAkg5IAakUQAAAAAAgBQABAAAAgBQAAAAABAAQAAAAAAAAQABAAABAAQAAAAAAAAQABAAAAABQAAAAAAABIARBeIAjAyIAOCGIAjBUIFjgwIFUhaIAuipQAAgBAEAAQABAAABAAQABAAABAAQAAABABAAQAAAAAAAAIAoCtIBhArIHkhSIBFghIBNmcQAAgBAAAAQAAgBAAAAQABAAAAgBQABAAABAAQABAAAAAAQABABAAAAQABAAAAABQAAAAABABIgHF3IAYgLIBdjcIAUi9IAxhIIAYiFQAAgBAAAAQABgBAAAAQABgBAAAAQABAAABAAQAAAAABAAQAAAAABABQAAAAABABQAAAAAAABIAlGHIARAbIDtk8IFOjdICtmWIEqjSICuAPIAxA6IAmgQICtAhIBJAAIBCgUIBtAeIBKgqIDTgUIAwhmIg0i6Im3mgIiJjIIn1k0IgNj1ICaAAIDqA9IOjFDIJ8ECIGJAeIDAB6IBnDgIANvUIq+rwIg+BDIg0JbQAAABAAAAQAAAAAAAAQAAAAAAAAQAAAAgBgBIgfo0IgvgnIhkl0Iknm3IgcgIIgqDrQAAAAAAABQAAAAgBAAQAAAAgBABQgBAAgBAAQgFAAAAgCIgnkFIjSg7InfAAIglHhQAAAAAAABQAAAAgBABQAAAAgBAAQAAAAgBAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAgBgBAAIgfnhIieAAIktCcIgqCYQAAAAAAABQAAAAgBAAQAAAAgBAAQgBAAgBAAQgEAAgBgBIgahxIjhB0IgSE/IgBABQAAAAgBAAQAAAAAAAAQAAAAAAAAQAAgBAAAAIglkhIgRAJIhWHOQAAABAAAAQgBABAAAAQgBAAAAABQgBAAgBAAQAAAAgBAAQAAgBgBAAQAAAAgBgBQAAAAAAgBIAHmiIgCABIh0ERIgTC9IgwBIIgYCEQgBABAAABQAAAAgBABQAAAAgBABQAAAAgBAAQgBAAgBAAQAAgBgBAAQAAgBAAAAQgBgBAAgBIglmGIg0hSIgFgiInpD7IiCIGIgNGSQAAAAAAAAQgBAAAAAAQgBABgBAAQgBAAgBAAQgEAAgBgBIgvjHIjNEwIgSE4IgCAAIgejtIlaH/QAJA9gUBPIgtAzIgeDzQAAAAAAABQgBAAAAAAQAAABgBAAQAAAAgBAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQAAgBgBAAIgWhTIgrgrIgSh1IgEgGIknEQIiaAZIgaDlQAAABAAAAQgBAAAAAAQAAABgBAAQAAAAgBAAQAAAAgBAAQAAAAgBgBQAAAAAAAAQAAAAAAgBIgWjcgEAhHADJIGOhMIj7AAIiwAeIkLAAgAUeoDIhBi8Il1jFIFcD2IBaCLgAemorIhFgtIhJgXIh8g5IgxABICWBCIBaAaIBLAgg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-444,-444.8,888.1,889.8);


(lib.Tween3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#282829").s().p("Eg9eA6IMAAAh0PMB69AAAMAAAB0Pg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-393.5,-371.9,787,744);


(lib.Tween2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(219,219,219,0.898)").s().p("AguJIQgFgFAAgHQAAgIAFgGQAGgEAHAAQAIAAAFAEQAFAGAAAIQAAAHgFAFQgFAGgIAAQgHAAgGgGgAEqCpQgFgFAAgHQAAgIAFgGQAGgEAHAAQAIAAAFAEQAFAGAAAIQAAAHgFAFQgFAGgIAAQgHAAgGgGgAlAgIQgIgHAAgMQAAgLAIgHQAJgJAKAAQALAAAJAJQAJAHAAALQAAAMgJAHQgIAIgMAAQgKAAgJgIgAguouQgFgFAAgHQAAgIAFgGQAGgEAHAAQAIAAAFAEQAFAGAAAIQAAAHgFAFQgFAGgIAAQgHAAgGgGg");
	this.shape.setTransform(-5,-1.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-37.8,-60.4,65.8,117.9);


(lib.Tween1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D2D3D4").s().p("AghB0QgRgMgEgVQgCgNAEgMQgRgRgEgZQgFgeASgbIAGgIQgDgHgCgJQgDgVAMgRQAMgSAUgDQAUgEARANQARANADAVQABAKgCAJIAGAEQAZATAFAfQAGAfgTAbQgHAKgKAIQADAUgMARQgMASgUADIgIAAQgPAAgNgKg");
	this.shape.setTransform(2.5,-1.8,1,0.925);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5,-13.5,15.1,23.4);


(lib.supportminermc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D2D3D4").s().p("AgEAAQAAgEAEAAQAFAAAAAEQAAAFgFAAQgEAAAAgFg");
	this.shape.setTransform(6.3,4.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#545454").s().p("AgHAIQgEgDAAgFQAAgEAEgDQADgEAEAAQAFAAADAEQAEADAAAEQAAAFgEADQgDAEgFAAQgEAAgDgEg");
	this.shape_1.setTransform(6.3,4.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AAGARIgRglIgDAIQgDgHACgHIAIAFIADgCIAVAxg");
	this.shape_2.setTransform(11.1,10.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AgfBAIBCgTIgQghIg/glIgDAFQgBgJgBgBIgEgDIACgDIACABIgCgCIAMgcQADgJAKAAIAEABQAJAAALAHQAIAGAFALIAEAJIgFgCIgSgGIggAPIA0AhIgDgHQADgCAFACQAFABADADIAJAIIAUAxQgDAHgCABIgEACIgEgIIhCATg");
	this.shape_3.setTransform(16.4,7.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#545454").s().p("AgDACIABgCIABgCQAAAAABAAQAAgBAAAAQAAAAAAgBQABAAABAAIACgBIAAACIAAABIgFAGIAAABIgCABg");
	this.shape_4.setTransform(9.6,6.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#545454").s().p("AADAVIADgCQABgZgEgCIgLgIIgJgEIASAGIARAPQABADgEAHIgKAKg");
	this.shape_5.setTransform(11.1,5.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#545454").s().p("AgPAJIgBgIIAOgTIAAAAIATAMIAAAIIgIABIgFAHIAAAJIgDAAg");
	this.shape_6.setTransform(8.4,5.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#333333").s().p("AAHAbIgGgUQgBgHACgNIADglIgDgCIgUAsQgCADgCAIQgDAKABAEIAGBPIgegJQgOhHADgRQACgMAPgpIAOgnIBGgTIACAEQAJAPgDANIgGAvQgIAdADAKIAKAdIAMBEIgiAKQgGgpgOgtg");
	this.shape_7.setTransform(17.4,25.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#282829").s().p("AgZAQQgKgFACgIQgBgEAGgDIACgBIAWgDQANgDAIgLIARAEIgBAVIgBAJIAAACIgBABIgBAAQgFAIgIAAQgZgCgRgFg");
	this.shape_8.setTransform(11.7,35.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#202022").s().p("AgcAdIgEgCIgBgBQgCgDAAgDQgCgKAJgGIAEgCIAZgFIAAgWIAYgDQgBAFACAGIAEALIADAFQADAFAAAGQADAKgOABQglAIgMAAIgEAAg");
	this.shape_9.setTransform(20.3,37.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#545454").s().p("AACADQgEABgBgBQgBAAAAAAQgBgBAAAAQAAgBgBAAQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAgBABAAQAAgBABAAQACgDAEADQAGADgBAGg");
	this.shape_10.setTransform(9.5,3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#333333").s().p("AgUAPQgDgFAMgRQAFgGAGgFQAGgEACAAQAGgDAIAIQgGACgGAGQgMAMgDAVQgMgCgDgHg");
	this.shape_11.setTransform(7.5,3.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#545454").s().p("AgKAEQgEgIAEgJIABgDIAWAJIgKAZQgJgEgEgKg");
	this.shape_12.setTransform(1.3,11.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#545454").s().p("AgKAAIAQgRIAAABQAFAHAAAJQABAKgFAFIgCACIgBABQgCAAgMgSg");
	this.shape_13.setTransform(25.9,12.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.supportminermc, new cjs.Rectangle(0,0,27.1,40.6), null);


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


(lib.lightbeam2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.898)"],[0,1],-11.5,-3.4,27.5,-37.8).s().p("AmyipINhhgIADABQAAAAAAABQABAAAAABQgBAAAAABQAAAAgBABImfIOg");
	this.shape.setTransform(43.5,26.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.lightbeam2, new cjs.Rectangle(0,0,86.9,53.2), null);


(lib.bg1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(255,255,255,0.02)").p("AjP6xIHyHzII2GNIEsKtIQAB7IredoMgzagV3Ig8qTIkWrYIH3mqIJgoyg");
	this.shape.setTransform(218.8,189.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.898)").s().p("A8yHoIg8qSIkXrYIH4mqIJgozINfCvIHyHzII2GMIErKtIQBB8Iredog");
	this.shape_1.setTransform(218.7,189.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg1, new cjs.Rectangle(-0.4,-0.4,438.3,379.5), null);


(lib.Path_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#6F7F84").s().p("AsXPYI19ukQJGhaJyhoQTijRDbhAQB2ghi0gsQh2gclpg1QmYg8iJgbQkEgyAAgqQAAhPKkhzQFRg5FRgpIGrAAQkaBBj0BFQnoCLDAAXQD2AfG9AqQEqAcEsAxQCGAWDzAhQC1AeASAiQAXAsjIBHQjcBPoTCBQvlDzA4CEQAXA3DOArQCcAgE9AiQHDAxIME3QEGCcCsCSg");
	this.shape.setTransform(219.7,104.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_5, new cjs.Rectangle(0,0,439.4,209), null);


(lib.Path_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#95A6B4").s().p("AhwgaQCkgrDkgkQneBiggA4QgLAVAsAPQAMAFBAAPQk/gsFIhXg");
	this.shape.setTransform(27.7,10.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_4, new cjs.Rectangle(-0.2,0,55.9,21.1), null);


(lib.Path_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#95A6B4").s().p("AmXBWQAbg/DVhNQDyhZFRhHQrDDHgvB0QgRApBBAgQASAJBfAgQkDgzAhhOg");
	this.shape.setTransform(41.2,21.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_3, new cjs.Rectangle(0,0,82.4,43), null);


(lib.Path_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#95A6B4").s().p("AD4BqQA3gTgOgZQgohHpTh5QEcArDMA2QCzAvAXAmQAcAxjbAeQBRgTAOgGg");
	this.shape.setTransform(34.7,13.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_2, new cjs.Rectangle(0,0,69.5,26.3), null);


(lib.supportminersmc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// miners
	this.instance = new lib.supportminermc();
	this.instance.parent = this;
	this.instance.setTransform(167.6,68,0.491,0.491,0,0,0,14.1,42.1);

	this.instance_1 = new lib.supportminermc();
	this.instance_1.parent = this;
	this.instance_1.setTransform(149.3,60.5,0.652,0.652,0,0,0,14,42.1);

	this.instance_2 = new lib.supportminermc();
	this.instance_2.parent = this;
	this.instance_2.setTransform(96.6,22.8,1,1,0,0,0,13.5,20.3);

	this.instance_3 = new lib.supportminermc();
	this.instance_3.parent = this;
	this.instance_3.setTransform(125.5,52.5,0.813,0.813,0,0,0,13.9,42.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.supportminersmc, new cjs.Rectangle(83.1,2.5,90.9,64.8), null);


(lib.river = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// <Path>_2
	this.instance = new lib.Path_2();
	this.instance.parent = this;
	this.instance.setTransform(111.5,-46.4,1,1,0,0,0,34.7,13.1);
	this.instance.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({skewX:-0.1},0).wait(1).to({scaleY:1,skewX:-0.2},0).wait(1).to({skewX:-0.3},0).wait(1).to({scaleY:1,skewX:-0.5,x:111.6,y:-46.5},0).wait(1).to({scaleY:1,skewX:-0.7,y:-46.4},0).wait(1).to({scaleY:1,skewX:-1,x:111.7,y:-46.5},0).wait(1).to({scaleY:1,skewX:-1.4,x:111.8},0).wait(1).to({scaleY:1.01,skewX:-1.8,x:111.9},0).wait(1).to({scaleY:1.01,skewX:-2.4,x:112,y:-46.6},0).wait(1).to({scaleY:1.01,skewX:-3.1,x:112.2,y:-46.7},0).wait(1).to({scaleY:1.01,skewX:-4,x:112.4,y:-46.8},0).wait(1).to({scaleY:1.02,skewX:-5.1,x:112.7},0).wait(1).to({scaleY:1.02,skewX:-6.4,x:113,y:-46.9},0).wait(1).to({scaleY:1.03,skewX:-8,x:113.4,y:-47.1},0).wait(1).to({scaleY:1.04,skewX:-9.8,x:113.8,y:-47.2},0).wait(1).to({scaleY:1.04,skewX:-11.7,x:114.3,y:-47.4},0).wait(1).to({scaleY:1.05,skewX:-13.6,x:114.8,y:-47.6},0).wait(1).to({scaleY:1.06,skewX:-15.2,x:115.1,y:-47.7},0).wait(1).to({scaleY:1.06,skewX:-16.5,x:115.5,y:-47.8},0).wait(1).to({scaleY:1.07,skewX:-17.7,x:115.8,y:-48},0).wait(1).to({scaleY:1.07,skewX:-18.6,x:116,y:-48.1},0).wait(1).to({scaleY:1.07,skewX:-19.4,x:116.2},0).wait(1).to({scaleY:1.07,skewX:-20.1,x:116.4,y:-48.2},0).wait(1).to({scaleY:1.08,skewX:-20.6,x:116.5},0).wait(1).to({scaleY:1.08,skewX:-21.1,x:116.6},0).wait(1).to({scaleY:1.08,skewX:-21.4,x:116.7,y:-48.3},0).wait(1).to({scaleY:1.08,skewX:-21.8,x:116.8},0).wait(1).to({scaleY:1.08,skewX:-22},0).wait(1).to({skewX:-22.2,x:116.9},0).wait(1).to({scaleY:1.08,skewX:-22.4,y:-48.4},0).wait(1).to({scaleY:1.08,skewX:-22.5,x:117},0).wait(1).to({skewX:-22.6},0).wait(1).to({skewX:-22.7},0).wait(2).to({regX:34.8,x:117.1},0).wait(1).to({regX:34.7,x:116.9},0).wait(1).to({x:117},0).wait(2).to({x:116.9},0).wait(1).to({skewX:-22.6},0).wait(1).to({skewX:-22.5},0).wait(1).to({scaleY:1.08},0).wait(1).to({skewX:-22.4},0).wait(1).to({scaleY:1.08,skewX:-22.2,x:116.8},0).wait(1).to({skewX:-22.1,y:-48.3},0).wait(1).to({scaleY:1.08,skewX:-22},0).wait(1).to({skewX:-21.8,x:116.7},0).wait(1).to({scaleY:1.08,skewX:-21.6},0).wait(1).to({scaleY:1.08,skewX:-21.4,x:116.6},0).wait(1).to({scaleY:1.08,skewX:-21.1,y:-48.2},0).wait(1).to({scaleY:1.08,skewX:-20.8,x:116.5},0).wait(1).to({scaleY:1.08,skewX:-20.5,x:116.4},0).wait(1).to({scaleY:1.08,skewX:-20.1,x:116.3},0).wait(1).to({scaleY:1.07,skewX:-19.7,x:116.2,y:-48.1},0).wait(1).to({scaleY:1.07,skewX:-19.3,x:116.1},0).wait(1).to({scaleY:1.07,skewX:-18.7,x:116},0).wait(1).to({scaleY:1.07,skewX:-18.1,x:115.8,y:-48},0).wait(1).to({scaleY:1.07,skewX:-17.5,x:115.7,y:-47.9},0).wait(1).to({scaleY:1.06,skewX:-16.7,x:115.5},0).wait(1).to({scaleY:1.06,skewX:-15.9,x:115.3,y:-47.8},0).wait(1).to({scaleY:1.06,skewX:-15,x:115,y:-47.7},0).wait(1).to({scaleY:1.05,skewX:-14,x:114.8},0).wait(1).to({scaleY:1.05,skewX:-12.9,x:114.5,y:-47.5},0).wait(1).to({scaleY:1.04,skewX:-11.8,x:114.3,y:-47.4},0).wait(1).to({scaleY:1.04,skewX:-10.7,x:114,y:-47.3},0).wait(1).to({scaleY:1.04,skewX:-9.7,x:113.8,y:-47.2},0).wait(1).to({scaleY:1.03,skewX:-8.7,x:113.5},0).wait(1).to({scaleY:1.03,skewX:-7.8,x:113.3,y:-47.1},0).wait(1).to({scaleY:1.03,skewX:-6.9,x:113.1,y:-47},0).wait(1).to({scaleY:1.02,skewX:-6.2,x:112.9},0).wait(1).to({scaleY:1.02,skewX:-5.5,x:112.8,y:-46.9},0).wait(1).to({scaleY:1.02,skewX:-4.9,x:112.6,y:-46.8},0).wait(1).to({scaleY:1.02,skewX:-4.4,x:112.5},0).wait(1).to({scaleY:1.01,skewX:-3.9,x:112.3,y:-46.7},0).wait(1).to({scaleY:1.01,skewX:-3.4,x:112.2},0).wait(1).to({scaleY:1.01,skewX:-3,x:112.1,y:-46.6},0).wait(1).to({scaleY:1.01,skewX:-2.7,x:112,y:-46.7},0).wait(1).to({scaleY:1.01,skewX:-2.4,y:-46.6},0).wait(1).to({scaleY:1.01,skewX:-2.1,x:111.9},0).wait(1).to({scaleY:1.01,skewX:-1.8,x:111.8,y:-46.5},0).wait(1).to({scaleY:1.01,skewX:-1.6,y:-46.6},0).wait(1).to({scaleY:1,skewX:-1.3,x:111.7,y:-46.5},0).wait(1).to({scaleY:1,skewX:-1.1},0).wait(1).to({skewX:-1,x:111.6},0).wait(1).to({scaleY:1,skewX:-0.8},0).wait(1).to({skewX:-0.7,y:-46.4},0).wait(1).to({scaleY:1,skewX:-0.6},0).wait(1).to({skewX:-0.5,x:111.5,y:-46.5},0).wait(1).to({scaleY:1,skewX:-0.4,y:-46.4},0).wait(1).to({skewX:-0.3},0).wait(1).to({skewX:-0.2},0).wait(2).to({scaleY:1,skewX:-0.1,x:111.4},0).wait(2).to({skewX:0},0).wait(3).to({x:111.5},0).wait(1));

	// <Path>_3
	this.instance_1 = new lib.Path_3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-79.2,9.6,1,1,0,0,0,41.1,21.4);
	this.instance_1.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:41.2,regY:21.5,x:-79.1,y:9.7},0).wait(2).to({skewX:0.1,x:-79.2},0).wait(1).to({scaleY:1},0).wait(1).to({skewX:0.2,x:-79.3},0).wait(1).to({skewX:0.3,x:-79.4,y:9.8},0).wait(1).to({scaleY:1,skewX:0.4,x:-79.6},0).wait(1).to({scaleY:1,skewX:0.6,x:-79.7,y:9.7},0).wait(1).to({skewX:0.7,x:-79.9},0).wait(1).to({scaleY:1,skewX:0.9,x:-80.1,y:9.8},0).wait(1).to({scaleY:1.01,skewX:1.2,x:-80.4,y:9.7},0).wait(1).to({scaleY:1.01,skewX:1.4,x:-80.7,y:9.8},0).wait(1).to({scaleY:1.01,skewX:1.7,x:-81,y:9.7},0).wait(1).to({scaleY:1.01,skewX:2.1,x:-81.4,y:9.8},0).wait(1).to({scaleY:1.01,skewX:2.5,x:-81.9},0).wait(1).to({scaleY:1.01,skewX:2.9,x:-82.4,y:9.7},0).wait(1).to({scaleY:1.02,skewX:3.4,x:-82.9},0).wait(1).to({scaleY:1.02,skewX:4,x:-83.6},0).wait(1).to({scaleY:1.02,skewX:4.7,x:-84.4},0).wait(1).to({scaleY:1.03,skewX:5.5,x:-85.2},0).wait(1).to({scaleY:1.03,skewX:6.3,x:-86.2},0).wait(1).to({scaleY:1.03,skewX:7.3,x:-87.3},0).wait(1).to({scaleY:1.04,skewX:8.5,x:-88.6},0).wait(1).to({scaleY:1.05,skewX:9.7,x:-90},0).wait(1).to({scaleY:1.05,skewX:11.1,x:-91.5},0).wait(1).to({scaleY:1.06,skewX:12.5,x:-93.1,y:9.8},0).wait(1).to({scaleY:1.07,skewX:14,x:-94.8,y:9.7},0).wait(1).to({scaleY:1.07,skewX:15.4,x:-96.4,y:9.8},0).wait(1).to({scaleY:1.08,skewX:16.8,x:-97.9},0).wait(1).to({scaleY:1.09,skewX:18.1,x:-99.4},0).wait(1).to({scaleY:1.09,skewX:19.2,x:-100.7,y:9.7},0).wait(1).to({scaleY:1.1,skewX:20.3,x:-101.8},0).wait(1).to({scaleY:1.1,skewX:21.2,x:-102.8},0).wait(1).to({scaleY:1.11,skewX:22,x:-103.8},0).wait(1).to({scaleY:1.11,skewX:22.8,x:-104.6,y:9.8},0).wait(1).to({scaleY:1.11,skewX:23.4,x:-105.3},0).wait(1).to({scaleY:1.12,skewX:24,x:-106},0).wait(1).to({scaleY:1.12,skewX:24.5,x:-106.6},0).wait(1).to({scaleY:1.12,skewX:25,x:-107.1,y:9.7},0).wait(1).to({scaleY:1.12,skewX:25.4,x:-107.6},0).wait(1).to({scaleY:1.12,skewX:25.8,x:-108,y:9.8},0).wait(1).to({scaleY:1.13,skewX:26.1,x:-108.4,y:9.7},0).wait(1).to({scaleY:1.13,skewX:26.4,x:-108.7,y:9.8},0).wait(1).to({scaleY:1.13,skewX:26.7,x:-109,y:9.7},0).wait(1).to({scaleY:1.13,skewX:26.9,x:-109.3,y:9.8},0).wait(1).to({scaleY:1.13,skewX:27.1,x:-109.5,y:9.7},0).wait(1).to({scaleY:1.13,skewX:27.3,x:-109.7,y:9.8},0).wait(1).to({scaleY:1.13,skewX:27.5,x:-109.9,y:9.7},0).wait(1).to({scaleY:1.13,skewX:27.6,x:-110.1},0).wait(1).to({skewX:27.8,x:-110.2,y:9.8},0).wait(1).to({scaleY:1.13,skewX:27.9,x:-110.3},0).wait(1).to({x:-110.4,y:9.7},0).wait(1).to({scaleY:1.13,skewX:28,x:-110.5},0).wait(1).to({skewX:28.1},0).wait(1).to({x:-110.6},0).wait(2).to({skewX:28.2},0).wait(1).to({regX:41.1,regY:21.4,x:-110.7,y:9.6},0).wait(1).to({regX:41.2,regY:21.5,x:-110.6,y:9.7},0).wait(1).to({skewX:28.1},0).wait(1).to({skewX:28,x:-110.5},0).wait(1).to({scaleY:1.13,skewX:27.9,x:-110.3,y:9.8},0).wait(1).to({scaleY:1.13,skewX:27.7,x:-110.2},0).wait(1).to({scaleY:1.13,skewX:27.5,x:-109.9,y:9.7},0).wait(1).to({scaleY:1.13,skewX:27.3,x:-109.6,y:9.8},0).wait(1).to({scaleY:1.13,skewX:26.9,x:-109.2},0).wait(1).to({scaleY:1.13,skewX:26.5,x:-108.8,y:9.7},0).wait(1).to({scaleY:1.12,skewX:26,x:-108.2},0).wait(1).to({scaleY:1.12,skewX:25.4,x:-107.6},0).wait(1).to({scaleY:1.12,skewX:24.7,x:-106.8,y:9.8},0).wait(1).to({scaleY:1.11,skewX:23.9,x:-105.8},0).wait(1).to({scaleY:1.11,skewX:22.8,x:-104.6,y:9.7},0).wait(1).to({scaleY:1.1,skewX:21.6,x:-103.3,y:9.8},0).wait(1).to({scaleY:1.1,skewX:20.1,x:-101.6,y:9.7},0).wait(1).to({scaleY:1.09,skewX:18.4,x:-99.7,y:9.8},0).wait(1).to({scaleY:1.08,skewX:16.5,x:-97.5},0).wait(1).to({scaleY:1.07,skewX:14.4,x:-95.2,y:9.7},0).wait(1).to({scaleY:1.06,skewX:12.3,x:-92.9,y:9.8},0).wait(1).to({scaleY:1.05,skewX:10.5,x:-90.8},0).wait(1).to({scaleY:1.04,skewX:8.8,x:-88.9},0).wait(1).to({scaleY:1.03,skewX:7.4,x:-87.3,y:9.7},0).wait(1).to({scaleY:1.03,skewX:6.2,x:-86},0).wait(1).to({scaleY:1.02,skewX:5.1,x:-84.8,y:9.8},0).wait(1).to({scaleY:1.02,skewX:4.3,x:-83.9},0).wait(1).to({scaleY:1.02,skewX:3.5,x:-83,y:9.7},0).wait(1).to({scaleY:1.01,skewX:2.9,x:-82.3},0).wait(1).to({scaleY:1.01,skewX:2.4,x:-81.7},0).wait(1).to({scaleY:1.01,skewX:1.9,x:-81.2,y:9.8},0).wait(1).to({scaleY:1.01,skewX:1.5,x:-80.7},0).wait(1).to({scaleY:1.01,skewX:1.2,x:-80.4,y:9.7},0).wait(1).to({scaleY:1,skewX:0.9,x:-80.1,y:9.8},0).wait(1).to({scaleY:1,skewX:0.7,x:-79.8,y:9.7},0).wait(1).to({scaleY:1,skewX:0.5,x:-79.6,y:9.8},0).wait(1).to({skewX:0.3,x:-79.4},0).wait(1).to({scaleY:1,skewX:0.2,x:-79.2,y:9.7},0).wait(1).to({skewX:0.1},0).wait(1).to({scaleY:1,skewX:0,x:-79.1},0).wait(2).to({regX:41.1,regY:21.4,x:-79.2,y:9.6},0).wait(1));

	// <Path>_4
	this.instance_2 = new lib.Path_4();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-30.1,-81.7,1,1,0,0,0,27.8,10.6);
	this.instance_2.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({regX:27.7},0).wait(2).to({scaleY:1,skewX:0.1},0).wait(1).to({skewX:0.2,x:-30.2},0).wait(1).to({scaleY:1,skewX:0.3},0).wait(1).to({skewX:0.5},0).wait(1).to({scaleY:1,skewX:0.6,y:-81.6},0).wait(1).to({scaleY:1,skewX:0.9,x:-30.3},0).wait(1).to({scaleY:1.01,skewX:1.1,y:-81.7},0).wait(1).to({scaleY:1.01,skewX:1.4},0).wait(1).to({scaleY:1.01,skewX:1.8,x:-30.4,y:-81.6},0).wait(1).to({scaleY:1.01,skewX:2.3,y:-81.7},0).wait(1).to({scaleY:1.01,skewX:2.8,x:-30.5,y:-81.6},0).wait(1).to({scaleY:1.02,skewX:3.4,x:-30.6,y:-81.7},0).wait(1).to({scaleY:1.02,skewX:4.1,x:-30.7,y:-81.6},0).wait(1).to({scaleY:1.02,skewX:4.9,x:-30.8,y:-81.7},0).wait(1).to({scaleY:1.03,skewX:5.9,x:-30.9},0).wait(1).to({scaleY:1.03,skewX:7,x:-31.1,y:-81.6},0).wait(1).to({scaleY:1.04,skewX:8.3,x:-31.3},0).wait(1).to({scaleY:1.05,skewX:9.8,x:-31.5,y:-81.7},0).wait(1).to({scaleY:1.06,skewX:11.4,x:-31.7,y:-81.6},0).wait(1).to({scaleY:1.07,skewX:13.2,x:-32,y:-81.7},0).wait(1).to({scaleY:1.08,skewX:15,x:-32.2},0).wait(1).to({scaleY:1.09,skewX:16.8,x:-32.5},0).wait(1).to({scaleY:1.09,skewX:18.5,x:-32.7,y:-81.6},0).wait(1).to({scaleY:1.1,skewX:20,x:-32.9,y:-81.7},0).wait(1).to({scaleY:1.11,skewX:21.3,x:-33,y:-81.6},0).wait(1).to({scaleY:1.11,skewX:22.4,x:-33.2,y:-81.7},0).wait(1).to({scaleY:1.12,skewX:23.4,x:-33.3,y:-81.6},0).wait(1).to({scaleY:1.12,skewX:24.3,x:-33.5,y:-81.7},0).wait(1).to({scaleY:1.13,skewX:25.1},0).wait(1).to({scaleY:1.13,skewX:25.7,x:-33.6,y:-81.6},0).wait(1).to({scaleY:1.13,skewX:26.3,x:-33.7,y:-81.7},0).wait(1).to({scaleY:1.14,skewX:26.8,x:-33.8,y:-81.6},0).wait(1).to({scaleY:1.14,skewX:27.3,x:-33.9},0).wait(1).to({scaleY:1.14,skewX:27.7,y:-81.7},0).wait(1).to({scaleY:1.14,skewX:28,x:-34,y:-81.6},0).wait(1).to({scaleY:1.14,skewX:28.3,y:-81.7},0).wait(1).to({scaleY:1.15,skewX:28.6},0).wait(1).to({scaleY:1.15,skewX:28.8,x:-34.1,y:-81.6},0).wait(1).to({scaleY:1.15,skewX:29},0).wait(1).to({scaleY:1.15,skewX:29.2},0).wait(1).to({scaleY:1.15,skewX:29.3,y:-81.7},0).wait(1).to({skewX:29.4,x:-34.2},0).wait(1).to({scaleY:1.15,skewX:29.5},0).wait(1).to({skewX:29.6},0).wait(5).to({x:-34.1},0).wait(1).to({skewX:29.5},0).wait(1).to({skewX:29.4},0).wait(1).to({scaleY:1.15,skewX:29.3},0).wait(1).to({scaleY:1.15,skewX:29.2},0).wait(1).to({scaleY:1.15,skewX:29,x:-34,y:-81.6},0).wait(1).to({scaleY:1.15,skewX:28.8},0).wait(1).to({scaleY:1.15,skewX:28.6,y:-81.7},0).wait(1).to({scaleY:1.14,skewX:28.2,y:-81.6},0).wait(1).to({scaleY:1.14,skewX:27.9,x:-33.9},0).wait(1).to({scaleY:1.14,skewX:27.5,x:-33.8,y:-81.7},0).wait(1).to({scaleY:1.14,skewX:27,y:-81.6},0).wait(1).to({scaleY:1.13,skewX:26.4,x:-33.7,y:-81.7},0).wait(1).to({scaleY:1.13,skewX:25.8,x:-33.6,y:-81.6},0).wait(1).to({scaleY:1.13,skewX:25,x:-33.5},0).wait(1).to({scaleY:1.12,skewX:24.1,x:-33.4,y:-81.7},0).wait(1).to({scaleY:1.12,skewX:23.1,x:-33.2,y:-81.6},0).wait(1).to({scaleY:1.11,skewX:21.9,x:-33.1},0).wait(1).to({scaleY:1.1,skewX:20.5,x:-32.9,y:-81.7},0).wait(1).to({scaleY:1.1,skewX:18.9,x:-32.7,y:-81.6},0).wait(1).to({scaleY:1.09,skewX:17.2,x:-32.4,y:-81.7},0).wait(1).to({scaleY:1.08,skewX:15.4,x:-32.2},0).wait(1).to({scaleY:1.07,skewX:13.6,x:-31.9},0).wait(1).to({scaleY:1.06,skewX:12,x:-31.7,y:-81.6},0).wait(1).to({scaleY:1.05,skewX:10.4,x:-31.5},0).wait(1).to({scaleY:1.05,skewX:9,x:-31.3},0).wait(1).to({scaleY:1.04,skewX:7.8,x:-31.2,y:-81.7},0).wait(1).to({scaleY:1.03,skewX:6.8,x:-31,y:-81.6},0).wait(1).to({scaleY:1.03,skewX:5.8,x:-30.9,y:-81.7},0).wait(1).to({scaleY:1.02,skewX:5,x:-30.8,y:-81.6},0).wait(1).to({scaleY:1.02,skewX:4.3,x:-30.7},0).wait(1).to({scaleY:1.02,skewX:3.7,x:-30.6},0).wait(1).to({scaleY:1.02,skewX:3.1,x:-30.5,y:-81.7},0).wait(1).to({scaleY:1.01,skewX:2.6,y:-81.6},0).wait(1).to({scaleY:1.01,skewX:2.2,x:-30.4,y:-81.7},0).wait(1).to({scaleY:1.01,skewX:1.9,y:-81.6},0).wait(1).to({scaleY:1.01,skewX:1.5,x:-30.3},0).wait(1).to({scaleY:1.01,skewX:1.2,y:-81.7},0).wait(1).to({scaleY:1,skewX:1},0).wait(1).to({scaleY:1,skewX:0.8,x:-30.2,y:-81.6},0).wait(1).to({scaleY:1,skewX:0.6},0).wait(1).to({scaleY:1,skewX:0.4,y:-81.7},0).wait(1).to({skewX:0.3,x:-30.1},0).wait(1).to({scaleY:1,skewX:0.2},0).wait(1).to({skewX:0.1},0).wait(1).to({scaleY:1},0).wait(1).to({skewX:0},0).wait(2).to({regX:27.8},0).wait(1));

	// <Path>_5
	this.instance_3 = new lib.Path_5();
	this.instance_3.parent = this;
	this.instance_3.setTransform(0.1,0,1,1,0,0,0,219.7,104.5);
	this.instance_3.alpha = 0.301;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(100));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-219.6,-104.5,439.4,209);


(lib.minerlampsmc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// light-beam2
	this.instance = new lib.lightbeam2();
	this.instance.parent = this;
	this.instance.setTransform(161,42.8,1,1.239,0,-36.2,0,87.2,-0.2);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:43.5,regY:26.6,x:136.9,y:69.6,alpha:0.141},0).wait(1).to({alpha:0.21},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.274},0).wait(1).to({alpha:0.288},0).wait(1).to({alpha:0.296},0).wait(1).to({alpha:0.299},0).wait(1).to({alpha:0.301},0).wait(1).to({regX:87.2,regY:-0.2,x:161,y:42.8},0).wait(16));

	// light-beam2
	this.instance_1 = new lib.lightbeam2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(141.5,28.3,1,1.07,0,-20.8,0,87.2,-0.2);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(4).to({_off:false},0).wait(1).to({regX:43.5,regY:26.6,x:108,y:55.1,alpha:0.141},0).wait(1).to({alpha:0.21},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.274},0).wait(1).to({alpha:0.288},0).wait(1).to({alpha:0.296},0).wait(1).to({alpha:0.299},0).wait(1).to({alpha:0.301},0).wait(1).to({regX:87.2,regY:-0.2,x:141.5,y:28.3},0).wait(12));

	// light-beam2
	this.instance_2 = new lib.lightbeam2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(117,14.3,1,1.239,0,-36.2,0,87.2,-0.2);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(9).to({_off:false},0).wait(1).to({regX:43.5,regY:26.6,x:92.9,y:41.1,alpha:0.141},0).wait(1).to({alpha:0.21},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.274},0).wait(1).to({alpha:0.288},0).wait(1).to({alpha:0.296},0).wait(1).to({alpha:0.299},0).wait(1).to({alpha:0.301},0).wait(1).to({regX:87.2,regY:-0.2,x:117,y:14.3},0).wait(7));

	// light-beam2
	this.instance_3 = new lib.lightbeam2();
	this.instance_3.parent = this;
	this.instance_3.setTransform(87.2,-0.2,1,1,0,0,0,87.2,-0.2);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(14).to({_off:false},0).wait(1).to({regX:43.5,regY:26.6,x:43.5,y:26.6,alpha:0.141},0).wait(1).to({alpha:0.21},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.274},0).wait(1).to({alpha:0.288},0).wait(1).to({alpha:0.296},0).wait(1).to({alpha:0.299},0).wait(1).to({alpha:0.301},0).wait(1).to({regX:87.2,regY:-0.2,x:87.2,y:-0.2},0).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(73.9,43,125.8,53.2);


(lib.mainlightbeamanimatedmc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Tween7("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(513.4,0.3,1,1,0,0,0,258,-212);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:0,regY:0,x:255.4,y:212.2},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({x:255.3},0).wait(1).to({startPosition:0},0).wait(1).to({y:212.1},0).wait(1).to({x:255.2},0).wait(1).to({rotation:0.1,y:212},0).wait(1).to({x:255.1,y:211.9},0).wait(1).to({y:211.8},0).wait(1).to({x:255,y:211.7},0).wait(1).to({x:254.9,y:211.6},0).wait(1).to({rotation:0.2,x:254.7,y:211.4},0).wait(1).to({x:254.6,y:211.2},0).wait(1).to({rotation:0.3,x:254.4,y:211},0).wait(1).to({x:254.2,y:210.8},0).wait(1).to({rotation:0.4,x:253.9,y:210.5},0).wait(1).to({rotation:0.5,x:253.7,y:210.1},0).wait(1).to({rotation:0.6,x:253.3,y:209.7},0).wait(1).to({rotation:0.7,x:252.9,y:209.2},0).wait(1).to({rotation:0.8,x:252.4,y:208.6},0).wait(1).to({rotation:1,x:251.9,y:207.9},0).wait(1).to({rotation:1.2,x:251.2,y:207},0).wait(1).to({rotation:1.4,x:250.3,y:205.9},0).wait(1).to({rotation:1.7,x:249.2,y:204.5},0).wait(1).to({rotation:2.1,x:247.9,y:202.7},0).wait(1).to({rotation:2.6,x:246,y:200.2},0).wait(1).to({rotation:3.4,x:243.3,y:196.6},0).wait(1).to({rotation:4.8,x:238.5,y:189.7},0).wait(1).to({rotation:7.2,x:230.8,y:178.1},0).wait(1).to({rotation:8.3,x:227.7,y:173.1},0).wait(1).to({rotation:8.9,x:225.8,y:170},0).wait(1).to({rotation:9.3,x:224.6,y:167.8},0).wait(1).to({rotation:9.6,x:223.6,y:166.1},0).wait(1).to({rotation:9.9,x:222.8,y:164.7},0).wait(1).to({rotation:10.1,x:222.2,y:163.7},0).wait(1).to({rotation:10.3,x:221.7,y:162.8},0).wait(1).to({rotation:10.4,x:221.3,y:162},0).wait(1).to({rotation:10.6,x:221,y:161.4},0).wait(1).to({rotation:10.7,x:220.7,y:160.9},0).wait(1).to({rotation:10.8,x:220.4,y:160.4},0).wait(1).to({x:220.2,y:160},0).wait(1).to({rotation:10.9,x:220,y:159.7},0).wait(1).to({rotation:11,x:219.9,y:159.4},0).wait(1).to({x:219.8,y:159.2},0).wait(1).to({x:219.7,y:159},0).wait(1).to({rotation:11.1,x:219.6,y:158.8},0).wait(1).to({x:219.5,y:158.7},0).wait(1).to({x:219.4,y:158.5},0).wait(1).to({y:158.4},0).wait(1).to({rotation:11.2,x:219.3,y:158.3},0).wait(1).to({startPosition:0},0).wait(1).to({x:219.2,y:158.2},0).wait(1).to({startPosition:0},0).wait(1).to({y:158.1},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({regX:258.1,regY:-211.9,x:513.5,y:0.4},0).wait(1).to({regX:0,regY:0,x:219.1,y:158.1},0).wait(1).to({x:219.2},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({y:158.2},0).wait(1).to({startPosition:0},0).wait(1).to({x:219.3,y:158.3},0).wait(1).to({startPosition:0},0).wait(1).to({rotation:11.1,y:158.4},0).wait(1).to({x:219.4,y:158.5},0).wait(1).to({x:219.5,y:158.6},0).wait(1).to({y:158.8},0).wait(1).to({rotation:11,x:219.6,y:158.9},0).wait(1).to({x:219.7,y:159.1},0).wait(1).to({rotation:10.9,x:219.9,y:159.4},0).wait(1).to({x:220,y:159.7},0).wait(1).to({rotation:10.8,x:220.2,y:160},0).wait(1).to({x:220.4,y:160.4},0).wait(1).to({rotation:10.7,x:220.6,y:160.8},0).wait(1).to({rotation:10.6,x:220.9,y:161.3},0).wait(1).to({rotation:10.4,x:221.3,y:161.9},0).wait(1).to({rotation:10.3,x:221.7,y:162.7},0).wait(1).to({rotation:10.1,x:222.2,y:163.6},0).wait(1).to({rotation:9.9,x:222.8,y:164.7},0).wait(1).to({rotation:9.6,x:223.5,y:166},0).wait(1).to({rotation:9.3,x:224.5,y:167.7},0).wait(1).to({rotation:8.9,x:225.8,y:170},0).wait(1).to({rotation:8.2,x:227.7,y:173.1},0).wait(1).to({rotation:7.2,x:230.8,y:178.1},0).wait(1).to({rotation:4.9,x:238.1,y:189.3},0).wait(1).to({rotation:3.4,x:243.2,y:196.4},0).wait(1).to({rotation:2.6,x:245.9,y:200.1},0).wait(1).to({rotation:2.1,x:247.7,y:202.5},0).wait(1).to({rotation:1.7,x:249,y:204.2},0).wait(1).to({rotation:1.4,x:250.1,y:205.6},0).wait(1).to({rotation:1.2,x:250.9,y:206.7},0).wait(1).to({rotation:1,x:251.6,y:207.6},0).wait(1).to({rotation:0.9,x:252.2,y:208.3},0).wait(1).to({rotation:0.7,x:252.7,y:208.9},0).wait(1).to({rotation:0.6,x:253.1,y:209.5},0).wait(1).to({rotation:0.5,x:253.5,y:209.9},0).wait(1).to({rotation:0.4,x:253.8,y:210.3},0).wait(1).to({x:254,y:210.6},0).wait(1).to({rotation:0.3,x:254.3,y:210.9},0).wait(1).to({rotation:0.2,x:254.5,y:211.1},0).wait(1).to({x:254.6,y:211.3},0).wait(1).to({x:254.8,y:211.5},0).wait(1).to({rotation:0.1,x:254.9,y:211.6},0).wait(1).to({x:255,y:211.7},0).wait(1).to({x:255.1,y:211.8},0).wait(1).to({y:211.9},0).wait(1).to({rotation:0,x:255.2,y:212},0).wait(1).to({y:212.1},0).wait(1).to({x:255.3},0).wait(1).to({startPosition:0},0).wait(1).to({y:212.2},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({regX:258,regY:-212,x:513.4,y:0.3},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,510.8,424.5);


(lib.foammc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Tween2("synched",0);
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-360},481).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-37.8,-60.4,65.8,117.9);


(lib.churnmc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Tween1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(0,-0.2,1,1,0,0,0,1.8,-1.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:360},59).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.9,-12.2,15.1,23.4);


(lib.ambientminerlampsmc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// light-beam2
	this.instance = new lib.lightbeam2();
	this.instance.parent = this;
	this.instance.setTransform(61.2,-5.2,1,1.239,0,-36.2,0,87.2,-0.2);
	this.instance.alpha = 0.301;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(28).to({regX:43.5,regY:26.6,x:37.1,y:21.6},0).wait(1).to({skewX:-36.4,skewY:-0.2,x:37.2,y:21.7},0).wait(1).to({skewX:-36.7,skewY:-0.5,x:37.4,y:21.8},0).wait(1).to({skewX:-37.2,skewY:-1,x:37.6,y:22},0).wait(1).to({skewX:-37.8,skewY:-1.7,x:37.9,y:22.3},0).wait(1).to({scaleY:1.24,skewX:-38.8,skewY:-2.7,x:38.4,y:22.7},0).wait(1).to({skewX:-40.2,skewY:-4,x:39,y:23.2},0).wait(1).to({skewX:-42.1,skewY:-6,x:40,y:23.9},0).wait(1).to({skewX:-44.7,skewY:-8.6,x:41.3,y:24.8},0).wait(1).to({skewX:-48,skewY:-11.8,x:43.1,y:25.9},0).wait(1).to({scaleY:1.24,skewX:-51.1,skewY:-15,x:44.8,y:26.8},0).wait(1).to({skewX:-53.7,skewY:-17.6,x:46.2,y:27.5},0).wait(1).to({skewX:-55.5,skewY:-19.4,x:47.3,y:27.9},0).wait(1).to({skewX:-56.8,skewY:-20.6,x:48,y:28.2},0).wait(1).to({skewX:-57.6,skewY:-21.5,x:48.5,y:28.4},0).wait(1).to({skewX:-58.2,skewY:-22.1,x:48.8,y:28.6},0).wait(1).to({skewX:-58.6,skewY:-22.5,x:49.1,y:28.7},0).wait(1).to({skewX:-58.8,skewY:-22.7,x:49.2},0).wait(1).to({regX:87.1,regY:-0.3,x:61.1,y:-5.4},0).wait(22).to({regX:43.5,regY:26.6,x:49.4,y:28.7},0).wait(1).to({skewX:-58.6,skewY:-22.5,x:49.2,y:28.6},0).wait(1).to({skewX:-58.2,skewY:-22.1,x:49,y:28.5},0).wait(1).to({skewX:-57.7,skewY:-21.6,x:48.7},0).wait(1).to({skewX:-56.9,skewY:-20.8,x:48.2,y:28.3},0).wait(1).to({skewX:-55.7,skewY:-19.6,x:47.6,y:28},0).wait(1).to({skewX:-54.1,skewY:-18,x:46.6,y:27.6},0).wait(1).to({skewX:-51.8,skewY:-15.7,x:45.3,y:27},0).wait(1).to({skewX:-48.7,skewY:-12.6,x:43.6,y:26.1},0).wait(1).to({skewX:-45.2,skewY:-9.1,x:41.7,y:25},0).wait(1).to({skewX:-42.2,skewY:-6.1,x:40.2,y:23.9},0).wait(1).to({skewX:-40,skewY:-3.9,x:39.1,y:23.1},0).wait(1).to({skewX:-38.5,skewY:-2.4,x:38.3,y:22.6},0).wait(1).to({skewX:-37.5,skewY:-1.4,x:37.8,y:22.1},0).wait(1).to({skewX:-36.8,skewY:-0.7,x:37.5,y:21.9},0).wait(1).to({skewX:-36.4,skewY:-0.3,x:37.3,y:21.7},0).wait(1).to({skewX:-36.2,skewY:-0.1,x:37.2,y:21.6},0).wait(1).to({regX:87.2,regY:-0.3,skewX:-36.1,skewY:0,x:61.3,y:-5.3},0).to({regY:-0.2,scaleY:1.24,skewX:-36.2,x:61.2,y:-5.2},1).wait(87));

	// light-beam2
	this.instance_1 = new lib.lightbeam2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(41.7,-19.7,1,1.07,0,-20.8,0,87.2,-0.2);
	this.instance_1.alpha = 0.301;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(61).to({regX:43.5,regY:26.6,x:8.2,y:7.1},0).wait(1).to({skewX:-20.7,skewY:0.1,y:7},0).wait(1).to({skewX:-20.6,skewY:0.2},0).wait(1).to({skewX:-20.4,skewY:0.4,x:8.1,y:6.9},0).wait(1).to({skewX:-20.2,skewY:0.7,x:7.9,y:6.7},0).wait(1).to({skewX:-19.8,skewY:1.1,x:7.8,y:6.5},0).wait(1).to({skewX:-19.2,skewY:1.6,x:7.5,y:6.1},0).wait(1).to({skewX:-18.5,skewY:2.4,x:7.1,y:5.7},0).wait(1).to({skewX:-17.4,skewY:3.4,x:6.7,y:5},0).wait(1).to({scaleY:1.07,skewX:-16.1,skewY:4.7,x:6.1,y:4.2},0).wait(1).to({skewX:-14.9,skewY:5.9,x:5.6,y:3.4},0).wait(1).to({skewX:-13.8,skewY:7,x:5.3,y:2.7},0).wait(1).to({skewX:-13.1,skewY:7.7,x:4.9,y:2.3},0).wait(1).to({skewX:-12.6,skewY:8.2,x:4.8,y:2},0).wait(1).to({skewX:-12.3,skewY:8.5,x:4.6,y:1.8},0).wait(1).to({skewX:-12,skewY:8.8,y:1.6},0).wait(1).to({skewX:-11.9,skewY:8.9,x:4.5,y:1.5},0).wait(1).to({skewX:-11.8,skewY:9,x:4.4},0).wait(1).to({regX:87.2,regY:-0.3,x:41.8,y:-19.8},0).wait(34).to({regX:43.5,regY:26.6,x:4.5,y:1.5},0).wait(1).to({skewX:-11.9,skewY:8.9},0).wait(1).to({skewX:-12,skewY:8.8,x:4.6,y:1.6},0).wait(1).to({skewX:-12.2,skewY:8.6,x:4.7,y:1.8},0).wait(1).to({skewX:-12.6,skewY:8.2,x:4.8,y:2},0).wait(1).to({skewX:-13,skewY:7.8,x:5,y:2.3},0).wait(1).to({skewX:-13.7,skewY:7.1,x:5.2,y:2.7},0).wait(1).to({skewX:-14.6,skewY:6.2,x:5.6,y:3.3},0).wait(1).to({skewX:-15.8,skewY:5,x:6.1,y:4},0).wait(1).to({skewX:-17.2,skewY:3.6,x:6.7,y:4.9},0).wait(1).to({skewX:-18.4,skewY:2.4,x:7.2,y:5.6},0).wait(1).to({skewX:-19.3,skewY:1.5,x:7.6,y:6.2},0).wait(1).to({skewX:-19.9,skewY:0.9,x:7.8,y:6.5},0).wait(1).to({skewX:-20.3,skewY:0.5,x:8,y:6.7},0).wait(1).to({skewX:-20.5,skewY:0.3,x:8.1,y:6.9},0).wait(1).to({skewX:-20.7,skewY:0.1,x:8.2,y:7},0).wait(1).to({skewX:-20.8,skewY:0,x:8.3,y:7.1},0).wait(1).to({regX:87.1,regY:-0.3,x:41.7,y:-19.8},0).to({regX:87.2,regY:-0.2,scaleY:1.07,y:-19.7},1).wait(42));

	// light-beam2
	this.instance_2 = new lib.lightbeam2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(17.2,-33.7,1,1.239,0,-36.2,0,87.2,-0.2);
	this.instance_2.alpha = 0.301;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(99).to({regX:43.5,regY:26.6,x:-6.9,y:-6.9},0).wait(1).to({skewX:-36.4,skewY:-0.2,x:-6.8,y:-6.8},0).wait(1).to({skewX:-36.7,skewY:-0.5,x:-6.6,y:-6.7},0).wait(1).to({skewX:-37.1,skewY:-1,x:-6.4,y:-6.5},0).wait(1).to({skewX:-37.8,skewY:-1.7,x:-6.1,y:-6.2},0).wait(1).to({scaleY:1.24,skewX:-38.8,skewY:-2.6,x:-5.6,y:-5.9},0).wait(1).to({skewX:-40.2,skewY:-4,x:-5,y:-5.3},0).wait(1).to({skewX:-42.1,skewY:-5.9,x:-4.1,y:-4.6},0).wait(1).to({skewX:-44.6,skewY:-8.5,x:-2.7,y:-3.7},0).wait(1).to({skewX:-47.8,skewY:-11.7,x:-1,y:-2.6},0).wait(1).to({scaleY:1.24,skewX:-51,skewY:-14.9,x:0.8,y:-1.7},0).wait(1).to({skewX:-53.5,skewY:-17.4,x:2.2,y:-1},0).wait(1).to({skewX:-55.3,skewY:-19.2,x:3.2,y:-0.5},0).wait(1).to({skewX:-56.5,skewY:-20.4,x:3.9,y:-0.2},0).wait(1).to({skewX:-57.4,skewY:-21.3,x:4.5,y:0},0).wait(1).to({skewX:-58,skewY:-21.9,x:4.8,y:0.1},0).wait(1).to({skewX:-58.3,skewY:-22.2,x:5,y:0.2},0).wait(1).to({skewX:-58.5,skewY:-22.4,x:5.1},0).wait(1).to({regX:87.2,regY:-0.3,skewX:-58.6,skewY:-22.5,x:17.2,y:-33.8},0).wait(37).to({regX:43.5,regY:26.6,skewX:-58.5,skewY:-22.4,x:5.2,y:0.2},0).wait(1).to({skewX:-58.3,skewY:-22.2,x:5.1},0).wait(1).to({skewX:-58,skewY:-21.9,x:4.9,y:0.1},0).wait(1).to({skewX:-57.5,skewY:-21.4,x:4.6,y:0},0).wait(1).to({skewX:-56.7,skewY:-20.6,x:4.1,y:-0.2},0).wait(1).to({skewX:-55.5,skewY:-19.4,x:3.4,y:-0.4},0).wait(1).to({skewX:-53.9,skewY:-17.8,x:2.5,y:-0.8},0).wait(1).to({skewX:-51.6,skewY:-15.5,x:1.2,y:-1.4},0).wait(1).to({skewX:-48.5,skewY:-12.4,x:-0.5,y:-2.3},0).wait(1).to({skewX:-45.1,skewY:-9,x:-2.4,y:-3.5},0).wait(1).to({skewX:-42.1,skewY:-6,x:-4,y:-4.6},0).wait(1).to({skewX:-39.9,skewY:-3.8,x:-5,y:-5.4},0).wait(1).to({skewX:-38.5,skewY:-2.4,x:-5.8,y:-6},0).wait(1).to({skewX:-37.5,skewY:-1.4,x:-6.2,y:-6.3},0).wait(1).to({skewX:-36.8,skewY:-0.7,x:-6.5,y:-6.6},0).wait(1).to({skewX:-36.4,skewY:-0.3,x:-6.7,y:-6.8},0).wait(1).to({skewX:-36.2,skewY:-0.1,x:-6.8,y:-6.9},0).wait(1).to({regX:87.2,regY:-0.3,skewX:-36.1,skewY:0,x:17.3,y:-33.8},0).to({regY:-0.2,scaleY:1.24,skewX:-36.2,x:17.2,y:-33.7},1).wait(1));

	// light-beam2
	this.instance_3 = new lib.lightbeam2();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-12.6,-48.2,1,1,0,0,0,87.2,-0.2);
	this.instance_3.alpha = 0.301;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(2).to({regX:43.5,regY:26.6,rotation:-0.1,x:-56.2,y:-21.4},0).wait(1).to({scaleY:1,rotation:0,skewX:-0.4,skewY:-0.2,x:-56,y:-21.2},0).wait(1).to({scaleY:1,skewX:-1,skewY:-0.5,x:-55.8,y:-21},0).wait(1).to({scaleY:1,skewX:-1.8,skewY:-0.9,x:-55.4,y:-20.6},0).wait(1).to({scaleY:1,skewX:-3.1,skewY:-1.6,x:-54.8,y:-20.1},0).wait(1).to({scaleY:1.01,skewX:-5,skewY:-2.5,x:-53.9,y:-19.4},0).wait(1).to({scaleY:1.01,skewX:-7.5,skewY:-3.9,x:-52.6,y:-18.4},0).wait(1).to({scaleY:1.02,skewX:-11.1,skewY:-5.7,x:-50.7,y:-17.1},0).wait(1).to({scaleY:1.03,skewX:-16,skewY:-8.2,x:-48.2,y:-15.5},0).wait(1).to({scaleY:1.04,skewX:-22.1,skewY:-11.3,x:-45,y:-13.9},0).wait(1).to({scaleY:1.05,skewX:-28,skewY:-14.3,x:-41.8,y:-12.7},0).wait(1).to({scaleY:1.05,skewX:-32.8,skewY:-16.8,x:-39.2,y:-11.9},0).wait(1).to({scaleY:1.06,skewX:-36.2,skewY:-18.5,x:-37.3,y:-11.5},0).wait(1).to({scaleY:1.06,skewX:-38.5,skewY:-19.7,x:-36,y:-11.3},0).wait(1).to({scaleY:1.07,skewX:-40.2,skewY:-20.6,x:-35.1,y:-11.2},0).wait(1).to({scaleY:1.07,skewX:-41.2,skewY:-21.1,x:-34.5,y:-11},0).wait(1).to({scaleY:1.07,skewX:-41.9,skewY:-21.5,x:-34.1},0).wait(1).to({scaleY:1.07,skewX:-42.3,skewY:-21.6,x:-33.9},0).wait(1).to({regX:87.2,regY:-0.4,skewX:-42.4,skewY:-21.7,x:-12.6,y:-48.4},0).wait(37).to({regX:43.5,regY:26.6,skewX:-42.3,x:-33.7,y:-10.9},0).wait(1).to({scaleY:1.07,skewX:-41.9,skewY:-21.5,x:-33.9},0).wait(1).to({scaleY:1.07,skewX:-41.3,skewY:-21.2,x:-34.3,y:-11},0).wait(1).to({scaleY:1.07,skewX:-40.3,skewY:-20.6,x:-34.8,y:-11.1},0).wait(1).to({scaleY:1.06,skewX:-38.8,skewY:-19.9,x:-35.7},0).wait(1).to({scaleY:1.06,skewX:-36.7,skewY:-18.8,x:-36.8,y:-11.4},0).wait(1).to({scaleY:1.06,skewX:-33.6,skewY:-17.2,x:-38.6,y:-11.7},0).wait(1).to({scaleY:1.05,skewX:-29.2,skewY:-15,x:-41,y:-12.4},0).wait(1).to({scaleY:1.04,skewX:-23.4,skewY:-12,x:-44.1,y:-13.5},0).wait(1).to({scaleY:1.03,skewX:-16.9,skewY:-8.7,x:-47.7,y:-15.2},0).wait(1).to({scaleY:1.02,skewX:-11.3,skewY:-5.8,x:-50.6,y:-16.9},0).wait(1).to({scaleY:1.01,skewX:-7.2,skewY:-3.7,x:-52.7,y:-18.3},0).wait(1).to({scaleY:1.01,skewX:-4.4,skewY:-2.3,x:-54.1,y:-19.4},0).wait(1).to({scaleY:1,skewX:-2.5,skewY:-1.3,x:-55,y:-20.2},0).wait(1).to({scaleY:1,skewX:-1.3,skewY:-0.7,x:-55.6,y:-20.7},0).wait(1).to({scaleY:1,skewX:-0.5,skewY:-0.3,x:-55.9,y:-21},0).wait(1).to({scaleY:1,skewX:-0.1,skewY:-0.1,x:-56.1,y:-21.2},0).wait(1).to({regX:87.2,regY:-0.2,skewX:0,skewY:0,x:-12.6,y:-48.2},0).wait(99));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-99.8,-48,199.6,96.2);


(lib.waterfallmc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ag8GgQgBgBiAgHQiAgIgBgBQAAgBghABQgiABAAgBIgZgNIgZgMQgBgBgTAUQgUATAAgBQgBgCg7gcQgWgKgpAVQgVAKgQAMQgBgCgis7QgBgBKUAVQKSAVgBgBQAaK9gBgCQAAgBggAmQggAngBgBQAAgBg1ABQg2ABAAgBQgBgBgxAGQgyAGAAgBQgBgBgeABQgfABgBgBQAAgBghADQgiAEAAgBQgBgBikACIiSABIgSAAg");
	mask.setTransform(33.5,65.9);

	// foam
	this.instance = new lib.foammc();
	this.instance.parent = this;
	this.instance.setTransform(19.4,92.2,0.325,0.358,0,61.2,-118.8,-0.2,-0.1);

	this.instance_1 = new lib.foammc();
	this.instance_1.parent = this;
	this.instance_1.setTransform(49.8,84.8,0.325,0.325,0,0,0,0,0.1);

	var maskedShapeInstanceList = [this.instance,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(60));

	// mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AjyIaQABAAACocQABoTgBgFQDMA1B9ACQBOABAtgVQAXgLAGgJIAAQlQAAABh5AAIlrgBgAjvoaIAAAAIAAAAg");
	mask_1.setTransform(28.2,50.5);

	// water
	this.instance_2 = new lib.waterfallwater();
	this.instance_2.parent = this;
	this.instance_2.setTransform(34.8,-2,1,1,0,0,0,15.6,106.9);

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:102.7},59).wait(1));

	// mask (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	mask_2.graphics.p("AjpEiIg+gKIhuAAIAAo+IMrAAIAAI+IhfAAQhCAThmgTIgKAAQhYAWiBgLQgdAEgiAAQgoAAgugFg");
	mask_2.setTransform(30.5,81.8);

	// Layer 5
	this.instance_3 = new lib.churnmc();
	this.instance_3.parent = this;
	this.instance_3.setTransform(45.9,103.9,1.003,0.964,0,54.4,54.1,-0.5,0.3);

	this.instance_4 = new lib.churnmc();
	this.instance_4.parent = this;
	this.instance_4.setTransform(18.8,106.6,1.003,1.005,0,81.6,-98.6,-0.5,0.5);

	var maskedShapeInstanceList = [this.instance_3,this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3}]}).wait(60));

	// churn base
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D2D3D4").s().p("Aj0BcIhHgLQARgoAmgaQAngbAuAAQANAAALACQAMgJALgGICcg9QATgKAVAAQAdAAAaATIAsA0QAHALAFANQARgGAPAAQAiAAAdAXQAcAXAOAmQhGAbh4gXQhZAXiEgLQgdAEgiAAQgoAAgugFg");
	this.shape.setTransform(31.6,101.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(60));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.1,-3.4,66.4,114.7);


// stage content:
(lib.scene3animationv2 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_143 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(143).call(this.frame_143).wait(1));

	// mask
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#282829").s().p("EhGTBGUMAAAiMnMCMnAAAMAAACMngEAHWguJIjkAkIuZHUImrHkImLQmIsOFpImwL6ImIKXInuDqIgsHYIF0FcIJKA7IQnFdIUXPMIfximIK0jWICIxgIOlvQIjgs/IimkdIgK3MInXmLIkhj7IAAsZIpvh2g");
	this.shape.setTransform(450,450);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(144));

	// lens flare
	this.instance = new lib.flashlightflare("synched",0,false);
	this.instance.parent = this;
	this.instance.setTransform(526.9,410.3,1,1,0,0,0,1.9,1.8);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(100).to({_off:false},0).wait(44));

	// tint
	this.instance_1 = new lib.Tween3("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(439.5,441.9);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(14).to({_off:false},0).to({alpha:0.359},20).to({startPosition:0},94).to({alpha:0},15).wait(1));

	// light-beam1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.898)"],[0,1],-67.8,75.6,75.5,-238.4).s().p("A+0KXIpF38MBPWgTdIAAABIAAgBIAAAAQAFgIAJABQAHAAAEAFQAEAEAAAHIAAABMgTXBCDg");
	this.shape_1.setTransform(271.8,619.4);

	this.instance_2 = new lib.mainlightbeamanimatedmc();
	this.instance_2.parent = this;
	this.instance_2.setTransform(271.8,619.5,1,1,0,0,0,255.4,212.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1}]},107).to({state:[{t:this.instance_2}]},36).wait(1));

	// mask
	this.instance_3 = new lib.Tween4("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(448.2,449.7);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(14).to({_off:false},0).to({alpha:0.75},20).to({alpha:0.738},20).to({alpha:0.488},12).to({startPosition:0},57).to({alpha:0},15).wait(6));

	// waterfall
	this.instance_4 = new lib.waterfallmc();
	this.instance_4.parent = this;
	this.instance_4.setTransform(557.2,544.3,1,1,0,0,0,31.6,55.6);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(14).to({_off:false},0).wait(130));

	// river
	this.instance_5 = new lib.river();
	this.instance_5.parent = this;
	this.instance_5.setTransform(497,701.9);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(14).to({_off:false},0).wait(130));

	// rope
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#282829").p("AgEDDIAJmF");
	this.shape_2.setTransform(522.3,385.4);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(14).to({_off:false},0).wait(130));

	// descent miner
	this.instance_6 = new lib.Tween6("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(521.5,438.3);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(14).to({_off:false},0).wait(1).to({regY:0.1,y:439.6},0).wait(1).to({y:440.9},0).wait(1).to({y:442.1},0).wait(1).to({y:443.3},0).wait(1).to({y:444.5},0).wait(1).to({y:445.7},0).wait(1).to({y:446.8},0).wait(1).to({y:447.9},0).wait(1).to({y:449},0).wait(1).to({y:450.1},0).wait(1).to({y:451.1},0).wait(1).to({y:452.1},0).wait(1).to({y:453.1},0).wait(1).to({y:454.1},0).wait(1).to({y:455},0).wait(1).to({y:455.8},0).wait(1).to({y:456.7},0).wait(1).to({y:457.5},0).wait(1).to({y:458.3},0).wait(1).to({y:459},0).wait(1).to({y:459.7},0).wait(1).to({y:460.3},0).wait(1).to({y:460.9},0).wait(1).to({y:461.5},0).wait(1).to({y:462.1},0).wait(1).to({y:462.6},0).wait(1).to({y:463},0).wait(1).to({y:463.5},0).wait(1).to({y:463.9},0).wait(1).to({y:464.2},0).wait(1).to({y:464.6},0).wait(1).to({y:464.9},0).wait(1).to({y:465.2},0).wait(1).to({y:465.4},0).wait(1).to({y:465.7},0).wait(1).to({y:465.9},0).wait(1).to({y:466.1},0).wait(1).to({y:466.3},0).wait(1).to({y:466.4},0).wait(1).to({y:466.6},0).wait(1).to({y:466.7},0).wait(1).to({y:466.8},0).wait(1).to({y:467},0).wait(1).to({y:467.1},0).wait(1).to({y:467.2},0).wait(1).to({y:467.3},0).wait(1).to({startPosition:0},0).wait(1).to({y:467.4},0).wait(1).to({y:467.5},0).wait(1).to({startPosition:0},0).wait(1).to({y:467.6},0).wait(1).to({y:467.7},0).wait(1).to({startPosition:0},0).wait(1).to({y:467.8},0).wait(1).to({startPosition:0},0).wait(1).to({y:467.9},0).wait(1).to({startPosition:0},0).wait(1).to({y:468},0).wait(1).to({startPosition:0},0).wait(1).to({y:468.1},0).wait(1).to({startPosition:0},0).wait(1).to({y:468.2},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({y:468.3},0).wait(1).to({regY:0},0).wait(64));

	// cave walls
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("EhFQBFhMgAIiLBMCKvAAAMAACCLBgEgwYAFRIq3PgIELK8ISuigIAIg0IAkg5IAakUQAAAAAAgBQABAAAAgBQAAAAABAAQAAAAAAAAQABAAABAAQAAAAAAAAQABAAAAABQAAAAAAABIARBeIAjAyIAOCGIAjBUIFjgwIFUhaIAuipQAAgBAEAAQABAAABAAQABAAABAAQAAABABAAQAAAAAAAAIAoCtIBhArIHkhSIBFghIBNmcQAAgBAAAAQAAgBAAAAQABAAAAgBQABAAABAAQABAAAAAAQABABAAAAQABAAAAABQAAAAABABIgHF3IAYgLIBdjcIAUi9IAxhIIAYiFQAAgBAAAAQABgBAAAAQABgBAAAAQABAAABAAQAAAAABAAQAAAAABABQAAAAABABQAAAAAAABIAlGHIARAbIDtk8IFOjdICtmWIEqjSICuAPIAxA6IAmgQICtAhIBJAAIBCgUIBtAeIBKgqIDTgUIAwhmIg0i6Im3mgIiJjIIn1k0IgNj1ICaAAIDqA9IOjFDIJ8ECIGJAeIDAB6IBnDgIANvUIq+rwIg+BDIg0JbQAAABAAAAQAAAAAAAAQAAAAAAAAQAAAAgBgBIgfo0IgvgnIhkl0Iknm3IgcgIIgqDrQAAAAAAABQAAAAgBAAQAAAAgBABQgBAAgBAAQgFAAAAgCIgnkFIjSg7InfAAIglHhQAAAAAAABQAAAAgBABQAAAAgBAAQAAAAgBAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAgBgBAAIgfnhIieAAIktCcIgqCYQAAAAAAABQAAAAgBAAQAAAAgBAAQgBAAgBAAQgEAAgBgBIgahxIjhB0IgSE/IgBABQAAAAgBAAQAAAAAAAAQAAAAAAAAQAAgBAAAAIglkhIgRAJIhWHOQAAABAAAAQgBABAAAAQgBAAAAABQgBAAgBAAQAAAAgBAAQAAgBgBAAQAAAAgBgBQAAAAAAgBIAHmiIgCABIh0ERIgTC9IgwBIIgYCEQgBABAAABQAAAAgBABQAAAAgBABQAAAAgBAAQgBAAgBAAQAAgBgBAAQAAgBAAAAQgBgBAAgBIglmGIg0hSIgFgiInpD7IiCIGIgNGSQAAAAAAAAQgBAAAAAAQgBABgBAAQgBAAgBAAQgEAAgBgBIgvjHIjNEwIgSE4IgCAAIgejtIlaH/QAJA9gUBPIgtAzIgeDzQAAAAAAABQgBAAAAAAQAAABgBAAQAAAAgBAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQAAgBgBAAIgWhTIgrgrIgSh1IgEgGIknEQIiaAZIgaDlQAAABAAAAQgBAAAAAAQAAABgBAAQAAAAgBAAQAAAAgBAAQAAAAgBgBQAAAAAAAAQAAAAAAgBIgWjcgEAhHADJIGOhMIj7AAIiwAeIkLAAgAUeoDIhBi8Il1jFIFcD2IBaCLgAemorIhFgtIhJgXIh8g5IgxABICWBCIBaAaIBLAgg");
	this.shape_3.setTransform(448.2,449.7);
	this.shape_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(14).to({_off:false},0).wait(130));

	// miner lamps
	this.instance_7 = new lib.minerlampsmc("synched",0,false);
	this.instance_7.parent = this;
	this.instance_7.setTransform(554.4,355,1,1,0,0,0,43.6,26.4);

	this.instance_8 = new lib.ambientminerlampsmc();
	this.instance_8.parent = this;
	this.instance_8.setTransform(610.6,376.5,1,1,0,0,0,0,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_7}]},53).to({state:[{t:this.instance_8}]},90).wait(1));

	// support miners
	this.instance_9 = new lib.supportminersmc();
	this.instance_9.parent = this;
	this.instance_9.setTransform(562,350.3,1,1,0,0,0,53.8,28.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#282829").s().p("AMLDdInCjRIhvg7IjNiOIiTgxIgwgnIjAhOIiBg5Iq6gNIACgKIK7ANIB/A5IDDBOIAxAoICSA3IDLCMIBvA7IHBDQIGmDUIgFAJg");
	this.shape_4.setTransform(642.1,376.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_4},{t:this.instance_9}]},14).wait(130));

	// bg light
	this.instance_10 = new lib.bg1();
	this.instance_10.parent = this;
	this.instance_10.setTransform(623.8,434.4,1,1,0,0,0,218.8,189.4);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(54).to({_off:false},0).to({alpha:0.012},12).wait(50).to({alpha:0.031},16).wait(12));

	// bg light 2
	this.instance_11 = new lib.Tween5("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(448.4,450.3);
	this.instance_11.alpha = 0.031;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(106).to({_off:false},0).to({alpha:1},16).wait(22));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(450,450,900,900);
// library properties:
lib.properties = {
	width: 900,
	height: 900,
	fps: 30,
	color: "#282829",
	opacity: 1.00,
	webfonts: {},
	manifest: [],
	preloads: []
};




})(libThree = libThree||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var libThree, images, createjs, ss, AdobeAn;
