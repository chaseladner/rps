var rps = function(){
 "use strict";
    document.getElementById("clickMe").onclick = function(){
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
                alert("The result is a tie!");
            }
            else if (choice1 === "rock") {
                if (choice2 === "paper"){
                    alert("paper wins") return "paper wins";}
                else {
                    alert("rock wins") return "paper wins";}     
            }
            else if (choice1 === "paper") {
                if (choice2 === "scissors"){
                    alert("scissors wins") return "paper wins";}
                else {
                    alert("paper wins") return "paper wins";}     
            }
            
            else if (choice1 === "scissors") {
                if (choice2 === "rock"){
                    alert("rock wins") return "paper wins";}
                else {
                    alert("scissors wins") return "paper wins";}     
            }

            else if (choice2 === "loss") {
                alert("Nothing but stillness, and then the wind blew, you made your sign and the Master grasped his chest, and fell over. You win.") ;
                }

            else {
                alert("The Master, with lightning speed, made his sign. Which one was it? You cannot guess as his skill literally blew your mind.") ;
            }
        };
        console.log(compare(userChoice, computerChoice));
    }
}