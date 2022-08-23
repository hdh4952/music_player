import song from "./song.js";

const playBtn = document.querySelector(".main__playBtn");
const mainAlbum = document.querySelector(".main__album");
const song_title = document.querySelector(".song__title");
const song_artist = document.querySelector(".song__text");
mainAlbum.style.animationPlayState = "paused";

const searchParam = (key) => {
    const result = new URLSearchParams(location.search).get(key);
    if(result) return result;
    return 0;
};

const onClickPlayBtn = (e) => {
    changePlayBtnImage();
    audio.paused ? audio.play() : audio.pause();
};

const changePlayBtnImage = () => {
    const playBtnImg = playBtn.querySelector("i");
    playBtnImg.classList.toggle("fa-circle-play");
    playBtnImg.classList.toggle("fa-circle-pause");
    mainAlbum.style.animationPlayState = mainAlbum.style.animationPlayState == "paused" ? "running" : "paused";
}

const songIdx = parseInt(searchParam('id'));
let audio = new Audio();
audio.src = song[songIdx].src;
song_title.innerText = `${song[songIdx].title}`;
song_artist.innerText = `${song[songIdx].artist}`;

mainAlbum.addEventListener("click", onClickPlayBtn);
playBtn.addEventListener("click", onClickPlayBtn);
audio.addEventListener("ended", ()=>{
    audio.remove();
    changePlayBtnImage();
});

const checkAudio = () => {
    progress.removeAttribute('value');
    progress.value = Math.floor((audio.currentTime / audio.duration) * 100);
};

let playAudio = setInterval(checkAudio, 1000);

const changeProgress = (e) => {
    audio.currentTime = Math.floor((audio.duration) * e.target.value / 100);
}

const progress = document.querySelector("input");
progress.addEventListener("change", changeProgress);
