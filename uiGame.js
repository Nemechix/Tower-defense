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
const quantity = document.createTextNode(`10`)

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
const up = document.createTextNode(`00:00`)

timer.appendChild(time)
timer.appendChild(hurry)
hurry.appendChild(up)
uiValues.appendChild(timer)

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

sum.classList.add(`uiValuesNum`)


uiGame.appendChild(uiValues)






//Div uiGameTurrets 

const uiGameTurrets = document.createElement(`div`)

function tableTurrets() {
    const tableTurrets = document.createElement(`table`)

    for (let tr = 0; tr < 3; tr++) {
        const tr = document.createElement(`tr`)
        tr.classList.add(`turrets`)

        for (let td = 0; td < 1; td++) {
            const td = document.createElement(`td`)
            const turretTxt = document.createTextNode(``)

            td.appendChild(turretTxt)
            tr.appendChild(td)
            td.classList.add(`cellTurret`)
        }

        tableTurrets.appendChild(tr)
    }

    uiGame.appendChild(uiGameTurrets)
    uiGameTurrets.setAttribute(`id`, `uiGameTurrets`)

    uiGameTurrets.appendChild(tableTurrets)
}

tableTurrets()








