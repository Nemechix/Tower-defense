function Enemy(hp, x, y, direction) {
    this.pos = {
        x: x,
        y: y
    }
    this.hp = hp
    this.direction = 'right'

    Enemy.prototype.movePath = function () {
        let endPosition = document.querySelector(`.row${this.pos.x} .col${this.pos.y + 1}`)


        if (direction === "right") {

            let nextCellright = document.querySelector(`.row${this.pos.x} .col${this.pos.y + 1}`);
            let nextCelldown = document.querySelector(`.row${this.pos.x +1} .col${this.pos.y}`);
            
            
            if (nextCellright.classList.contains("path")) {
                let enemy1 = document.querySelector(`.row${this.pos.x} .col${this.pos.y}`);
                enemy1.classList.remove("enemy1")
                nextCellright.classList.add("enemy1")
                this.pos.y++
            } else if (nextCelldown.classList.contains("path")) {
                direction = 'down'
            } else {
                direction = 'up'
            }
        }

        if (direction === "up") {
            let nextCell = document.querySelector(`.row${this.pos.x - 1} .col${this.pos.y}`);
            let checkPath = nextCell.classList.contains("path")
            if (checkPath == true) {
                let enemy1 = document.querySelector(`.row${this.pos.x} .col${this.pos.y}`);
                enemy1.classList.remove("enemy1")
                nextCell.classList.add("enemy1")
                this.pos.x--
            } else if (direction !== "up") {
                direction = 'down'
            } else {
                direction = "right"
            }
        }

        if (direction === "down") {

            let nextCelldown = document.querySelector(`.row${this.pos.x +1} .col${this.pos.y}`);
            let nextCellleft = document.querySelector(`.row${this.pos.x} .col${this.pos.y - 1}`);

            if (nextCelldown.classList.contains("path")) {
                let enemy1 = document.querySelector(`.row${this.pos.x} .col${this.pos.y}`);
                enemy1.classList.remove("enemy1")
                nextCelldown.classList.add("enemy1")
                this.pos.x++
            } else if (nextCellleft.classList.contains("path")) {
                direction = 'left'
            } else {
                direction = 'right'
            }
        }
        if (endPosition.classList.contains("end")){
            clearInterval(anim)
        }
    }

    

}








    var enemy1 = new Enemy(10, 9, 0, "right")
    let anim = setInterval(() => {
        enemy1.movePath()
    }, 200);




    var enemy2 = new Enemy(5, 9, 0, "right")
    let anim1 = setInterval(() => {
        enemy2.movePath()
    }, 800);





    function Turret1(dmg, posX, posY) {
        this.dmg = dmg
        this.sprite = document.getElementById("torreta1")


    }

    Turret1.prototype.attack = function () {
        return this.dmg
    }




    if (enemy1.posX === enemy1.posY) {
        enemy1.receiveDamage(torreta1.attack())
    }









