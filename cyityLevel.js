//optinal prameters code (later removed but link might be usfull for clean up) addapted from this stackOverflow thred: https://stackoverflow.com/questions/12797118/how-can-i-declare-optional-function-parameters-in-javascript?fbclid=IwAR2XMH66g0JjiFVgJuBMWBnzsN5agbqAoiahNb1mKIP2a73ONfZ8CJEtzAQ
	


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

function makeSkyscraper1({
	type='parallax-item',
	endX=2,
	endY=11,
	image="./game_graphics/skyscraperYellow.png",
	movementDepth=0.5, 
	transformerX=0, 
	transformerY=-9*mapDetails.pixleSizeY,
	colitions=0,	
	layerDepth=0.5,
	indexMod=0
}){ 
	var skyscraper = {
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
	return skyscraper;
}

function makeSkyscraper2({
	type='parallax-item',
	endX=2,
	endY=11,
	image="./game_graphics/skyscraperPurpple.png",
	movementDepth=0.5, 
	transformerX=0, 
	transformerY=-9*mapDetails.pixleSizeY,
	colitions=0,	
	layerDepth=0.5,
	indexMod=0
}){ 
	var skyscraper = {
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
	return skyscraper;
}

function makeGround({
	type='parallax-item',
	endX=0,
	endY=0,
	image="./game_graphics/road.png",
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

function makeWidget({
	type='parallax-item',
	endX = 1,
	endY = 2,
	image="./game_graphics/npc_widget_variant_widgetTin_x1_move_png_1354833436.png",
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


widgetinfo={
	password:0,
	orders:0,
	key:0
}
function meetWidgetAbbie({
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
		odds:odds,
		password:0,
		orders:0,
		key:1
	};
	freindDialog.interact = function (){
		var player=playerDetails.charitor=="abbie";
		var ais = freindDialog.AI==1;
		if (ais!=player){
			question = "Halt what are you doing in our teroroey, you wil not stop us ";
			var answers = [["What are you", 'aWhat()', freindDialog.aWhat , computerDetails.hope], ["What do you do", 'helper()', freindDialog.helper]];
		
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
				randomDialog(answers);
			}
		}
	};
	freindDialog.aWhat = function (){ 
		question = "im a tin widget";
		var answers = [["but like What are you", 'aWhat()', freindDialog.aWhat , computerDetails.hope], ["What do you do", 'helper()', freindDialog.helper]];
		if (freindDialog.AI != 1){
			
			putDialog(freindDialog.placement, question, answers);
		}else{
			randomDialog(answers);
		}
	}
	freindDialog.helper = function (){ 
		question = "I am a robotic helper im here to help ";
		var answers = [["Well what is being planed", 'planed1()', freindDialog.planed1 , computerDetails.hope], ["Can i get a tour", 'tour()', freindDialog.tour , computerDetails.kindness],["What is up with this place", 'question()', freindDialog.question]];
		if (freindDialog.AI != 1){
			
			putDialog(freindDialog.placement, question, answers);
		}else{
			randomDialog(answers);
		}
	}
	
	freindDialog.tour = function (){ 
		if (freindDialog.AI != 1){
			putText("Just go stragit on and you will see all its a 2d plane");
			freindDialog.endConvo();
		}
	}
	
	freindDialog.question = function (){ 
		if (freindDialog.AI != 1){
			putText("Ahhh the golden question step right a head and see");
			freindDialog.endConvo();
		}
	}
	
	freindDialog.planed1 = function (){ 
		if (widgetinfo.key == 1){
			question = "i need a key to revel that";
			
			var answers = [["ohh one second", 'end()', freindDialog.end , computerDetails.fear],["is there another option", 'planed2()', freindDialog.planed2]];
			if (playerDetails.inventory.key == 1){
				answers.unshift(["you mean this one", 'keys()', freindDialog.keys , computerDetails.cunning]);
			}
			
			if (freindDialog.AI != 1){
			
				putDialog(freindDialog.placement, question, answers);
			}else{
				randomDialog(answers);
			}
		}else{
			freindDialog.planed2();
		}
	}
	
	freindDialog.planed2 = function (){ 
		if (widgetinfo.password != 1){
			question = "a  password will revel that";
			
			var answers = [["the tides of change", 'keys()', freindDialog.keys , computerDetails.cunning],["the tides of change", 'failed()', freindDialog.failed() , computerDetails.cunning]["the dirty scum", 'failed()', freindDialog.failed]];
			
			if (freindDialog.AI != 1){
			
				putDialog(freindDialog.placement, question, answers);
			}else{
				randomDialog(answers);
			}
		}else{
			freindDialog.planed3();
		}
	}
	
	freindDialog.planed3 = function (){ 
		if (widgetinfo.password == 1){
			question = "a  password will revel that";
			
			var answers = [["the tides of change", 'keys()', freindDialog.keys , computerDetails.cunning],["the tides of change", 'failed()', freindDialog.failed() , computerDetails.cunning]["the dirty scum", 'failed()', freindDialog.failed]];
			
			if (freindDialog.AI != 1){
			
				putDialog(freindDialog.placement, question, answers);
			}else{
				randomDialog(answers);
			}
		}else{
			freindDialog.command();
		}
	}
	
	
	freindDialog.command = function (){ 
		if (freindDialog.AI != 1){
			if (widgetinfo.orders == 1){
				putText("oh my bad on you go you see we are making a nuke in the lab we can kill evryone with it");
				freindDialog.endConvo();
			}else{
				putText("i cant tell you that nice try tho");
				
				freindDialog.endConvo();
			}
		}
	}
	
	
	freindDialog.failed = function (){
		if (freindDialog.AI != 1){
			question ="hahah no. GAURDS";
		var answers = [["ok", 'fail()']]
		}
	}
	
	freindDialog.fail = function (){
		endGame();
	}
	
	
	freindDialog.end = function (){
		if (freindDialog.AI != 1){
			putText("");
		}
	}
	
	freindDialog.keys = function (){
		if (freindDialog.AI != 1){
			putText("oh my bad on you go you see we are making a nuke in the lab we can kill evryone with it");
			freindDialog.endConvo();
		}
	}
	
	
	freindDialog.endConvo= function(){
		
		for (var i = 0; i < 7; i++) { 
			var YCowards = freindDialog.Y -1 - i;
			var XCowards = freindDialog.X ;
			var wall = mapDetails.map2DArray[YCowards][XCowards];
			wall.colitions = 0;
			var wall = mapDetails.map2DArray[YCowards][XCowards+2];
			wall.colitions = 0;
			freindDialog.ran = 1;
		}
	}
	return freindDialog
};

function meetWidgetTurrner({
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
		odds:odds,
		password:0,
		orders:0,
		key:0
	};
	freindDialog.interact = function (){
		var player=playerDetails.charitor=="turner";
		var ais = freindDialog.AI==1;
		if (ais!=player){
			var question = "hello sir ";
			var answers = [["hi widget to do list?", 'list()', freindDialog.list ]];
		
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
				randomDialog(answers);
			}
		}
	};
	freindDialog.list = function (){ 
		question = "You must set the security for the plan";
		var answers = [["use the key", 'keys()', freindDialog.keys , computerDetails.hope], ["use password", 'Passwords()', freindDialog.Passwords, computerDetails.ethics], ["Revel to no one", 'noOne()', freindDialog.noOne]];
		if (freindDialog.AI != 1){
			
			putDialog(freindDialog.placement, question, answers);
		}else{
			randomDialog(answers);
		}
	}
	
	freindDialog.keys = function (){ 
		question = "are you sure we cant find that key?";
		var answers = [["yes im sure", 'keyConfirm()', freindDialog.keyConfirm , computerDetails.hope], ["oh no not that", 'list()', freindDialog.list]];
		if (freindDialog.AI != 1){
			
			putDialog(freindDialog.placement, question, answers);
		}else{
			randomDialog(answers);
		}
	}
	
	freindDialog.keyConfirm = function (){ 
		widgetinfo.key=1;
		if (freindDialog.AI != 1){
			putText("good choice");
			freindDialog.endConvo();
			endGame();
		}
	}
	
	freindDialog.Passwords = function (){
		widgetinfo.password=1;
		if (freindDialog.AI != 1){
			putText("good choice");
			freindDialog.endConvo();
			endGame();
		}
	}
	
	freindDialog.noOne = function (){
		if (freindDialog.AI != 1){
			putText("if your sure");
			freindDialog.endConvo();
			endGame();
		}
	}
	
	freindDialog.endConvo= function(){
		
		for (var i = 0; i < 7; i++) { 
			var YCowards = freindDialog.Y -1 - i;
			var XCowards = freindDialog.X ;
			console.log(XCowards+","+YCowards);
			var wall = mapDetails.map2DArray[YCowards][XCowards-2];
			wall.colitions = 0;
			console.log(wall);
			var wall = mapDetails.map2DArray[YCowards][XCowards-4];
			console.log(wall);
			wall.colitions = 0;
			freindDialog.ran = 1;
		}
	}
	
	
	return freindDialog
};

function makeDoor({
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
		odds:odds,
		
	};
	freindDialog.interact = function (){
		var player=playerDetails.charitor=="abbie";
		var ais = freindDialog.AI==1;
		if (ais!=player){
			question = "an entrenct into the lab will you take it ";
			var answers = [["yes enter", 'enter()', freindDialog.enter ]];
		
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
				randomDialog(answers);
			}
		}
	};
	
	freindDialog.enter = function (){
		question = "infedell what are you wanting";
		var answers = [["what you are doing to my pepole", 'answer()', freindDialog.answer, computerDetails.fear],["Move or preper to hurt", 'fight()', freindDialog.fight, computerDetails.hope],["Could i get a tour", 'no()', freindDialog.no]];
		
		if (freindDialog.AI != 1){
			
			
			
			putDialog(freindDialog.placement, question, answers);
		}else{
			randomDialog(answers);
		}
	};
	
	
	freindDialog.answer = function (){
		if (Math.random() < computerDetails.fear){
			question = "What is nessesery ";
		}else{
			question = "Weve made a bomb and you will never stop us";
		}
		var answers = [["what", 'fight()', freindDialog.fight, computerDetails.cunning],["nooo you didnt thats not true", 'fight()', freindDialog.fight]];
		
		if (freindDialog.AI != 1){
			
			
			
			putDialog(freindDialog.placement, question, answers);
		}else{
			randomDialog(answers);
		}
	};
	
	freindDialog.no = function (){
		
		question = "no";
		var answers = [["ok", 'fight()', freindDialog.fight]];
		
		if (freindDialog.AI != 1){
			
			
			
			putDialog(freindDialog.placement, question, answers);
		}else{
			randomDialog(answers);
		}
	};
	
	freindDialog.fight = function (){
		question = "the guards come at you ready to attack";
		var answers = [["fight", 'attack()', freindDialog.attack, computerDetails.cunning],["run", 'run()', freindDialog.run]];
		
		if (freindDialog.AI != 1){
			
			
			
			putDialog(freindDialog.placement, question, answers);
		}else{
			randomDialog(answers);
		}
	};
	
	freindDialog.run = function (){
		if (freindDialog.AI != 1){
			putText("you escaped from the guards what now?");
		}
	}
	
	
	freindDialog.attack = function (){
		
		if (Math.random() < 0.3){
			if (freindDialog.AI != 1){
				question = "you loose you can only watch as the guards bind you up";
				answer = [["ok", 'loose()']]
				putDialog(freindDialog.placement, question, answer);
			}
			
		}else{
			question = "you win you can move forward to the next room";
			answer = [["ok", 'win()']]
			if (freindDialog.AI != 1){
				putDialog(freindDialog.placement, question, answer);
			}else{
				randomDialog(answer);
			}
		}
	}
	freindDialog.loose = function (){
		endGame();
	}
	freindDialog.win = function (){
		question = "there infront of you a doomsday devise that could end the war for everyone but at what cost";
		var answers = [["sabotash it ", 'sabotash()', freindDialog.sabotash, computerDetails.cunning],["leave it and confront turner", 'turner()', freindDialog.turner, computerDetails.hope],["steal it", 'steal()', freindDialog.steal]];
		
		if (freindDialog.AI != 1){
			
			
			
			putDialog(freindDialog.placement, question, answers);
		}else{
			randomDialog(answers);
		}
	};
	
	freindDialog.sabotash = function (){
		doomsdayDetails.sabotage=1;
		if (freindDialog.AI != 1){
			putText("you sabotash the wepon so it will destroy the host area");
			endGame();
		}
	};
	freindDialog.turner = function (){
		if (freindDialog.AI != 1){
			putText("you leave to go find turner");
			endGame();
		}
	};
	freindDialog.steal = function (){
		doomsdayDetails.owner="abbie";
		if (freindDialog.AI != 1){
			putText("you steal the wepon it is yours to do with how you wish");
			endGame();
		}
	};
	
	
	
	return freindDialog;
}

function makevent({
	type='parallax-item',
	endX=0,
	endY=0,
	image="https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Transparent_square.svg/768px-Transparent_square.svg.png",
	movementDepth=1, 
	colitions=0,
	da=1, 	
	transformerX=0, 
	transformerY=0, 
	layerDepth=1,
	indexMod=0,
	odds=0.8,
	interactions=1
}){
	var vent = {
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
	
	vent.interact = function (){
		var player=playerDetails.charitor=="abbie";
		var ais = vent.AI==1;
		if (ais!=player){
			vent.X = mapDetails.currentXGrid;
			vent.Y = mapDetails.currentYGrid;
			vent.placement = "mapDetails.map2DArray["+ (mapDetails.currentYGrid-1).toString() +"][" + (mapDetails.currentXGrid-1).toString() +"]";
			if (playerDetails.inventory.screwDriver == 1){
				question = "a vent mabe we should try use the screwDriver on it";
			
				var answers = [["open it", 'opening()', vent.opening]];
				
				if (vent.AI != 1){
			
					putDialog(vent.placement, question, answers);
				}else{
				randomDialog(answers);
				}
			}
		}
	}
	
	vent.ignore = function (){}
	
	
	vent.opening = function (){
		question = "there infront of you a doomsday devise that could end the war for everyone but at what cost";
		var answers = [["sabotash it ", 'sabotash()', vent.sabotash, computerDetails.cunning],["leave it and confront turner", 'turner()', vent.turner, computerDetails.hope],["steal it", 'steal()', vent.steal]];
		
		if (vent.AI != 1){
			
			
			
			putDialog(vent.placement, question, answers);
		}else{
			randomDialog(answers);
		}
	};
	
	vent.sabotash = function (){
		putText("you sabotash the wepon so it will destroy the host area");
		doomsdayDetails.sabotage=1;
		endGame();
	};
	vent.turner = function (){
		putText("you leave to go find turner");
		endGame();
	};
	vent.steal = function (){
		putText("you steal the wepon it is yours to do with how you wish");
		doomsdayDetails.owner="abbie";
		endGame();
	};
	
	return vent;
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
				loadForestEnd();
			}				
			putText("to go to the forest press 'J' now ");
		}else{
		}
	};
	return level;
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



var cyity = [
[makewalls({}),makewalls({}),makewalls({}),makewalls({}),makewalls({}),makewalls({}),makewalls({}),makewalls({}),makewalls({}),makewalls({}),makewalls({}),makewalls({}),makewalls({}),makewalls({}),makewalls({}),makewalls({}),makewalls({}),makewalls({}),makewalls({}),makewalls({}),makewalls({}),makewalls({}),makewalls({}),makewalls({}),makewalls({}),makewalls({}),makewalls({}),makewalls({}),makewalls({}),makewalls({}),makewalls({}),makewalls({}),makewalls({}),makewalls({}),makewalls({}),makewalls({}),makewalls({}),makewalls({}),makewalls({}),makewalls({}),makewalls({}),makewalls({}),makewalls({}),makewalls({}),makewalls({}),makewalls({}),makewalls({}),makewalls({}),makewalls({}),makewalls({}),makewalls({}),makewalls({}),makewalls({}),makewalls({}),makewalls({}),makewalls({}),makewalls({}),makewalls({}),makewalls({}),makewalls({}),makewalls({}),makewalls({}),makewalls({}),makewalls({}),makewalls({}),makewalls({}),makewalls({}),makewalls({}),makewalls({})],
[makewalls({}),makewalls({}),makewalls({}),0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,makewalls({}),makewalls({}),makewalls({})],
[makewalls({}),makewalls({}),0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,makewalls({}),makewalls({})],
[makewalls({}),0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,makewalls({})],
[makewalls({}),0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,makewalls({})],
[makewalls({}),0,0,0,0,0,0,0,0,0,0,0,makewalls({}),0,makewalls({}),0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,makewalls({})],
[makewalls({}),0,0,0,0,0,0,0,0,0,0,0,makewalls({}),0,makewalls({}),0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,makewalls({})],
[makewalls({}),0,0,0,0,0,0,0,0,0,0,0,makewalls({}),0,makewalls({}),0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,makewalls({})],
[makeGround({}),0,0,0,0,0,0,0,0,0,0,0,makewalls({}),0,makewalls({}),0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,makewalls({})],
[makeGround({}),0,0,0,0,0,0,0,0,0,0,0,makewalls({}),0,makewalls({}),0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,makewalls({})],
[makeGround({}),0,0,makePlayer({}),0,0,0,0,0,0,0,0,makewalls({}),makeWidget({}),makewalls({}),0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,makewalls({})],
[makeGround({}),travelLevel({}),0,0,0,0,0,0,0,0,resetSqure({}),meetWidgetAbbie({}),makewalls({}),0,makewalls({}),meetWidgetTurrner({}),resetSqure({}),0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,resetSqure({}),0,makevent({}),0,resetSqure({}),0,0,0,0,0,0,0,resetSqure({}),0,makeDoor({}),0,resetSqure({}),0,0,0,0,0,0,0,0,0,0,makewalls({})],
[makeGround({}),makeGround({}),makeGround({}),makeGround({}),makeGround({}),makeGround({}),makeGround({}),makeGround({}),makeGround({}),makeGround({}),makeGround({}),makeGround({}),makeGround({}),makeGround({}),makeGround({}),makeGround({}),makeGround({}),makeGround({}),makeGround({}),makeGround({}),makeGround({}),makeGround({}),makeGround({}),makeGround({}),makeGround({}),makeGround({}),makeGround({}),makeGround({}),makeGround({}),makeGround({}),makeGround({}),makeGround({}),makeGround({}),makeGround({}),makeGround({}),makeGround({}),makeGround({}),makeGround({}),makeGround({}),makeGround({}),makeGround({}),makeGround({}),makeGround({}),makeGround({}),makeGround({}),makeGround({}),makeGround({}),makeGround({}),makeGround({}),makeGround({}),makeGround({}),makeGround({}),makeGround({}),makeGround({}),makeGround({}),makeGround({}),makeGround({}),makeGround({}),makeGround({}),makeGround({}),makeGround({}),makeGround({}),makeGround({}),makeGround({}),makeGround({}),makeGround({}),makeGround({}),makeGround({}),makeGround({})],
[makeSkyscraper1({}),0,makeSkyscraper2({}),0,makeSkyscraper1({}),0,makeSkyscraper2({}),0,makeSkyscraper1({}),0,makeSkyscraper2({}),0,makeSkyscraper1({}),0,makeSkyscraper2({}),0,makeSkyscraper1({}),0,makeSkyscraper2({}),0,makeSkyscraper1({}),0,makeSkyscraper2({}),0,makeSkyscraper1({}),0,makeSkyscraper2({}),0,makeSkyscraper1({}),0,makeSkyscraper2({}),0,makeSkyscraper1({}),0,makeSkyscraper2({}),0,makeSkyscraper1({}),0,makeSkyscraper2({}),0,makeSkyscraper1({}),0,makeSkyscraper2({}),0,makeSkyscraper1({}),0,makeSkyscraper2({}),0,makeSkyscraper1({}),0,makeSkyscraper2({}),0,makeSkyscraper1({}),0,makeSkyscraper2({}),0,makeSkyscraper1({}),0,makeSkyscraper2({}),0,makeSkyscraper1({}),0,makeSkyscraper2({}),0,makeSkyscraper1({}),0,makeSkyscraper2({}),0,0],
];


function loadCyityStart(){
	playerMovement.movement=0;
	mapDetails.changingX=0;
	loadMap(cyity);
	movingSetup();
	move(-2*mapDetails.pixleSizeX);
	putText("");
}

function loadCyityEnd(){
	playerMovement.movement=0;
	mapDetails.changingX=0;
	loadMap(cyity);
	movingSetup();
	move(-58*mapDetails.pixleSizeX);
	putText("");
}