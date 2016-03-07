angular.module('game', ['ngAnimate'])
.controller('GameController', function() {
    this.validChoice = 0;
    this.msgbox = "Rock, Paper, or Scissors!";
    this.userChoice = "";
    this.computerChoice = "Waiting";
    this.computerWins = 0;
    this.userWins = 0;
    this.draws = 0;
    this.winner = "I bet I can outsmart you!";
    this.rWins = 0;
    this.pWins = 0;
    this.sWins = 0;
    //this.winnerItem = "I am in the wrong scope";
    

//Creates a random number 0-1 and converts it into the computer's choice.
    this.makeChoose = function() {
        this.computerChoice = Math.random();
        if (this.computerChoice < 0.34) { 
            this.computerChoice = "rock";
        }
        else if(this.computerChoice <= 0.67) {
            this.computerChoice = "paper";
        }
        else {
            this.computerChoice = "scissors";
        }
    };

//Pass in the clicked button value and decides the winner.
    this.decideWinner = function(userChoice) {
        this.rSize="normal"; this.pSize="normal"; this.sSize="normal"; //resets
        this.userChoice = userChoice;
        this.winnerItem = "";

        this.makeChoose(); //Calls the user our function above.
        if (this.userChoice === this.computerChoice) {
            this.draws+=1;
            this.winner = "It's a draw!";
            this.winnerItem = "d";
        }
        else if (this.userChoice === "paper" && this.computerChoice === "rock"){
            this.userWins++;
            this.winner = "Grr, You Win! Your paper covers my rock.";
            this.winnerItem = "p";
        }
        else if (this.userChoice === "paper" && this.computerChoice === "scissors"){
            this.computerWins++;
            this.winner = "Ha, I Win! My scissors cut your paper.";
            this.winnerItem = "s";
        }
        else if (this.userChoice === "rock" && this.computerChoice === "paper"){
            this.computerWins++;
            this.winner = "Ha, I Win! My paper covers your rock.";
            this.winnerItem = "p";
        }
        else if (this.userChoice === "rock" && this.computerChoice === "scissors"){
            this.userWins++;
            this.winner = "Grr, You Win! Your rock smashes my scissors.";
            this.winnerItem = "r";
        }
        else if (this.userChoice === "scissors" && this.computerChoice === "paper"){
            this.userWins++;
            this.winner = "Grr, You Win! Your scissors cut my paper.";
            this.winnerItem = "s";
        }
        else if (this.userChoice === "scissors" && this.computerChoice === "rock"){
            this.computerWins++;
            this.winner = "Ha, I Win! My rock smashes your scissors.";
            this.winnerItem = "r";
        }
        else {
            this.winner = "Oops?";
        }
        this.animateMe();
        this.msgbox = "Shall we try again?";
    };
    
    this.animateMe = function() {
        if(this.winnerItem === "r") {
            this.rSize = "bigger";
            this.rWins+=1;
        }
        if(this.winnerItem === "p") {
            this.pSize = "bigger";
            this.pWins+=1;
        }
        if(this.winnerItem === "s") {
            this.sSize = "bigger";
            this.sWins+=1;
        }
        if(this.winnerItem === "d") {
            this.rSize = "bigger";
            this.pSize = "bigger";
            this.sSize = "bigger";
        }
        console.log("The winning item is:" + this.winnerItem);
    };
}); 