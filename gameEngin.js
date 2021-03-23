

//function to add an image to the visual grid
function populate(gridX,gridY,{endX = 0,endY = 0,image = 0, movementDepth = 0, object = 0, transformX = 0, transformY = 0, layerDepth=0}){
	//optinal prameters code addapted from this stackOverflow thred: https://stackoverflow.com/questions/12797118/how-can-i-declare-optional-function-parameters-in-javascript?fbclid=IwAR2XMH66g0JjiFVgJuBMWBnzsN5agbqAoiahNb1mKIP2a73ONfZ8CJEtzAQ
	image = image || object.image;
	movementDepth = movementDepth || object.movementDepth;
	endX = endX || object.endX + gridX;
	endY = endY || object.endY + gridY;
	transformX = transformX || object.transformerX;
	transformY = transformY || object.transformerY;
	layerDepth = layerDepth || object.layerDepth;
	
	var elument = document.getElementById("cell-"+gridY+","+ gridX);
	elument.dataset.depth = movementDepth;
	elument.dataset.transformerX = transformX;
	elument.dataset.transformerY = transformY;
	elument.style.zIndex = 1000 * layerDepth;
	elument.innerHTML = '<img src="'+ image +'">';
	if (endX - gridX > 1 || endY - gridY > 1){
		elument.style = 'grid-area: ' + gridY + ' / ' + gridX + ' / ' + endY + ' / ' + endX + ';';
		
		var removeY = endY - 1;
		while (removeY >= gridY){
			var removeX = endX	- 1;
			while (removeX >= gridX && (removeX != gridX || removeY != gridY)){
				var remove = document.getElementById("cell-" + removeY + ","+ removeX);
				remove.parentNode.removeChild(remove);
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
			}else{
				htmlGrid = htmlGrid + '<div class='+mapDetails.map2DArray[YPosition-1][XPosition-1].type+' id="cell-'+YPosition+','+XPosition+'"></div>';
			}
		}
	}

	gameGrid.innerHTML = htmlGrid;


	for (let YPosition = 0; YPosition < YLength; YPosition++) {
		for (let XPosition = 0; XPosition < XLength; XPosition++){
			if (mapDetails.map2DArray[YPosition][XPosition] !=0){
				if (mapDetails.map2DArray[YPosition][XPosition].length==undefined){
					populate(XPosition + 1,YPosition + 1,{object:mapDetails.map2DArray[YPosition][XPosition]})
				}
			}
		}
	}
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
	});
}

//a function that causes each element to be collected and changed to each elemnt is at the right hight
function movingSetup(){
	mapDetails.movingItemsHTMLColection = document.getElementsByClassName('parallax-item');
	mapDetails.movingItemsArray= Array.from(mapDetails.movingItemsHTMLColection);

	playerMovement.HTMLColection = document.getElementsByClassName('player');
	playerMovement.HTMLArray= Array.from(playerMovement.HTMLColection);
	playerMovement.depth = parseFloat(playerMovement.HTMLArray[0].dataset.depth, 10);
	playerMovement.HTMLArray[0].style.zIndex = 1000*playerMovement.depth;
	
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
	window.addEventListener("keypress",hanndleKeyboredClick);
}

//a function to jump or playerMovement.fall when necsessery
function falling(){
	if (playerMovement.speed<10){
		playerMovement.speed = playerMovement.speed+0.5;
	}
	mapDetails.changingY = mapDetails.changingY+playerMovement.speed;
	mapDetails.currentYGrid=Math.floor(((mapDetails.changingY)*playerMovement.depth / mapDetails.pixleSizeY))+ mapDetails.checker + playerMovement.YCordenents;
	//console.log(mapDetails.currentXGrid-1);
	
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
			//console.log("(", mapDetails.currentYGrid, " - ", playerMovement.YCordenents, "- 1) *", mapDetails.pixleSizeY, "=", necesseryShift)
			mapDetails.changingY = necesseryShift;
		
			playerMovement.HTMLArray[0].style.transform ='translate( 0px, '+mapDetails.changingY +'px)';
		}
	}
	}else{
		if ((map[mapDetails.currentYGrid-1][mapDetails.currentXGrid-1].layerDepth != playerMovement.HTMLArray[0].dataset.depth && map[mapDetails.currentYGrid][mapDetails.currentXGrid-1].colitions != 1) || map[mapDetails.currentYGrid][mapDetails.currentXGrid-1].type == map[playerMovement.YCordenents-1][playerMovement.XCordenents-1].type) {		
			playerMovement.HTMLArray[0].style.transform ='translate( 0px, '+mapDetails.changingY+'px)';
			window.requestAnimationFrame(falling);
		}else{
			playerMovement.speed = 0;
			window.requestAnimationFrame(falling);
		}
	}
}
 
//a functing of what to do when a mouse was presed
	
var hanndleKeyboredClick = function(click){
	movment(click.keyCode);
}
var hanndleButtonDClick = function(){
	movment(100);
}

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

function movment(keyCode){
	mapDetails.checker = 0;
	playerMovement.movement= 0;
	mapDetails.checkerY = 1;
	movementX = 0;
	
	if (keyCode == 100) {
		playerMovement.movement= playerMovement.moveSpeed * -1;
		mapDetails.checker = 1;
		movementX = 1;
	}else if (keyCode == 97) {
		playerMovement.movement= playerMovement.moveSpeed;
		mapDetails.checker = 0;
		movementX = 1;
	}
	
	
	//Math.floor(((mapDetails.changingY)*playerMovement.depth *-1 / mapDetails.pixleSizeY))+mapDetails.checker + playerMovement.YCordenents;
	var playerXpx = playerMovement.XCordenents * mapDetails.pixleSizeX;
	mapDetails.currentXGrid = Math.floor(((mapDetails.changingX + playerMovement.movement)*playerMovement.depth *-1 / mapDetails.pixleSizeX))+mapDetails.checker + playerMovement.XCordenents;
	var oldXcowards = mapDetails.currentXGrid;
	mapDetails.currentYGrid = Math.floor(((mapDetails.changingY) / mapDetails.pixleSizeY))+mapDetails.checkerY + playerMovement.YCordenents;
	//console.log(mapDetails.currentYGrid, mapDetails.currentXGrid)
	//console.log(mapDetails.changingX % mapDetails.pixleSizeY, mapDetails.changingX, "%" ,mapDetails.pixleSizeY);
	if (keyCode == 119){
	mapDetails.checker = 0;
	if (playerMovement.speed == 0){	
		playerMovement.speed = -10;
		window.requestAnimationFrame(falling);
	}
	}
	
	
	
	//document.getElementById("cell-"+mapDetails.currentYGrid+","+mapDetails.currentXGrid) != null
	var nextElement = map[mapDetails.currentYGrid-1][mapDetails.currentXGrid-1];
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
	//mapDetails.currentXGrid = Math.floor(((mapDetails.changingX + playerMovement.movement)*playerMovement.depth *-1 / mapDetails.pixleSizeX))+mapDetails.checker + playerMovement.XCordenents;
	var newCowanrds=Math.floor(((mapDetails.changingX + playerMovement.movement)*playerMovement.depth *-1 / mapDetails.pixleSizeX))+mapDetails.checker + playerMovement.XCordenents;
	if (oldXcowards != newCowanrds){
		if (playerMovement.fall==0){
		playerMovement.fall=1;
		}
		else{
			window.requestAnimationFrame(falling);
			playerMovement.fall=0		
		}
		
	}
	
	
}

function putText(story){
	var storyBox = document.getElementById("textBox");
	storyBox.innerHTML = story;
}