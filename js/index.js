// Your code goes here

//All button variables
const allButtons = document.querySelectorAll('.btn');

//Header variable
const header = document.querySelector('.intro');

//logoHeading 
const logoHeading = document.querySelector('main-navigation');

//Image variables
const allImg = document.querySelectorAll('img');
const funBusImg = allImg[0];
const adventureImg = allImg[1];
const funImg = allImg[2];
const destinationImg = allImg[3];


//1 Buttons mouseover

function signMeUp(event){
    event.target.style.color = 'blue';
    event.target.style.backgroundColor = "orange";
    event.target.style.cursor = 'pointer';
};
allButtons.forEach(function(item){
    item.addEventListener('mouseover', signMeUp);
});

//2 buttons mouseout
function closeSignMeUp(event){
    event.target.style.color = 'black';
    event.target.style.backgroundColor = 'white';
}
allButtons.forEach(function(item){
    item.addEventListener('mouseout', closeSignMeUp);
});

//3 buttons onclick
function clickSignMeUp(event){
    window.location = "https://stackoverflow.com/questions/13071967/adding-an-onclick-function-to-go-to-url-in-javascript"
    event.stopPropagation();
};
allButtons.forEach(function(item){
    item.addEventListener('click', clickSignMeUp);
});

//4 Transition image on mousedown
function changeFunBus(event){
    funBusImg.src = "https://images.unsplash.com/photo-1496416412749-10a3022bade0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80";
    funBusImg.style.opacity = '0.5';
    funBusImg.style.width = "100vw";
};
funBusImg.addEventListener('mousedown', changeFunBus);

//5 