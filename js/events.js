console.log('This is separate JS file');

// ------option 1: directly set on the HTML element-------
// <button title="This is a tooltip" onclick="console.log(8)">Click Me!!!</button>
//<button onclick="console.log('87')">Another Button!!</button>

// option 2:add onclick function on the HTML element
function makeRed() {
    document.body.style.backgroundColor = 'red'
}

// option 3
const makeBlueButton=document.getElementById('make-blue');

makeBlueButton.onclick=makeBlue;
function makeBlue() {
    document.body.style.backgroundColor = 'blue'
}

// option 3 another
const makePurpleButton = document.getElementById('make-purple');

makePurpleButton.onclick=function makePurple(){
    document.body.style.backgroundColor='purple';
}


// option 4
const pinkButton=document.getElementById('make-pink');
pinkButton.addEventListener('click',makePink);

function makePink(){
    document.body.style.backgroundColor='pink';
}


// option 4 another
const greenButton = document.getElementById('make-green');
greenButton.addEventListener('click',
    function makeGreen(){
        document.body.style.backgroundColor='green'
    }
)

// option 4 final
document.getElementById('make-goldenrod').addEventListener(
    'click', function () {
        document.body.style.backgroundColor = 'goldenrod'
    }
)