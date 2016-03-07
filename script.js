//console based version - pure Javascript
var validChoice = 0;
while (validChoice != 1) {
    var userChoice = prompt("Do you choose rock, paper or scissors?");
    if (userChoice === "rock") validChoice = 1;
    else if (userChoice === "paper") validChoice = 1;
    else if (userChoice === "scissors") validChoice = 1;
    else {
        alert("You made an invalid choice.")
        validChoice = 0;
    }
}
var computerChoice = Math.random();
if (computerChoice < 0.34) {
	computerChoice = "rock";
} else if(computerChoice <= 0.67) {
	computerChoice = "paper";
} else {
	computerChoice = "scissors";
} console.log("Computer: " + computerChoice);

var compare = function(choice1, choice2) {
    if (choice1 === choice2) {
        return("The result is a tie!");
    }
    else if (choice1 === "rock") {
        if (choice2 === "scissors") {
            return("rock wins");
        }
        else {
            return("paper wins");
        }
    }
    else if (choice1 === "paper") {
        if (choice2 ==="rock") {
            return("paper wins");
        }
        else if (choice2 === "scissors") {
            return("scissors wins");
        }
    }
    else if (choice1 === "scissors") {
        if (choice2 === "rock") {
            return("rock wins");
        }
        else if (choice2 === "paper") {
            return("scissors wins");
        }
    }
}
console.log(compare(userChoice, computerChoice));