// Declare variables below to save the different divs of your story.

// Screen 1
let optionOneBtn = document.querySelector('.option-one');
let optionOneScreen = document.querySelector('.option-one-screen');
let opening = document.querySelector('.story-opening');
let subTitle = document.querySelector('.sub-title');
let firstButtons = document.querySelector('.buttons')
let optionOneTitle = document.querySelector('.option-one-title');

// Screen 2
let optionTwoBtn = document.querySelector('.option-two');
let optionTwoScreen = document.querySelector('.option-two-screen');
let optionTwoTitle = document.querySelector('.option-two-title')
let secondBtns = document.querySelector('.option-one-end-btn');

// Screen 3
let optionOneEndTitle = document.querySelector('.option-one-end-title');
let optionOneEnd = document.querySelector('.option-one-end');
let thirdBtns = document.querySelector('.option-two-end-btn');


// Screen 4
let optionTwoEndTitle = document.querySelector('.option-two-end-title');
let optionTwoEnd = document.querySelector('.option-two-end');
let tryAgain = document.querySelector('.option-three');
let startOver = document.querySelector('.option-four');







// When you're ready to make event handlers, uncomment the code below. 
//  - Then fill in the blanks with the correct variables.

tryAgain.addEventListener('click', function(){
    opening.style.display = 'block';
    subTitle.style.display = 'block';
    firstButtons.style.display = 'block';
    optionOneEndTitle.style.display = 'none';
    optionOneEnd.style.display = 'none';
});

startOver.addEventListener('click', function(){
    opening.style.display = 'block';
    subTitle.style.display = 'block';
    firstButtons.style.display = 'block';
    optionTwoEndTitle.style.display = 'none';
    optionTwoEnd.style.display = 'none';
});


optionOneBtn.addEventListener ('click', function(){
    optionOneTitle.style.display = 'block';
    optionOneScreen.style.display = 'block';
    opening.style.display = 'none';
    subTitle.style.display = 'none';
    firstButtons.style.display = 'none';
    optionTwoScreen.style.display = 'none'
    optionTwoTitle.style.display = 'none';
    optionOneEndTitle.style.display = 'none';
    optionOneEnd.style.display = 'none';
    optionTwoEndTitle.style.display = 'none';
    optionTwoEnd.style.display = 'none';


});

optionTwoBtn.addEventListener('click', function(){
    optionTwoScreen.style.display = 'block';
    optionTwoTitle.style.display = 'block';
    opening.style.display = 'none';
    subTitle.style.display = 'none';
    firstButtons.style.display = 'none';
    optionOneScreen.style.display = 'none';
    optionOneTitle.style.display = 'none';
    optionOneEndTitle.style.display = 'none';
    optionOneEnd.style.display = 'none';
    optionTwoEndTitle.style.display = 'none';
    optionTwoEnd.style.display = 'none';

});


secondBtns.addEventListener('click', function(){
    optionOneEndTitle.style.display = 'block';
    optionOneEnd.style.display = 'block';
    optionOneTitle.style.display = 'none';
    optionOneScreen.style.display = 'none';
    optionTwoTitle.style.display = 'none';
    optionTwoScreen.style.display = 'none';
    opening.style.display = 'none';
    subTitle.style.display = 'none';
    firstButtons.style.display = 'none';
    optionTwoEndTitle.style.display = 'none';
    optionTwoEnd.style.display = 'none';
    
});


thirdBtns.addEventListener('click', function(){
    optionTwoEndTitle.style.display = 'block';
    optionTwoEnd.style.display = 'block';
    optionOneEndTitle.style.display = 'none';
    optionOneEnd.style.display = 'none';
    optionOneScreen.style.display = 'none';
    optionOneTitle.style.display = 'none';
    optionTwoTitle.style.display = 'none';
    optionTwoScreen.style.display = 'none';
    opening.style.display = 'none';
    subTitle.style.display = 'none';
    firstButtons.style.display = 'none';

});

optionOneBtn.onmouseover = function() {
    optionOneBtn.style.backgroundColor = '#9A1316';
    optionOneBtn.style.color = 'white';
    optionOneBtn.innerHTML = 'SPIDEY TIME !';
};

optionOneBtn.onmouseout = function() {
    optionOneBtn.style.backgroundColor = '';
    optionOneBtn.style.color = '';
    optionOneBtn.innerHTML = 'heck yeah i do'
};

optionTwoBtn.onmouseover = function() {
    optionTwoBtn.style.backgroundColor = '#9A1316';
    optionTwoBtn.style.color = 'white';
    optionTwoBtn.innerHTML = 'I DONT MIND A LITTLE HOLD UP !';
};

optionTwoBtn.onmouseout = function() {
    optionTwoBtn.style.backgroundColor = '';
    optionTwoBtn.style.color = '';
    optionTwoBtn.innerHTML = 'um... no, ill wait for the cops'
};

