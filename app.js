'use strict'; //strict syntax

let questions = [
    'Is my favorite color orange?',
    'Is my favorite animal a fox?',
    'Have I ever been to japan?',
    'Have I ever done a backflip?',
    'Am I married?',
    'Guess a number between 1 and 10',
    'What is my favorite nintendo game?',
]

let answers = [
    'yes',
    'yes',
    'no',
    'no',
    'yes',
    8,
    ['castlevania','mario kart','metroid','zelda','mario party','mario']
]

function askQuestionWithAnswer(q,a) {
    let res = prompt(q);
    if (res.toLowerCase() === a.toLowerCase()) {
        alert('You got it');
        correct++;
    } else {
        alert('Not quite');
    }
}

let player = prompt('What is your name?');
alert('How\'s it going ' + player + ' Ready to play a little guessing game?')
document.getElementById('Usr-msg').innerHTML = 'Thank you for visiting my site ' + player;

let correct = 0;

for (let x = 0; x < questions.length; x++) {
    let response;
    if (x == 5){
        for(let i = 1; i <= 4; i++){
             response = prompt(questions[x])
             
            if (response > answers[x]) {
                alert('That number is to high.');
            } else if (response < answers[x]) {
                alert('That number is to low');
            } else if (response == answers[x]){
                alert('YOU GOT IT!!')
                correct += 1
                break;
            } else {
                alert('That wasn\'t a valid response.')
            }

            if(i == 4){
                alert('Nice try but the answer was 8')
            }
        }
    }  else if (typeof(answers[x]) === 'object') {
        for (let i = 1; i <= 6; i++){
            response = prompt(questions[x])
           let fav = false;

            for ( let answer of answers[x]) {
                if (response.toLocaleLowerCase() === answer){
                    alert('You are correct!!\nI also enjoy: ' + answers[x]);
                    fav = true;
                    correct += 1
                    break;
                }
            }
            if (fav == false){
                alert('That\'s a good one, but not one of my favorites')
            } else {
                break;
            }

            if (i === 6) {
                alert('Those are all good guesses but my favorite games are: ' + answers[x])
            }
        }
    } else {
        askQuestionWithAnswer(questions[x], answers[x]);
    }
}
alert('you got ' + correct + ' out of 7 correct!')
