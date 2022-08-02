import { KEY_STATE, GAME_STATE, isOverBound } from "./ultis.js"
import { bird, MOVE } from "./constanst.js"

export function gravityAffection(){
    if(GAME_STATE != 'play')
        return
    if(isOverBound()){
        return
    }
    if(KEY_STATE == 'press') {
        bird.src = './assets/img/bird_fly.png'
        bird.style.top = `${parseInt(bird.style.top) - MOVE}px`
    }
    else{
        bird.src = './assets/img/bird_flop.png'
        bird.style.top = `${parseInt(bird.style.top) + MOVE}px`
    }
    requestAnimationFrame(gravityAffection)
}