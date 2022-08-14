import song from "./song.js";

console.log(song);
const playBtn = document.querySelector(".main__playBtn");
const bgImg = document.querySelector(".main__album");
bgImg.style.animationPlayState = "paused";

const audio = new Audio(song[0].src);
audio.play();


onClickPlayBtn = (e) => {
    e.target.classList.toggle("fa-circle-play");
    e.target.classList.toggle("fa-circle-pause");
    bgImg.style.animationPlayState = bgImg.style.animationPlayState == "paused" ? "running" : "paused";


}

playBtn.addEventListener("click", onClickPlayBtn);