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
	moveSpeed: 10
};
var mapDetails={
	map2DArray: 0,
	movingItemsHTMLColection: 0,
	movingItemsArray: 0,
	changingX:0,
	changingY:0,
	pixleSizeX: 32,
	pixleSizeY:23,
	currentXGrid:0,
	currentYGrid:0
};

//a set of variables to controle visual elements 
var cloud={type:'parallax-item',
	endX:2,endY:2,image:"https://www.onlygfx.com/wp-content/uploads/2016/10/watercolor-cloud-1-1024x664.png",movementDepth:0.4, transformerX:0, transformerY:40, layerDepth:0.4};
var tree = {type:'parallax-item',endX:2,endY:3,image:"https://www.onlygfx.com/wp-content/uploads/2017/06/watercolor-tree-5.png",movementDepth:0.7, transformerX:40, transformerY:0, layerDepth:0.7};
var ground = {type:'parallax-item',endX:0,endY:0,image:"https://lh3.googleusercontent.com/aO8HFLBG1vc9hMFzqH4S6xmKKTqkUE3ewboN3tDtlUwmK0Rh3qDbMS0XzWRCOgjCDLnDrK0H77efxhw7AXucDA=s400",movementDepth:1, colitions:1, transformerX:0, transformerY:0, layerDepth:1};
var player = {type:'player',endX:1,endY:2,image:"https://images.onlinelabels.com/images/clip-art/10binary/square%20spiral-131341.png",movementDepth:1, x:1, Y:11, transformerX:0, transformerY:0, layerDepth:1};

var map = [
[cloud,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,cloud,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,cloud,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,cloud,0,0,0,0,0,cloud,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,cloud,0,0,0,0,0,0,0,0,0,0,0,0,0,0,cloud,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[ground,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,cloud,0,0,cloud,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,ground],
[ground,0,0,0,0,0,0,0,0,0,0,0,cloud,0,0,0,0,0,0,cloud,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,ground],
[ground,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,cloud,0,0,0,0,0,0,cloud,0,0,0,0,0,0,cloud,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,ground],
[ground,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,ground],
[ground,0,0,0,0,0,0,0,0,0,tree,0,tree,0,tree,0,tree,0,tree,0,tree,0,tree,0,tree,0,tree,0,tree,0,tree,0,tree,0,tree,0,tree,0,tree,0,tree,0,tree,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,ground],
[ground,player,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,ground],
[ground,0,0,0,ground,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,ground],
[ground,ground,ground,ground,ground,ground,ground,ground,ground,ground,ground,ground,ground,ground,ground,ground,ground,ground,ground,ground,ground,ground,ground,ground,ground,ground,ground,ground,ground,ground,ground,ground,ground,ground,ground,ground,ground,ground,ground,ground,ground,ground,ground,ground,ground,ground,ground,ground,ground,ground,ground,ground,ground,ground,ground,ground,ground,ground,ground,ground]
];


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

//a function to jump or fall when necsessery
function falling(){
	if (speed<10){
		speed = speed+0.5;
	}
	mapDetails.changingY = mapDetails.changingY+speed;
	mapDetails.currentYGrid=Math.floor(((mapDetails.changingY)*playerMovement.depth / mapDetails.pixleSizeY))+ checker + playerMovement.YCordenents;
	//console.log(mapDetails.currentXGrid-1);
	
	if (speed >= 0){
	if (map[mapDetails.currentYGrid][mapDetails.currentXGrid-1].layerDepth != playerMovement.HTMLArray[0].dataset.depth || map[mapDetails.currentYGrid][mapDetails.currentXGrid-1].type == map[playerMovement.YCordenents-1][playerMovement.XCordenents-1].type) { 
		checker = 1;
		playerMovement.HTMLArray[0].style.transform ='translate( 0px, '+ mapDetails.changingY +'px)';
		window.requestAnimationFrame(falling);
	}else{
		speed = 0;
		necesseryShift = (( mapDetails.currentYGrid - playerMovement.YCordenents - 1) * mapDetails.pixleSizeY);
		//console.log("(", mapDetails.currentYGrid, " - ", playerMovement.YCordenents, "- 1) *", mapDetails.pixleSizeY, "=", necesseryShift)
		mapDetails.changingY = necesseryShift;
		
		playerMovement.HTMLArray[0].style.transform ='translate( 0px, '+mapDetails.changingY +'px)';
	}
	}else{
		if ((map[mapDetails.currentYGrid][mapDetails.currentXGrid-1].layerDepth != playerMovement.HTMLArray[0].dataset.depth) || map[mapDetails.currentYGrid][mapDetails.currentXGrid-1].type == map[playerMovement.YCordenents-1][playerMovement.XCordenents-1].type) {		
			playerMovement.HTMLArray[0].style.transform ='translate( 0px, '+mapDetails.changingY+'px)';
			window.requestAnimationFrame(falling);
		}else{speed = 0;}
	}
}
 
//a functing of what to do when a mouse was presed
var movement= 0;
	var checker = 0;
	var checkerY = 0;
	var speed = 0;
	var fall=0;
var hanndleKeyboredClick = function(click){
	checker = 0;
	movement= 0;
	checkerY = 1;
	movementX = 0;
	
	if (click.keyCode == 100) {
		movement= playerMovement.moveSpeed * -1;
		checker = 1;
		movementX = 1;
	}else if (click.keyCode == 97) {
		movement= playerMovement.moveSpeed;
		checker = 0;
		movementX = 1;
	}
	
	
	//Math.floor(((mapDetails.changingY)*playerMovement.depth *-1 / mapDetails.pixleSizeY))+checker + playerMovement.YCordenents;
	var playerXpx = playerMovement.XCordenents * mapDetails.pixleSizeX;
	mapDetails.currentXGrid = Math.floor(((mapDetails.changingX + movement)*playerMovement.depth *-1 / mapDetails.pixleSizeX))+checker + playerMovement.XCordenents;
	var oldXcowards = mapDetails.currentXGrid;
	mapDetails.currentYGrid = Math.floor(((mapDetails.changingY) / mapDetails.pixleSizeY))+checkerY + playerMovement.YCordenents;
	//console.log(mapDetails.currentYGrid, mapDetails.currentXGrid)
	//console.log(mapDetails.changingX % mapDetails.pixleSizeY, mapDetails.changingX, "%" ,mapDetails.pixleSizeY);
	if (click.keyCode == 119){
	checker = 0;
	if (speed == 0){	
		speed = -10;
		window.requestAnimationFrame(falling);
	}
	}
	
	//document.getElementById("cell-"+mapDetails.currentYGrid+","+mapDetails.currentXGrid) != null
	if (map[mapDetails.currentYGrid-1][mapDetails.currentXGrid-1] != 0){	
		if ((map[mapDetails.currentYGrid-1][mapDetails.currentXGrid-1].layerDepth != playerMovement.depth) || mapDetails.currentXGrid== playerMovement.XCordenents){
			move(movement);
			
		}else{
			necesseryShift = (movement/playerMovement.moveSpeed)* ((playerMovement.XCordenents - mapDetails.currentXGrid - 1)*mapDetails.pixleSizeX);
			if (necesseryShift > 0){
				necesseryShift = (movement/playerMovement.moveSpeed)* (( mapDetails.currentXGrid - playerMovement.XCordenents - 1)*mapDetails.pixleSizeX);
				mapDetails.changingX = necesseryShift;
			}
			else{
				mapDetails.changingX = necesseryShift;
			}
			move(0);
		}
	}else{
		move(movement);
	}
	//mapDetails.currentXGrid = Math.floor(((mapDetails.changingX + movement)*playerMovement.depth *-1 / mapDetails.pixleSizeX))+checker + playerMovement.XCordenents;
	var newCowanrds=Math.floor(((mapDetails.changingX + movement)*playerMovement.depth *-1 / mapDetails.pixleSizeX))+checker + playerMovement.XCordenents;
	if (oldXcowards != newCowanrds){
		if (fall==0){
		fall=1;
		}
		else{
			window.requestAnimationFrame(falling);
			fall=0		
		}
		
	}
	
	
}

loadMap(map);
movingSetup();

