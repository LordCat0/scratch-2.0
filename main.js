window.RufflePlayer = window.RufflePlayer || {};

window.addEventListener("DOMContentLoaded", () => {
    let ruffle = window.RufflePlayer.newest();
    let player = ruffle.createPlayer();
    let container = document.getElementById("ruffle");

    container.appendChild(player);

    player.style.width = "100%";
    player.style.height = "100%";

    player.load("Scratch_2.swf");

    player.addEventListener("load", () => {
        player.play();
    });
});


window.addEventListener("beforeunload", function (e) {
    e.preventDefault();
    e.returnValue = "Your project might not be saved.";
});