//intial points of both user and computer
let playerScore = 0
let computerScore = 0

//Actual Scores of Both User and Computer
const userScore_span = document.querySelector("#userScore")
const compScore_span = document.querySelector("#compScore")

const scores_div = document.querySelector("#scores")
//Text that appers if user won lost or Draw
const result_header2 = document.querySelector("#result > h2")

//These const point to the pictures on my html
const rock_div = document.querySelector('.photo1')
const paper_div = document.querySelector('.photo2')
const scissors_div = document.querySelector('.photo3')



//Random function that picks user's button and displays it when called
function getComputerChoice() {
    const selections = ['Rock','Paper','Scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    return selections[randomNumber]

}
//console.log(getComputerChoice())

//If player wins add 1 point and Scribe Text that Player Won!
function win(userChoice,computerChoice){
    playerScore++;
    
    userScore_span.innerHTML = playerScore
    compScore_span.innerHTML = computerScore
    result_header2.innerHTML = userChoice + " defeats " +computerChoice + ". YOU WIN"
}

// If Computer Wins Add 1 point and Scribe text that Computer Won
function lose(userChoice,computerChoice){
    
    computerScore++
    userScore_span.innerHTML = playerScore
    compScore_span.innerHTML = computerScore
    result_header2.innerHTML = userChoice + " loses to " +computerChoice + ". YOU Lose"

    console.log("lost")
}
//If it is a draw Show text that user and computer are at a stale mate
function draw(){
    let draw = "its a draw"
    userScore_span.innerHTML = playerScore
    compScore_span.innerHTML = computerScore
    result_header2.innerHTML = "Its a Tie!"
    console.log(draw);
}





function choice(userChoice){
const computerChoice = getComputerChoice();
//checking for a tie
if(userChoice == computerChoice){
    draw(userChoice,computerChoice);
    //result_div.textContent ="It is a Tie"
    return;
} 
//checking for rock
if(userChoice =="Rock"){
    if(computerChoice == "Scissors"){
        win(userChoice,computerChoice)
        //result_div.textContent = "User chose "+userChoice.bold() +  " Computer chose "+ computerChoice.bold + " User WON! "
        return;
    }
    else{
        lose(userChoice,computerChoice)
        //result_div.textContent = "User chose "+userChoice.bold() +  " Computer chose "+ computerChoice.bold() + " Computer WON! "
        return
    }
}


//check choice for paper
if(userChoice =="Paper"){
    if(computerChoice == "Scissors"){
        lose(userChoice,computerChoice)
       // result_div.textContent = "User chose "+userChoice +  " Computer chose "+ computerChoice + " Computer WON! "
        return;
    }
    else{
        win(userChoice,computerChoice)
       // result_div.textContent = "User chose "+userChoice +  " Computer chose "+ computerChoice + " User WON! "
        return
    }
}
//check choice for scissors
if(userChoice =="Scissors"){
    if(computerChoice == "Rock"){
        lose(userChoice,computerChoice)
       // result_div.textContent = "User chose "+userChoice+  " Computer chose "+ computerChoice + " Computer WON "
        return;
    }
    else{
        win(userChoice,computerChoice)
        //result_div.textContent = "User chose "+userChoice +  " Computer chose "+ computerChoice + " User WON! "
        return
    }
}

}


function main() {
    rock_div.addEventListener('click', function () {
        choice('Rock');
    })

    paper_div.addEventListener('click', function () {
        choice('Paper');
    })

    scissors_div.addEventListener('click', function () {
        choice('Scissors');
    })

}
main();
