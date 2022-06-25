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
    
    while( i < 1) {
        playerPlay();
        computerPlay();
        results();

        if(pWins == 5 || cpWins == 5){
            i++;
        }
        
    }
}

function playerPlay() {
    pChoice = prompt("Enter Rock, Paper, or Scissors").toLowerCase();
    console.log(pChoice);
    
    // validation();
    
}

function validation() {
    if(pChoice != "rock" || pChoice != 'paper' || pChoice != 'scissors'){
        console.log(pChoice);
        alert("Error: please make a valid choice");
        playerPlay();
    }else{
        console.log(pChoice);
    }
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
        i--;
    }

    console.log("Computer: " + cpWins);
    console.log("Player Wins: " + pWins);
    

}



