import {createPipeline, clearPipe} from "./pipe.js"
import {gravityAffection} from "./gravity.js"
import { moveObject } from "./move.js"
import * as constanst from "./constanst.js"
import {GAME_STATE, ModifyGameState, ModifyKeyState, initialize} from "./ultis.js"


let id = initialize()

function startGame(){
    clearInterval(id)
    constanst.score.style.display = 'block'
    requestAnimationFrame(moveObject)
    requestAnimationFrame(gravityAffection)
    requestAnimationFrame(createPipeline)
}

document.onclick = function() {
    if(GAME_STATE != 'play'){
        ModifyGameState('play')
        startGame()
        constanst.message.style.display = 'none'
    }
}
document.onkeydown = function() {
    ModifyKeyState('press')
}
document.onkeyup = function() {
    ModifyKeyState('release')
}

constanst.play_again.addEventListener('click', function() {
    clearPipe()
    constanst.message.style.display = 'block'
    ModifyGameState('end')
    constanst.end.style.display = 'none'
    constanst.bird.style.left = '20%'
    constanst.bird.style.top = '50%'
    constanst.score_value.textContent = '0'
})