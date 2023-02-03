let torreta1 = document.getElementById("torreta1")
let cells = document.querySelectorAll("#board td")
let cellsEnemy = document.querySelectorAll("#board td")
let path = document.querySelectorAll(".path")

let chosedTurret = ""
let torreUP = "no"
let money = document.getElementById("uiMoney")
let money2 = parseInt(money.innerHTML)


let Game = {
    torreta: [],
    monster: [],
}
