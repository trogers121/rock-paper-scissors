function game(){
	let numRounds = getNumRounds();
	let wins = 0;
	for(i = 0; i < numRounds; i++) {
		let result = round(playerPlay(),computerPlay());
		if (result === 'win') {
			wins++;
			alert("You won!");
		}
		else if (result === 'lose') {
			alert("You lost");
		}
		else if (result === 'tie') {
			alert("It's a tie! Try again!")
			result = round(playerPlay(),computerPlay());
		}
	}
}
function getNumRounds() {
	let num = prompt("How many rounds?", "Odd numbers only");
	if((num%2) !== 1) {
		num = getNumRounds();
	}
	else {}
	return num;
}
function playerPlay() {
	let choice = prompt("What do you want to play?", "Type here");
	choice = choice.toLowerCase();
	return choice;
}
function computerPlay() {
	let num = Math.floor(Math.random()*3);
	if(num === 0){
		return 'rock';
	}
	else if(num === 1){
		return 'paper'
	}
	else{
		return 'scissors'
	}
}
function round(playerSelection, computerSelection) {

	if(playerSelection == computerSelection) {
		return "tie";
	}
	else if((playerSelection === 'rock' && computerSelection == 'scissors') || (playerSelection === 'scissors' && computerSelection == 'paper') || (playerSelection === 'paper' && computerSelection == 'rock')) {
		return 'win';
	}
	else if((playerSelection === 'scissors' && computerSelection == 'rock') || (playerSelection === 'paper' && computerSelection == 'scissors') || (playerSelection === 'rock' && computerSelection == 'paper')) {
		return 'lose'
	}
	else {
		console.log('Something went wrong');
	}

}
function test(iteration) {
	var sum = 0;
	var vals = [0,0,0];
	for(i=0; i<iteration; i++) {
		var num = computerPlay();
		sum+= num;
		if(num === 0){
			vals[0]++;
		}
		else if(num === 1) {
			vals[1]++;
		}
		else{
			vals[2]++;
		}
	}
	console.log(vals[0]);
	console.log(vals[1]);
	console.log(vals[2]);
	return (sum/iteration); // Should return ~ 1
}
