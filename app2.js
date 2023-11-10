
button.addEventListener("click", () => {
    window.location.href = "./game.html";
});

document.addEventListener("DOMContentLoaded",function (){
    const playButton=document.getElementById("play")
    const audio=document.getElementById("myaudio")
    playButton.addEventListener("click",function(){
        if(audio.paused){
            audio.play();
        }else{
            audio.pause()
        }
    });
    audio.addEventListener("ended",function(){
        playButton.style.backgroundColor="#34398db"
    })
    audio.addEventListener("pause",function (){
        playButton.style.backgroundColor="#3498db"
    })
    audio.addEventListener("play",function (){
        playButton.style.backgroundColor="red"
    })
})