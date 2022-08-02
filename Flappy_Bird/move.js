import { GAME_STATE ,ModifyGameState} from "./ultis.js"
import { isCollisionPipe, isOverBound, isScore } from "./ultis.js"
import * as constanst from "./constanst.js"

export function moveObject() {
    if(GAME_STATE != 'play')
        return
    let pipes = document.querySelectorAll('.pipe')

    for(let i=0;i<pipes.length;i++){
        if(parseInt(pipes[i].style.left) + parseInt(pipes[i].style.width) <= 0)
            pipes[i].remove()
        else{
            if(isOverBound() || isCollisionPipe(pipes[i].getBoundingClientRect())){
                ModifyGameState('end')
                constanst.end.style.display = 'block'
                constanst.end_score.textContent = constanst.score_value.textContent
                return
            }
            if(isScore(pipes[i].getBoundingClientRect()) && pipes[i]?.increase == '1'){
                constanst.score_value.textContent = (parseInt(constanst.score_value.textContent) + 1).toString()
                pipes[i].increase = '0'
            }
        }
        if(pipes[i].style.left === "")
            pipes[i].style.left = `${constanst.BACKGROUND_BOUND.width}px`
        else
            pipes[i].style.left = `${parseInt(pipes[i].style.left) - constanst.SPEED}px`
        
    }
    requestAnimationFrame(moveObject)
}