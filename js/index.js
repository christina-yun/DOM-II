// Your code goes here

//All button variables
const allButtons = document.querySelectorAll('.btn');

//Nav links
const navLinks = document.querySelectorAll('.nav-link');

//logoHeading 
const logoHeading = document.querySelector('main-navigation');

//Image variables
const allImg = document.querySelectorAll('img');
const funBusImg = allImg[0];
const adventureImg = allImg[1];
const funImg = allImg[2];
const destinationImg = allImg[3];

//testing creating a youtube video variable
// let youtube;

// youtube = document.createElement('youtube');
// // youtube.innerHTML = "<iframe width='560' height= '315' src='https://www.youtube.com/embed/dQw4w9WgXcQ' title='YouTube video player' frameborder='0' allow=accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>"
// youtube.style.display = 'none';
// youtube.src = 'https://www.youtube.com/embed/dQw4w9WgXcQ'

// document.content-destination.appendChild('youtube');
// console.log(youtube);

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

//5 Double click

function disappear(event){
    destinationImg.style.display = 'none'
}
destinationImg.addEventListener('dblclick', disappear);

//6 keydown
function rickRoll(event){
    if(event.key === 'c'){
        window.location = "https://www.youtube.com/embed/dQw4w9WgXcQ";
    }
};
document.addEventListener('keydown', rickRoll);

//7 mousemove
function mouseMove(event){
    event.target.style.color = "pink"
};
navLinks.forEach(function(item){
    item.addEventListener('mousemove', mouseMove);
});

//8 mouseleave
function mouseLeave(event){
    event.target.style.color ="black";
};
navLinks.forEach(item => {
    item.addEventListener('mouseleave', mouseLeave);
});

//9 keyup
function keyUp(event){
    if(event.key === 'Escape'){
        window.close()
}};

document.addEventListener('keyup', keyUp)

//10 
function clickHome(event){
    window.location = "http://localhost:1234/";
};
navLinks[1].addEventListener('click', clickHome);