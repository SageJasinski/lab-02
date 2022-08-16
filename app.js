'use strict'; //strict syntax

let name = prompt('What is your name?');
alert('How\'s it going ' + name +'. Are you ready to play a little guessing  game?');
document.getElementById('Usr-msg').innerHTML = 'Thank you for visiting my site ' + name

let Q1 = prompt('Do Apes have tails?');
if (typeof(Q1) === 'string') {
    Q1 = Q1.toLowerCase();
};

if(Q1 == 'no') {
    alert('That\'s correct if it doesn\'t have a tail it\'s not a monkey it\'s an Ape')
    // console.log('That Correct');
} else if(Q1 == 'yes'){
    alert('Nice try but Apes don\'t have tails, Monkey\'s have a tail.')
} else {
    alert('Your answer must be yes or no. Try again!')
    Q1;
};

let Q2 = prompt('Was the Gameboy created by a Janitor?'); //Gunpei Yokoi a nintendo line worker submitted the idea to his superiors
if (typeof(Q2) === 'string') {
    Q2 = Q2.toLowerCase();
};

if(Q2 == 'yes'){
    alert('That\'s Correct. Gunpei Yokoi was a nintendo factory line worker who submitted his idea for the Gameboy to his superiors. Later it became a hit product of nintendo.')
    // console.log('That Correct');
} else if (Q2 == 'no') {
    alert('Incorrect. the gamboy was invented by Gunpei Yokoi was a nintendo factory line worker who submitted his idea for the Gameboy to his superiors. Later it became a hit product of nintendo. ')
} else {
    alert('Your answer must be yes or no. Try again!')
    Q2
};

let Q3 = prompt('Do penguins propose to each other with singing?'); // the propose to each other with pebbles
if (typeof(Q3) === 'string') {
    Q3 = Q3.toLowerCase();
};

if(Q3 == 'no') {
    alert('That\'s right. Penguins propose by giving each other pebbles.')
    // console.log('That Correct');
} else if(Q3 == 'yes') {
    alert('Actually unlike most birds penguins propose by giving each other pebbles.')
} else {
    alert('You answer must be yes or no. Tray again!')
    Q3
};

let Q4 = prompt('Does honey have an expiration date?'); //Honey does not spoil
if (typeof(Q4) === 'string') {
    Q4 = Q4.toLowerCase();
};

if(Q4 == 'no'){
    alert('That\'s right. You could feasibly eat 2000 year old honey.')
    // console.log('That Correct');
} else if (Q4 == 'yes'){
    alert('Honey actually never expires if it is stored properly.')
}else {
    alert('Your answer must be a yes or no. Try again!')
    Q4;
};

let Q5 = prompt('Does an octopus have 3 hearts, 9 brains, and blue blood?'); //yes
if (typeof(Q5) === 'string') {
    Q5 = Q5.toLowerCase();
};
if(Q5 == 'no'){
    alert('Octopi actually do have that many hearts and brains, and blue blood.')
} else if (Q5 == 'yes'){
    alert('That\'s right. It is said an octopus is more intelligent at the ends of it\'s tentacles.')
    // console.log('That Correct');
}else{
    alert('Your answer must be a yes or no. Try again!')
    Q5
};
