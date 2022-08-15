import song from './song.js';

const container = document.getElementById('container');

for(let i=0 ; i<song.length ; i++) {
    container.innerHTML += `
    <div class="music_box_container">
        <div class="album_photo">
          <a href="playmusic.html?id=${i}">
            <img
              class="album_image"
              src="images/${i}.jpg"
              alt="${song[i].title}"
            />
          </a>
        </div>
        <div class="music_title">
          <p>${song[i].title}</p>
        </div>
        <div class="artist_name">
          <p>${song[i].artist}</p>
        </div>
        <div class="play_BTN">
          <a><i id="${i}" class="fa-solid fa-play fa-2x"></i></a>
        </div>
      </div>`;
};

const playBtn = document.querySelectorAll(".play_BTN");
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

  if(audio[id].paused) {
    audio[id].play();
  } else {
    audio[id].pause();
  };

  for(let i = 0; i < id; i++){
    if(audio[i].paused == false) {
      document.getElementById(`${i}`).className = "fa-solid fa-play fa-2x";
      audio[i].pause();
    };
    audio[i].currentTime = 0;
  };

  for(let i = song.length - 1; i > id; i--){
    if(audio[i].paused == false) {
      document.getElementById(`${i}`).className = "fa-solid fa-play fa-2x";
      audio[i].pause();
    };
    audio[i].currentTime = 0;
  };
};

for(let i=0; i < song.length; i++){
    playBtn[i].addEventListener("click", change_playBTN);
}
