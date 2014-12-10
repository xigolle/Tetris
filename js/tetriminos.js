function lPiece(){

	this.pos1 = [   [1,0],
					[1,0],
					[1,1] ];

	this.pos2 = [	[0,0,1],
					[1,1,1]];

	this.pos3 = [	[1,1],
					[0,1],
					[0,1]];

	this.pos4 = [	[1,1,1],
					[0,0,1]];

	this.pos = [this.pos1, this.pos2, this.pos3, this.pos4];
	this.curState = 0;
	this.color = 3;
	this.gridx= 128;
	this.gridy = 0;
}
function jPiece(){

	this.pos1 = [   [0,1],
					[0,1],
					[1,1] ];

	this.pos2 = [	[1,1,1],
					[0,0,1]];

	this.pos3 = [	[1,1],
					[1,0],
					[1,0]];

	this.pos4 = [	[0,0,1],
					[1,1,1]];

	this.pos = [this.pos1, this.pos2, this.pos3, this.pos4];
	this.curState = 0;
	this.color = 0;
	this.gridx= 4;
	this.gridy = -3;
}
function iPiece(){

	this.pos1 = [   [1],
					[1],
					[1],
					[1] ];

	this.pos2 = [	[1,1,1,1]];


	this.pos = [this.pos1, this.pos2];
	this.curState = 0;
	this.color = 7;
	this.gridx= 5;
	this.gridy = -4;
}
function oPiece(){

	this.pos1 = [   [1,1],
					[1,1] ];

	this.pos = [this.pos1];
	this.curState = 0;
	this.color = 2;
	this.gridx= 4;
	this.gridy = -2;
}
function zPiece(){

	this.pos1 = [ 	[1,1,0],
					[0,1,1]];

	this.pos2 = [	[0,1],
					[1,1],
					[1,0]] ;




	this.pos = [this.pos1, this.pos2];
	this.curState = 0;
	this.color = 6;
	this.gridx= 4;
	this.gridy = -2;
}
function sPiece(){

	this.pos1 = [ 	[0,1,1],
					[1,1,0]];

	this.pos2 = [	[1,0],
					[1,1],
					[0,1]] ;




	this.pos = [this.pos1, this.pos2];
	this.curState = 0;
	this.color = 1;
	this.gridx= 4;
	this.gridy = -2;
}
function tPiece(){
	this.pos1 = [   [1,1,1],
					[0,1,0]];

	this.pos2 = [	[1,0],
					[1,1],
					[1,0]];

	this.pos3 = [	[0,1,0],
					[1,1,1]];

	this.pos4 = [	[0,1],
					[1,1],
					[0,1]];


	this.pos = [this.pos1, this.pos2, this.pos3, this.pos4];
	this.curState = 0;
	this.color = 4;
	this.gridx= 4;
	this.gridy = -2;
}
function randomPiece(){
	var result = Math.floor(Math.random()*7);
	var piece;

	switch(result){
		case 0: piece = new iPiece();	break;
		case 1: piece = new sPiece();	break;
		case 2: piece = new jPiece();	break;
		case 3: piece = new tPiece();	break;
		case 4: piece = new zPiece();	break;
		case 5: piece = new oPiece();	break;
		case 6: piece = new lPiece();	break;
	}
	
	return piece;
}
