window.onload = function (){
	allPuzzle();
}

function allPuzzle (){
	var numbers = document.getElementById("puzzlearea").querySelectorAll("div");
	var countL = 0;
	var countT = 0;
	

	function puzzle (){
		numbers[i].setAttribute("class", "#puzzlearea puzzlepiece");
		numbers[i].style.marginLeft = countL + "px";
		numbers[i].style.marginTop = countT + "px";
		numbers[i].id = "square_" + countT + "_" + countL ;

	}

	for (var i = 0; i <= 3; i++){
		if (countL <= 300)
		{
			puzzle();
			countL += 100;			
		};	
	};countL = 0;
	countT = countT + 100;

	for (var i = 4; i <= 7; i++){
		if (countL <= 300)
		{
			puzzle();
			countL += 100;			
		};	
	};countL = 0;
	countT = countT + 100;

	for (var i = 8; i <= 11; i++){
		if (countL <= 300)
		{
			puzzle();
			countL += 100;			
		};	
	};countL = 0;
	countT = countT + 100;

	for (var i = 12; i <= 15; i++){
		if (countL <= 300)
		{
			puzzle();
			countL += 100;			
		};	
	};countL = 0;



}