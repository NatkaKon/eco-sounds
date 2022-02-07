let isPlay = false;
const play = document.querySelector('.play');
const audio = new Audio();

//PLAY PAUSE 

function playAudio() {
        audio.src = './assets/audio/forest.mp3';
        audio.currentTime = 0;
        audio.play();
        isPlay = true;
} 

function pauseAudio() {
    audio.pause();
    isPlay = false;
}    
    
function toggleClass() {
    if (!isPlay) {
        playAudio();
    } else {
        pauseAudio();
    }
    play.classList.toggle('pause');
} 

play.addEventListener('click', toggleClass);


//change pictures


const navItem = [...document.querySelectorAll('.nav_item')];
const navList = document.querySelector('.nav_list'); //Родитель
const images = document.querySelector('.main');
/*
function changeImage(event, index) {
    if (event.target.hasAttribute('data_item')) {
        
      images.style.backgroundImage = `url('../assets/img/solovey.jpg')` ;
      
   } 
}

navList.addEventListener('click', changeImage)
*/

const one = document.querySelector('.one');
const two = document.querySelector('.two');
const three = document.querySelector('.three');
const four = document.querySelector('.four');
const five = document.querySelector('.five');
const icon = document.querySelector('.icon');

    
one.onclick = function (images) {
    console.log('work');
    audio.src = './assets/audio/solovey.mp3';
    audio.play();
    play.classList.toggle('pause');
    
    
    //images.style.backgroundImage = 'red';
    //images.style.paddingBottom = '500px';    
}

two.onclick = function (images) {
    console.log('play');
    audio.src = './assets/audio/drozd.mp3';
    audio.play();
    
}

three.onclick = function (images) {
    console.log('play');
    audio.src = './assets/audio/malinovka.mp3';
    audio.play();
    
}
four.onclick = function (images) {
    console.log('play');
    audio.src = './assets/audio/zhavoronok.mp3';
    audio.play();
    
}
five.onclick = function (images) {
    console.log('play');
    audio.src = './assets/audio/slavka.mp3';
    audio.play();
    
}

icon.onclick = function (images) {
    console.log('play');
    audio.src = './assets/audio/forest.mp3';
    audio.play();
    
}
/*function newBackGround (element,background) {
    element.style.backgroundImage = "url("+background+")";
 }
 
 newBackground (myElement,"newBackground.jpg");*/


 console.log(`Общий балл:52\nВёрстка +10\nАктивный в данный момент интерактивный элемент выделяется стилем +10\nПри кликах по интерактивным элементам меняется изображение + 2 балл(а)\nКнопка Play/Pause +20`)
