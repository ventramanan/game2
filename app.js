let secretNumber;
let chances=3;
let timer=60;
let timerInterval;
const userInfo=JSON.parse(localStorage.getItem("userInfo"))
function startGame() {
    secretNumber = Math.floor(Math.random() * 10) + 1;
    timerInterval = setInterval(updateTimer, 1000);
}

function updateTimer() {
    if (timer > 0) {
        timer--;
        document.getElementById('timer').textContent = timer;
    } else {
        endGame(`Time's up! ${userInfo.username}  you ran out of time.`);
    }
}
function guessNumber(){
    const guessInput=document.getElementById("guessInput")
    const resultMessage=document.getElementById("result")
    const Dispaly=document.getElementById("chances")
    if (chances>0 && timer>0){
        const userGuess=parseInt(guessInput.value)
        if(!isNaN(userGuess)){
            if(userGuess===secretNumber){
                endGame(`congratulations ${userInfo.username}! won the game`)
            }else if(userGuess<secretNumber){
                resultMessage.innerHTML="Low but your near try again"
            }else{
                resultMessage.innerHTML="high but your near try again"
            }
            chances--
            Dispaly.textContent=chances
        }else{
            alert("plase enter a valid number")
        }
        guessInput.value='';
    }else{
        endGame(`Game over! ${userInfo.username} you have no more turns`)
    }
        
}
    


function endGame(message){
    clearInterval(timerInterval)
    document.getElementById("result").textContent=message
    document.getElementById("chances").textContent="0"
    document.getElementById("timer").textContent="0"

}
startGame()


