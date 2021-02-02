<!-- Code for when user click on images-->
$(document).ready(function () {
    $("#rock").click(function () {
        compare("rock");
    });
    $("#paper").click(function () {
        compare("paper");
    });
    $("#scissors").click(function () {
        compare("scissors");
    });
});

<!-- Code for comparing users and computer choice and show results in alerts-->
function compare(choice1) {
    var computerChoice = Math.random();
    if (computerChoice < 0.34) {
        choice2 = "rock";
    } else if (computerChoice <= 0.67) {
        choice2 = "paper";
    } else {
        choice2 = "scissors";
    }

    if (choice1 === choice2) {

        alert( "Computer choice is " + choice2 +"\nThe result is a tie!!!" + " " + "Lets play again.");
    }

    else if (choice1 === "rock") {

        if (choice2 === "scissors") {
            alert("Computer choice is " + choice2 +"\nYou won, nice job!");
        }
        else {
            alert("Computer choice is " + choice2 +"\nComputer won.");
        }
    }

    else if (choice1 === "paper") {

        if (choice2 === "rock") {
            alert("Computer choice is " + choice2 +"\nYou won, nice job!");
        }
        else {
            alert("Computer choice is " + choice2 +"\nComputer won.");
        }

    }

    else if (choice1 === "scissors") {

        if (choice2 === "rock") {
            alert("Computer choice is " + choice2 +"\nComputer won.");
        }
        else {
            alert("Computer choice is " + choice2 +"\nYou won, nice job!");
        }
    }


}