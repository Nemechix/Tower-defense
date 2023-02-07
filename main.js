let game = {
    turret: [],
    range: [],
    monster: [],
}

let musicaGame = new Audio("assets/musica.mp3")
musicaGame.volume = 0.2;

musicaGame.play()



//Timer
const timeKeeper = document.getElementById(`timer`)

let seconds = 0
let interval = null

function chronometre() {
    seconds++
    let hrs = Math.floor(seconds / 3600)
    let mins = Math.floor((seconds - (hrs * 3600)) / 60)
    let secs = seconds % 60

    if (secs < 10) {
        secs = `0` + secs
    }

    if (secs < 10) {
        mins = `0` + mins
    }



    timeKeeper.innerText = `${mins}:${secs}`
}

function start() {
    if (interval) {
        return
    }
    interval = setInterval(chronometre, 1000)
}
start()



//canvas
const canvas = document.createElement(`canvas`)
document.body.appendChild(canvas)
canvas.setAttribute(`id`, `gameOver`)


const startAgain = document.createElement(`button`)

const h1 = document.createElement(`h1`)
const gameOver = document.createTextNode(`Game Over`)

h1.appendChild(gameOver)
canvas.appendChild(h1)