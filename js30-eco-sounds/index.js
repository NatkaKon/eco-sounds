let isPlay = false;
const play = document.querySelector('.play');
const audio = new Audio();

//PLAY PAUSE 

function playAudio() {
        audio.src = '../assets/audio/forest.mp3';
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

/*
const navItem = [...document.querySelectorAll('.nav_item')];
const navList = document.querySelector('.nav_list'); //Родитель
const images = document.querySelectorAll('.main');

function changeImage(event, index) {
    if (event.target.hasAttribute('data_item')) {
        
      images.style.backgroundImage = `url(../assets/img/${event.target.dataset.item}/${index}.jpg)` 
   }
}

navList.addEventListener('click', changeImage)*/


console.log(`Общий балл:40\nВёрстка +10\nАктивный в данный момент интерактивный элемент выделяется стилем +10\nКнопка Play/Pause +20`)














/*
const suscribe = () => {
    navList.addEventListener('click', changeImage)

}
 suscribe();

/*
function changeImage(event) {
    if (event.target.classList.contains('nav_item')) {
    audio.src = `./assets/audio/${event}/${index + 1}.mp3`;
    images.style.backgroundImage = `url(/assets/img/${event}/${index + 1}.jpg)`;
   }
}


navList.addEventListener('click', changeImage)
*/
/*
function changeBgImg(){
    block.style.backgroundImage = "url('https://cs7062.vk.me/c540107/v540107359/2729/fYQlS_23QdA.jpg')";
}*/
/*
navList.addEventListener('click', (event) => {
    changeImage(event);
});

function changeImage(event) {
if(event.target.classList.contains('nav_item')) {
  // здесь код функции, меняющей src изображений
  images.forEach((img, index) => img.src = `./assets/img/${event.target.dataset.item}/${index + 1}.jpg`);
} 
}*/




