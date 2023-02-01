let torreta1 = document.getElementById("torreta1")
let cells = document.querySelectorAll("#board td")
let chosedTurret = ""
let torreUP = "no"
let money2 = document.getElementById("uiMoney")
let money = parseInt(money2)


torreta1.onclick = function(){
    chosedTurret = "torreta1"
    //console.log("work")  
    //console.log(chosedTurret)
}


//console.log(cells)


cells.forEach((element) => { 

    element.onclick = function(){
    
    if(money >= 10){
    console.log("work")
    element.setAttribute("id", chosedTurret)
    money -= 10
    }
    }
});

console.log(typeof(money))









