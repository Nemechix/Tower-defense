// //Intervalo de cada cuanto tarda un enemigo en aparecer

// let timerId = setInterval(() => {
//     const enemy = new Enemy(10, 9, 0, "right", game)
//     game.monster.push(enemy)
// }, 3000);


// //refactor timers hacer


// //Constructor enemigos
// function Enemy(hp, x, y, direction, game) {
//     this.pos = {
//         x: x,
//         y: y
//     }
//     this.hp = hp
//     this.direction = direction
//     this.enemyId = setInterval(() => {
//         this.movePath()
//     }, 200); //Velocidad de movimiento entre celdas

//     Enemy.prototype.movePath = function () {

//        let endPosition = document.querySelector(`.row${this.pos.x} .col${this.pos.y + 1}`)


//         if (this.direction === "right") {

//             let nextCellright = document.querySelector(`.row${this.pos.x} .col${this.pos.y + 1}`);
//             let nextCelldown = document.querySelector(`.row${this.pos.x + 1} .col${this.pos.y}`);

//             if (map[this.pos.x][this.pos.y + 1] === 1 || map[this.pos.x][this.pos.y + 1] === 2) {
//                 let enemy1 = document.querySelector(`.row${this.pos.x} .col${this.pos.y}`);

//                 enemy1.classList.remove("enemy1")
//                 nextCellright.classList.add("enemy1")
//                 this.pos.y++
//             } else if (nextCelldown.classList.contains("path")) {
//                 this.direction = 'down'
//             } else {
//                 this.direction = 'up'
//             }
//         }

//         if (this.direction === "up") {

//             let nextCell = document.querySelector(`.row${this.pos.x - 1} .col${this.pos.y}`);
            

//             if (map[this.pos.x - 1][this.pos.y] === 1) {
//                 let enemy1 = document.querySelector(`.row${this.pos.x} .col${this.pos.y}`);
//                 enemy1.classList.remove("enemy1")
//                 nextCell.classList.add("enemy1")
//                 this.pos.x--
//             } else if (this.direction !== "up") {
//                 this.direction = 'down'
//             } else {
//                 this.direction = "right"
//             }
//         }

//         if (this.direction === "down") {

//             let nextCelldown = document.querySelector(`.row${this.pos.x + 1} .col${this.pos.y}`);
//             let nextCellleft = document.querySelector(`.row${this.pos.x} .col${this.pos.y - 1}`);

//             if (map[this.pos.x + 1][this.pos.y] === 1) {
//                 let enemy1 = document.querySelector(`.row${this.pos.x} .col${this.pos.y}`);

//                 enemy1.classList.remove("enemy1")
//                 nextCelldown.classList.add("enemy1")
//                 this.pos.x++
//             } else if (nextCellleft.classList.contains("path")) {
//                 this.direction = 'left'
//             } else {
//                 this.direction = 'right'
//             }
//         }
//         if (endPosition.classList.contains("end")) {
//             clearInterval(this.enemyId)
//             game.monster.shift()

            
//         }
//     }
// }









