let secretNumber;
let chances = 3;
let timer = 60;
let timerInterval;
const username = (localStorage.getItem("username"))
//creating a function to start the game
function startGame() {
    secretNumber = Math.floor(Math.random() * 10) + 1;
    timerInterval = setInterval(updateTimer, 1000);
}
//This function used to update the timer
function updateTimer() {
    if (timer > 0) {
        timer--;
        document.getElementById('timer').textContent = timer;
    } else {
        endGame(`Time's up! ${username}  you ran out of time.`);
    }
}
// this function used to guess the number
function guessNumber() {
    const guessInput = document.getElementById("guessInput")
    const resultMessage = document.getElementById("result")
    const Dispaly = document.getElementById("chances")
    if (chances > 0 || timer > 0) {
        console.log("check 1")
        const userGuess = parseInt(guessInput.value)
        if (!isNaN(userGuess)) {
            if (userGuess === secretNumber) {
                endGame(`congratulations ${username}! won the game`)
            } else if (userGuess < secretNumber) {
                resultMessage.innerHTML = "Low but your near try again"
            } else {
                resultMessage.innerHTML = "high but your near try again"
            } if (chances == 1) {
                console.log("djcsdef")
                endGame(`Game over! ${username} you have no more turns`)

            }
            chances--;
            console.log("chhhhh", chances)


            Dispaly.textContent = chances

        } else {
            alert("plase enter a valid number")
        }
        guessInput.value = '';
    } else if (chances == 0) {
        console.log("check 2")
        endGame(`Game over! ${username} you have no more turns`)
    }

}
// this function use to end the game
function endGame(message) {
    clearInterval(timerInterval)
    document.getElementById("result").textContent = message
    document.getElementById("chances").textContent = "0"
    document.getElementById("timer").textContent = "0"

}
startGame()



