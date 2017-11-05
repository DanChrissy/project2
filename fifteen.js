window.onload = function (){
	allPuzzle();
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
		numbers[i].id = "square_" + countT + "_" + countL ;
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
}