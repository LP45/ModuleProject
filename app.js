const playerScore = 0
const computerScore = 0

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

function choice(userChoice){
const computerChoice = getComputerChoice();
//checking for a tie
if(userChoice == computerChoice){
    alert("It is a Tie")
    return;
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
