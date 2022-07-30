

const colorsSimple = ["green", "red", "aqua", "blue"]
const colorsHex = [1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']

const btn = document.querySelector(".btn")
const btnSimple = document.querySelector(".btn-simple")
const btnHex = document.querySelector(".btn-hex")
const textColor = document.querySelector(".colorcode")
const main = document.querySelector("main")
const activeClass = [btnSimple, btnHex]
let state = "simple"

function setColor(color) {
    main.style.backgroundColor = color
    textColor.textContent = color
    textColor.style.color = color
}
function removeActiveClass(){
    for(let btn of activeClass){
        if(btn.classList.contains('active')){
            btn.classList.remove('active')
        }
    }
}
function getRandomNumber(max, min){
    let rand = Math.floor( Math.random() * (max - min) + min);
    return rand
}
function getHexColor(){
    let hex = "#"
    for(let i = 0; i < 6;i++){
        let rand = getRandomNumber(colorsHex.length, 0)
        hex += colorsHex[rand]
    }
    return hex
}
btn.addEventListener('click', function() {
    setColorType()
})
btnSimple.addEventListener('click', function(e) {
    state = 'simple'
    removeActiveClass()
    e.target.classList.add('active')
})
btnHex.addEventListener('click', function(e) {
    state = 'hex'
    removeActiveClass()
    e.target.classList.add('active')
})

function setColorType(){
    if(state == 'simple'){
        let randSimple = getRandomNumber(colorsSimple.length, 0)
        setColor(colorsSimple[randSimple])
    }else if(state == 'hex'){
        let hexColor = getHexColor()
        setColor(hexColor)
    }
}
setInterval(() => {
    setColorType()
}, 10000);