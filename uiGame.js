// $('document').ready(function(){

// });

//Div uiGame
const uiGame = document.createElement(`div`)

document.body.appendChild(uiGame)

uiGame.setAttribute(`id`, `uiGame`)




//Div uiValues
const uiValues = document.createElement(`div`)
uiValues.setAttribute(`id`, `uiValues`)

//Título
const title = document.createElement(`h2`)
const defenders = document.createTextNode(`Reboot defenders`)
title.appendChild(defenders)
uiValues.appendChild(title)


//Dinero
const money = document.createElement(`h2`)
const cash = document.createTextNode(`Money:`)
const economy = document.createElement(`span`)
const quantity = document.createTextNode(`50`)

money.appendChild(cash)
money.appendChild(economy)
economy.appendChild(quantity)
uiValues.appendChild(money)

economy.classList.add(`uiValuesNum`)
economy.setAttribute(`id`, `uiMoney`)

//Tiempo
const timer = document.createElement(`h2`)
const time = document.createTextNode(`Time:`)
const hurry = document.createElement(`span`)
const upper = document.createTextNode(`00:00`)

timer.appendChild(time)
timer.appendChild(hurry)
hurry.appendChild(upper)
uiValues.appendChild(timer)


hurry.setAttribute(`id`, `timer`)

hurry.classList.add(`uiValuesNum`)

//Puntuación
const score = document.createElement(`h2`)
const points = document.createTextNode(`Score:`)
const sum = document.createElement(`span`)
const killeds = document.createTextNode(`0`)

score.appendChild(points)
score.appendChild(sum)
sum.appendChild(killeds)
uiValues.appendChild(score)

sum.setAttribute(`id`, `score`)

sum.classList.add(`uiValuesNum`)


uiGame.appendChild(uiValues)


//Vidas
const lifeP = document.createElement(`h2`)
const lifeTxt = document.createTextNode(`Life:`)
const hpNum = document.createElement(`span`)
const hpPoints = document.createTextNode(`3`)


lifeP.appendChild(lifeTxt)
lifeP.appendChild(hpNum)
hpNum.appendChild(hpPoints)
uiValues.appendChild(lifeP)

hpNum.setAttribute(`id`, `LifePoints`)
hpNum.classList.add(`uiValuesNum`)



//Div uiGameTurrets 

const uiGameTurrets = document.createElement(`div`)

function tableTurrets() {
    const tableTurrets = document.createElement(`table`)

    for (let tr = 0; tr < 3; tr++) {
        const rows = document.createElement(`tr`)
        rows.classList.add(`rowTurrets`)

        for (let td = 0; td < 1; td++) {
            const td = document.createElement(`td`)
            const turretTxt = document.createTextNode(``)

            td.appendChild(turretTxt)
            rows.appendChild(td)
            td.classList.add(`cellTurret`, `turrets${tr}`)
        }

        tableTurrets.appendChild(rows)
    }

    uiGame.appendChild(uiGameTurrets)
    uiGameTurrets.setAttribute(`id`, `uiGameTurrets`)
    uiGameTurrets.appendChild(tableTurrets)


    tableTurrets.classList.add(`tableTurrets`)


}

tableTurrets()