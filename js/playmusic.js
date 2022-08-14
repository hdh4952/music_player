import song from "./song.js";

const playBtn = document.querySelector(".main__playBtn");
const bgImg = document.querySelector(".main__album");
let song_title = document.querySelector(".song__title");
let song_artist = document.querySelector(".song__text");
bgImg.style.animationPlayState = "paused";

function searchParam(key) {
    const result = new URLSearchParams(location.search).get(key);
    if(result) return result;
    return 0;
};

const songIdx = parseInt(searchParam('id'));
let audio = new Audio();
audio.src = song[songIdx].src;
song_title.innerText = `${song[songIdx].title}`;
song_artist.innerText = `${song[songIdx].artist}`;

const onClickPlayBtn = (e) => {
    e.target.classList.toggle("fa-circle-play");
    e.target.classList.toggle("fa-circle-pause");
    bgImg.style.animationPlayState = bgImg.style.animationPlayState == "paused" ? "running" : "paused";

    if(audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
}

playBtn.addEventListener("click", onClickPlayBtn);