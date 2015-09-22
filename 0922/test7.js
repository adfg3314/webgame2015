window.addEventListener("load", drawScreen, false);
window.addEventListener("keydown", onkeydown, false);
window.addEventListener("keyup", onkeyup, false);

var background = new Image();
background.src = "bg.jpg";

var monster = new Image();
monster.src = "Boss_Angel.png";

var player = new Image();
player.src = "player.png";

var strkeyEventValue = "none";
var strkeyEventType = "none";

intPlayerX = 480;
intPlayerY = 300;

var intervalID;

var tempMonster1 = {x : 0 , y : 0, go_x : 1, go_y : 1 };
var tempMonster2 = {x : 600 , y : 600, go_x : -1, go_y : -1 };
var tempMonster3 = {x : 720 , y : 300, go_x : -1, go_y : -1 };
var tempMonster4 = {x : 0 , y : 200, go_x : 1, go_y : -1 };

var Game_STATE_READY = 0;
var Game_STATE_GAME = 1;
var Game_STATE_OVER = 2;

var GameState = Game_STATE_READY;

function onGameStart() {
	intervalID = setInterval(MoveMonster,100);
}

function MoveMonster() {
	tempMonster1.x += tempMonster1.go_x * 10;
	tempMonster1.y += tempMonster1.go_y * 10;
	
	tempMonster2.x += tempMonster2.go_x * 10;
	tempMonster2.y += tempMonster2.go_y * 10;

	tempMonster3.x += tempMonster3.go_x * 10;
	tempMonster3.y += tempMonster3.go_y * 10;

	tempMonster4.x += tempMonster4.go_x * 10;
	tempMonster4.y += tempMonster4.go_y * 10;

	drawScreen();
}

function onkeydown(e) {
		strkeyEventType = e.type;
		if(e.keyCode)code = e.keyCode;
		strkeyEventValue = code;	
		if(GameState == Game_STATE_READY){
			if(e.keyCode == 13){
				GameState = Game_STATE_GAME;
				onGameStart();
			}
		}
		else if(GameState == Game_STATE_GAME){
			switch(e.keyCode){
				case 37: intPlayerX -= 16; 
					if(intPlayerX < 0) {
						intPlayerX = 1020;
					}
					break;
				case 39: intPlayerX += 16;
					if(intPlayerX > 1000) {
						intPlayerX = 0;
					}
					break;
				case 38: intPlayerY -= 16;
					if(intPlayerY < 0) {
						intPlayerY = 720;
					}
					break;
				case 40: intPlayerY += 16;
					if(intPlayerY > 720) {
						intPlayerY = 0;
					}
					break;
				}
			
			
			}else if(GameState == Game_STATE_OVER){
				if(e.keyCode == 13){
					GameState = Game_State_READY;
				}
			}
		
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
	Context.drawImage(player,intPlayerX,intPlayerY,120,120);
	
	Context.fillStlye="#000";
	Context.font='22px nanumgothic';
	Context.textBaseline="top"
	Context.fillText("입력된 키는 : " + strkeyEventValue,5,5);
	Context.fillText("키 입력 상태는 : " + strkeyEventType,5,30);

		if(GameState == Game_STATE_READY) {
			Context.fillText("Ready!", 470, 250);
		}
		else if(GameState == Game_STATE_GAME) {
			Context.fillText("Go!", 300, 200);

			Context.drawImage(monster, tempMonster1.x , tempMonster1.y);
			Context.drawImage(monster, tempMonster2.x , tempMonster2.y);
			Context.drawImage(monster, tempMonster3.x , tempMonster3.y);
			Context.drawImage(monster, tempMonster4.x , tempMonster4.y);
		}
		else if(GameState == Game_STATE_OVER) {
			Context.fillText("Game Over", 400, 300);
			Context.font = '60px NamumGothicCoding';
		}
		
	
	
}
