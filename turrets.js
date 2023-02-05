let torreta0 = document.getElementById(`turrets0`)
let choosedTurret = ``

let cells = document.querySelectorAll(`#board td`)

let moneyUi = document.getElementById(`uiMoney`)
let moneyPlayer = moneyUi.innerHTML

function Turret (dmg, x, y){
    this.dmg = dmg
    this.sprite = document.getElementById(`turrets0`)
    this.pos = {
        x: x,
        y: y
    }
}

let turret0 = new Turret (5)

torreta0.onclick = function (){
    choosedTurret = `torreta0`
}

cells.forEach((element) =>{
    element.onclick = function (){
        if(!element.classList.contains(`path`)){
            if(moneyPlayer >= 10 && choosedTurret !== 1){
                element.setAttribute(`id`, choosedTurret)
                moneyPlayer -= 10
                moneyPlayer
                game.torreta.push(element)
                console.log(moneyPlayer)
            }
        }
    }
});