//visual setup

var playerMovement={
	depth:0,
	HTMLColection:0,
	HTMLArray:0,
	XCordenents:0,
	YCordenents:0,
	aceleration:0,
	Xpx:0,
	Ypx:0,
	moveSpeed: 10,
	speed:0,
	fall:0,
	movement: 0
};
var mapDetails={
	map2DArray: 0,
	movingItemsHTMLColection: 0,
	movingItemsArray: 0,
	changingX:0,
	changingY:0,
	pixleSizeX: window.innerWidth*(1/38),
	pixleSizeY: window.innerHeight*(23/612),
	currentXGrid:0,
	currentYGrid:0,
	checker:0,
	checkerY:0
};

//a set of variables to controle visual elements 

function makewalls({
	type='parallax-item',
	endX=0,
	endY=0,
	image="https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Transparent_square.svg/768px-Transparent_square.svg.png",
	movementDepth=1, 
	colitions=1,
	interactions=0, 	
	transformerX=0, 
	transformerY=0, 
	layerDepth=1
}){
	var walls = {
		type:type,
		endX:endX,
		endY:endY,
		image:image,
		movementDepth:movementDepth, 
		colitions:colitions,
		transformerX:transformerX, 
		transformerY:transformerY, 
		layerDepth:layerDepth,
		interactions:interactions
	};
	return walls;
}

function makekey({
	type='parallax-item',
	endX=0,
	endY=0,
	image="https://developers.navionics.com/wp-content/uploads/2016/11/key-icon-300x300.png",
	movementDepth=1, 
	colitions=0,
	interactions=1, 	
	transformerX=0, 
	transformerY=0, 
	layerDepth=1,
}){
	var key = {
		type:type,
		endX:endX,
		endY:endY,
		image:image,
		movementDepth:movementDepth, 
		colitions:colitions,
		transformerX:transformerX, 
		transformerY:transformerY, 
		layerDepth:layerDepth,
		interactions:interactions
	};
	key.interact = function (){
		var buttonJ = document.getElementById("J");
		buttonJ.style = "border-color: black";
	};
	return key;
}

function makeCloud({
	type='parallax-item',
	endX=2,
	endY=2,
	image="https://www.onlygfx.com/wp-content/uploads/2016/10/watercolor-cloud-1-1024x664.png",
	movementDepth=0.4,
	transformerX=0,
	transformerY=40,
	colitions=0,
	layerDepth=0.4
}){
	
	var cloud={
		type:type,
		endX:endX,
		endY:endY,
		image:image,
		movementDepth:movementDepth, 
		colitions:colitions,
		transformerX:transformerX, 
		transformerY:transformerY, 
		layerDepth:layerDepth
	};
	return cloud;
}

function makeTree({
	type='parallax-item',
	endX=2,
	endY=3,
	image="https://www.onlygfx.com/wp-content/uploads/2017/06/watercolor-tree-5.png",
	movementDepth=0.7, 
	transformerX=40, 
	transformerY=0,
	colitions=0,	
	layerDepth=0.7
}){ 
	var tree = {
		type:type,
		endX:endX,
		endY:endY,
		image:image,
		movementDepth:movementDepth, 
		colitions:colitions,
		transformerX:transformerX, 
		transformerY:transformerY, 
		layerDepth:layerDepth
	};
	return tree;
}
function makeGround({
	type='parallax-item',
	endX=0,
	endY=0,
	image="https://lh3.googleusercontent.com/aO8HFLBG1vc9hMFzqH4S6xmKKTqkUE3ewboN3tDtlUwmK0Rh3qDbMS0XzWRCOgjCDLnDrK0H77efxhw7AXucDA=s400",
	movementDepth=1, 
	colitions=1, 
	transformerX=0, 
	transformerY=0, 
	layerDepth=1
}){ 
	var ground = {
		type:type,
		endX:endX,
		endY:endY,
		image:image,
		movementDepth:movementDepth, 
		colitions:colitions,
		transformerX:transformerX, 
		transformerY:transformerY, 
		layerDepth:layerDepth
	};
	return ground;
}
function makePlayer({
	type = 'player',
	endX = 1,
	endY = 2,
	image = "https://images.onlinelabels.com/images/clip-art/10binary/square%20spiral-131341.png",
	movementDepth=1, 
	x = 1, 
	Y = 11, 
	transformerX = 0, 
	transformerY = 0, 
	layerDepth = 1
}){ 
	var player = {
		type:type,
		endX:endX,
		endY:endY,
		image:image,
		movementDepth:movementDepth, 
		x:x, 
		Y:Y, 
		transformerX:transformerX, 
		transformerY:transformerY, 
		layerDepth:layerDepth
	};
	return player;
}


var map = [
[makewalls({}),makewalls({}),makewalls({}),makewalls({}),makewalls({}),makewalls({}),makewalls({}),makewalls({}),makewalls({}),makewalls({}),makewalls({}),makewalls({}),makewalls({}),makewalls({}),makewalls({}),makewalls({}),makewalls({}),makewalls({}),makewalls({}),makewalls({}),makewalls({}),makewalls({}),makewalls({}),makewalls({}),makewalls({}),makewalls({}),makewalls({}),makewalls({}),makewalls({}),makewalls({}),makewalls({}),makewalls({}),makewalls({}),makewalls({}),makewalls({}),makewalls({}),makewalls({}),makewalls({}),makewalls({}),makewalls({}),makewalls({}),makewalls({}),makewalls({}),makewalls({}),makewalls({}),makewalls({}),makewalls({}),makewalls({}),makewalls({}),makewalls({}),makewalls({}),makewalls({}),makewalls({}),makewalls({}),makewalls({}),makewalls({}),makewalls({}),makewalls({}),makewalls({}),makewalls({})],
[makewalls({}),0,0,0,0,0,makeCloud({}),0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,makewalls({})],
[makeGround({}),0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,makeCloud({}),0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,makewalls({})],
[makeGround({}),0,0,0,0,0,makeCloud({}),0,0,0,0,0,makeCloud({}),0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,makewalls({})],
[makeGround({}),0,0,makeCloud({}),0,0,0,0,0,0,0,0,0,0,0,0,0,0,makeCloud({}),0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,makewalls({})],
[makeGround({}),0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,makeCloud({}),0,0,makeCloud({}),0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,makeGround({})],
[makeGround({}),0,0,0,0,0,0,0,0,0,0,0,makeCloud({}),0,0,0,0,0,0,makeCloud({}),0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,makeGround({})],
[makeGround({}),0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,makeCloud({}),0,0,0,0,0,0,makeCloud({}),0,0,0,0,0,0,makeCloud({}),0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,makeGround({})],
[makeGround({}),0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,makeGround({})],
[makeGround({}),0,0,0,0,0,0,0,0,0,makeTree({}),0,makeTree({}),0,makeTree({}),0,makeTree({}),0,makeTree({}),0,makeTree({}),0,makeTree({}),0,makeTree({}),0,makeTree({}),0,makeTree({}),0,makeTree({}),0,makeTree({}),0,makeTree({}),0,makeTree({}),0,makeTree({}),0,makeTree({}),0,makeTree({}),0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,makeGround({})],
[makeGround({}),makePlayer({}),0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,makeGround({})],
[makeGround({}),0,0,0,makeGround({}),0,0,makekey({}),0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,makeGround({})],
[makeGround({}),makeGround({}),makeGround({}),makeGround({}),makeGround({}),makeGround({}),makeGround({}),makeGround({}),makeGround({}),makeGround({}),makeGround({}),makeGround({}),makeGround({}),makeGround({}),makeGround({}),makeGround({}),makeGround({}),makeGround({}),makeGround({}),makeGround({}),makeGround({}),makeGround({}),makeGround({}),makeGround({}),makeGround({}),makeGround({}),makeGround({}),makeGround({}),makeGround({}),makeGround({}),makeGround({}),makeGround({}),makeGround({}),makeGround({}),makeGround({}),makeGround({}),makeGround({}),makeGround({}),makeGround({}),makeGround({}),makeGround({}),makeGround({}),makeGround({}),makeGround({}),makeGround({}),makeGround({}),makeGround({}),makeGround({}),makeGround({}),makeGround({}),makeGround({}),makeGround({}),makeGround({}),makeGround({}),makeGround({}),makeGround({}),makeGround({}),makeGround({}),makeGround({}),makeGround({})]
];
