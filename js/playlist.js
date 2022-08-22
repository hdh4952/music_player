import song from './song.js';

const container = document.getElementById('container');
const main_container = document.getElementById('main_container');

for(let i=0 ; i<song.length ; i++) {
    main_container.innerHTML += `
    <div class="music_box_container">
        <div class="album_photo">
          <a href="playmusic.html?id=${i}">
            <img
              class="album_image"
              src="images/${i}.jpg"
              alt="${song[i].title}"/>
          </a>
        </div>
        <div class="music_title">
          <p>${song[i].title}</p>
        </div>
        <div class="artist_name">
          <p>${song[i].artist}</p>
        </div>
        <div class="play_BTN">
          <div class="play_BTN_area">
          <a><i id="${i}" class="fa-solid fa-play fa-2x"></i></a>
          </div>
        </div>
      </div>`;
};

const playBtn = document.querySelectorAll(".play_BTN_area");
let glo_bar_playBtn = [];
let audio = [];

for(let i=0; i < song.length; i++){
  let newAudio = new Audio();
  newAudio.src = song[i].src;
  audio.push(newAudio);
};

const change_playBTN = (e) => {
  e.target.classList.toggle("fa-play");
  e.target.classList.toggle("fa-pause");
  const id = e.target.id;
  console.log("눌림");

  if(audio[id].paused) {
    audio[id].play();
  } else {
    audio[id].pause();
  };

  for(let i = 0; i < id; i++){
    if(audio[i].paused === false) {
      document.getElementById(`${i}`).className = "fa-solid fa-play fa-2x";
      audio[i].pause();
    };
    audio[i].currentTime = 0;
  };

  for(let i = song.length - 1; i > id; i--){
    if(audio[i].paused === false) {
      document.getElementById(`${i}`).className = "fa-solid fa-play fa-2x";
      audio[i].pause();
    };
    audio[i].currentTime = 0;
  };

  // 여기서부터 bar에 관한 code
const existBar = document.querySelector(".bar_container");
if (existBar) {
  existBar.remove();
} else {
  makeBar(id);
  const bar_playBtn = document.querySelector(".bar_play_BTN");
  glo_bar_playBtn.push(bar_playBtn);

  if (glo_bar_playBtn.length !== 0){
    glo_bar_playBtn[0].addEventListener("click", playpause);
  };
}
};

function makeBar(id){
  container.innerHTML += `
  <div class="bar_container">
  <div class="bar_photo">
    <a href="playmusic.html?id=${id}">
      <img
        class="bar_image"
        src="images/${id}.jpg"
        alt="${song[id].title}"/>
    </a>
  </div>
  <div class="music_title">
    <p>${song[id].title}</p>
  </div>
  <div class="artist_name">
    <p>${song[id].artist}</p>
  </div>
  <div class="bar_play_BTN">
    <a><i id="${id}" class="fa-solid fa-pause fa-2x"></i></a>
  </div>
  <div class="bar_skip_BTN">
    <a><i class="fa-solid fa-forward-step fa-2x"></i></a>
  </div>
  <div class="bar_exit_BTN">
    <a><i class="fa-solid fa-xmark fa-2x"></i></a>
  </div>
</div>`;
}

function playpause(){
  glo_bar_playBtn[0].children[0].childNodes[0].classList.toggle("fa-play");
  glo_bar_playBtn[0].children[0].childNodes[0].classList.toggle("fa-pause");

  // if(audio[barBTN.id].paused) {
  //   audio[barBTN.id].play();
  // } else {
  //   audio[barBTN.id].pause();
  // };
};

for(let i=0; i < song.length; i++){
  playBtn[i].addEventListener("click", change_playBTN);
}
