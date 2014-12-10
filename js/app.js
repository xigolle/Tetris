var main = function () { 
	"use strict"; 
	//canvas aanroepen
	var canvas = document.getElementById("playBoard");
	//context zetten naar 2d
	var ctx = canvas.getContext("2d");
	//size van de grid blokken 
	var size = 32;
	var timer;
	var bgImg = new Image();
	var currentPiece = 
	bgImg.onload = function(){
		ctx.drawImage(bgImg, 0, 0, 320, 640);
		//start de game pas wanneer de image geladen is
		drawPiece(randomPiece());
	}
	bgImg.src="images/bg.png";





	//functie tekent verschillende blokken zitten echter wel een paar fouten bij. Bijvoorbeeld de T piece
	function drawPiece(p){
		console.log(p);
		for (var i = 0; i<p.pos1.length;i++){
			var segment = p.pos1[i];
			p.gridx = 0;
			for(var j = 0; j<segment.length; j++){
				if(p.pos1[i][j] ===1){
				ctx.fillStyle = "red";
				ctx.fillRect(p.gridx,p.gridy,size,size);
				p.gridx+=size;
				}
				else if(p.pos1[i][j]){
					p.gridx += size;
				}
			}
			p.gridy += size;
		}
		
	}
	function init(){
		
	}
	
	

	
	



	


}; 

$(document).ready(main);
