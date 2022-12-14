const p1Button = document.querySelector('#p1Button');
const p2Button = document.querySelector('#p2Button');
const resetButton = document.querySelector('#resetButton');
const p1Display = document.querySelector('#p1Display');
const p2Display = document.querySelector('#p2Display');
const playTo = document.querySelector('#playTo');

let p1Score = 0;
let p2Score = 0;
let winningScore = 5;
let isGameOver = false;


function congrats() {
    let namePlayerOne = document.querySelector('#namePlayerOne').value;
    let namePlayerTwo = document.querySelector('#namePlayerTwo').value;
    if (namePlayerOne != null && p1Score === winningScore) {
        document.getElementById('winner').innerText = "Congratulations " + namePlayerOne + "!!! You are the winner :)";
    } else if (namePlayerTwo != null && p2Score === winningScore) {
        document.getElementById('winner').innerText = "Congratulations " + namePlayerTwo + "!!! You are the winner :)";
    }
}

p1Button.addEventListener('click', function () {
    if (!isGameOver) {
        p1Score += 1;
        if (p1Score === winningScore) {
            isGameOver = true;
            p1Display.classList.add('has-text-success');
            p2Display.classList.add('has-text-danger');
            p1Display.disabled = true;
            p2Display.disabled = true;
            congrats();
        }
        p1Display.textContent = p1Score;

    }
})

p2Button.addEventListener('click', function () {
    if (!isGameOver) {
        p2Score += 1;
        if (p2Score === winningScore) {
            isGameOver = true;
            p2Display.classList.add('has-text-success');
            p1Display.classList.add('has-text-danger');
            p1Display.disabled = true;
            p2Display.disabled = true;
            congrats();
        }
        p2Display.textContent = p2Score;
    }
})

playTo.addEventListener('change', function () {
    winningScore = parseInt(this.value);
    reset();
})

resetButton.addEventListener('click', reset)

function reset() {
    isGameOver = false;
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = 0;
    p2Display.textContent = 0;
    p1Display.classList.remove('has-text-success', 'has-text-danger');
    p2Display.classList.remove('has-text-success', 'has-text-danger');
    p1Display.disabled = false;
    p2Display.disabled = false;
    namePlayerOne.value = "";
    namePlayerTwo.value = "";
    document.getElementById('winner').innerText = "";
}


