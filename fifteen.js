window.onload = function (){

	allPuzzle();

	var pieces = document.getElementById("puzzlearea").querySelectorAll("div");

	var shuffleButton = document.getElementById("shufflebutton");
	var area = document.getElementById("puzzlearea");
	shuffleButton.onclick = function() {
        shuffle(pieces);
    };

	for (s = 0; s <= pieces.length; i++){
		pieces[s].onmouseover = function(){
			if moveable(this){
				this.setAttribute("class", "puzzlepiece moveablepiece");
			};
		};

		pieces[s].onmouseleave = function(){
			this.setAttribute("class", "#puzzlearea puzzlepiece");
		};

		pieces[s].onclick = function(){
			if (this.hasattribute("moveablepiece")){
				move(this,true);
			}
		};
	};
}

function allPuzzle (){
	var numbers = document.getElementById("puzzlearea").querySelectorAll("div");
	var countL = 0;
	var countT = 0;
	var countB = 0;

	function puzzle (){
		numbers[i].setAttribute("class", "#puzzlearea puzzlepiece");
		numbers[i].style.marginLeft = countL + "px";
		numbers[i].style.marginTop = countT + "px";
	}

	for (var i = 0; i <= 3; i++){
		for(var p = 0; p <=3; p++){
			numbers[p].style.backgroundPosition = countB + "px 0px";
			countB -= 100;
		}
		countB = 0;
		if (countL <= 300)
		{
			puzzle();
			countL += 100;	
		};	
	};countL = 0;
	countT = countT + 100;

	for (var i = 4; i <= 7; i++){
		for(var p = 4; p <=7; p++){
			numbers[p].style.backgroundPosition = countB + "px -100px";
			countB -= 100;
		}
		countB = 0;
		if (countL <= 300)
		{
			puzzle();
			countL += 100;			
		};	
	};countL = 0;
	countT = countT + 100;

	for (var i = 8; i <= 11; i++){
		for(var p = 8; p <=11; p++){
			numbers[p].style.backgroundPosition = countB + "px -200px";
			countB -= 100;
		}
		countB = 0;
		if (countL <= 300)
		{
			puzzle();
			countL += 100;			
		};	
	};countL = 0;
	countT = countT + 100;

	for (var i = 12; i <= 15; i++){
		for(var p = 12; p <=14; p++){
			numbers[p].style.backgroundPosition = countB + "px -300px";
			countB -= 100;
		}
		countB = 0;
		if (countL <= 300)
		{
			puzzle();
			countL += 100;			
		};	
	};countL = 0;
};

function moveable(tile){
	let pieceTop = tile.style.top;
	let pieceLeft = tile.style.left;

	for (var i = 0; i <= numbers.length; i++) {
		if(numbers[i].style.backgroundImage = "none"){
			let emptyTop = numbers[i].style.top ;
			let emptyLeft = numbers[i].style.left;
		};
	};

	if (parseInt(pieceTop) + 100 == parseInt(emptyTop) && parseInt(pieceLeft) == parseInt(emptyLeft) ||
	    parseInt(pieceLeft) + 100 == parseInt(emptyLeft) && parseInt(pieceTop) == parseInt(emptyTop) ||
	    parseInt(pieceTop) - 100 == parseInt(emptyTop) && parseInt(pieceLeft) == parseInt(emptyLeft) ||
	    parseInt(pieceLeft) - 100 == parseInt(emptyLeft) && parseInt(pieceTop) == parseInt(emptyTop)){

		return tile;
	};
}

/*Tiles can either have margintop to -100 or +100 or marginleft to -100 or +100*/

function move(tile, movement){
	let speed = setInterval(frame, 5);
	let currentTop = tile.style.top;
	let posDown = currentTop + 100
	let posUp = currentTop - 100;

	let currentLeft = tile.style.left;
	let posLeft = currentLeft + 100;
	let posRight = currentLeft -

	if (movement == true){
		function frame()
		{
			if (currentTop == posDown){
				clearInterval(speed);
			}else{
				currentTop++;
				tile.style.top = currentTop + "px";
			}

			if (currentLeft == posLeft){
				clearInterval(speed);
			}else{
				currentLeft++;
				tile.style.left = currentLeft + "px";
			}

			if (currentTop == posUp){
				clearInterval(speed);
			}else{
				currentTop--;
				tile.style.top = currentTop + "px";
			}

			if (currentLeft == posLeft){
				clearInterval(speed);
			}else{
				currentLeft--;
				tile.style.left = currentLeft + "px";
			}


			/*if (currentTop == posDown || currentTop == posUp){
				clearInterval(speed);
				if (currentTop == posDown){
					currentTop++;
				}else {
					currentTop--;
				}tile.style.top = currentTop + "px";
			}else if(currentLeft == posLeft || currentLeft == posRight){
				if (currentLeft == posLeft){
					currentLeft++;
				}else{
					currentLeft--;
				}tile.style.left = currentLeft + "px";
			};*/
		};
	}
}

function shuffle(tiles){
	for (let b = 0; b < tiles.length; b++){
		let random = Math.floor(Math.random() * tiles.length);
		let tile = tiles.splice(random, 1);
		move(tile[0], false);
	};
};











