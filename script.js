let cpChoice;
let pChoice;
let cpWins = 0;
let pWins = 0;
let i = 0;

function computerPlay() {
    let num = Math.floor((Math.random() * 3) + 1);
    
    if(num == 1) {
        cpChoice = 'rock';
        
    }else if(num == 2) {
        cpChoice = 'paper';
        
    }else{
        cpChoice = 'scissors';
    }
    console.log(cpChoice);
}

function game() {
    
    while( i < 5) {
        playerPlay();
        computerPlay();
        results();

        i++;
        
    }
    if(pWins > cpWins){
        console.log("YOU WIN!!!");
    }else if(pWins < cpWins){
        console.log("YOU LOSE!!!");
    }else {
        console.log("TIE!!!")
    }
}

function playerPlay() {
    pChoice = prompt("Enter Rock, Paper, or Scissors").toLowerCase();
    console.log(pChoice);
}



function results() {

    //Computer Win
    if(cpChoice == 'rock' && pChoice == 'scissors' ){
        console.log("Rock beats Scissors, You Lose!!!")
        cpWins++;
        // console.log("Computer: " + cpWins);
        // console.log("Player Wins: " + pWins);
    }else if(cpChoice == 'paper' && pChoice == 'rock'){
        console.log("Paper beats Rock, You Lose!!!");
        cpWins++;
        
    }else if(cpChoice == 'scissors' && pChoice == 'paper'){
        console.log("Scissors beats Paper, You Lose!!!");
        cpWins++;
    }else

    //Player WIn
    if(pChoice == 'rock' && cpChoice == 'scissors'){
        console.log("Rock beats Scissors, You Win!!!")
        pWins++;
    }else if(pChoice == 'paper' && cpChoice == 'rock'){
        console.log("Paper beats Rock, You Win!!!");
        pWins++;
    }else if(pChoice == 'scissors' && cpChoice == 'paper'){
        onsole.log("Scissors beats Paper, You Win!!!");
        pWins++;
    }

    //Tie
    if(pChoice == cpChoice){
        console.log("Tie Game")
    }

    console.log("Computer: " + cpWins);
    console.log("Player Wins: " + pWins);
}



