var move=["rock", "paper", "scissor"];
var display=document.querySelector("#disp");
var output=document.querySelector("#display");
var buttons=document.querySelectorAll(".play");
var totalNum=document.querySelector(".totalNum");
var totalDisp=document.querySelector("#total");
var resetButton=document.querySelector(".resetbtn");
var p1=document.querySelector("#p1");
var p2=document.querySelector("#p2");
var gameover=false;
var PCmove=computersMove();
var winningScore=5;
var pcScore=0;
var playerScore=0;
resetButton.addEventListener("click",resetfn);
totalNum.addEventListener("change",function(){
	totalDisp.textContent=this.value;
	winningScore=Number(this.value);
	resetfn();
});
function computersMove(){
	var index=Math.floor(Math.random()*3);
	return move[index];
}
for(var i=0;i<buttons.length;i++){
	buttons[i].addEventListener("click",function(){
		if(!gameover){
			doThis(this);
		}
	})
}
function doThis(b){
		reset();
		userMove=b.textContent;
		//console.log(userMove);
		display.textContent=PCmove;
		var msg=comparison();
		//console.log(msg, "Tie");
		if(msg==="You lose!"){
			output.classList.remove("win");
			output.classList.remove("tie");
			output.classList.add("lose");
			pcScore++;
			p2.textContent=pcScore;
			if(pcScore===winningScore){
				p2.classList.add("win");
				gameover=true;
			}
		}
		else if(msg==="Tie"){
			output.classList.remove("lose");
			output.classList.remove("win")
			output.classList.add("tie");
		}
		else{
			output.classList.remove("lose");
			output.classList.remove("tie");
			output.classList.add("win");
			playerScore++;
			p1.textContent=playerScore;
			if(playerScore===winningScore){
				p1.classList.add("win");
				gameover=true;
			}
		}
		output.textContent=msg;
}
function resetfn(){
	reset();
	gameover=false;
	pcScore=0;
	playerScore=0;
	p1.textContent=0;
	p2.textContent=0;
	p1.classList.remove("win");
	p2.classList.remove("win");
	totalDisp.textContent=winningScore;
}
function reset(){
	display.textContent="";
	PCmove=computersMove();
}
function comparison(){
	if(userMove==="rock"){
		if(PCmove==="paper"){
			return("You lose!");
		}
		else if(PCmove==="scissor"){
			return("You win!");
		}
		else{
			return("Tie");
		}
}

if(userMove==="paper"){
	if(PCmove==="scissor"){
		return("You lose!");
	}
	else if(PCmove==="rock"){
		return("You win!");
	}
	else{
		return("Tie");
	}
}
if(userMove==="scissor"){
	if(PCmove==="rock"){
		return("You lose!");
	}
	else if(PCmove==="paper"){
		return("You win!");
	}
	else{
		return("Tie");
	}
}	
}
