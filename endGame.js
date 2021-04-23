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
	
	desision.itIs = function (){
		question = "oh but it is";
		answer = [["ok", 'endAbbie()']]
		putDialog("mapDetails.map2DArray[0][0]", question, answer);
	}
	
	
	desision.cute = function (){
		question = "Yeah it is almost cute";
		answer = [["I get that a lot ;)", 'flirt()'], ["Don't even lie you were scared ", 'scared()'],["Hey fuck you", 'fu()']]
		putDialog("mapDetails.map2DArray[0][0]", question, answer);

	}
	
	desision.flirt = function (){
		desision.endAbbie()
	}
	
	desision.scared = function (){
		desision.endAbbie()
	}
	
	desision.fu = function (){
		desision.endAbbie();
	}
	
	desision.what = function (){
		question = "Know what ";
		answer = [["That i have the bomb", 'gotIt()'], ["ve made some modfications to your plan ", 'mods()'],["That the real bomb is the friends we made along the way ", 'realWinner()']]
		putDialog("mapDetails.map2DArray[0][0]", question, answer);
	}
	
	desision.gotIt = function (){desision.endAbbie()}
	desision.mods = function (){
		question = "Oh yeah we will see about that";
		answer = [["ok", 'endAbbie()']]
		putDialog("mapDetails.map2DArray[0][0]", question, answer);
	}
	desision.realWinner = function (){
		putText("you know what you win ");
	}
	
	desision.forr = function (){
		question = "For what ";
		answer = [["Giving me a chance to save my friends ", 'friends()'], ["Showing just a bit of mercy ", 'mercy()'],["Letting me tell you to go to hell", 'hell()']]
		putDialog("mapDetails.map2DArray[0][0]", question, answer);
	}
	
	desision.friends = function (){
		desision.endAbbie();
	}
	desision.mercy = function (){
		desision.endAbbie();
	}
	desision.hell = function (){
		desision.endAbbie();
	}
	
	desision.endAbbie = function (){
		if (doomsdayDetails.owner=="abbie"){
			question = "will you lanch the nuke?";
			answer = [["yes", 'lanchAbbie()'], ["no", 'dontLanch()']]
			putDialog("mapDetails.map2DArray[0][0]", question, answer);
		}else{
			 if (Math.random() < computerDetails.kindness){
				 desision.dontLanch();
			 }else{
				 desision.lanchTurrner();
			 }
			 
		}
		
	}
	
	desision.dontLanch = function (){
		putText("you both make eye contacact as the device is lowered and in this moment you know war is over, we will coexsist for a while longer");
	}
	
	desision.lanchAbbie = function (){
		if (doomsdayDetails.sabotage==0){
			putText("the weppon lanches and you see the weppon shoot off and land on the cyity and and it is instantly flattend completly distroyed. abbie wonders was this worth it? or is this how he learned to stop worrying and love the bomb");
		}else{
			putText("he weppon lanches and see Turrner smile as it shoots off into the forest, he lagufs as he says that it was abiee who killed them and yet him who has won");
		}
	}
	
	desision.lanchTurrner = function (){
		if (doomsdayDetails.sabotage==0){
			putText("the weppon lanches and you see the weppon shoot off and land on the forest Abiee is crushed and Turner is left to marvel at what he has done");
		}else{
			putText("the weppon lanches and Turnners face turns from joy to disbelefe as the weppon flattens the cyity he is more defeted than he has ever been and it shows");
		}
	}
	
	return desision
}


var endmap = [
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

function endGame(){
	loadMap(endmap);
	window.addEventListener('keydown', hanndleKeyboredClick);
	document.addEventListener("mouseup", mouseUp);
	window.addEventListener('keyup',keyUp);
	question = "Ill admit it was a valent effort almost had me worried";
	answer = [["Its not over yet ", 'itIs()'], ["Yeah I had to try ", 'cute()'],["Oh you don't know do you  ", 'what()'],["Thank you", 'forr()']]
	putDialog("mapDetails.map2DArray[0][0]", question, answer);

	
}