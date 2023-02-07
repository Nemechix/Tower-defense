let lifeUi = document.getElementById(`LifePoints`)
let lifePoints = parseInt(lifeUi.innerHTML)
let enemyHit = new Audio("assets/hit.mp3")
enemyHit.volume = 1;

//Intervalo de cada cuanto tarda un enemigo en aparecer
function spawn (){
    let timerId = setInterval(() => {
    const enemy = new Enemy(10, 9, 0, "right", game)

    game.monster.push(enemy)
}, 2500);
}

spawn()


//refactor timers hacer


//Constructor enemigos
function Enemy(hp, x, y, direction, game) {
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

            if (map[this.pos.x][this.pos.y + 1] === 1 || map[this.pos.x][this.pos.y + 1] === 2) {
                let enemy = document.querySelector(`.row${this.pos.x} .col${this.pos.y}`);

                enemy.classList.remove("enemy")
                nextCellright.classList.add("enemy")
                this.pos.y++
            } else if (nextCelldown.classList.contains("path")) {
                this.direction = 'down'
            } else {
                this.direction = 'up'
            }
        }

        if (this.direction === "up") {

            let nextCell = document.querySelector(`.row${this.pos.x - 1} .col${this.pos.y}`);


            if (map[this.pos.x - 1][this.pos.y] === 1) {
                let enemy = document.querySelector(`.row${this.pos.x} .col${this.pos.y}`);
                enemy.classList.remove("enemy")
                nextCell.classList.add("enemy")
                this.pos.x--
            } else if (this.direction !== "up") {
                this.direction = 'down'
            } else {
                this.direction = "right"
            }
        }

        if (this.direction === "down") {

            let nextCelldown = document.querySelector(`.row${this.pos.x + 1} .col${this.pos.y}`);
            let nextCellleft = document.querySelector(`.row${this.pos.x} .col${this.pos.y - 1}`);

            if (map[this.pos.x + 1][this.pos.y] === 1) {
                let enemy = document.querySelector(`.row${this.pos.x} .col${this.pos.y}`);

                enemy.classList.remove("enemy")
                nextCelldown.classList.add("enemy")
                this.pos.x++
            } else if (nextCellleft.classList.contains("path")) {
                this.direction = 'left'
            } else {
                this.direction = 'right'
            }
        }
        if (endPosition.classList.contains("end")) {
            lifePoints -= 1
            lifeUi.innerHTML = lifePoints

            let enemy = document.querySelector(`.row${this.pos.x} .col${this.pos.y}`);
            enemy.classList.remove("enemy")
            clearInterval(this.enemyId)
            game.monster.shift()

            if(lifePoints === 0){
            document.getElementById("gameOver").style.visibility = "visible"
            }

        }

        Enemy.prototype.receiveDamage = function (dmg) {
            this.hp -= dmg
        }


        game.range.forEach(element => {
            for (let i = 1; i < element.length; i++) {
                let coord = element[i]
                if (coord.x === this.pos.x && coord.y === this.pos.y) {

                    game.turret.forEach(turret => {
                        if (turret.pos.x === element[0].x && turret.pos.y === element[0].y) {
                            this.receiveDamage(turret.dmg)
                            
                        }
                    });

                }
            }
        });

        if (this.hp <= 0) {
            enemyHit.play()

            scorePlayer += 1
            scoreUi.innerHTML = scorePlayer

            moneyPlayer += 10
            moneyUi.innerHTML = moneyPlayer

            let enemy = document.querySelector(`.row${this.pos.x} .col${this.pos.y}`);
            enemy.classList.remove("enemy")
            clearInterval(this.enemyId)
            game.monster.shift()

        }
    }
}

