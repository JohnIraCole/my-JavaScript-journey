
let result = '';

let score = JSON.parse(localStorage.getItem('displayScore')) || {
    wins: 0,
    losses: 0,
    ties: 0
};

updateScore();

function computerMove(){
    const randomMove = Math.random();
    
    let computerChoice = '';

    if(randomMove >= 0 && randomMove <= 1/3){
        computerChoice = 'Rock';
    }
    else if(randomMove > 1/3 && randomMove <= 2/3){
        computerChoice = 'Paper';
    }
    else if(randomMove > 2/3 && randomMove <= 1){
        computerChoice = 'Scissors';
    }

    return computerChoice;
}

function play(playerMove){

    const computerChoice = computerMove();

    if(playerMove === 'Scissors'){
        if(computerChoice === 'Rock'){
            result = ('You lose!');
        }
        else if(computerChoice === 'Paper'){
            result = ('You win!');
        }
        else{
            result = ('Its a draw!');
        }
    }

    else if(playerMove === 'Rock'){
        if(computerChoice === 'Paper'){
            result = ('You lose!');
        }
        else if(computerChoice === 'Scissors'){
            result = ('You win!');
        }
        else{
            result = ('Its a draw!');
        }              
    }
    
    else if(playerMove === 'Paper'){
        if(computerChoice === 'Scissors'){
            result = ('You lose!');
        }
        else if(computerChoice === 'Rock'){
            result = ('You win!');
        }
        else{
            result = ('Its a draw!');
        }
    }

    if(result === 'You win!'){
        score.wins++;
    }
    else if(result === 'You lose!'){
        score.losses++;
    }
    else{
        score.ties++;
    }

    // Show player the results of the game after pressing a button
    document.querySelector('.showResult').innerHTML = result;
    
    document.querySelector('.showMove').innerHTML = `You
<img src="images/${playerMove}-emoji.png" class="icons">
<img src="images/${computerChoice}-emoji.png" class="icons"> 
Computer`;

    updateScore();
    
localStorage.setItem('displayScore', JSON.stringify(score));

}

// Displays score in webpage
function updateScore(){
    document.querySelector('.showScore').innerHTML = `Wins: ${score.wins} Losses: ${score.losses} Ties: ${score.ties}`;
}

// Resets the score back to Zero
function resetScore(){
    score = { wins: 0, losses: 0, ties: 0 };
    localStorage.removeItem('displayScore');
    updateScore();
}
