//optinal prameters code (later removed but link might be usfull for clean up) addapted from this stackOverflow thred: https://stackoverflow.com/questions/12797118/how-can-i-declare-optional-function-parameters-in-javascript?fbclid=IwAR2XMH66g0JjiFVgJuBMWBnzsN5agbqAoiahNb1mKIP2a73ONfZ8CJEtzAQ


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

function makeflag({
	type='parallax-item',
	endX=1,
	endY=2,
	image="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Flag_icon_orange_4.svg/1200px-Flag_icon_orange_4.svg.png",
	movementDepth=1, 
	colitions=0,
	interactions=1, 	
	transformerX=40, 
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
		odds: 0.8
	};
	key.interact = function (){
		if (key.AI != 1){
			if (key.ran!=1){
				var buttonJ = document.getElementById("J");
				buttonJ.style = "border-color: black";
				var keyElement = document.getElementById("cell-"+mapDetails.currentYGrid+","+mapDetails.currentXGrid); 
				buttonJ.onmousedown=function() {
					key.image= '<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Transparent_square.svg/768px-Transparent_square.svg.png">'
					keyElement.innerHTML = key.image;
					var buttonJ = document.getElementById("J");
					buttonJ.style = "border-color: #C1292D;";
					buttonJ.onmousedown=function() {};
					putText("  ");
					playerDetails.inventory.key = 1; 
					key.ran=1;
				};
				putText("freahersctf{javascriptFunctions}");
			}
		}else{
			computerDetails.inventory.key = 1; 
		}
	};
	return key;
}

function meetwall({
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
		odds: 0.8
	};
	key.interact = function (){
		if (key.AI != 1){
			if (key.ran!=1){
				var buttonJ = document.getElementById("J");
				buttonJ.style = "border-color: black";
				var keyElement = document.getElementById("cell-"+mapDetails.currentYGrid+","+mapDetails.currentXGrid); 
				buttonJ.onmousedown=function() {
					key.image= '<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Transparent_square.svg/768px-Transparent_square.svg.png">'
					keyElement.innerHTML = key.image;
					var buttonJ = document.getElementById("J");
					buttonJ.style = "border-color: #C1292D;";
					buttonJ.onmousedown=function() {};
					putText("  ");
					playerDetails.inventory.key = 1; 
					key.ran=1;
				};
				alert("freahersctf{javascriptFunctions}");
			}
		}else{
			computerDetails.inventory.key = 1; 
		}
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

function makePlayer({
	type = 'player',
	endX = 1,
	endY = 2,
	image = playerDetails.walkingAnamations.imageR[0],
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
		imageR:playerDetails.walkingAnamations.imageR,
		imageL:playerDetails.walkingAnamations.imageL,
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




var forest = [
[makeGround({}),makewalls({}),makewalls({}),makewalls({}),makewalls({}),makewalls({}),makewalls({}),makewalls({}),makewalls({}),makewalls({}),makewalls({}),makeGround({}),makewalls({}),makewalls({}),makewalls({}),makewalls({}),makewalls({}),makewalls({}),makewalls({}),makewalls({}),makewalls({}),makewalls({}),makewalls({}),makewalls({})],
[makeGround({}),0,0,0,0,0,0,0,0,0,0,makeGround({}),0,0,0,0,0,0,0,0,0,0,0,0],
[makeGround({}),makeCloud({}),0,0,0,0,0,0,0,0,0,makeGround({}),0,0,0,0,0,0,0,0,0,0,0,0],
[makeGround({}),0,0,0,0,makeCloud({}),0,0,0,0,0,makeGround({}),0,0,0,0,0,0,0,0,0,0,0,0],
[makeGround({}),0,0,makeCloud({}),0,0,0,0,0,0,0,makeGround({}),0,0,0,0,0,0,0,0,0,0,0,0],
[makeGround({}),0,0,0,0,0,0,0,0,0,0,makeGround({}),0,0,0,0,0,0,0,0,0,0,0,0],
[makeGround({}),0,0,0,0,0,0,0,makeCloud({}),0,0,makeGround({}),0,0,0,0,0,0,0,0,0,0,0,0],
[makeGround({}),0,0,0,makeCloud({}),0,0,0,0,0,0,makeGround({}),0,0,0,0,0,0,0,0,0,0,0,0],
[makeGround({}),0,0,0,0,0,0,0,0,0,0,makeGround({}),0,0,0,0,0,0,0,0,0,0,0,0],
[makeGround({}),0,0,0,0,0,0,0,0,0,0,makeGround({}),0,0,0,0,0,0,0,0,0,0,0,0],
[makeGround({}),makePlayer({}),0,0,0,0,0,0,0,0,0,makeGround({}),makeflag({}),0,0,0,0,0,0,0,0,0,0,0],
[makeGround({}),0,0,0,0,0,0,0,0,0,0,makeGround({}),0,meetwall({}),0,0,0,0,0,0,0,0,0,0],
[makeGround({}),makeGround({}),makeGround({}),makeGround({}),makeGround({}),makeGround({}),makeGround({}),makeGround({}),makeGround({}),makeGround({}),makeGround({}),makeGround({}),makeGround({}),makeGround({}),makeGround({}),makeGround({}),makeGround({}),makeGround({}),makeGround({}),makeGround({}),makeGround({}),makeGround({}),makeGround({}),makeGround({})],
[makeTree({}),0,makeTree({}),0,makeTree({}),0,makeTree({}),0,makeTree({}),0,makeTree({}),0,makeTree({}),0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
];


function loadForestStart(){
	playerMovement.movement=0;
	mapDetails.changingX=0;
	loadMap(forest);
	movingSetup();
	//move(-5*mapDetails.pixleSizeX);
	putText("");
}

function loadForestEnd(){
	playerMovement.movement=0;
	mapDetails.changingX=0;
	loadMap(forest);
	movingSetup();
	move(-64*mapDetails.pixleSizeX);
	putText("");
}
