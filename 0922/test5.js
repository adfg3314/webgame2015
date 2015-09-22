window.addEventListener("load", drawScreen, false);
window.addEventListener("keydown", onkeydown, false);
window.addEventListener("keyup", onkeyup, false);

var background = new Image();
background.src = "bg.jpg";

var player = new Image();
player.src = "player.png";

var strkeyEventValue = "none";
var strkeyEventType = "none";

function onkeydown(e) {
		strkeyEventType = e.type;
		if(e.keyCode)code = e.keyCode;
		strkeyEventValue = code;
		drawScreen();
	}

	function onkeyup(e) {
		strkeyEventType = e.type;
		if(e.keyCode)code = e.keyCode;
		strkeyEventValue = code;
		//strkeyEventValue = String.fromCharCode(code);
		drawScreen();
	}

function drawScreen() {
	var theCanvas = document.getElementById("GameCanvas");
	var Context = theCanvas.getContext("2d");

	Context.drawImage(background,0,0);
	Context.drawImage(player,350,250,120,120);
	
	Context.fillStlye="#000";
	Context.font='22px nanumgothic';
	Context.textBaseline="top"
	Context.fillText("입력된 키는 : " + strkeyEventValue,5,5);
	Context.fillText("키 입력 상태는 : " + strkeyEventType,5,30);
	
	
}
