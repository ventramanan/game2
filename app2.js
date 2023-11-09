var button=document.getElementById("button");
const myVideo = document.getElementById('backgroundMusic');
button.addEventListener("click", () => {
    window.location.href = "./game.html";
});
myVideo.play();
myVideo.loop=true
