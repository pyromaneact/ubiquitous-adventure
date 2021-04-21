function makeChoise1({
	type = 'player',
	endX = 4,
	endY = 10,
	image = "./game_graphics/SteamarmFront.png",
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
		//big thank you to Redwyn and opengameart for creating and supplying these anamations
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

function makeChoise2({
	type = 'player',
	endX = 4,
	endY = 10,
	image = "./game_graphics/MonocleFront.png",
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
		//big thank you to Redwyn and opengameart for creating and supplying these anamations
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

function makeDesision({
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
}){var desision = {
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
	desision.abbie = function (){
		playerDetails.walkingAnamations.imageR=["./game_graphics/SteamarmRight.png","./game_graphics/SteamarmRight1.png","./game_graphics/SteamarmRight2.png","./game_graphics/SteamarmRight3.png","./game_graphics/SteamarmRight4.png"];
		playerDetails.walkingAnamations.imageL=["./game_graphics/SteamarmLeft.png","./game_graphics/SteamarmLeft1.png","./game_graphics/SteamarmLeft2.png","./game_graphics/SteamarmLeft3.png","./game_graphics/SteamarmLeft4.png"];
		loadForestStart();
	}
	desision.turner = function (){
		forest[10][8]=forest[10][3];
		forest[10][3]=0;
		cyity[10][8]=cyity[10][3];
		cyity[10][3]=0;
		playerDetails.walkingAnamations.imageR=["./game_graphics/MonocleRight.png","./game_graphics/MonocleRight1.png","./game_graphics/MonocleRight2.png","./game_graphics/MonocleRight3.png","./game_graphics/MonocleRight4.png"];
		playerDetails.walkingAnamations.imageL=["./game_graphics/MonocleLeft.png","./game_graphics/MonocleLeft1.png","./game_graphics/MonocleLeft2.png","./game_graphics/MonocleLeft3.png","./game_graphics/MonocleLeft4.png"];
		loadCyityEnd();
	}
	return desision
}


var choisemap = [
	[makeDesision({}), 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, makeChoise1({}), 0, 0, 0, 0, 0, makeChoise2({}), 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
]

function choseChar(){
	window.addEventListener('keydown', hanndleKeyboredClick);
	document.addEventListener("mouseup", mouseUp);
	window.addEventListener('keyup',keyUp);
	putDialog("mapDetails.map2DArray[0][0]", "press space to see the next sentance     choose your charitor", [["Abbie", 'abbie()'], ["Turner", 'turner()']]);
}