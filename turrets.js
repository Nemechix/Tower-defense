let turrets0 = document.getElementById("turrets0")
let chosenTurret = ``

let cells = document.querySelectorAll(`#board td`)

let moneyUi = document.getElementById(`uiMoney`)
let moneyPlayer = parseInt(moneyUi.innerHTML)



function Turret(dmg, x, y, right, rightUp, rightDown, left, leftUp, leftDown, up, down) {

    this.dmg = dmg
    this.sprite = document.getElementById(`turrets0`)
    this.pos = {
        x: x,
        y: y
    }
    this.range = {
        right : right,
        rightUp: rightUp,
        rightDown: rightDown,


        left: left,
        leftUp: leftUp,
        leftDown: leftDown,

        up: up,
        down: down
    }

}

/* let range = Turret.prototype.range = function () {
    this.range.right = document.querySelector(`.row${row} .col${col + 1}`);
    this.range.rightUp = document.querySelector(`.row${row - 1} .col${col + 1}`);
    this.range.rightDown = document.querySelector(`.row${row + 1} .col${col + 1}`);


    this.range.left = document.querySelector(`.row${row} .col${col - 1}`);
    this.range.leftUp = document.querySelector(`.row${row - 1} .col${col - 1}`);
    this.range.leftDown = document.querySelector(`.row${row + 1} .col${col - 1}`);

    this.range.up = document.querySelector(`.row${row - 1} .col${col}`);
    this.range.down = document.querySelector(`.row${row + 1} .col${col}`);

} */


Turret.prototype.attack = function () {
    if (turret.range.contains(`enemy`)) {
        console.log(turret.attack())
    }

}



turrets0.onclick = function () {
    chosenTurret = `turrets0`
}

turrets1.onclick = function () {
    chosenTurret = `turrets1`
}

turrets2.onclick = function () {
    chosenTurret = `turrets2`
}

cells.forEach((element) => {
    element.onclick = function () {
        if (!element.classList.contains(`path`)) {
            if (moneyPlayer >= 10 && chosenTurret !== 1) {
                let row = element.parentNode.classList[0].replace(`row`, ``)
                row = parseInt(row)

                let col = element.className.replace(`col`, ``)
                col = parseInt(col)

                let right = document.querySelector(`.row${row} .col${col + 1}`);
                let rightUp = document.querySelector(`.row${row - 1} .col${col + 1}`);
                let rightDown = document.querySelector(`.row${row + 1} .col${col + 1}`);


                let left = document.querySelector(`.row${row} .col${col - 1}`);
                let leftUp = document.querySelector(`.row${row - 1} .col${col - 1}`);
                let leftDown = document.querySelector(`.row${row + 1} .col${col - 1}`);

                let up = document.querySelector(`.row${row - 1} .col${col}`);
                let down = document.querySelector(`.row${row + 1} .col${col}`);

                if (chosenTurret === `turrets0`) {
                    turret = new Turret(5, row, col, right, rightUp, rightDown, left, leftUp, leftDown, up, down)

                } else if (chosenTurret === `turrets1`) {
                    turret = new Turret(5, row, col)

                } else if (chosenTurret === `turrets2`) {
                    turret = new Turret(5, row, col)
                }


                /* turret.range() */
                element.setAttribute(`id`, chosenTurret)
                moneyPlayer -= 10
                moneyUi.innerHTML = moneyPlayer
                game.turret.push(turret)
                game.range.push(turret.range)
                console.log(game.range)
                
                
                
                /* game.range.push(range) */
                

                
            }
        }
    }

});