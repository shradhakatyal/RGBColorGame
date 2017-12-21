var colors=[];
var pickedColor;
var num=6;
var squares=document.querySelectorAll(".square");
var colorDisplay=document.querySelector("h1 span");
var msgDisplay=document.querySelector("#message");
var h1=document.querySelector("h1");
var reset=document.querySelector("#reset");
var modeButtons=document.querySelectorAll(".mode");
colorDisplay.textContent=pickedColor;
init();
function init(){
	setupModeButtons();
	setupSquares();
	reSet();
}
function reSet(){
	colors=generateRandomColors(num);
	pickedColor=pickRandomColor();
	colorDisplay.textContent=pickedColor;
	reset.textContent="New Colors";
	msgDisplay.textContent="";
	for(var i=0;i<squares.length;i++){
		if(colors[i]){
			squares[i].style.display="block";
			squares[i].style.backgroundColor=colors[i];
		}
		else{
			squares[i].style.display="none";
		}
	}
	h1.style.backgroundColor="steelblue";
}

reset.addEventListener("click",reSet);
function generateRandomColors(n){
	var arr=[];
	for(var i=0;i<n;i++){
		arr.push(randomColor());
	}
	return arr;
}
function randomColor(){
	var r=Math.floor(Math.random()*256);
	var g=Math.floor(Math.random()*256);
	var b=Math.floor(Math.random()*256);
	return "rgb("+ r +", " + g + ", " + b +")" ;
}
function pickRandomColor(){
	var random=Math.floor(Math.random()*colors.length);
	return colors[random];
}
function changeColors(color){
	for(var i=0;i<squares.length;i++){
		squares[i].style.backgroundColor=color;
	}
}
function setupModeButtons(){
	for(var i=0;i<modeButtons.length;i++){
		modeButtons[i].addEventListener("click",function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent==="Easy"? num=3 : num=6;
			reSet();
		});
	}
}
function setupSquares(){
	for(var i=0;i<squares.length;i++){
	//add click listeners
	squares[i].addEventListener("click",function(){
			var clickedColor=this.style.backgroundColor;
			if(clickedColor===pickedColor){
				msgDisplay.textContent="Correct";
				changeColors(clickedColor);
				h1.style.backgroundColor=clickedColor;
				reset.textContent="Play Again?"
			}
			else{
				this.style.backgroundColor="#232323";
				msgDisplay.textContent="Try Again";
			}
		});
	}
}
