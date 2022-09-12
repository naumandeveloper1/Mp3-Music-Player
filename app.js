let playbutton = document.querySelector(".play");
let img = document.querySelector("img");
let nextbtn = document.querySelector(".next");
let contactinfo = document.querySelector(".contact");
let music = new Audio('./assert/song/song1.mp3');
playbutton.addEventListener("click", () => {
    if (music.paused || music.currentTime <= 0) {
        playbutton.innerText = "▣";
        img.classList.add("animate");
        music.play();
    }
    else {
        playbutton.innerText = "▶";
        img.classList.remove("animate");
        music.pause();
    }

});

setTimeout(() => {
    contactinfo.classList.remove("none")
    contactinfo.classList.add("block")
}, 5000)

