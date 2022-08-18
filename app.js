'use strict'; //strict syntax

let questions = [
    'Do Apes have tails?',
    'Was the Gameboy created by a Janitor?',
    'Do penguins propose to each other with singing?',
    'Does honey have an expiration date?',
    'Does an octopus have 3 hearts, 9 brains, and blue blood?',
    'Guess a number between 1 and 10',
    'What is my favorite nintendo game?'
]

let answers = [
    'no',
    'yes',
    'no',
    'no',
    'yes',
    8,
    ['castlevania','mario kart','metroid','zelda','mario party',]
]

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
        response = prompt(questions[x])

        if (response.toLowerCase() === answers[x]) {
            alert('You are correct!!');
            correct += 1
        } else {
            alert('That\'s not quite right.')
        }
    }
};
alert('You got ' + correct + ' out of 7 correct')
