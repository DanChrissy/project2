var emptyRow = "300px";
var emptyCol = "300px";

window.onload = function (){
	allPuzzle();
	var pieces = document.getElementById("puzzlearea").querySelectorAll("div");

	/*var shuffleButton = document.getElementById("shufflebutton");
	var area = document.getElementById("puzzlearea");
	shuffleButton.onclick = function() {
        shuffle(pieces);
    };*/

	for (var s = 0; s < pieces.length; s++){

		pieces[s].onclick = function(){
			if (moveable(this) == true){
				move(this,true);
			}
		}

		pieces[s].onmouseover = function(){
			if (moveable(this) == true){
				this.setAttribute("class", "puzzlepiece movablepiece");
			};
		};

		pieces[s].onmouseleave = function(){
			this.classList.remove("movablepiece");
		};


	};
}

function allPuzzle (){

	let numbers = document.getElementById("puzzlearea").querySelectorAll("div");
	let countL = 0;
	let countT = 0;
	let countB = 0;
	let col = 1;
	let row = 1;

	function puzzle (){
		numbers[i].className = "puzzlepiece";
		numbers[i].style.marginLeft = countL + "px";
		numbers[i].style.marginTop = countT + "px";
		numbers[i].setAttribute("data-pos", "" + row.toString() + "," + col.toString());
	};

	for (var i = 0; i <= 3; i++){
		for(let p = 0; p <=3; p++){
			numbers[p].style.backgroundPosition = countB + "px 0px";
			countB -= 100;
		}
		countB = 0;
		if (countL <= 300)
		{
			puzzle();
			countL += 100;	
			col += 1;
		};	
	};countL = 0;
	col = 1;
	countT = countT + 100;
	row = row + 1;

	for (var i = 4; i <= 7; i++){
		for(let p = 4; p <=7; p++){
			numbers[p].style.backgroundPosition = countB + "px -100px";
			countB -= 100;
		}
		countB = 0;
		if (countL <= 300)
		{
			puzzle();
			countL += 100;	
			col += 1;		
		};	
	};countL = 0;
	col = 1;
	countT = countT + 100;
	row = row +1;

	for (var i = 8; i <= 11; i++){
		for(let p = 8; p <=11; p++){
			numbers[p].style.backgroundPosition = countB + "px -200px";
			countB -= 100;
		}
		countB = 0;
		if (countL <= 300)
		{
			puzzle();
			countL += 100;	
			col += 1;		
		};	
	};countL = 0;
	col = 1;
	countT = countT + 100;
	row = row + 1;

	for (var i = 12; i <= 14; i++){
		for(let p = 12; p <=14; p++){
			numbers[p].style.backgroundPosition = countB + "px -300px";
			countB -= 100;
		}
		countB = 0;
		if (countL <= 300)
		{
			puzzle();
			countL += 100;
			col += 1;			
		};	
	};countL = 0;
};

function getSquare (row,column){
	let tiles = document.getElementById("puzzlearea").querySelectorAll("div");
	for (let t = 0; t < tiles.length; t++)
	{
		let pos = tiles[t].getAttributeNode("data-pos").value;
		let input = pos.split(",");
		let posRow = input[0];
		let posCol = input[1];
	
		if(posRow == row && posCol == column){
			console.log(tiles[t].textContent);
		};
	};
};

function move(tile, movement){
	
	let tileRow = tile.style.marginTop;
	let tileCol = tile.style.marginLeft;

	if (movement == true){
		
		if (((parseInt(tileRow) + 100) + "px") == emptyRow && tileCol == emptyCol){
			$(tile).animate({"margin-top":"+=100px"});
			emptyRow = (parseInt(emptyRow) - 100) + "px";
			emptyCol = tileCol;	
			console.log("Margin Top: " + tile.style.marginTop);	
			console.log("Margin Left: " + tile.style.marginLeft);	
		}
		
		else if (((parseInt(tileCol) + 100) + "px") == emptyCol && tileRow == emptyRow){
			$(tile).animate({"margin-left": "+=100px"});
			emptyCol = (parseInt(emptyCol) - 100) + "px";
			emptyRow = tileRow;
			console.log("Margin Top: " + tile.style.marginTop);	
			console.log("Margin Left: " + tile.style.marginLeft);
		}

		else if (((parseInt(tileRow) - 100) + "px") == emptyRow && tileCol == emptyCol){
			$(tile).animate({"margin-top": "-=100px"});
			emptyRow = (parseInt(emptyRow) + 100) + "px";
			emptyCol = tileCol;
			console.log("Margin Top: " + tile.style.marginTop);	
			console.log("Margin Left: " + tile.style.marginLeft);
		}
		
		else if (((parseInt(tileCol) - 100) + "px") == emptyCol && tileRow == emptyCol){
			$(tile).animate({"margin-left": "-=100px"});
			emptyCol = (parseInt(emptyCol) + 100) + "px";
			emptyRow = tileRow;
			console.log("Margin Top: " + tile.style.marginTop);	
			console.log("Margin Left: " + tile.style.marginLeft);
		}

		else if(emptyRow == "0px" && tileCol == emptyCol){
			$(tile).animate({"margin-top": "-=100px"});
			emptyRow = (parseInt(emptyRow) + 100) + "px";
			emptyCol = tileCol;
		}

		else if (emptyCol == "0px" && tileRow == emptyRow){
			$(tile).animate({"margin-left": "-=100px"});
			emptyCol = (parseInt(emptyCol) + 100) + "px";
			emptyRow = tileRow;
		}
	};
}

function moveable(tile){
	let tileTop = tile.style.marginTop;
	let tileLeft = tile.style.marginLeft;
	if (
		((parseInt(tileTop) + 100) + "px") == emptyRow && tileLeft == emptyCol ||
		((parseInt(tileTop) - 100) + "px") == emptyRow && tileLeft == emptyCol ||
		((parseInt(tileLeft) + 100) + "px") == emptyCol && tileTop == emptyRow ||
		((parseInt(tileLeft) - 100) + "px") == emptyCol && tileTop == emptyRow)
	{
		return true
	};return false;
}

/*function emptySquare(){
	let squares = document.getElementById("puzzlearea").querySelectorAll("div");
	for (let i = 0; i <= squares.length - 1; i++) {
		if((squares[i].style.backgroundImage = "") == true){
			let emptyTop = squares[i].style.top ;
			let emptyLeft = squares[i].style.left;
			alert(emptyTop);
		};
	};
	
};

var emptyTop = 

function emptySquare(){
	let squares = document.getElementById("puzzlearea").querySelectorAll("div");
	for (let s = 0; s <= squares.length; s++){
		if (squar)
	}

}*/












