//visual setup

var playerMovement={
	depth:0,
	HTMLColection:0,
	HTMLArray:0,
	XCordenents:0,
	YCordenents:0,
	moveSpeed: 10,
	speed:0,
	fall:0,
	movement: 0,
	mousedownID: -1
};

var doomsdayDetails={
	owner:"turner",
	sabotage:0
}


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
	inventory:{},
	charitor:"",
	walkingAnamations: {
		imageR:["./game_graphics/SteamarmRight.png","./game_graphics/SteamarmRight1.png","./game_graphics/SteamarmRight2.png","./game_graphics/SteamarmRight3.png","./game_graphics/SteamarmRight4.png"],
		imageL:["./game_graphics/SteamarmLeft.png","./game_graphics/SteamarmLeft1.png","./game_graphics/SteamarmLeft2.png","./game_graphics/SteamarmLeft3.png","./game_graphics/SteamarmLeft4.png"]
	}
};

var computerDetails={
	fear:0,
	ethics:0,
	cunning:0,
	kindness:0,
	hope:0,
	inventory:{}
};


