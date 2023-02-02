function Enemy(hp, x, y, direction) {
    this.pos = {
        x: x,
        y: y
    }
    this.hp = hp
    this.direction = 'right'

    Enemy.prototype.movePath = function () {



        if (direction === "right") {
            let nextCell = document.querySelector(`.row${this.pos.x} .col${this.pos.y + 1}`);
            let checkPath = nextCell.classList.contains("path")
            if (checkPath == true) {
                let enemy1 = document.querySelector(`.row${this.pos.x} .col${this.pos.y}`);
                enemy1.classList.remove("enemy1")
                nextCell.classList.add("enemy1")
                this.pos.y++
                console.log(enemy1)
            } else if(checkeamos la celda a mano derecha) {
                direction = 'down'
            } else {
                direction = 'up'
            }

        if (direction === "down") {
            let nextCell = document.querySelector(`.row${this.pos.x + 1} .col${this.pos.y}`);
            let checkPath = nextCell.classList.contains("path")
            if (checkPath == true) {
                let enemy1 = document.querySelector(`.row${this.pos.x} .col${this.pos.y}`);
                enemy1.classList.remove("enemy1")
                nextCell.classList.add("enemy1")
                this.pos.y++
                console.log(enemy1)
            } else if (checkeamos la celda a mano derecha) {
                direction = 'down'
            } else {
                direction = 'up'
            }

        if (direction === "right") {
            let nextCell = document.querySelector(`.row${this.pos.x + 1} .col${this.pos.y}`);
            let checkPath = nextCell.classList.contains("path")
            if (checkPath == true) {
                let enemy1 = document.querySelector(`.row${this.pos.x} .col${this.pos.y}`);
                enemy1.classList.remove("enemy1")
                nextCell.classList.add("enemy1")
                this.pos.y++
                console.log(enemy1)
            } else if (checkeamos la celda a mano derecha) {
                direction = 'down'
            } else {
                direction = 'up'
            }

            if (direction === "left") {
                let nextCell = document.querySelector(`.row${this.pos.x + 1} .col${this.pos.y}`);
                let checkPath = nextCell.classList.contains("path")
                if (checkPath == true) {
                    let enemy1 = document.querySelector(`.row${this.pos.x} .col${this.pos.y}`);
                    enemy1.classList.remove("enemy1")
                    nextCell.classList.add("enemy1")
                    this.pos.y++
                    console.log(enemy1)
                } else if (checkeamos la celda a mano derecha) {
                    direction = 'down'
                } else {
                    direction = 'up'
                }







}/*
            else if (up === "up") {
                let nextCellUp = document.querySelector(`.row${this.pos.x - 1} .col${this.pos.y}`);
                var checkPathUp = nextCellUp.classList.contains("path")


                if (checkPathUp == true) {
                    let enemy1 = document.querySelector(`.row${this.pos.x} .col${this.pos.y}`);
                    enemy1.classList.remove("enemy1")
                    nextCellUp.classList.add("enemy1")
                    this.pos.x--
                    console.log(enemy1)

                }

                else if (down === "down") {
                    let nextCelldown = document.querySelector(`.row${this.pos.x + 1} .col${this.pos.y}`);
                    let checkPathdown = nextCelldown.classList.contains("path")

                    if (checkPathdown == true) {
                        let enemy1 = document.querySelector(`.row${this.pos.x} .col${this.pos.y}`);
                        enemy1.classList.remove("enemy1")
                        nextCelldown.classList.add("enemy1")
                        this.pos.x++
                        console.log(enemy1)
                    }

                }
            }

        
         if (down === "down") {
            let nextCelldown = document.querySelector(`.row${this.pos.x + 1} .col${this.pos.y}`);
            let checkPathdown = nextCelldown.classList.contains("path")

            if (checkPathdown == true && checkPathUp === false) {
                let enemy1 = document.querySelector(`.row${this.pos.x} .col${this.pos.y}`);
                enemy1.classList.remove("enemy1")
                nextCelldown.classList.add("enemy1")
                this.pos.x++
                console.log(enemy1)
            }




            Enemy.prototype.receiveDamage = function (damage) {
                this.hp -= damage
                if (this.hp > 0) {
                    //console.log("stillAlive")
                }
            }
        } */
    }
}

var enemy1 = new Enemy(10, 9, 0, "right")
let anim = setInterval(() => {
    enemy1.movePath()
}, 200);

//console.log(enemy1.pos)



function Turret1(dmg, posX, posY) {
    this.dmg = dmg
    this.sprite = document.getElementById("torreta1")


}


Turret1.prototype.attack = function () {
    return this.dmg
}



//torreta1 = new Turret1(5, xT, yT)

if (enemy1.posX === enemy1.posY) {
    enemy1.receiveDamage(torreta1.attack())
}



//let intervalId = setinterval(movepath, 1000)



