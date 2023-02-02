var x = document.querySelector(".enemy1")
var y = document.querySelector(".enemy1")
var xT = document.querySelector(".row8 .col11")
var yT = document.querySelector(".row8 .col11")

function Enemy(hp, Down, Right, Left, Up, ) {
    this.pos = [{ x: 10, y: 1 }]
    this.hp = hp
    this.sprite = document.querySelectorAll(".enemy1")

    this.directionRight = Right
    this.directionLeft = Left
    this.directionUp = Up
    this.directionDown = Down

    Enemy.prototype.movePath = function(){

    }

    Enemy.prototype.receiveDamage = function (damage) {
        this.hp -= damage
        if (this.hp > 0) {
            //console.log("stillAlive")
        }
    }
}
var enemy1 = new Enemy(10, x, y)


console.log(enemy1.pos)



function Turret1(dmg, posX, posY) {
    this.dmg = dmg
    this.sprite = document.getElementById("torreta1")


}


Turret1.prototype.attack = function () {
    return this.dmg
}


torreta1 = new Turret1(5, xT, yT)

if (enemy1.posX === enemy1.posY) {
    enemy1.receiveDamage(torreta1.attack())
}



//let intervalId = setinterval(movepath, 1000)



