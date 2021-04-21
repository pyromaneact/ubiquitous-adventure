

//function to add an image to the visual grid
function populate(gridX, gridY, object){
	endX =object.endX + gridX;
	endY =object.endY + gridY;
	
	var elument = document.getElementById("cell-"+gridY+","+ gridX);
	elument.dataset.depth = object.movementDepth;
	elument.dataset.transformerX = object.transformerX;
	elument.dataset.transformerY = object.transformerY;
	elument.dataset.zIndex = (1000 * object.layerDepth) + object.indexMod;
	elument.style.zIndex = elument.dataset.zIndex;
	elument.innerHTML = '<img src="'+ object.image +'">';
	if (endX - gridX > 1 || endY - gridY > 1){
		elument.style = 'grid-area: ' + gridY + ' / ' + gridX + ' / ' + endY + ' / ' + endX + ';';
		
		var removeY = endY - 1;
		while (removeY >= gridY){
			var removeX = endX	- 1;
			while (removeX >= gridX && (removeX != gridX || removeY != gridY)){
				var remove = document.getElementById("cell-" + removeY + ","+ removeX);
				if (remove !=null){
					remove.parentNode.removeChild(remove);
				}
				removeX = removeX - 1;
			}
			removeY = removeY - 1;
		}
	}
}

//takes 2darray and creates a html grid then populaates it with images 
function loadMap(map){
	mapDetails.map2DArray=map
	var gameGrid = document.getElementById("gameGrid");
	var YLength = mapDetails.map2DArray.length;
	var XLength = mapDetails.map2DArray[0].length;
	
	gameGrid.style= "display: grid;grid-template-columns: repeat(" + XLength + ", "+mapDetails.pixleSizeX+"px);grid-template-rows: repeat(" + YLength + ", "+mapDetails.pixleSizeY+"px);grid-column-gap: 0px;grid-row-gap: 0px;";
	var htmlGrid = "";
	for (let YPosition = 1; YPosition <= YLength; YPosition++) {
		for (let XPosition = 1; XPosition <= XLength; XPosition++){
			if (mapDetails.map2DArray[YPosition-1][XPosition-1].type=== undefined){
				htmlGrid = htmlGrid + '<div class="parallax-item" id="cell-'+YPosition+','+XPosition+'"></div>';
			}
			else{
				if(mapDetails.map2DArray[YPosition-1][XPosition-1].type=='player'){
					mapDetails.map2DArray[YPosition-1][XPosition-1].imageR = playerDetails.walkingAnamations.imageR
					mapDetails.map2DArray[YPosition-1][XPosition-1].imageL = playerDetails.walkingAnamations.imageL
				}
				htmlGrid = htmlGrid + '<div class='+mapDetails.map2DArray[YPosition-1][XPosition-1].type+' id="cell-'+YPosition+','+XPosition+'"></div>';
			}
		}
	}

	gameGrid.innerHTML = htmlGrid;


	for (let YPosition = 0; YPosition < YLength; YPosition++) {
		for (let XPosition = 0; XPosition < XLength; XPosition++){
			if (mapDetails.map2DArray[YPosition][XPosition] !=0){
				if (mapDetails.map2DArray[YPosition][XPosition].length==undefined){
					populate(XPosition + 1,YPosition + 1,mapDetails.map2DArray[YPosition][XPosition])
				}
			}
		}
	}
}

function AILoadMap(map){
	var YLength = map.length;
	var XLength =  map[0].length;
	var interaction = [];
	for (let XPosition = 0; XPosition < XLength; XPosition++){
		map.forEach(function(item){
			if (item[XPosition].interactions == 1){
				interaction.push(item[XPosition]);
				interaction[interaction.length - 1].AI=1;
			}
		})
	}
	return interaction;
}

function AIRunMap(map){
	var interactions = AILoadMap(map);
	interactions.forEach(function(interaction){
		if (Math.random() < interaction.odds){
			interaction.interact();
		}
		interaction.AI = 0;
	});
	
}



//gameplay/movement setup

//function that takes each moving item and moves it by change pixles
function move(change){
	mapDetails.changingX = mapDetails.changingX+change;
	mapDetails.movingItemsArray.forEach(function(item, counter){
		var depth = parseFloat(item.dataset.depth, 10);
		var transformerX = parseFloat(item.dataset.transformerX, 10);
		var transformerY = parseFloat(item.dataset.transformerY, 10);
		item.style.transform ='translate( '+ (mapDetails.changingX + transformerX)*depth +'px, ' + transformerY + 'px)';
		item.style.zIndex = item.dataset.zIndex;
	});
}

//a function that causes each element to be collected and changed to each elemnt is at the right hight
function movingSetup(){
	mapDetails.movingItemsHTMLColection = document.getElementsByClassName('parallax-item');
	mapDetails.movingItemsArray= Array.from(mapDetails.movingItemsHTMLColection);

	playerMovement.HTMLColection = document.getElementsByClassName('player');
	playerMovement.HTMLArray= Array.from(playerMovement.HTMLColection);
	playerMovement.depth = parseFloat(playerMovement.HTMLArray[0].dataset.depth, 10);
	playerMovement.HTMLArray[0].style.zIndex = playerMovement.HTMLArray[0].dataset.zIndex;
	
	var positionCounter=5;
	var playerYGrid = '';
	var playerXGrid = '';
	while (isNaN(playerMovement.HTMLArray[0].id[positionCounter] * 1) == false){
		playerYGrid = playerYGrid + playerMovement.HTMLArray[0].id[positionCounter];	
		positionCounter = positionCounter + 1;
	}
	playerMovement.YCordenents	= playerYGrid * 1;
	positionCounter = positionCounter + 1;
	while (isNaN(playerMovement.HTMLArray[0].id[positionCounter] * 1) == false){
		playerXGrid = playerXGrid + playerMovement.HTMLArray[0].id[positionCounter];	
		positionCounter = positionCounter + 1;
	}
	playerMovement.XCordenents = playerXGrid * 1;

	hanndleKeyboredClick;
	move(0);
	
	//window.addEventListener("keypress",hanndleKeyboredClick);
	window.addEventListener('keydown', hanndleKeyboredClick);
	document.addEventListener("mouseup", mouseUp);
	window.addEventListener('keyup',keyUp);
}

//a function to jump or playerMovement.fall when necsessery
function falling(){
	var map = mapDetails.map2DArray;
	if (playerMovement.speed<10){
		playerMovement.speed = playerMovement.speed+0.5;
	}
	mapDetails.changingY = mapDetails.changingY+playerMovement.speed;
	mapDetails.currentYGrid=Math.floor(((mapDetails.changingY)*playerMovement.depth / mapDetails.pixleSizeY))+ mapDetails.checker + playerMovement.YCordenents;
	
	if (playerMovement.speed >= 0){
		if ((map[mapDetails.currentYGrid][mapDetails.currentXGrid-1].layerDepth != playerMovement.HTMLArray[0].dataset.depth && map[mapDetails.currentYGrid][mapDetails.currentXGrid-1].colitions != 1) || map[mapDetails.currentYGrid][mapDetails.currentXGrid-1].type == map[playerMovement.YCordenents-1][playerMovement.XCordenents-1].type) { 
			mapDetails.checker = 1;
			playerMovement.HTMLArray[0].style.transform ='translate( 0px, '+ mapDetails.changingY +'px)';
			window.requestAnimationFrame(falling);
		}else{
			if (map[mapDetails.currentYGrid][mapDetails.currentXGrid-1].colitions != 1)
			{
				window.requestAnimationFrame(falling);
			}else{
				playerMovement.speed = 0;
				necesseryShift = (( mapDetails.currentYGrid - playerMovement.YCordenents - 1) * mapDetails.pixleSizeY);
				mapDetails.changingY = necesseryShift;
				
				playerMovement.HTMLArray[0].style.transform ='translate( 0px, '+mapDetails.changingY +'px)';
			}
	}
	}else{
		colitionPoint = map[mapDetails.currentYGrid - 1][mapDetails.currentXGrid-1]
		if (colitionPoint.layerDepth != playerMovement.HTMLArray[0].dataset.depth || colitionPoint.colitions != 1 || colitionPoint.type == map[playerMovement.YCordenents-1][playerMovement.XCordenents-1].type) {		
			playerMovement.HTMLArray[0].style.transform ='translate( 0px, '+mapDetails.changingY+'px)';
			window.requestAnimationFrame(falling);
		}else{
			
			playerMovement.speed = 0;
			window.requestAnimationFrame(falling);
		}
	}
}
 


//a function to insure that the player gose right up to an object before stoping
function colide(){
	necesseryShift = (playerMovement.movement/playerMovement.moveSpeed)* ((playerMovement.XCordenents - mapDetails.currentXGrid - 1)*mapDetails.pixleSizeX);
		if (necesseryShift > 0){
			necesseryShift = (playerMovement.movement/playerMovement.moveSpeed)* (( mapDetails.currentXGrid - playerMovement.XCordenents - 1)*mapDetails.pixleSizeX);
			mapDetails.changingX = necesseryShift;
		}
		else{
			mapDetails.changingX = necesseryShift;
		}
		move(0);
}


//a set of functons to say what to do when a key was presed


//code modified from https://stackoverflow.com/questions/15505272/javascript-while-mousedown on 30/03/21
var hanndleKeyboredClick = function(click){
	//movment(click.keyCode);
	if (click.keyCode == 87){
		movment(click.keyCode)
	}else if(playerMovement.mousedownID==-1 && click.keyCode != 87){
		playerMovement.mousedownID = setInterval(function() {movment(click.keyCode)}, 50);;
	}
}

//functions to allow you to hold down the A and D button
function hanndleButtonDClick(){
	if(playerMovement.mousedownID==-1 ){
		playerMovement.mousedownID = setInterval(function() {movment(68)}, 50);
	}
}

function hanndleButtonAClick(){
	if(playerMovement.mousedownID==-1){
		playerMovement.mousedownID = setInterval(function() {movment(65)}, 50);
	}
}

//functions to let stop the movement
function mouseUp() {
   if(playerMovement.mousedownID!=-1) {  //Only stop if exists
     clearInterval(playerMovement.mousedownID);
     playerMovement.mousedownID=-1;
   }
}

function keyUp(click) {
	//console.log(click.keyCode)
	if (click.keyCode != 87){
		mouseUp()
	}
}

//cycle threw the movemnt anamation
function movmentAnamation(images, currentAnamationFrame){
	
	playerMovement.HTMLArray[0].innerHTML="<img src=" + images[Math.floor(currentAnamationFrame)] + ">";
		if (currentAnamationFrame < images.length - 1){
			currentAnamationFrame = currentAnamationFrame+0.25;
		}else{
			currentAnamationFrame = 0;
		}
	return currentAnamationFrame;
}


//function to do side to side movement calculations
function sideMovement(keyCode){
	
	movementX = 0;
	
	var playerObject = mapDetails.map2DArray[playerMovement.YCordenents-1][playerMovement.XCordenents-1];
	
	
	
	
	
	//set ib nessesery varables for runing movement functions
	if (keyCode == 68) {
		playerMovement.aceleration = 1;
		playerMovement.movement= playerMovement.moveSpeed * -1;
		mapDetails.checker = 1;
		movementX = 1;
		
		playerObject.currentAnamationFrame = movmentAnamation(playerObject.imageR, playerObject.currentAnamationFrame);
		
		
		
	}else if (keyCode == 65) {
		playerMovement.aceleration = 1;
		playerMovement.movement= playerMovement.moveSpeed;
		mapDetails.checker = 0;
		movementX = 1;
		
		playerObject.currentAnamationFrame = movmentAnamation(playerObject.imageL, playerObject.currentAnamationFrame);
	}
	
	
	var playerXpx = playerMovement.XCordenents * mapDetails.pixleSizeX;
	mapDetails.currentXGrid = Math.floor(((mapDetails.changingX + playerMovement.movement)*playerMovement.depth *-1 / mapDetails.pixleSizeX))+mapDetails.checker + playerMovement.XCordenents;
	var oldXcowards = mapDetails.currentXGrid;
	mapDetails.currentYGrid = Math.floor(((mapDetails.changingY) / mapDetails.pixleSizeY))+mapDetails.checkerY + playerMovement.YCordenents;
	
	//movement functions
	//check what to do when the next element is reached e.g ignore it interact with it or colide with it
	var nextElement = mapDetails.map2DArray[mapDetails.currentYGrid-1][mapDetails.currentXGrid-1];
	if (nextElement != 0){	
		if ((nextElement.layerDepth != playerMovement.depth) || mapDetails.currentXGrid== playerMovement.XCordenents ){
			move(playerMovement.movement);		
		}else{
			if (nextElement.colitions == 1){
				colide()
			}else if (nextElement.interactions == 1){
				nextElement.interact();
				move(playerMovement.movement);
			}else{
				move(playerMovement.movement);
			}
		}
	}else{
		move(playerMovement.movement);
	}
	
	//function to allow players to be able to slightly step of platform without falling for better gameplay 
	
	var newCowanrds=Math.floor(((mapDetails.changingX + playerMovement.movement)*playerMovement.depth *-1 / mapDetails.pixleSizeX))+mapDetails.checker + playerMovement.XCordenents;
	if (oldXcowards != newCowanrds && playerMovement.speed == 0){
		if (playerMovement.fall<2){
			playerMovement.fall=playerMovement.fall + 1;
		}
		else{
			window.requestAnimationFrame(falling);
			playerMovement.fall=0		
		}
		
	}
}


function movment(keyCode){
	
	mapDetails.currentXGrid = Math.floor(((mapDetails.changingX + playerMovement.movement)*playerMovement.depth *-1 / mapDetails.pixleSizeX))+mapDetails.checker + playerMovement.XCordenents;
	mapDetails.currentYGrid = Math.floor(((mapDetails.changingY) / mapDetails.pixleSizeY))+mapDetails.checkerY + playerMovement.YCordenents;
	mapDetails.checker = 0;
	mapDetails.checkerY = 1;
	playerMovement.movement=0;
	
	
	if (keyCode == 68 || keyCode == 65){
		sideMovement(keyCode);
	}else if (keyCode == 87){
		mapDetails.checker = 0;
		if (playerMovement.speed == 0){	
			playerMovement.speed = -10;
			window.requestAnimationFrame(falling);
		}
	}else if (keyCode == 74){
		document.getElementById("J").onmousedown();
	}else if (keyCode == 75){
		document.getElementById("K").onmousedown();
	}else if (keyCode == 32){
		document.getElementById("space").onmousedown();
	}
}


//a function to display dialog with no reply options
function putText(story, placement=0){
	console.log(placement);
	var storyBox = document.getElementById("textBox");
	if (story.length <= 49){
		storyBox.innerHTML = story;
		
	}else{
		var end = story.slice(0, 47).lastIndexOf(" ");
		
		storyBox.innerHTML = story.slice(0, end) + `<p id="space" onmousedown="putText('` + story.slice(end + 1, story.length) + `',1)"> &#9660</p>`;
	}
	if (placement ==0){
		document.getElementsByClassName("answers")[0].innerHTML = "";
	}
}

//a function to display dialog with reply options
function putDialog(placement, question, answers){
	putText(question, 1);
	var updateHTML = "";
	answers.forEach(function(answer){
		updateHTML = updateHTML + '<button id="answerBox1" onmousedown='+ placement + "." + answer[1]+';>' + answer[0] + '</button>';
	})
	document.getElementsByClassName("answers")[0].innerHTML = updateHTML;
}