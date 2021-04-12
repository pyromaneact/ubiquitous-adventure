//optinal prameters code (later removed but link might be usfull for clean up) addapted from this stackOverflow thred: https://stackoverflow.com/questions/12797118/how-can-i-declare-optional-function-parameters-in-javascript?fbclid=IwAR2XMH66g0JjiFVgJuBMWBnzsN5agbqAoiahNb1mKIP2a73ONfZ8CJEtzAQ
	
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
	movement: 0,
	mousedownID: -1
};
var mapDetails={
	map2DArray: 0,
	movingItemsHTMLColection: 0,
	movingItemsArray: 0,
	changingX:0,
	changingY:0,
	pixleSizeX: window.innerWidth*(1/38),
	pixleSizeY: 23,
	currentXGrid:0,
	currentYGrid:0,
	checker:0,
	checkerY:0
};
var playerDetails={
	inventory:{}
};

var computerDetails={
	fear:0,
	ethics:0,
	cunning:0,
	kindness:0,
	dexterity:0,
	inventory:{}
};


//a set of variables to controle visual elements 

//all pictures used are taken from to the best of my knolage and understanding the public domain if you own a picture and do not want it used in this project please let me know
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
	layerDepth=1,
	indexMod=0
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
		interactions:interactions,
		indexMod:indexMod
	};
	return walls;
}

function resetSqure({
	type='parallax-item',
	endX=0,
	endY=0,
	image="https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Transparent_square.svg/768px-Transparent_square.svg.png",
	movementDepth=1, 
	colitions=0,
	interactions=1, 	
	transformerX=0,
	indexMod=0,	
	transformerY=0, 
	layerDepth=1
}){
	var resetSqure = {
		type:type,
		endX:endX,
		endY:endY,
		image:image,
		movementDepth:movementDepth, 
		colitions:colitions,
		transformerX:transformerX, 
		transformerY:transformerY, 
		layerDepth:layerDepth,
		interactions:interactions,
		indexMod:indexMod,
		odds:0
	};
	
	resetSqure.interact = function (){
		if (resetSqure.AI != 1){
			var buttonJ = document.getElementById("J");
			buttonJ.style = "border-color: #C1292D;";
			buttonJ.onmousedown=function() {};
			putText("   ");
			document.getElementsByClassName("answers")[0].innerHTML=""
		}
	};
	
	return resetSqure;
}

function makekey({
	type='parallax-item',
	endX=1,
	endY=1,
	image="https://findicons.com/files/icons/1960/free_watercolor/256/key.png",
	movementDepth=1, 
	colitions=0,
	interactions=1, 	
	transformerX=0, 
	transformerY=0, 
	layerDepth=1,
	indexMod=0
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
		interactions:interactions,
		indexMod:indexMod,
		ran:0,
		odds: 0.8,
	};
	key.interact = function (){
		if (key.AI != 1){
			if (key.ran!=1){
				var buttonJ = document.getElementById("J");
				buttonJ.style = "border-color: black";
				var keyElement = document.getElementById("cell-"+mapDetails.currentYGrid+","+mapDetails.currentXGrid); 
				buttonJ.onmousedown=function() {
					keyElement.innerHTML = '<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Transparent_square.svg/768px-Transparent_square.svg.png">';
					var buttonJ = document.getElementById("J");
					buttonJ.style = "border-color: #C1292D;";
					buttonJ.onmousedown=function() {};
					putText("  ");
					playerDetails.inventory.key = 1; 
					key.ran=1;
				};
				putText("a key maybey we should pick that up for later try pressing J on it");
			}
		}else{
			computerDetails.inventory.key = 1; 
		}
	};
	return key;
}

function makeScrewDriver({
	type='parallax-item',
	endX=1,
	endY=1,
	image="https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Transparent_square.svg/768px-Transparent_square.svg.png",
	movementDepth=1, 
	colitions=0,
	interactions=1, 	
	transformerX=0, 
	transformerY=0, 
	layerDepth=1,
	indexMod=0
}){
	var screwDriver = {
		type:type,
		endX:endX,
		endY:endY,
		image:image,
		movementDepth:movementDepth, 
		colitions:colitions,
		transformerX:transformerX, 
		transformerY:transformerY, 
		layerDepth:layerDepth,
		interactions:interactions,
		indexMod:indexMod,
		ran:0,
		odds: 0.2
	};
	screwDriver.interact = function (){
		if (screwDriver.AI != 1){
			if (screwDriver.ran!=1){
				var buttonJ = document.getElementById("J");
				buttonJ.style = "border-color: black";
				var keyElement = document.getElementById("cell-"+mapDetails.currentYGrid+","+mapDetails.currentXGrid); 
				buttonJ.onmousedown=function() {
					var buttonJ = document.getElementById("J");
					buttonJ.style = "border-color: #C1292D;";
					buttonJ.onmousedown=function() {};
					putText("  ");
					computerDetails.inventory.screwDriver = 1;
					screwDriver.ran=1;
				};
			putText("A Screw Driver maybe we should save that for later! try pressing J on it");
			}
		}else{
			computerDetails.inventory.screwDriver = 1;
		}
	};
	return screwDriver;
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
	indexMod=0,
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
		layerDepth:layerDepth,
		indexMod:indexMod
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
	transformerY=-4*mapDetails.pixleSizeY,
	colitions=0,	
	layerDepth=0.7,
	indexMod=0
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
		layerDepth:layerDepth,
		indexMod:indexMod
	};
	return tree;
}

function makeGround({
	type='parallax-item',
	endX=0,
	endY=0,
	image="./game_graphics/grass_block.png",
	movementDepth=1, 
	colitions=1, 
	transformerX=0, 
	transformerY=0, 
	layerDepth=1,
	indexMod=0
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
		layerDepth:layerDepth,
		indexMod:indexMod
	};
	return ground;
}

function makeFreind({
	type='parallax-item',
	endX = 1,
	endY = 2,
	image="./game_graphics/npc_smuggler_head_2_variant_green_x1_iconic_png_1354836156.png",
	movementDepth=1, 
	colitions=0,
	interactions=0, 	
	transformerX=0, 
	transformerY=0, 
	layerDepth=1,
	indexMod=0,
}){
	var freind = {
		type:type,
		endX:endX,
		endY:endY,
		image:image,
		movementDepth:movementDepth, 
		colitions:colitions,
		transformerX:transformerX, 
		transformerY:transformerY, 
		layerDepth:layerDepth,
		interactions:interactions,
		indexMod:indexMod,
		ran:0
	}
	return freind
}

function meetFreind({
	type='parallax-item',
	endX=0,
	endY=0,
	image="https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Transparent_square.svg/768px-Transparent_square.svg.png",
	movementDepth=1, 
	colitions=0,
	interactions=1, 	
	transformerX=0, 
	transformerY=0, 
	layerDepth=1,
	indexMod=0
}){
	var freindDialog = {
		type:type,
		endX:endX,
		endY:endY,
		image:image,
		movementDepth:movementDepth, 
		colitions:colitions,
		transformerX:transformerX, 
		transformerY:transformerY, 
		layerDepth:layerDepth,
		interactions:interactions,
		indexMod:indexMod,
		ran:0
	};
	freindDialog.interact = function (){
		if (freindDialog.AI != 1){
			if (freindDialog.ran == 0){
				question = "hello freind how are you?";
				freindDialog.X = mapDetails.currentXGrid;
				freindDialog.Y = mapDetails.currentYGrid;
				freindDialog.placement = "mapDetails.map2DArray["+ (mapDetails.currentYGrid-1).toString() +"][" + (mapDetails.currentXGrid-1).toString() +"]";
				console.log(freindDialog.placement);
				var answers = [["not grate", 'sheLeft();', 'fear', 10], ["ah could be worse", 'alright();', 'kindness', 10]];
				putDialog(freindDialog.placement, question, answers);
			}else{
				putText("hello agin");
			}
		}
	};
	freindDialog.alright = function (){
		putText("it all ends in tears");
		freindDialog.endConvo();
	}
	freindDialog.sheLeft = function (){
		putText("yeah man it is hard right now");
		freindDialog.endConvo();
	}
	freindDialog.endConvo= function(){
		for (var i = 0; i < 7; i++) { 
			var YCowards = freindDialog.Y -1 - i;
			var XCowards = freindDialog.X ;
			var wall = map[YCowards][XCowards];
			console.log(wall, "cell-" + YCowards + "," + XCowards);
			wall.colitions = 0;
			freindDialog.ran = 1;
		}
	}
	return freindDialog
};

function makePlayer({
	type = 'player',
	endX = 1,
	endY = 2,
	image = "./game_graphics/SteamarmRight.png",
	movementDepth=1, 
	x = 1, 
	Y = 11, 
	transformerX = 0, 
	transformerY = 0, 
	layerDepth = 1,
	indexMod=0
}){ 
	var player = {
		type:type,
		endX:endX,
		endY:endY,
		image:image,
		imageR:["./game_graphics/SteamarmRight.png","./game_graphics/SteamarmRight1.png","./game_graphics/SteamarmRight2.png","./game_graphics/SteamarmRight3.png","./game_graphics/SteamarmRight4.png"],
		imageL:["./game_graphics/SteamarmLeft.png","./game_graphics/SteamarmLeft1.png","./game_graphics/SteamarmLeft2.png","./game_graphics/SteamarmLeft3.png","./game_graphics/SteamarmLeft4.png"],
		//big thank you to Redwyn and opengameart for creating and supplying these anamations
		currentAnamationFrame:0,
		movementDepth:movementDepth, 
		x:x, 
		Y:Y, 
		transformerX:transformerX, 
		transformerY:transformerY, 
		layerDepth:layerDepth,
		indexMod:indexMod
	};
	return player;
}



var map = [
[makewalls({}),makewalls({}),makewalls({}),makewalls({}),makewalls({}),makewalls({}),makewalls({}),makewalls({}),makewalls({}),makewalls({}),makewalls({}),makewalls({}),makewalls({}),makewalls({}),makewalls({}),makewalls({}),makewalls({}),makewalls({}),makewalls({}),makewalls({}),makewalls({}),makewalls({}),makewalls({}),makewalls({}),makewalls({}),makewalls({}),makewalls({}),makewalls({}),makewalls({}),makewalls({}),makewalls({}),makewalls({}),makewalls({}),makewalls({}),makewalls({}),makewalls({}),makewalls({}),makewalls({}),makewalls({}),makewalls({}),makewalls({}),makewalls({}),makewalls({}),makewalls({}),makewalls({}),makewalls({}),makewalls({}),makewalls({}),makewalls({}),makewalls({}),makewalls({}),makewalls({}),makewalls({}),makewalls({}),makewalls({}),makewalls({}),makewalls({}),makewalls({}),makewalls({}),makewalls({}),makewalls({}),makewalls({}),makewalls({}),makewalls({}),makewalls({}),makewalls({}),makewalls({}),makewalls({}),makewalls({})],
[makewalls({}),0,0,makewalls({}),0,0,0,0,0,0,0,0,0,0,0,makeCloud({}),0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,makewalls({}),makewalls({})],
[makeGround({}),makeGround({}),makeGround({}),0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,makeCloud({}),0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,makewalls({})],
[makeGround({}),makeGround({}),makeGround({}),0,0,0,0,0,0,0,0,0,0,0,0,makeCloud({}),0,0,0,0,0,makeCloud({}),0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,makewalls({})],
[makeGround({}),makeGround({}),makeGround({}),0,0,0,0,0,0,0,0,0,makeCloud({}),0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,makewalls({})],
[makeGround({}),makeGround({}),makeGround({}),0,0,0,0,0,0,0,0,0,0,0,0,makewalls({}),0,0,0,0,0,0,0,0,resetSqure({}),0,makekey({}),0,resetSqure({}),0,0,0,0,0,makeCloud({}),0,0,makeCloud({}),0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,makeGround({})],
[makeGround({}),makeGround({}),makeGround({}),0,resetSqure({}),0,0,0,0,0,0,0,0,0,0,makewalls({}),0,0,0,0,0,0,0,0,0,makeGround({}),makeGround({}),resetSqure({}),0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,makeGround({})],
[makeGround({}),makeGround({}),makeGround({}),0,makeScrewDriver({}),resetSqure({}),0,0,0,0,0,0,0,0,0,makewalls({}),0,0,0,0,0,0,0,0,0,makeCloud({}),0,0,0,0,0,0,makeCloud({}),0,0,0,0,0,0,makeCloud({}),0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,makeGround({})],
[makeGround({}),makeGround({}),makeGround({}),0,makeScrewDriver({}),resetSqure({}),0,0,0,0,0,0,0,0,0,makewalls({}),0,0,0,0,0,0,makeGround({}),makeGround({}),0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,makeGround({})],
[makeGround({}),makeGround({}),makeGround({}),0,makeScrewDriver({}),resetSqure({}),0,0,0,0,0,0,0,0,0,makewalls({}),0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,makeGround({})],
[makeGround({}),makeGround({}),makeGround({}),makePlayer({}),makeScrewDriver({}),resetSqure({}),0,0,0,0,0,0,0,0,0,makewalls({}),makeFreind({}),0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,makeGround({})],
[makeGround({}),makeGround({}),makeGround({}),0,makewalls({}),resetSqure({}),0,0,0,0,0,0,0,resetSqure({}),meetFreind({}),makewalls({}),0,resetSqure({}),0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,makeGround({})],
[makeGround({}),makeGround({}),makeGround({}),makeGround({}),makeGround({}),makeGround({}),makeGround({}),makeGround({}),makeGround({}),makeGround({}),makeGround({}),makeGround({}),makeGround({}),makeGround({}),makeGround({}),makeGround({}),makeGround({}),makeGround({}),makeGround({}),makeGround({}),makeGround({}),makeGround({}),makeGround({}),makeGround({}),makeGround({}),makeGround({}),makeGround({}),makeGround({}),makeGround({}),makeGround({}),makeGround({}),makeGround({}),makeGround({}),makeGround({}),makeGround({}),makeGround({}),makeGround({}),makeGround({}),makeGround({}),makeGround({}),makeGround({}),makeGround({}),makeGround({}),makeGround({}),makeGround({}),makeGround({}),makeGround({}),makeGround({}),makeGround({}),makeGround({}),makeGround({}),makeGround({}),makeGround({}),makeGround({}),makeGround({}),makeGround({}),makeGround({}),makeGround({}),makeGround({}),makeGround({}),makeGround({}),makeGround({}),makeGround({}),makeGround({}),makeGround({}),makeGround({}),makeGround({}),makeGround({}),makeGround({})],
[makeTree({endY:12, endX:7, transformerY:-13*mapDetails.pixleSizeY, movementDepth:1, layerDepth:1}),0,0,0,0,0,0,0,0,makeTree({}),0,makeTree({}),0,makeTree({}),0,makeTree({}),0,makeTree({}),0,makeTree({}),0,makeTree({}),0,makeTree({}),0,makeTree({}),0,makeTree({}),0,makeTree({}),0,makeTree({}),0,makeTree({}),0,makeTree({}),0,makeTree({}),0,makeTree({}),0,makeTree({}),0,makeTree({}),0,makeTree({}),0,makeTree({}),0,makeTree({}),0,makeTree({}),0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
];
