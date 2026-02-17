


   let humanScore = 0;
let computerScore= 0;

function getComputerChoice(){
    let min = Math.ceil(0);
    let max = Math.floor(3);

    let computerChoice = Math.floor(Math.random() * (max - min) + min);
    console.log(computerChoice);
    return computerChoice;
}







function playRound(humanChoice,computerChoice){
    


    if(humanChoice == 0 && computerChoice == 2 || humanChoice == 1 && computerChoice == 0 || humanChoice == 2 && computerChoice == 1){
        humanScore = humanScore + 1;
    }else{
    computerScore= computerScore + 1;
    }

    
}

    



const buttons = document.querySelectorAll("button");

// Crear el div per mostrar els resultats
const container = document.querySelector("#container");
const resultats = document.createElement("div");
resultats.classList.add("resultats");
container.appendChild(resultats);

// Afegir els listeners als botons
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        let humanChoice;

        if (button.textContent.trim() === "Pedra") humanChoice = 0;
        if (button.textContent.trim() === "Paper") humanChoice = 1;
        if (button.textContent.trim() === "Tisores") humanChoice = 2;

        const computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);

        // Actualitzar el div amb la informació de la ronda
        resultats.textContent = 
            `Tu: ${humanChoice}, Ordinador: ${computerChoice} | 
            Score - Humà: ${humanScore}, Ordinador: ${computerScore}`;

           if(humanScore === 5){
    resultats.textContent = "Has guanyat! Humà 5 - Ordinador " + computerScore;
}
if(computerScore === 5){
    resultats.textContent = "Has perdut! Humà " + humanScore + " - Ordinador 5";
    buttons.forEach(button =>button.remove());
}

    });
});
