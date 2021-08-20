let playerScore = 0
let computerScore = 0

const userScore_span = document.querySelector("#userScore")
const compScore_span = document.querySelector("#compScore")

const scores_div = document.querySelector("#scores")

const result_div = document.querySelector("#result")


const rock_div = document.querySelector('.photo1')
const paper_div = document.querySelector('.photo2')
const scissors_div = document.querySelector('.photo3')




function getComputerChoice() {
    const selections = ['rock','paper','scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    return selections[randomNumber]

}
//console.log(getComputerChoice())

function win(user,comp){
    playerScore++;
    
    userScore_span.innerHTML = playerScore
    compScore_span.innerHTML = computerScore
}

function lose(){
    
    computerScore++

    console.log("lost")
}

function draw(){
    let draw = "its a draw"
    return draw.bold();
}





function choice(userChoice){
const computerChoice = getComputerChoice();
//checking for a tie
if(userChoice == computerChoice){
    draw();
    //result_div.textContent ="It is a Tie"
    return;
} 

if(userChoice =="rock"){
    if(computerChoice == "scissors"){
        win(user,comp)
        //result_div.textContent = "User chose "+userChoice.bold() +  " Computer chose "+ computerChoice.bold + " User WON! "
        return;
    }
    else{
        lose(user,comp)
        //result_div.textContent = "User chose "+userChoice.bold() +  " Computer chose "+ computerChoice.bold() + " Computer WON! "
        return
    }
}


//check choice for paper
if(userChoice =="paper"){
    if(computerChoice == "scissors"){
        lose(user,comp)
       // result_div.textContent = "User chose "+userChoice +  " Computer chose "+ computerChoice + " Computer WON! "
        return;
    }
    else{
        win(user,comp)
       // result_div.textContent = "User chose "+userChoice +  " Computer chose "+ computerChoice + " User WON! "
        return
    }
}
//check choice for scissors
if(userChoice =="scissors"){
    if(computerChoice == "rock"){
        lose(user,comp)
       // result_div.textContent = "User chose "+userChoice+  " Computer chose "+ computerChoice + " Computer WON "
        return;
    }
    else{
        win(user,comp)
        //result_div.textContent = "User chose "+userChoice +  " Computer chose "+ computerChoice + " User WON! "
        return
    }
}

}


function main() {
    rock_div.addEventListener('click', function () {
        choice('rock');
    })

    paper_div.addEventListener('click', function () {
        choice('paper');
    })

    scissors_div.addEventListener('click', function () {
        choice('scissors');
    })

}
main();
