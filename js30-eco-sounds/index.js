let isPlay = false;
const play = document.querySelector('.play');
const audio = new Audio();


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




/*
function playAudio() {
    if (isPlay = true) {
        audio.src = './assets/audio/forest.mp3';
        audio.currentTime = 0;
        audio.play();
        play.classList.add('pause');
        isPlay = true;

    } else {
        play.classList.remove('pause');
        audio.pause();
        isPlay = false;
    }  
}
play.addEventListener('click', playAudio)



function toggleAudio() {
     play.classList.toggle('.pause');
    } 

play.addEventListener('click', toggleAudio)
*/







/*const navItem = [...document.querySelectorAll('.nav_item')];
const navList = document.querySelector('.nav_list');
const main = document.querySelector('main');



/*
navList.addEventListener('click', (event) => {
    changeImage(event)
});

function changeImage(event) {
    if (event.target.classList.contains('nav_item')) {
    main.forEach((img, index) => img.src = `./assets/img/${event.target.dataset.item}/${index + 1}.jpg` )
    }
}

console.log(event.target.classList.contains('nav_item'));
//console.log(main);
*/
