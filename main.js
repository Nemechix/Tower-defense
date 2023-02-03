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


torreta1.onclick = function () {
    chosedTurret = "torreta1"
    //console.log("work")  
    //console.log(chosedTurret)
}


cells.forEach((element) => {

    element.onclick = function () {
        if (money2 >= 10 && chosedTurret !== "") {

            //console.log("work")
            element.setAttribute("id", chosedTurret)
            money2 = money2 - 10
            money.innerHTML = money2
            Game.torreta.push(element)
            console.log(Game.torreta)
            console.log(Game.cellsEnemy)

        }
    }
});


setInterval