import key from "/key/key.js"

var qstr = ""
var q = {}
var s = 0

function btnresponse(btnid){
    document.querySelector(".btn-container").setAttribute("initialized", "false")
    if (q[btnid].correct == true){
        var sfx = new Audio("/sfx/correct.mp3")
        sfx.play()
        s += 1
    } else {
        var sfx = new Audio("/sfx/wrong.mp3")
        sfx.play()
        s -= 1
    }
    if (s == -5){
        document.location.href = "/original/loser.html"
    } else if (s == 15){
        document.cookie = "confWin=orig;"
        document.location.href = "/original/winner.html"
    }
    document.querySelector("#score").innerHTML = "Score: "+s.toString()
    loadQuestion()
}


window.onresize = () => {
    if (window.innerWidth < 417) {
        document.querySelector(".btn-container").setAttribute("initialized", "false")
    } else {
        if (document.querySelector(".btn-container").getAttribute("initialized") == "false"){
            document.querySelector(".btn-container").setAttribute("initialized", "true")
        }
    }
}

function loadQuestion(){
    document.querySelector(".btn-container").innerHTML = ""
    qstr = Object.keys(key)[Math.floor((Math.random()*Object.keys(key).length))]
    q = key[qstr]
    document.querySelector(".btn-container").setAttribute("initialized", "true")
    let abtn = document.createElement("button")
    abtn.id = "a"
    abtn.setAttribute("onclick", "btnresponse(\"a\")")
    abtn.innerHTML = q.a.answer
    let bbtn = document.createElement("button")
    bbtn.id = "b"
    bbtn.setAttribute("onclick", "btnresponse(\"b\")")
    bbtn.innerHTML = q.b.answer
    let cbtn = document.createElement("button")
    cbtn.id = "c"
    cbtn.setAttribute("onclick", "btnresponse(\"c\")")
    cbtn.innerHTML = q.c.answer
    let dbtn = document.createElement("button")
    dbtn.id = "d"
    dbtn.setAttribute("onclick", "btnresponse(\"d\")")
    dbtn.innerHTML = q.d.answer
    let r1 = document.createElement("div")
    r1.classList.add("row")
    let r2 = document.createElement("div")
    r2.classList.add("row")
    let d1 = document.createElement("div")
    d1.classList.add("divider")
    let d2 = document.createElement("div")
    d2.classList.add("divider")
    r1.appendChild(abtn)
    r1.appendChild(d1)
    r1.appendChild(bbtn)
    r2.appendChild(cbtn)
    r2.appendChild(d2)
    r2.appendChild(dbtn)
    document.querySelector(".btn-container").appendChild(r1)
    document.querySelector(".btn-container").appendChild(r2)
    document.querySelector(".qn").innerHTML = qstr
}

window.onload = ()=>{
    loadQuestion()
}
window.btnresponse = btnresponse