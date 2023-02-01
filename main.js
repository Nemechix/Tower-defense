let torreta1 = document.getElementById("torreta1")
let cells = document.querySelectorAll("#board td")
let chosedTurret = ""
let torreUP = "no"
let money = document.getElementById("uiMoney")
let money2 = parseInt(money.innerHTML)
console.log(typeof(money2))


torreta1.onclick = function(){
    chosedTurret = "torreta1"
    //console.log("work")  
    //console.log(chosedTurret)
}


//console.log(cells)


cells.forEach((element) => { 

    element.onclick = function(){
        
        if (money2 >= 10 && chosedTurret !== ""){

    console.log("work")
    element.setAttribute("id", chosedTurret)
    money2 = money2 - 10
    money.innerHTML = money2

    }
    }
});

console.log(typeof(money))









