function PlayGame(userChoice) {

   console.log(userChoice);

    let computerChoice = GetComputerChoice();
    console.log("Computer chose: "+ computerChoice);

    if(userChoice == computerChoice) {
        PrintResults(userChoice, computerChoice, "It's a Tie!");
        return;
    }

    // If the user chose Rock
    if (userChoice == "Rock" && computerChoice == "Paper") {
        PrintResults (userChoice, computerChoice, "You Lost!");
        return;
    }
    if (userChoice == "Rock" && computerChoice == "Scissors") {
        PrintResults(userChoice, computerChoice, "You Won");
        return;
    }

    

    // If the user chose Paper
    if (userChoice == "Paper" && computerChoice == "Scissors") {
        PrintResults (userChoice, computerChoice, "You Lost!");
        return;
    }
    if (userChoice == "Paper" && computerChoice == "Rock") {
        PrintResults(userChoice, computerChoice, "You Won");
        return;
    }

    // If the user chose Scissors
    if (userChoice == "Scissors" && computerChoice == "Rock") {
        PrintResults (userChoice, computerChoice, "You Lost!");
        return;
    }
    if (userChoice == "Scissors" && computerChoice == "Paper") {
        PrintResults(userChoice, computerChoice, "You Won");
        return;
    }
}


function GetComputerChoice() {

    let randomNumber = Math.random();
    console.log(randomNumber);
    
    if (randomNumber < .33) {
        return "Rock";
    }
    if (randomNumber < .66) {
        return "Paper";
    }
    if (randomNumber > .66) {
        return "Scissors";
    }
}




















































function PrintResults(userChoice, computerChoice, winner) {
    
    // Create the output text.
    // This text will look like: "You chose: Rock and the computer chose: Paper. You Won!"
    let outputText = "You chose: " + userChoice + "\nThe computer chose: " + computerChoice + "\n" + winner;

    // Get the output element from the HTML Document. This element has an Id of "output"
    let outputElement = document.getElementById("output");

    // Set the innerText of the output element to the outputText we created earlier
    outputElement.innerText = outputText;
}