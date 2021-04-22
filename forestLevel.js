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
	indexMod=0,
	odds= 0
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
		odds: odds
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
					playerDetails.inventory.screwDriver = 1;
					screwDriver.ran=1;
				};
			putText("A Screw Driver maybe we should save that for later! try pressing J on it");
		}else{
			computerDetails.inventory.screwDriver = 1;
		}
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
	indexMod=0,
	odds=1
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
		ran:0,
		odds:odds
	};
	freindDialog.interact = function (){
		var player=playerDetails.charitor=="abbie";
		var ais = freindDialog.AI==1;
		if (ais!=player){
			question = "I heard they were planning something big this time";
			var answers = [["How are you feeling", 'fear()', freindDialog.fear , computerDetails.ethics], ["But we are stronger", 'fight()', freindDialog.fight , computerDetails.cunning],["What have you heard", 'theLab()', freindDialog.theLab]];
		
			if (freindDialog.AI != 1){
			
				if (freindDialog.ran == 0){
					freindDialog.X = mapDetails.currentXGrid;
					freindDialog.Y = mapDetails.currentYGrid;
					freindDialog.placement = "mapDetails.map2DArray["+ (mapDetails.currentYGrid-1).toString() +"][" + (mapDetails.currentXGrid-1).toString() +"]";
					putDialog(freindDialog.placement, question, answers);
				}else{
					putText("hello agin");
				}
			}else{
				randomDialog(answer);
			}
		}
	};
	freindDialog.fear = function (){
		if (freindDialog.AI != 1){ 
			putText("We are scared we hope war is over soon");
			freindDialog.endConvo();
		}else{
			computerDetails.fear= modifyBehavour(computerDetails.fear, 4);
		}
	}
	freindDialog.fight = function (){
		if (freindDialog.AI != 1){
			putText("We shall fight till we stand no longer");
			freindDialog.endConvo();
		}else{
			computerDetails.hope= modifyBehavour(computerDetails.hope, 2);
		}
	}
	
	freindDialog.theLab = function (){
		question = "Theres something cooking in that lab ";
		var answers = [["What do you want", 'fear()', freindDialog.fear , computerDetails.cunning], ["But it will be ok we will make it", 'fight()', freindDialog.fight , computerDetails.ethics],["How do you know this", 'screwDriver()', freindDialog.screwDriver]];

		if (freindDialog.AI != 1){
			
			putDialog(freindDialog.placement, question, answers);
		}else{
			randomDialog(answer);
		}
	}
	
	freindDialog.screwDriver = function (){
		if (freindDialog.AI != 1){
			putText("My friend said he snuck into there lab with a screwdriver at the vent ");
			freindDialog.endConvo();
		}
	}
	
	
	freindDialog.endConvo= function(){
		
		for (var i = 0; i < 7; i++) { 
			var YCowards = freindDialog.Y -1 - i;
			var XCowards = freindDialog.X ;
			var wall = mapDetails.map2DArray[YCowards][XCowards];
			wall.colitions = 0;
			freindDialog.ran = 1;
		}
	}
	return freindDialog
};


function makeFrog({
	type='parallax-item',
	endX = 1,
	endY = 2,
	image="./game_graphics/npc_yoga_frog_box_none_variant_frogRed_x1_iconic_png_1354833622.png",
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


function meetFrog({
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
	indexMod=0,
	odds=1
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
		ran:0,
		odds:odds
	};
	freindDialog.interact = function (){
		var player=playerDetails.charitor=="abbie";
		var ais = freindDialog.AI==1;
		if (ais!=player){
			question = "The tides of change are coming my friend ";
			var answers = [["Wit", 'brash()', freindDialog.brash , computerDetails.fear], ["They shall be stoped", 'brash()', freindDialog.brash , computerDetails.cunning],["Your telling me ", 'theSear()', freindDialog.theSear, computerDetails.kindness],["May they be on our side ", 'haste()', freindDialog.haste]];
		
			if (freindDialog.AI != 1){
			
				if (freindDialog.ran == 0){
					freindDialog.X = mapDetails.currentXGrid;
					freindDialog.Y = mapDetails.currentYGrid;
					freindDialog.placement = "mapDetails.map2DArray["+ (mapDetails.currentYGrid-1).toString() +"][" + (mapDetails.currentXGrid-1).toString() +"]";
					putDialog(freindDialog.placement, question, answers);
				}else{
					putText("hello agin");
				}
			}else{
				randomDialog(answer);
			}
		}
	};
	freindDialog.brash = function (){
		if (freindDialog.AI != 1){ 
			putText("Such brash words my friend");
			freindDialog.endConvo();
		}else{
			computerDetails.fear= modifyBehavour(computerDetails.hope, -5);
		}
	}
	
	freindDialog.theSear = function (){
		if (freindDialog.AI != 1){ 
			putText("Ahhh you see the change too ");
			freindDialog.endConvo();
		}else{
			computerDetails.fear= modifyBehavour(computerDetails.ethics, 2);
		}
	}
	
	freindDialog.haste = function (){
		if (freindDialog.AI != 1){ 
			putText("Much haste my good friend");
			freindDialog.endConvo();
		}else{
			computerDetails.fear= modifyBehavour(computerDetails.hope, 2);
		}
	}
	
	
	
	freindDialog.endConvo= function(){
		
		for (var i = 0; i < 7; i++) { 
			var YCowards = freindDialog.Y -1 - i;
			var XCowards = freindDialog.X ;
			var wall = mapDetails.map2DArray[YCowards][XCowards];
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


function travelLevel({
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
	var level = {
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
	level.interact = function (){
		if (level.AI != 1){
			var buttonJ = document.getElementById("J");
			buttonJ.style = "border-color: black";
			var keyElement = document.getElementById("cell-"+mapDetails.currentYGrid+","+mapDetails.currentXGrid); 
			buttonJ.onmousedown=function() {
				var buttonJ = document.getElementById("J");
				buttonJ.style = "border-color: #C1292D;";
				buttonJ.onmousedown=function() {};
				putText("  ");
				loadCyityStart();
			}				
			putText("to go to the cyity press 'J' now ");
		}else{
		}
	};
	return level;
}


var forest = [
[makewalls({}),makewalls({}),makewalls({}),makewalls({}),makewalls({}),makewalls({}),makewalls({}),makewalls({}),makewalls({}),makewalls({}),makewalls({}),makewalls({}),makewalls({}),makewalls({}),makewalls({}),makewalls({}),makewalls({}),makewalls({}),makewalls({}),makewalls({}),makewalls({}),makewalls({}),makewalls({}),makewalls({}),makewalls({}),makewalls({}),makewalls({}),makewalls({}),makewalls({}),makewalls({}),makewalls({}),makewalls({}),makewalls({}),makewalls({}),makewalls({}),makewalls({}),makewalls({}),makewalls({}),makewalls({}),makewalls({}),makewalls({}),makewalls({}),makewalls({}),makewalls({}),makewalls({}),makewalls({}),makewalls({}),makewalls({}),makewalls({}),makewalls({}),makewalls({}),makewalls({}),makewalls({}),makewalls({}),makewalls({}),makewalls({}),makewalls({}),makewalls({}),makewalls({}),makewalls({}),makewalls({}),makewalls({}),makewalls({}),makewalls({}),makewalls({}),makewalls({}),makewalls({}),makewalls({}),makewalls({})],
[makewalls({}),0,0,makewalls({}),0,0,0,0,0,0,0,0,0,0,0,makeCloud({}),0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,makewalls({}),makewalls({})],
[makeGround({}),makeGround({}),makeGround({}),0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,makeCloud({}),0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,makewalls({})],
[makeGround({}),makeGround({}),makeGround({}),0,0,0,0,0,0,0,0,0,0,0,0,makeCloud({}),0,0,0,0,0,makeCloud({}),0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,makewalls({})],
[makeGround({}),makeGround({}),makeGround({}),0,0,0,0,0,0,0,0,0,makeCloud({}),0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,makewalls({})],
[makeGround({}),makeGround({}),makeGround({}),0,0,0,0,0,0,0,0,0,0,0,0,makewalls({}),0,0,0,0,0,0,0,0,resetSqure({}),0,makekey({}),0,resetSqure({}),0,0,0,0,0,makeCloud({}),0,0,makeCloud({}),0,0,0,0,makewalls({}),0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,makeGround({})],
[makeGround({}),makeGround({}),makeGround({}),0,resetSqure({}),0,0,0,0,0,0,0,0,0,0,makewalls({}),0,0,0,0,0,0,0,0,0,makeGround({}),makeGround({}),resetSqure({}),0,0,0,0,0,0,0,0,0,0,0,0,0,0,makewalls({}),0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,makeGround({})],
[makeGround({}),makeGround({}),makeGround({}),0,makeScrewDriver({}),resetSqure({}),0,0,0,0,0,0,0,0,0,makewalls({}),0,0,0,0,0,0,0,0,0,makeCloud({}),0,0,0,0,0,0,makeCloud({}),0,0,0,0,0,0,makeCloud({}),0,0,makewalls({}),0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,makeGround({})],
[makeGround({}),makeGround({}),makeGround({}),0,makeScrewDriver({}),resetSqure({}),0,0,0,0,0,0,0,0,0,makewalls({}),makeFrog({}),0,0,0,0,0,makeGround({}),makeGround({}),0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,makewalls({}),0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,makeGround({})],
[makeGround({}),makeGround({}),makeGround({}),0,makeScrewDriver({odds:0.2}),resetSqure({}),0,0,0,0,0,0,0,0,0,makewalls({}),0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,makewalls({}),0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,makeGround({})],
[makeGround({}),makeGround({}),makeGround({}),makePlayer({}),makeScrewDriver({}),resetSqure({}),0,0,0,0,0,0,0,0,0,makewalls({}),0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,makewalls({}),makeFreind({}),0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,makeGround({})],
[makeGround({}),makeGround({}),makeGround({}),0,makewalls({}),resetSqure({}),0,0,0,0,0,0,0,resetSqure({}),meetFrog({}),makewalls({}),0,resetSqure({}),0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,meetFreind({}),makewalls({}),0,resetSqure({}),0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,resetSqure({}),travelLevel({}),makeGround({})],
[makeGround({}),makeGround({}),makeGround({}),makeGround({}),makeGround({}),makeGround({}),makeGround({}),makeGround({}),makeGround({}),makeGround({}),makeGround({}),makeGround({}),makeGround({}),makeGround({}),makeGround({}),makeGround({}),makeGround({}),makeGround({}),makeGround({}),makeGround({}),makeGround({}),makeGround({}),makeGround({}),makeGround({}),makeGround({}),makeGround({}),makeGround({}),makeGround({}),makeGround({}),makeGround({}),makeGround({}),makeGround({}),makeGround({}),makeGround({}),makeGround({}),makeGround({}),makeGround({}),makeGround({}),makeGround({}),makeGround({}),makeGround({}),makeGround({}),makeGround({}),makeGround({}),makeGround({}),makeGround({}),makeGround({}),makeGround({}),makeGround({}),makeGround({}),makeGround({}),makeGround({}),makeGround({}),makeGround({}),makeGround({}),makeGround({}),makeGround({}),makeGround({}),makeGround({}),makeGround({}),makeGround({}),makeGround({}),makeGround({}),makeGround({}),makeGround({}),makeGround({}),makeGround({}),makeGround({}),makeGround({})],
[makeTree({endY:12, endX:7, transformerY:-13*mapDetails.pixleSizeY, movementDepth:1, layerDepth:1}),0,0,0,0,0,0,0,0,makeTree({}),0,makeTree({}),0,makeTree({}),0,makeTree({}),0,makeTree({}),0,makeTree({}),0,makeTree({}),0,makeTree({}),0,makeTree({}),0,makeTree({}),0,makeTree({}),0,makeTree({}),0,makeTree({}),0,makeTree({}),0,makeTree({}),0,makeTree({}),0,makeTree({}),0,makeTree({}),0,makeTree({}),0,makeTree({}),0,makeTree({}),0,makeTree({}),0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
];


function loadForestStart(){
	playerMovement.movement=0;
	mapDetails.changingX=0;
	loadMap(forest);
	movingSetup();
	move(-5*mapDetails.pixleSizeX);
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