import song from "./song.js";

console.log(song);
const playBtn = document.querySelector(".main__playBtn");
const bgImg = document.querySelector(".main__album");
bgImg.style.animationPlayState = "paused";

function searchParam(key) {
    return new URLSearchParams(location.search).get(key);
};

let audio = new Audio();
audio.src = song[parseInt(searchParam('id'))].src;

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