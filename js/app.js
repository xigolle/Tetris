var main = function () { 
	"use strict"; 
	//canvas aanroepen
	var canvas = document.getElementById("playBoard");
	//context zetten naar 2d
	var ctx = canvas.getContext("2d");
	//test object voor code voor de tetris pieces
	var piece = new lPiece();
	//size van de grid blokken 
	var size = 32;
	var bgImg = new Image();
	bgImg.onload = function(){
		ctx.drawImage(bgImg, 0, 0, 320, 640);
		//start de game pas wanneer de image geladen is
		init();
	}
	bgImg.src="images/bg.png";





	//deze functie werkt met harde coded blokken. Functie moet nog aangepast worden zodat elke blok als parameter kan worden meegegeven.
	//Tevens nakijken hoe hij het best in het midden kan beginnen en misschien alvast nadenken over het zakken van de blokken.
	function init(){
		for(var i = 0; i < piece.pos3.length;i++){
			var segment = piece.pos3[i];
			piece.gridx = 0;
			
			for(var j = 0 ; j < segment.length; j++)
			{	
				if (piece.pos3[i][j]=== 1 ) {
					console.log(1);
					ctx.fillStyle = "red";
					ctx.fillRect(piece.gridx,piece.gridy,size,size);
					piece.gridx += size;

				}
				else if(piece.pos3[i][j]=== 0)
				{
					piece.gridx += size;
					console.log("0");
				}

			}
			piece.gridy += size;
		}
	}
	
	

	
	



	


}; 

$(document).ready(main);
