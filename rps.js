document.getElementById("clickMe").onclick = rps;

var rps = function(
    var wins = 0
    var loses = 0

    var userChoice = prompt("Do you choose rock, paper or scissors?");
    var computerChoice = Math.random();
    if (computerChoice < 0.34) {
        computerChoice = "rock";
    } else if (computerChoice <= 0.67) {
        computerChoice = "paper";
    } else if (computerChoice <= 0.01) {
        computerChoice = "loss";
    } else if (computerChoice >= 0.99) {
        computerChoice = "win";
    } else {
        computerChoice = "scissors";
    } console.log("Computer: " + computerChoice);

    var compare = function(choice1, choice2) {
        if(choice1 === choice2) {
            return "The result is a tie!";
        }
        else if (choice1 === "rock") {
            if (choice2 === "paper"){
                return "paper wins";}
            else {
                return "rock wins";}     
        }
        else if (choice1 === "paper") {
            if (choice2 === "scissors"){
                return "scissors wins";}
            else {
                return "paper wins";}     
        }
        
        else if (choice1 === "scissors") {
            if (choice2 === "rock"){
                return "rock wins";}
            else {
                return "scissors wins";}     
        }

        else if (choice2 === "loss") {
            return "Nothing but stillness, and then the wind blew, you made your sign and the Master grasped his chest, and fell over. You win." ;
            }

        else {
            return "The Master, with lightning speed, made his sign. Which one was it? You cannot guess as his skill literally blew your mind." ;
        }
    };
    console.log(compare(userChoice, computerChoice));

)