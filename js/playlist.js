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
}

const playBtn = document.querySelectorAll(".play_BTN");

const change_playBTN = (e) => {
  e.target.classList.toggle("fa-play");
  e.target.classList.toggle("fa-pause");
  console.log(e.target.classList[2]);

  const songIdx = parseInt(e.target.id);
  let audio = new Audio();
  audio.src = song[songIdx].src;
  console.log(songIdx);
  console.log(audio.src);

  if(e.target.classList[2] == "fa-pause") {
    audio.play();
    console.log("재생중임요");
  } else {
    audio.pause();
    console.log("정지함요");
  }
}

for(let i=0; i < song.length; i++){
    playBtn[i].addEventListener("click", change_playBTN);
}