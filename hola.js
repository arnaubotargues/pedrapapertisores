   let humanScore = 0;
let computerScore= 0;

function getComputerChoice(){
    let min = Math.ceil(0);
    let max = Math.floor(3);

    let computerChoice = Math.floor(Math.random() * (max - min) + min);
    console.log(computerChoice);
    return computerChoice;
}


function getHumanChoice(){
    let humanChoice = prompt("0.Pedra, 1.Paper, 2.Tisores");
    if(humanChoice =="0"){
        humanChoice = 0;
    }
    if(humanChoice == "1"){
        humanChoice = 1;
    }
    if(humanChoice == "2"){
        humanChoice =2;
    }
    console.log(humanChoice);
    return humanChoice;
}




function playRound(humanChoice,computerChoice){
    


    if(humanChoice == 0 && computerChoice == 2 || humanChoice == 1 && computerChoice == 0 || humanChoice == 2 && computerChoice == 1){
        humanScore = humanScore + 1;
    }else{
    computerScore= computerScore + 1;
    }
    
    
}

    

    function playGame(){
        
            let i = 0;
            while (i<=4){
             playRound(getHumanChoice(),getComputerChoice());  
             i++;  
            }
            
    }
    playGame();
    console.log("humanscore=" + humanScore);
    console.log("computerScore="+ computerScore);
