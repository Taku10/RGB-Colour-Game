var numSquares = 6;

var colors = generateRandomColors(6);
var squares = document.querySelectorAll(".square");         // grabbed all the div's in html
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay"); //grabbed the rgb display
var messageDisplay = document.querySelector("#message");    // message in a span
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");


easyBtn.addEventListener("click", function (){
	hardBtn.classList.remove("selected");
	this.classList.add("selected");
	numSquares = 3;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;

	for(var i = 0; i < squares.length;i++){
		if(colors[i]){
			squares[i].style.backgroundColor = colors[i];
		}else{
			squares[i].style.display ="none"
		}
	}

});

hardBtn.addEventListener("click", function (){
	this.classList.add("selected");
	easyBtn.classList.remove("selected");
	numSqaures = 6;
	colors = generateRandomColors(numSquares);
	colorDisplay.textContent = pickedColor;

	for(var i = 0; i < squares.length;i++){
		squares[i].style.backgroundColor = colors[i];
		squares[i].style.display ="block";

	}



});


//Reset Button New Colors and Play again!!!!
resetButton.addEventListener("click", function(){   
	numSqaures = 6;         
	colors = generateRandomColors(numSqaures);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	this.textContent = "New Colors"
	messageDisplay.textContent = " ";

	for(var i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = colors[i];

	}
	h1.style.backgroundColor  = "steelblue"; //Resets h1 background when game is reset
});



colorDisplay.textContent = pickedColor; //The RGB display on top that changes

for(var i = 0; i < squares.length;i++){
	squares[i].style.backgroundColor = colors[i];          //gave every square a color

	squares[i].addEventListener("click", function(){
		var clickedColor = this.style.backgroundColor;
		
		if(clickedColor === pickedColor){
			messageDisplay.textContent = "Correct!!";
			resetButton.textContent = "Play Again!!";
			changeColors(clickedColor);
			h1.style.backgroundColor = clickedColor;
		}else{
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Try again";
		}
	});	
}

function changeColors(color){
	for(var i = 0; i < squares.length;i++){
		squares[i].style.backgroundColor = color;
	}

}
//using random number to access array
function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];	

}

//generate random colors
function generateRandomColors (num){
	var arr = [];

	for(var i = 0; i < num; i++){
		arr.push(randomColor());

	}

	return arr;


}

//function to generate random RGB numbers
function randomColor(){
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);

	return "rgb(" + r + ", " + g + ", " + b + ")";

}



