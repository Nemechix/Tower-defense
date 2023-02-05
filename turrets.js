let torreta1 = document.getElementById("turrets0")
let cells = document.querySelectorAll("#board td")
let path = document.querySelectorAll(".path")

let chosedTurret = ""
let moneyUi = document.getElementById("uiMoney")
let moneyPlayer = parseInt(moneyUi.innerHTML)

function Turret(dmg, x, y) {
    this.dmg = dmg
    this.sprite = document.getElementById("torreta1")
    this.pos = {
        x: x,
        y: y
    }
    Turret.prototype.range = function () {

        let rangeRight = document.querySelector(`.row${this.pos.x} .col${this.pos.y + 1}`);
        let rangeLeft = document.querySelector(`.row${this.pos.x} .col${this.pos.y - 1}`);
        let rangeUp = document.querySelector(`.row${this.pos.x - 1} .col${this.pos.y}`);
        let rangeDown = document.querySelector(`.row${this.pos.x + 1} .col${this.pos.y}`);

        if (rangeRight.classList.contains("enemy1")) {
            console.log("hit")
        }
    }
}
let turret1 = new Turret(5)


torreta1.onclick = function () {
    chosedTurret = "torreta0"
    console.log("work")
}

//Sistema de colocar torretas
cells.forEach((element) => {

    element.onclick = function () {
        if (!element.classList.contains("path")) {
            if (moneyPlayer >= 10 && chosedTurret !== 1) {

                element.setAttribute("id", chosedTurret)
                moneyPlayer = moneyPlayer - 10
                moneyPlayer.innerHTML = moneyPlayer
                game.torreta.push(element)

            }
        }
    }
}); 