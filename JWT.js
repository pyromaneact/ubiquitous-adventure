// taken from https://www.jonathan-petitcolas.com/2014/11/27/creating-json-web-token-in-javascript.html
//with some help from https://attacomsian.com/blog/javascript-base64-encode-decode to remove node.js reliance


function makeToken(data, secret){
	var header = {
	"alg": "HS256",
	"typ": "JWT"
	};

	var stringifiedHeader = btoa(JSON.stringify(header));
	var encodedHeader = base64url(stringifiedHeader);


	var stringifiedData = btoa(JSON.stringify(data));
	var encodedData = base64url(stringifiedData);

	var token = encodedHeader + "." + encodedData;
	
	//var secret = "My very confidential secret!";

	var signature = btoa(token, secret);
	signature = base64url(signature);

	var signedToken = token + "." + signature;

	console.log(signedToken);
	return signedToken;
}

function base64url(data) {
  // Remove padding equal characters
  encodedData = data.replace(/=+$/, '');

  // Replace characters according to base64url specifications
  encodedData = encodedData.replace(/\+/g, '-');
  encodedData = encodedData.replace(/\//g, '_');

  return encodedData;
}

function saveGame(){
	if (playerDetails.charitor!=""){
		var date = new Date();
		var currentTime = date.getTime();
		var time = currentTime + 3600 * 1000; 
		var array=[]
		array[0] = makeToken(playerMovement, "secret")
		array[1] = makeToken(doomsdayDetails, "secret")
		array[2] = makeToken(mapDetails, "secret")
		array[3] = makeToken(playerDetails, "secret")
		array[4] = makeToken(computerDetails, "secret")
		
		document.cookie = "game_playerMovement="+ array[0] +"; expires"+ time +"; path=/";	
		document.cookie = "game_doomsdayDetails="+ array[1] +"; expires="+ time +"; path=/";	
		document.cookie = "game_mapDetails="+ array[2] +"; expires="+ time +"; path=/";	
		document.cookie = "game_playerDetails="+ array[3] +"; expires="+ time +"; path=/";	
		document.cookie = "game_computerDetails="+ array[4] +"; expires="+ time +"; path=/";
		
		
		
		var copyText = document.getElementById("myInput");
		alert("Copied the text: " + copyText.value);
		copyText.innerHTML="";
		
		
		alert("['"+array[0]+"','"+array[1]+"','"+array[2]+"','"+array[3]+"','"+array[4]+"']");
	}else{
			alert("unable to save game at this point");
	}
	alert("to load a game please type loadGame(*codeHere*) into the comand prompt")
}

function parseJwt (token) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
};


function loadGame(array){
	playerMovement = parseJwt (array[0]);
	doomsdayDetails = parseJwt (array[1]);
	mapDetails = parseJwt (array[2]);
	playerDetails = parseJwt (array[3]);
	computerDetails = parseJwt (array[4]);
	
	//loadMap (mapDetails.map2DArray);
	//movingSetup();
	//move(0);
}