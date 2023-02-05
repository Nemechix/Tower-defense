let turrets0 = document.getElementById("turrets0")
let choosedTurret = ``

let cells = document.querySelectorAll(`#board td`)

let moneyUi = document.getElementById(`uiMoney`)
let moneyPlayer = parseInt(moneyUi.innerHTML)

function Turret (dmg, x, y){
    this.dmg = dmg
    this.sprite = document.getElementById(`turrets0`)
    this.pos = {
        x: x,
        y: y
    }
}

let turret0 = new Turret (5)

turrets0.onclick = function (){
    choosedTurret = `turrets0`
}

cells.forEach((element) =>{
    element.onclick = function (){
        if(!element.classList.contains(`path`)){
            if(moneyPlayer >= 10 && choosedTurret !== 1){
                element.setAttribute(`id`, choosedTurret)
                moneyPlayer -= 10
                moneyUi.innerHTML = moneyPlayer
                game.torreta.push(element)
                console.log(`work`)
            }
        }
    }
});