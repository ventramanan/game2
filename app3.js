// this function is user to dispaly the user info
function saveUserInfo() {
    var username = document.getElementById("name").value;
    var usernickname = document.getElementById("nickname").value;

    if (username && usernickname) {
        var userInfo = {
            username: username,
            usersnickname: usernickname,
        };

        localStorage.setItem("username", (userInfo.username));
        localStorage.setItem("usernickname", (userInfo.usersnickname));


        alert("Welcome, " + username + "! Your info has been saved successfully!");
    } else {
        alert("Please fill in both name and nickname fields.");
    }
}
var button = document.getElementById("bt-n");
button.addEventListener("click", () => {
    window.location.href = "./game1.html";
});
// this addeventlistener is used to play sound
document.addEventListener("DOMContentLoaded",function (){
    const playButton=document.getElementById("playButtons")
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
        playButton.style.backgroundColor="purple"
    })
    audio.addEventListener("play",function (){
        playButton.style.backgroundColor="purple"
    })
})