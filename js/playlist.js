const playBtn = document.querySelectorAll(".play_BTN");

change_playBTN = (e) => {
    e.target.classList.toggle("fa-play");
    e.target.classList.toggle("fa-pause");
}

for(let i=0; i < playBtn.length; i++){
    playBtn[i].addEventListener("click", change_playBTN)
}