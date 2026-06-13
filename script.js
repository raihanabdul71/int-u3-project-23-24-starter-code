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







// When you're ready to make event handlers, uncomment the code below. 
//  - Then fill in the blanks with the correct variables.


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
