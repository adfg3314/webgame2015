window.addEventListener("load", drawScreen, false);
window.addEventListener("mouse_down", onMouseDown, false);
window.addEventListener("mouse_up", onMouseUp, false);
window.addEventListener("mouse_move", onMouseMove, false);


var background = new Image();
background.src = "bg.jpg";

var player = new Image();
player.src = "player.png";
player.addEventListener("load", drawScreen, false);

var mouseClicked = false;
intMouse_X = 480;
intMouse_Y = 300;
var strMouseStatus = "준비중";

function onMouseUp(event){
    strMouseStatus = "클릭 끝 !";
    
    mouseClicked = false;
    intMouse_X = 480;
    intMouse_Y = 300;
    
    drawScreen();
    
}
function onMouseDown(event){
    strMouseStatus = "클릭!";
    var theCanvas = document.getElementById("GameCanvas");
    
    mouseClicked = true;
    intMouse_X = event.clientX - theCanvas.offsetLeft-42;
    intMouse_Y = event.clientY - theCanvas.offsetTop-50;
     drawScreen();
}
function onMouseMove(event){
    strMouseStatus = "이동중 !";
    
}

function drawScreen() {
	var theCanvas = document.getElementById("GameCanvas");
	var Context = theCanvas.getContext("2d");

	Context.drawImage(background,0,0);
	Context.drawImage(player,350,250,120,120);
	
	Context.fillStlye="#000";
	Context.font='22px nanumgothic';
	Context.textBaseline="top"
	Context.fillText("발생한 마우스 이벤트는 : " + strMouseStatus,5,5);
	Context.fillText("마우스 좌표 : " + strkeyEventType,5,30);
	 drawScreen();
	
}
