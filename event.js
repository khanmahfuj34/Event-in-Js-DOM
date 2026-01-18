console.log("Event module loaded.");
//option 2
function makeRed() {
    document.body.style.background = 'red';
}
//option 3
const makeBlueButton = document.getElementById('make-blue')
makeBlueButton.onclick = makeBlue;

function makeBlue() {
    document.body.style.background = 'blue';
}
//option 3 another way
const makePurpleButton = document.getElementById('make-purple')
makePurpleButton.onclick = function makePurple() {
    document.body.style.background = 'purple';
}

//option 4
const pinkButton = document.getElementById('make-pink');
pinkButton.addEventListener('click', makePink);

function makePink() {
    document.body.style.background = 'pink';
}
//option 4 another way
const greenButton = document.getElementById('make-green');
greenButton.addEventListener('click', function makeGreen() {
        document.body.style.background = 'green';
    })
    //option 4 final way
document.getElementById('goalden-rod').addEventListener('click', function() {
    document.body.style.background = 'goldenRod';
})