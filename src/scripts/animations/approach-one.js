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


(lib.Tween10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#262628").s().p("EhIgBIXMAAAiQtMCRBAAAMAAACQtg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-464.1,-463.1,928.2,926.2);


(lib.Tween9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("EhGTBGUMAAAiMnMCMnAAAMAAACMngEgasAoOIYIEJIAAAAIA9ALQFCDhGJEQIAAlxIEhA0Ikhj7IAArIIlep2IAAkJIjSDXIAAHRIjkDoImBllIq8ABIg4g7IAAi0IiEiGIgFidIgLiEIhOggIhOi0IkRDuIragpIpwghIBTMJIARgJg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-450,-450,900,900);


(lib.Tween8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#262628").s().p("A9SG1InC1GQAAgPEyA/IExBCIOADoIAWgbIAAgJIARhpIgBgSIALAAIAECsIGNBnIFsEMIGDCFIAuCNISlDRILCB2Iu/Hzg");
	this.shape.setTransform(-30.5,-1.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-263,-93.3,465,183.4);


(lib.Tween6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#262628").p("AAW8UMgArA4q");
	this.shape.setTransform(11.5,188.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#262628").s().p("AAAgYQgNgjABgwIAKABQgDAwANAgQAFANAAA4QABA0gDALIgLACQAIhxgIgTg");
	this.shape_1.setTransform(6.6,-11.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#424242").s().p("AgJAjIgEhWIAWAHIAFBgg");
	this.shape_2.setTransform(0.1,2.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AAHg5IAMABIgYBkIgNAOg");
	this.shape_3.setTransform(17.9,-2.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("AgYAKIAkgmIATgBIg9A7g");
	this.shape_4.setTransform(11.6,-5.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#333333").s().p("AgigiIAKgLIA7BOIgLANgAgjgiIABAAIgBAAg");
	this.shape_5.setTransform(10.1,2.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#424242").s().p("AgMBPIArgvIAZgoQACgDgDgGQgDgGgEgEIhQBYIg4hQIBNhWIBPAIQANAEACAKQADARADAsQgBAWgOAPIg3Bbg");
	this.shape_6.setTransform(15,2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#424242").s().p("AgUAcIgEgcIAEAEIAHgFIAMAAIAGAEIAKgFIgEgfIAHAHIAFARIACASQAAAFgZAUgAgNAEIgDADIACABIABAAIAMAAIABgBIABgBIgBgCQgDgCgDAAIgCAAQgBAAgBAAQAAAAgBABQAAAAgBAAQAAABgBAAg");
	this.shape_7.setTransform(15.8,-11.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#333333").s().p("AicAxIBth8QAGgHAIADICEAqIA6BNQgXAbgiAEQgNACgKgJIhbhSQgEgEgGAAQgFAAgDAEIhaBig");
	this.shape_8.setTransform(-3.8,3.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#424242").s().p("AhSA3IAjg9QAkg/ABADQAAACAXgLQAcgJAMAIIAbAQIADBAIgwgdQgEgEgGAAQgHABgEAEIgzBpg");
	this.shape_9.setTransform(-4.6,9.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#333333").s().p("AATAeQgKgFgSgOQgUgOgGgGQgHgIACgJIAEgHQBMAyABAJQAAAGgJABIgCABQgGAAgFgEg");
	this.shape_10.setTransform(-22.6,11.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#545454").s().p("AgSAKIgEgEQgBgBAMgJIALgKIAXAUIgBABQgKAGgLABIgEABQgKAAgFgFg");
	this.shape_11.setTransform(14.3,11.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#262628").s().p("AARAhIhDgrQgGgFABgGQABgMAMAAIAEAAIAfAMQATAEASgJIAaAUIgUAWIgCADQgEAIgFAFQAAABgBAAQAAABgBAAQAAAAgBAAQgBAAAAAAIgEgBg");
	this.shape_12.setTransform(-21,10.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#333333").s().p("AgjAnQgWgKgBgZIgDhDIAogCIADA9QABALAMADIAoALIAbAAIgnAtg");
	this.shape_13.setTransform(8.2,-10.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgLANQgFgFAAgHQgBgGAFgGQAFgFAHgBQAGAAAFAFQAFAFABAHQAAAHgEAFQgFAGgHAAIgBAAQgFAAgGgFg");
	this.shape_14.setTransform(14.2,-15.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#545454").s().p("AAAAEQgFgEAAgCQAAgBAAgBQAAAAAAgBQAAAAAAgBQABAAAAgBQACgDADABQAEAAABAIQABAIgGAEg");
	this.shape_15.setTransform(18.2,-13.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#3A3A3C").s().p("AAAASQgIAAgGgGQgFgGAAgGQABgIAGgFQAGgFAHABQAIAAAGAGQAFAGgBAGQAAAIgGAFQgFAEgIAAIAAAAg");
	this.shape_16.setTransform(14.6,-15.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#333333").s().p("AggAIQgDgIADgFQABgEAKgCQAJgDALAAQAQgBAPAJQAGADgBAOQgHgEgLgCQgVgDgZAOIgDgIg");
	this.shape_17.setTransform(16,-15);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#424242").s().p("AAJAUQgJgWgEgFIgJgMIAbAKQgEAdgBAAIAAAAg");
	this.shape_18.setTransform(17.9,-13.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#545454").s().p("AgSAOQAAgOAKgIQAIgKAOAAIAFAAIAAAmg");
	this.shape_19.setTransform(4,-18.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#424242").s().p("AghAAQAGgSAagBQAOgBALAJQAMAKAAAQIhBAFQgJgFAFgPg");
	this.shape_20.setTransform(15.7,-16.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#545454").s().p("AAQAqIgXgBIgSgeIgEgXIAcgfIAeAmIAAAGIAAALIgCAgg");
	this.shape_21.setTransform(15.9,-12.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#333333").s().p("AgjBgIhCg8IA+hpQAIgMAOgBIBegPQAOgBAFANIADAFQAFAOgDARQgCAQgMAMIhqBxQgGAGgFAAQgDAAgCgCg");
	this.shape_22.setTransform(16.5,-1.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#333333").s().p("AAgAcIgJgEQgzgYgKgIQgHgHAEgHQACgDAEgCQBRApgCAHQgDAHgGAAIgDAAg");
	this.shape_23.setTransform(-15.4,19.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#262628").s().p("AAUAjIgtgWIgcgTQABgJAGgGQAHgGAJABIAFAAIAfAOIARgXIAfATQgLALgEALIgCAIQgBAMgGAGQgEAEgDAAIgDgBg");
	this.shape_24.setTransform(-14.3,18.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26.7,-22.1,53.4,393.3);


(lib.Tween5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#424242").s().p("AsXXLIAAAFIjRByIn2n0IAAk4IiuinIADmbIjGnyQAxhsBaihQC1lEDNkNQEhl6EnjYQFykOFpABQFpAAF8FiQEvEdEuHwQDXFjDBGqQBgDTA1COIpFJjIlGBbIgfERIhlgGIifCdIiyBuIgZDsIkNEag");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-187.2,-201.2,374.5,402.5);


(lib.Tween4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#787878").s().p("AzWT5Ii+qoMAVqgjSIW+VwImzJCIAAgEIm1HsIjCDFQgyDSABAGIkZF8QiQAUijAUQlHAohZAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-142.8,-166.6,285.7,333.3);


(lib.Tween3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(238,238,238,0.098)").s().p("AxXN/Qm7nRAFgBIAA9AMAwbAAAIAAUyIvjRgIh0ofIhrAaIh2BLIAADaIjbDVIAADFIABAXIpYDDIn7oUg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-155,-142.7,310,285.5);


(lib.Tween2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(210,211,212,0.329)").s().p("AF6MEIiJqBIhrAaIh2BMIAADaIjYDRIuetRIW5qaIMUavg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-112.7,-85.6,225.4,171.2);


(lib.Tween1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(238,238,238,0.298)").s().p("A4NnhIAAk9MAwbAAAIAANLQmGi1muGRQiHB+h6CoQg9BUgiA8ImpBgg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-155,-79.9,310,159.8);


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


(lib.lightbeam1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.898)"],[0,1],-219.7,0,219.8,0).s().p("EgiVADyIUDqeMAwRgasIAXAZMgTOA1gMgk+AM4g");
	this.shape.setTransform(219.8,213.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.lightbeam1, new cjs.Rectangle(0,0,439.6,427.3), null);


(lib.lightbeamground1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D2D3D4").s().p("AohC8ItfmOIJwgIQHbhsACABIa0EuInAFeQgDgC3fiJg");
	this.shape.setTransform(140.9,32.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.lightbeamground1, new cjs.Rectangle(0,0,281.8,65.3), null);


(lib.fireflymc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","rgba(255,255,255,0.89)","rgba(255,255,255,0.737)","rgba(255,255,255,0.455)","rgba(255,255,255,0.227)","rgba(255,255,255,0.055)","rgba(255,255,255,0.035)","rgba(255,255,255,0)"],[0,0.055,0.192,0.325,0.533,0.655,0.902,1],0,0,0,0,0,12.8).s().p("AhVBWQglgkABgyQgBgxAlgkQAkglAxABQAygBAkAlQAlAkgBAxQABAyglAkQgkAlgygBQgxABgkglg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.fireflymc, new cjs.Rectangle(-12.2,-12.2,24.5,24.5), null);


(lib.Tween7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#787878").p("AgDiEIAHEJ");
	this.shape.setTransform(71.4,28.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AgbA7IAdgTIAAhPIAThZIAIDmIg4Abg");
	this.shape_1.setTransform(69,31.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#787878").s().p("AgZAIIABgFIAMgRIBxgtIAbAEIj+Bzg");
	this.shape_2.setTransform(59.5,47.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AgfCHIAHgCIACgRIBIgXIAAhdIAegkIAAgJIAUh7IAJEQIABAAIjbBBg");
	this.shape_3.setTransform(-118.2,-57.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#424242").s().p("AAFA/IAAguIgdgNIAAhMIAxAAIAACRg");
	this.shape_4.setTransform(-98.6,-26.1);

	this.instance = new lib.lightbeamground1();
	this.instance.parent = this;
	this.instance.setTransform(-26.4,27.9,1,1,0,0,0,140.9,32.6);
	this.instance.alpha = 0.5;

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#424242").s().p("AP1LIIAAhbIgjgXIAAgkIkZArI3hiKItemQQAAgYldtbIK3KKILxB3IddFLILBB2IvOCWIgJEIg");

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#424242").s().p("AF4FDIjtjyInsg0IrOnaIOsDzIgFiqIAKAAIAFCtIGMBnIFrELIGECFIAuCOg");
	this.shape_6.setTransform(-94.8,-37.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#262628").s().p("AjUEcIn/qkILXGsIIcA8IC0EYImGAQg");
	this.shape_7.setTransform(-129.6,-42.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.instance},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-201.9,-81.6,403.9,163.3);


(lib.fireflyonoffmc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.fireflymc();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({scaleX:1,scaleY:1},0).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({scaleX:0.99,scaleY:0.99},0).wait(1).to({scaleX:0.99,scaleY:0.99},0).wait(1).to({scaleX:0.98,scaleY:0.98},0).wait(1).to({scaleX:0.97,scaleY:0.97},0).wait(1).to({scaleX:0.96,scaleY:0.96},0).wait(1).to({scaleX:0.95,scaleY:0.95},0).wait(1).to({scaleX:0.93,scaleY:0.93},0).wait(1).to({scaleX:0.92,scaleY:0.92},0).wait(1).to({scaleX:0.9,scaleY:0.9},0).wait(1).to({scaleX:0.87,scaleY:0.87},0).wait(1).to({scaleX:0.84,scaleY:0.84},0).wait(1).to({scaleX:0.8,scaleY:0.8},0).wait(1).to({scaleX:0.76,scaleY:0.76},0).wait(1).to({scaleX:0.7,scaleY:0.7},0).wait(1).to({scaleX:0.63,scaleY:0.63},0).wait(1).to({scaleX:0.54,scaleY:0.54},0).wait(1).to({scaleX:0.44,scaleY:0.44},0).wait(1).to({scaleX:0.34,scaleY:0.34},0).wait(1).to({scaleX:0.27,scaleY:0.27},0).wait(1).to({scaleX:0.21,scaleY:0.21},0).wait(1).to({scaleX:0.17,scaleY:0.17},0).wait(1).to({scaleX:0.15,scaleY:0.15},0).wait(1).to({scaleX:0.13,scaleY:0.13},0).wait(1).to({scaleX:0.11,scaleY:0.11},0).wait(1).to({scaleX:0.11,scaleY:0.11},0).wait(1).to({scaleX:0.1,scaleY:0.1},0).wait(1).to({scaleX:0.1,scaleY:0.1},0).to({_off:true},1).wait(144).to({_off:false},0).wait(2).to({scaleX:0.1,scaleY:0.1},0).wait(1).to({scaleX:0.1,scaleY:0.1},0).wait(1).to({scaleX:0.11,scaleY:0.11},0).wait(1).to({scaleX:0.11,scaleY:0.11},0).wait(1).to({scaleX:0.12,scaleY:0.12},0).wait(1).to({scaleX:0.12,scaleY:0.12},0).wait(1).to({scaleX:0.13,scaleY:0.13},0).wait(1).to({scaleX:0.14,scaleY:0.14},0).wait(1).to({scaleX:0.15,scaleY:0.15},0).wait(1).to({scaleX:0.17,scaleY:0.17},0).wait(1).to({scaleX:0.18,scaleY:0.18},0).wait(1).to({scaleX:0.2,scaleY:0.2},0).wait(1).to({scaleX:0.22,scaleY:0.22},0).wait(1).to({scaleX:0.25,scaleY:0.25},0).wait(1).to({scaleX:0.28,scaleY:0.28},0).wait(1).to({scaleX:0.32,scaleY:0.32},0).wait(1).to({scaleX:0.36,scaleY:0.36},0).wait(1).to({scaleX:0.42,scaleY:0.42},0).wait(1).to({scaleX:0.49,scaleY:0.49},0).wait(1).to({scaleX:0.57,scaleY:0.57},0).wait(1).to({scaleX:0.66,scaleY:0.66},0).wait(1).to({scaleX:0.75,scaleY:0.75},0).wait(1).to({scaleX:0.82,scaleY:0.82},0).wait(1).to({scaleX:0.88,scaleY:0.88},0).wait(1).to({scaleX:0.91,scaleY:0.91},0).wait(1).to({scaleX:0.94,scaleY:0.94},0).wait(1).to({scaleX:0.96,scaleY:0.96},0).wait(1).to({scaleX:0.98,scaleY:0.98},0).wait(1).to({scaleX:0.99,scaleY:0.99},0).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({scaleX:1,scaleY:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.2,-12.2,24.5,24.5);


(lib.firefliesgroupmc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// firefly
	this.instance = new lib.fireflyonoffmc("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-180.9,48.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(210));

	// firefly
	this.instance_1 = new lib.fireflyonoffmc("synched",19);
	this.instance_1.parent = this;
	this.instance_1.setTransform(28.5,-58);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(210));

	// firefly
	this.instance_2 = new lib.fireflyonoffmc("synched",39);
	this.instance_2.parent = this;
	this.instance_2.setTransform(11,62.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(210));

	// firefly
	this.instance_3 = new lib.fireflyonoffmc("synched",59);
	this.instance_3.parent = this;
	this.instance_3.setTransform(-89.5,62);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(210));

	// firefly
	this.instance_4 = new lib.fireflyonoffmc("synched",99);
	this.instance_4.parent = this;
	this.instance_4.setTransform(-70.5,142);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(210));

	// firefly
	this.instance_5 = new lib.fireflyonoffmc("synched",139);
	this.instance_5.parent = this;
	this.instance_5.setTransform(-43,-10);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(210));

	// firefly
	this.instance_6 = new lib.fireflyonoffmc("synched",49);
	this.instance_6.parent = this;
	this.instance_6.setTransform(-43,-10);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(210));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-193.2,-64.6,228.3,125.4);


(lib.firefliesmovingmc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.firefliesgroupmc();
	this.instance.parent = this;
	this.instance.setTransform(43.1,24,1,1,0,0,0,-36,22);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:360},1205).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-114.1,-68.3,234,131);


// stage content:
(lib.scene1animationv2 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_195 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(195).call(this.frame_195).wait(1));

	// mask
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#262628").s().p("EhGTBGUMAAAiMnMCMnAAAMAAACMngEgCnAyKIAjAXIAABbIAWBoIAIkHIABgBIA9hSIAPiHICBBaIACBgIL9h0INV1QIALhvIA8gkIAAgJIAjjGQAAgBAAAAQABgBAAAAQAAAAABAAQAAgBABAAQABABAAAAQABAAAAAAQAAABAAAAQAAABAAAAIALDmIDcjbIEqjQIAJBdIAlA1IApEaQAAABAAAAQAAABABAAQAAAAAAAAQABAAAAAAQABAAABAAQAAAAAAAAQABAAAAgBQAAAAAAgBIAFnuIAAgBIAAoUQg0hNg0hWQhoisgBgpIgPm8QgFh0gUhtIk+wuQh/mugNm6IgQonQgCgzgkgjQglgjgyAAIqgAAQgKAIguA+Qg+BThBBnQjGE7h+FhQgQAthoBbQgvAoipCGQiQB0hAA9QhfBbgEAyIAAGYIlpEeIgKhFQAAAAAAgBQgBgBAAAAQgBgBAAAAQgBAAAAAAQgEAAgBADIgIAiIgzkxIAAGRIljEZIgmDMQgBAEgIABQgHgBgCgEIgag7Ig8JrIgpmFIhHhAIgJgdQl3HqgwAaImUDZIgeFiIgPkPIgIAdQAAABAAABQgBAAAAAAQgBABAAAAQgBAAAAAAQgBAAgBAAQAAAAgBgBQAAAAgBgBQAAAAAAgBIgLhKIlGCvIktFKQk0FggmBzIgdFOIFcN0QgCABJ0EhIBohMIAAgCIABABIACgBIAAACIARAOIAABJIAeATIAAApIBSAnIA6AFIAAg3IAfgTIAGiKIAUgRIAAAyIBthLIANB2IBLBXICGBVIQkBiIEagsg");
	this.shape.setTransform(450,450);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(196));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_102 = new cjs.Graphics().p("EgiVADyIUDqeMAwRgasIAXAZMgTOA1gMgk+AM4g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(102).to({graphics:mask_graphics_102,x:353.2,y:605.4}).wait(94));

	// particles
	this.instance = new lib.firefliesmovingmc();
	this.instance.parent = this;
	this.instance.setTransform(363.2,589.9,1,1,0,0,0,0,40.6);
	this.instance._off = true;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(103).to({_off:false},0).wait(93));

	// mask
	this.instance_1 = new lib.Tween8("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(335.1,711.2);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(98).to({_off:false},0).wait(1).to({regX:-30.6,regY:-1.6,x:304.5,y:709.6},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({regX:0,regY:0,x:335.1,y:711.2},0).wait(1).to({regX:-30.6,regY:-1.6,x:304.5,y:709.6,alpha:0.988},0).wait(1).to({alpha:0.945},0).wait(1).to({alpha:0.863},0).wait(1).to({alpha:0.723},0).wait(1).to({alpha:0.509},0).wait(1).to({alpha:0.246},0).wait(1).to({alpha:0.056},0).wait(1).to({regX:0,regY:0,x:335.1,y:711.2,alpha:0},0).wait(84));

	// foreground
	this.instance_2 = new lib.Tween7("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(335.4,711.2);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(104).to({_off:false},0).wait(92));

	// lens flare
	this.instance_3 = new lib.flashlightflare("synched",0,false);
	this.instance_3.parent = this;
	this.instance_3.setTransform(574.2,395.6,1,1,0,0,0,1.9,1.8);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(96).to({_off:false},0).wait(100));

	// light-beam1
	this.instance_4 = new lib.lightbeam1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(353.2,605.4,1,1,0,0,0,219.8,213.7);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(102).to({_off:false},0).wait(1).to({alpha:0.24},0).wait(1).to({alpha:0.403},0).wait(1).to({alpha:0.516},0).wait(1).to({alpha:0.593},0).wait(1).to({alpha:0.645},0).wait(1).to({alpha:0.677},0).wait(1).to({alpha:0.694},0).wait(1).to({alpha:0.699},0).wait(86));

	// miner
	this.instance_5 = new lib.Tween6("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(557.5,188.4);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(13).to({_off:false},0).wait(1).to({regY:174,y:370.5,alpha:0.037},0).wait(1).to({y:378.5,alpha:0.073},0).wait(1).to({y:386.3,alpha:0.109},0).wait(1).to({y:394.1,alpha:0.144},0).wait(1).to({y:401.7,alpha:0.179},0).wait(1).to({y:409.3,alpha:0.213},0).wait(1).to({y:416.7,alpha:0.247},0).wait(1).to({y:423.9,alpha:0.28},0).wait(1).to({y:431.1,alpha:0.312},0).wait(1).to({y:438.1,alpha:0.344},0).wait(1).to({y:444.9,alpha:0.375},0).wait(1).to({y:451.6,alpha:0.405},0).wait(1).to({y:458.1,alpha:0.435},0).wait(1).to({y:464.5,alpha:0.464},0).wait(1).to({y:470.7,alpha:0.492},0).wait(1).to({y:476.7,alpha:0.52},0).wait(1).to({y:482.6,alpha:0.546},0).wait(1).to({y:488.3,alpha:0.572},0).wait(1).to({y:493.8,alpha:0.597},0).wait(1).to({y:499.1,alpha:0.621},0).wait(1).to({y:504.2,alpha:0.645},0).wait(1).to({y:509.2,alpha:0.667},0).wait(1).to({y:513.9,alpha:0.689},0).wait(1).to({y:518.4,alpha:0.709},0).wait(1).to({y:522.8,alpha:0.729},0).wait(1).to({y:527,alpha:0.748},0).wait(1).to({y:530.9,alpha:0.766},0).wait(1).to({y:534.7,alpha:0.783},0).wait(1).to({y:538.3,alpha:0.8},0).wait(1).to({y:541.7,alpha:0.815},0).wait(1).to({y:544.9,alpha:0.83},0).wait(1).to({y:548,alpha:0.844},0).wait(1).to({y:550.9,alpha:0.857},0).wait(1).to({y:553.5,alpha:0.869},0).wait(1).to({y:556.1,alpha:0.88},0).wait(1).to({y:558.4,alpha:0.891},0).wait(1).to({y:560.6,alpha:0.901},0).wait(1).to({y:562.7,alpha:0.91},0).wait(1).to({y:564.6,alpha:0.919},0).wait(1).to({y:566.4,alpha:0.927},0).wait(1).to({y:568,alpha:0.935},0).wait(1).to({y:569.6,alpha:0.942},0).wait(1).to({y:570.9,alpha:0.948},0).wait(1).to({y:572.2,alpha:0.954},0).wait(1).to({y:573.4,alpha:0.959},0).wait(1).to({y:574.5,alpha:0.964},0).wait(1).to({y:575.5,alpha:0.968},0).wait(1).to({y:576.3,alpha:0.972},0).wait(1).to({y:577.1,alpha:0.976},0).wait(1).to({y:577.9,alpha:0.979},0).wait(1).to({y:578.5,alpha:0.982},0).wait(1).to({y:579.1,alpha:0.985},0).wait(1).to({y:579.6,alpha:0.987},0).wait(1).to({y:580.1,alpha:0.989},0).wait(1).to({y:580.5,alpha:0.991},0).wait(1).to({y:580.8,alpha:0.993},0).wait(1).to({y:581.1,alpha:0.994},0).wait(1).to({y:581.4,alpha:0.995},0).wait(1).to({y:581.6,alpha:0.996},0).wait(1).to({y:581.8,alpha:0.997},0).wait(1).to({y:582,alpha:0.998},0).wait(1).to({y:582.1,alpha:0.999},0).wait(1).to({y:582.2},0).wait(1).to({y:582.3},0).wait(1).to({alpha:1},0).wait(1).to({y:582.4},0).wait(1).to({startPosition:0},0).wait(1).to({regY:0,y:408.4},0).wait(115));

	// back rope
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#262628").ss(1.4).p("EgBMg5TMABsBUIIAtef");
	this.shape_1.setTransform(570.2,391.7);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(13).to({_off:false},0).wait(183));

	// top rope
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#262628").p("AgE8PMAAIA4NIgBAS");
	this.shape_2.setTransform(563,205.7);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(13).to({_off:false},0).wait(183));

	// glint
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#424242").s().p("Ag2g6IAAhTIBtEbg");
	this.shape_3.setTransform(482,599.6);
	this.shape_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(112).to({_off:false},0).wait(84));

	// dim
	this.instance_6 = new lib.Tween10("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(450,450,0.97,0.972);
	this.instance_6.alpha = 0.75;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(13).to({_off:false},0).to({startPosition:0},87).wait(1).to({alpha:0.749},0).wait(1).to({alpha:0.747},0).wait(1).to({alpha:0.743},0).wait(1).to({alpha:0.738},0).wait(1).to({alpha:0.73},0).wait(1).to({alpha:0.719},0).wait(1).to({alpha:0.706},0).wait(1).to({alpha:0.689},0).wait(1).to({alpha:0.668},0).wait(1).to({alpha:0.642},0).wait(1).to({alpha:0.61},0).wait(1).to({alpha:0.572},0).wait(1).to({alpha:0.526},0).wait(1).to({alpha:0.473},0).wait(1).to({alpha:0.414},0).wait(1).to({alpha:0.354},0).wait(1).to({alpha:0.296},0).wait(1).to({alpha:0.244},0).wait(1).to({alpha:0.199},0).wait(1).to({alpha:0.161},0).wait(1).to({alpha:0.129},0).wait(1).to({alpha:0.102},0).wait(1).to({alpha:0.08},0).wait(1).to({alpha:0.061},0).wait(1).to({alpha:0.046},0).wait(1).to({alpha:0.034},0).wait(1).to({alpha:0.024},0).wait(1).to({alpha:0.016},0).wait(1).to({alpha:0.01},0).wait(1).to({alpha:0.005},0).wait(1).to({alpha:0.002},0).wait(1).to({alpha:0.001},0).wait(1).to({alpha:0},0).to({startPosition:0},62).wait(1));

	// light 1
	this.instance_7 = new lib.Tween1("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(561.6,79.9);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(13).to({_off:false},0).wait(1).to({startPosition:0},0).wait(1).to({alpha:0.002},0).wait(1).to({alpha:0.005},0).wait(1).to({alpha:0.009},0).wait(1).to({alpha:0.014},0).wait(1).to({alpha:0.021},0).wait(1).to({alpha:0.03},0).wait(1).to({alpha:0.04},0).wait(1).to({alpha:0.053},0).wait(1).to({alpha:0.069},0).wait(1).to({alpha:0.087},0).wait(1).to({alpha:0.109},0).wait(1).to({alpha:0.135},0).wait(1).to({alpha:0.165},0).wait(1).to({alpha:0.201},0).wait(1).to({alpha:0.243},0).wait(1).to({alpha:0.292},0).wait(1).to({alpha:0.349},0).wait(1).to({alpha:0.413},0).wait(1).to({alpha:0.482},0).wait(1).to({alpha:0.551},0).wait(1).to({alpha:0.617},0).wait(1).to({alpha:0.677},0).wait(1).to({alpha:0.73},0).wait(1).to({alpha:0.775},0).wait(1).to({alpha:0.814},0).wait(1).to({alpha:0.846},0).wait(1).to({alpha:0.874},0).wait(1).to({alpha:0.898},0).wait(1).to({alpha:0.918},0).wait(1).to({alpha:0.936},0).wait(1).to({alpha:0.95},0).wait(1).to({alpha:0.962},0).wait(1).to({alpha:0.972},0).wait(1).to({alpha:0.98},0).wait(1).to({alpha:0.987},0).wait(1).to({alpha:0.992},0).wait(1).to({alpha:0.996},0).wait(1).to({alpha:0.998},0).wait(1).to({alpha:1},0).wait(1).to({startPosition:0},0).wait(142));

	// light 2
	this.instance_8 = new lib.Tween2("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(610.6,177.6);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(17).to({_off:false},0).wait(1).to({alpha:0.001},0).wait(1).to({alpha:0.002},0).wait(1).to({alpha:0.005},0).wait(1).to({alpha:0.01},0).wait(1).to({alpha:0.016},0).wait(1).to({alpha:0.023},0).wait(1).to({alpha:0.033},0).wait(1).to({alpha:0.045},0).wait(1).to({alpha:0.06},0).wait(1).to({alpha:0.078},0).wait(1).to({alpha:0.099},0).wait(1).to({alpha:0.124},0).wait(1).to({alpha:0.154},0).wait(1).to({alpha:0.19},0).wait(1).to({alpha:0.233},0).wait(1).to({alpha:0.283},0).wait(1).to({alpha:0.342},0).wait(1).to({alpha:0.408},0).wait(1).to({alpha:0.48},0).wait(1).to({alpha:0.553},0).wait(1).to({alpha:0.622},0).wait(1).to({alpha:0.684},0).wait(1).to({alpha:0.738},0).wait(1).to({alpha:0.784},0).wait(1).to({alpha:0.823},0).wait(1).to({alpha:0.856},0).wait(1).to({alpha:0.884},0).wait(1).to({alpha:0.907},0).wait(1).to({alpha:0.927},0).wait(1).to({alpha:0.944},0).wait(1).to({alpha:0.957},0).wait(1).to({alpha:0.969},0).wait(1).to({alpha:0.978},0).wait(1).to({alpha:0.985},0).wait(1).to({alpha:0.991},0).wait(1).to({alpha:0.995},0).wait(1).to({alpha:0.998},0).wait(1).to({alpha:0.999},0).wait(1).to({alpha:1},0).wait(140));

	// light 3
	this.instance_9 = new lib.Tween3("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(590.8,142.8);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(22).to({_off:false},0).wait(1).to({alpha:0.001},0).wait(1).to({alpha:0.003},0).wait(1).to({alpha:0.006},0).wait(1).to({alpha:0.011},0).wait(1).to({alpha:0.019},0).wait(1).to({alpha:0.028},0).wait(1).to({alpha:0.04},0).wait(1).to({alpha:0.055},0).wait(1).to({alpha:0.073},0).wait(1).to({alpha:0.095},0).wait(1).to({alpha:0.122},0).wait(1).to({alpha:0.154},0).wait(1).to({alpha:0.193},0).wait(1).to({alpha:0.241},0).wait(1).to({alpha:0.297},0).wait(1).to({alpha:0.363},0).wait(1).to({alpha:0.438},0).wait(1).to({alpha:0.517},0).wait(1).to({alpha:0.594},0).wait(1).to({alpha:0.665},0).wait(1).to({alpha:0.726},0).wait(1).to({alpha:0.777},0).wait(1).to({alpha:0.82},0).wait(1).to({alpha:0.856},0).wait(1).to({alpha:0.886},0).wait(1).to({alpha:0.911},0).wait(1).to({alpha:0.931},0).wait(1).to({alpha:0.948},0).wait(1).to({alpha:0.962},0).wait(1).to({alpha:0.973},0).wait(1).to({alpha:0.982},0).wait(1).to({alpha:0.989},0).wait(1).to({alpha:0.994},0).wait(1).to({alpha:0.997},0).wait(1).to({alpha:0.999},0).wait(1).to({alpha:1},0).wait(138));

	// light 4
	this.instance_10 = new lib.Tween4("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(585.7,166.6);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(27).to({_off:false},0).wait(1).to({alpha:0.001},0).wait(1).to({alpha:0.003},0).wait(1).to({alpha:0.007},0).wait(1).to({alpha:0.014},0).wait(1).to({alpha:0.023},0).wait(1).to({alpha:0.034},0).wait(1).to({alpha:0.049},0).wait(1).to({alpha:0.068},0).wait(1).to({alpha:0.091},0).wait(1).to({alpha:0.119},0).wait(1).to({alpha:0.154},0).wait(1).to({alpha:0.197},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.314},0).wait(1).to({alpha:0.389},0).wait(1).to({alpha:0.473},0).wait(1).to({alpha:0.56},0).wait(1).to({alpha:0.64},0).wait(1).to({alpha:0.71},0).wait(1).to({alpha:0.769},0).wait(1).to({alpha:0.817},0).wait(1).to({alpha:0.856},0).wait(1).to({alpha:0.889},0).wait(1).to({alpha:0.915},0).wait(1).to({alpha:0.936},0).wait(1).to({alpha:0.954},0).wait(1).to({alpha:0.968},0).wait(1).to({alpha:0.979},0).wait(1).to({alpha:0.987},0).wait(1).to({alpha:0.993},0).wait(1).to({alpha:0.997},0).wait(1).to({alpha:0.999},0).wait(1).to({alpha:1},0).wait(136));

	// bg 2
	this.instance_11 = new lib.Tween5("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(552.6,320.3);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(33).to({_off:false},0).wait(1).to({alpha:0.001},0).wait(1).to({alpha:0.004},0).wait(1).to({alpha:0.009},0).wait(1).to({alpha:0.017},0).wait(1).to({alpha:0.028},0).wait(1).to({alpha:0.043},0).wait(1).to({alpha:0.062},0).wait(1).to({alpha:0.086},0).wait(1).to({alpha:0.116},0).wait(1).to({alpha:0.154},0).wait(1).to({alpha:0.202},0).wait(1).to({alpha:0.262},0).wait(1).to({alpha:0.335},0).wait(1).to({alpha:0.422},0).wait(1).to({alpha:0.517},0).wait(1).to({alpha:0.609},0).wait(1).to({alpha:0.69},0).wait(1).to({alpha:0.758},0).wait(1).to({alpha:0.812},0).wait(1).to({alpha:0.856},0).wait(1).to({alpha:0.891},0).wait(1).to({alpha:0.92},0).wait(1).to({alpha:0.942},0).wait(1).to({alpha:0.96},0).wait(1).to({alpha:0.973},0).wait(1).to({alpha:0.984},0).wait(1).to({alpha:0.991},0).wait(1).to({alpha:0.996},0).wait(1).to({alpha:0.999},0).wait(1).to({alpha:1},0).wait(133));

	// bg flood
	this.instance_12 = new lib.Tween9("synched",0);
	this.instance_12.parent = this;
	this.instance_12.setTransform(450,450);
	this.instance_12.alpha = 0;
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(100).to({_off:false},0).wait(1).to({alpha:0.001},0).wait(1).to({alpha:0.004},0).wait(1).to({alpha:0.008},0).wait(1).to({alpha:0.016},0).wait(1).to({alpha:0.025},0).wait(1).to({alpha:0.038},0).wait(1).to({alpha:0.055},0).wait(1).to({alpha:0.076},0).wait(1).to({alpha:0.102},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.172},0).wait(1).to({alpha:0.219},0).wait(1).to({alpha:0.274},0).wait(1).to({alpha:0.34},0).wait(1).to({alpha:0.413},0).wait(1).to({alpha:0.491},0).wait(1).to({alpha:0.568},0).wait(1).to({alpha:0.639},0).wait(1).to({alpha:0.702},0).wait(1).to({alpha:0.757},0).wait(1).to({alpha:0.803},0).wait(1).to({alpha:0.842},0).wait(1).to({alpha:0.874},0).wait(1).to({alpha:0.901},0).wait(1).to({alpha:0.924},0).wait(1).to({alpha:0.943},0).wait(1).to({alpha:0.958},0).wait(1).to({alpha:0.97},0).wait(1).to({alpha:0.98},0).wait(1).to({alpha:0.988},0).wait(1).to({alpha:0.993},0).wait(1).to({alpha:0.997},0).wait(1).to({alpha:0.999},0).wait(1).to({alpha:1},0).wait(62));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(450,450,900,900);
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




})(libOne = libOne||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var libOne, images, createjs, ss, AdobeAn;