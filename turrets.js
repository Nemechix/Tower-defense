// let torreta1 = document.getElementById("torreta1")
// let cells = document.querySelectorAll("#board td")
// let cellsEnemy = document.querySelectorAll("#board td")
// let path = document.querySelectorAll(".path")

// let chosedTurret = ""
// let torreUP = "no"
// let money = document.getElementById("uiMoney")
// let money2 = parseInt(money.innerHTML)

// function Turret(dmg, x, y) {
//     this.dmg = dmg
//     this.sprite = document.getElementById("torreta1")
//     this.pos = {
//         x: x,
//         y: y
//     }
//     Turret.prototype.range = function () {
        
//          let rangeRight = document.querySelector(`.row${this.pos.x} .col${this.pos.y + 1}`);
//         let rangeLeft = document.querySelector(`.row${this.pos.x} .col${this.pos.y - 1}`);
//         let rangeUp = document.querySelector(`.row${this.pos.x - 1} .col${this.pos.y}`);
//         let rangeDown = document.querySelector(`.row${this.pos.x + 1} .col${this.pos.y}`);

//         if (rangeRight.classList.contains("enemy1")) {
//             console.log("hit") 
//         }
//     }
// }

// let turret1 = new Turret(5)


// torreta1.onclick = function () {
//     chosedTurret = "torreta1"
//     console.log("work")  
// }

// //Sistema de colocar torretas
// cells.forEach((element) => {

//     element.onclick = function () {
//         if (!element.classList.contains("path")) {
//             if (money2 >= 10 && chosedTurret !== 1) {

//                 element.setAttribute("id", chosedTurret)
//                 money2 = money2 - 10
//                 money.innerHTML = money2
//                 game.torreta.push(element)

//             }
//         }
//     }
// }); 