//Intervalo de cada cuanto tarda un enemigo en aparecer

let timerId = setInterval(() => {
    const enemy = new Enemy(10, 9, 0, "right", Game)
    Game.monster.push(enemy)
    console.log(Game.monster)
}, 3000);

//Constructor enemigos
function Enemy(hp, x, y, direction, Game) {
    this.pos = {
        x: x,
        y: y
    }
    this.hp = hp
    this.direction = direction
    this.enemyId = setInterval(() => {
        this.movePath()
    }, 200); //Velocidad de movimiento entre celdas

    Enemy.prototype.movePath = function () {
        let endPosition = document.querySelector(`.row${this.pos.x} .col${this.pos.y + 1}`)


        if (this.direction === "right") {

            let nextCellright = document.querySelector(`.row${this.pos.x} .col${this.pos.y + 1}`);
            let nextCelldown = document.querySelector(`.row${this.pos.x + 1} .col${this.pos.y}`);


            if (nextCellright.classList.contains("path")) {
                let enemy1 = document.querySelector(`.row${this.pos.x} .col${this.pos.y}`);

                enemy1.classList.remove("enemy1")
                nextCellright.classList.add("enemy1")
                this.pos.y++
            } else if (nextCelldown.classList.contains("path")) {
                this.direction = 'down'
            } else {
                this.direction = 'up'
            }
        }

        if (this.direction === "up") {
            let nextCell = document.querySelector(`.row${this.pos.x - 1} .col${this.pos.y}`);
            let checkPath = nextCell.classList.contains("path")
            if (checkPath == true) {
                let enemy1 = document.querySelector(`.row${this.pos.x} .col${this.pos.y}`);
                enemy1.classList.remove("enemy1")
                nextCell.classList.add("enemy1")
                this.pos.x--
            } else if (this.direction !== "up") {
                this.direction = 'down'
            } else {
                this.direction = "right"
            } money.innerHTML = money2
            Game.torreta.push(element)
            console.log(Game.torreta)
            console.log(Game.cellsEnemy)

        }
    }
}
});



        if (this.direction === "down") {

            let nextCelldown = document.querySelector(`.row${this.pos.x + 1} .col${this.pos.y}`);
            let nextCellleft = document.querySelector(`.row${this.pos.x} .col${this.pos.y - 1}`);

            if (nextCelldown.classList.contains("path")) {
                let enemy1 = document.querySelector(`.row${this.pos.x} .col${this.pos.y}`);

                enemy1.classList.remove("enemy1")
                nextCelldown.classList.add("enemy1")
                this.pos.x++
            } else if (nextCellleft.classList.contains("path")) {
                this.direction = 'left'
            } else {
                this.direction = 'right'
            }
        }
        if (endPosition.classList.contains("end")) {
            clearInterval(this.enemyId)
            Game.monster.shift()


        }
    }
}