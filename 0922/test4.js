window.addEventListener("load", drawScreen, true);

function drawScreen() {
	var theCanvas = document.getElementById("GameCanvas");
	var Context = theCanvas.getContext("2d");
      	var radius = 70;

	
	
	Context.beginPath();
	Context.arc(400,300,70,0,2*Math.PI, false);
	Context.fillStyle="skyblue";
	Context.fill();
	Context.lineWidth=5;
	

	Context.beginPath();
	Context.lineWidth=2;
	Context.moveTo(0,0);
	Context.lineTo(theCanvas.width,theCanvas.height);
	Context.strokeStyle="skyblue";
	Context.stroke();
	

	Context.beginPath();
	Context.arc(100,100,50,1*Math.PI,2*Math.PI,false);
	Context.fillStyle="#ff0";
	Context.fill();

	var gradient = Context.createLinearGradient(0,0,170,0);
	gradient.addColorStop("0","yellow");
	gradient.addColorStop("0.5","skyblue");
	gradient.addColorStop("1.0","coral");

	Context.strokeStyle=gradient;
	Context.LineWidth=5;
	Context.strokeRect(0,0,theCanvas.width,theCanvas.height);
}
