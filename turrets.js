let turrets0 = document.getElementsByClassName("turrets0")[0]
let turrets1 = document.getElementsByClassName("turrets1")[0]
let turrets2 = document.getElementsByClassName("turrets2")[0]

let chosenTurret = ``

let cells = document.querySelectorAll(`#board td`)

let moneyUi = document.getElementById(`uiMoney`)
let moneyPlayer = parseInt(moneyUi.innerHTML)

let scoreUi = document.getElementById(`score`)
let scorePlayer = parseInt(scoreUi.innerHTML)

let putTurret = new Audio("assets/fire-magic-6947.mp3")
putTurret.volume = 1;




function Turret(dmg, x, y) {

    this.dmg = dmg
    this.sprite = document.getElementsByClassName(`turrets`)
    this.pos = {
        x: x,
        y: y
    }
    this.range = [
        this.pos,
        right = { x: this.pos.x, y: this.pos.y + 1 },
        rightUp = { x: this.pos.x - 1, y: this.pos.y + 1 },
        rightDown = { x: this.pos.x + 1, y: this.pos.y + 1 },



        left = { x: this.pos.x, y: this.pos.y - 1 },
        leftUp = { x: this.pos.x - 1, y: this.pos.y - 1 },
        leftDown = { x: this.pos.x + 1, y: this.pos.y - 1 },

        up = { x: this.pos.x - 1, y: this.pos.y },
        down = { x: this.pos.x + 1, y: this.pos.y + 1 },
    ]

}

turrets0.onclick = function () {
    chosenTurret = `turrets0`
    console.log(`work`)
}

turrets1.onclick = function () {
    chosenTurret = `turrets1`
}

turrets2.onclick = function () {
    chosenTurret = `turrets2`
}

cells.forEach((element) => {
    element.onclick = function () {
        if (!element.classList.contains(`path`) && !element.classList.contains(`turrets0`) && !element.classList.contains(`turrets1`) && !element.classList.contains(`turrets2`)){
            if (moneyPlayer >= 10 && chosenTurret !== 1) {

                let row = element.parentNode.classList[0].replace(`row`, ``)
                row = parseInt(row)

                let col = element.className.replace(`col`, ``)
                col = parseInt(col)




                if (chosenTurret === `turrets0`) {
                    var turret = new Turret(2, row, col)

                } else if (chosenTurret === `turrets1`) {
                    var turret = new Turret(5, row, col)

                } else if (chosenTurret === `turrets2`) {
                    var turret = new Turret(5, row, col)
                }


                game.turret.push(turret)
                game.range.push(turret.range)

                element.classList.add(chosenTurret)
                moneyPlayer -= 10
                moneyUi.innerHTML = moneyPlayer

                putTurret.play()
            }
        }
    }

});

