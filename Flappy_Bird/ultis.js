export let START_STATE = 'fly'
export let GAME_STATE = 'wait'
export let KEY_STATE = 'release'
import { bird , BACKGROUND_BOUND} from "./constanst.js"


export function ModifyGameState(state){
    GAME_STATE = state
}
export function ModifyKeyState(state){
    KEY_STATE = state
}
export function ModifyStartState(state){
    START_STATE = state
}
export function isOverBound(){
    if(parseInt(bird.style.top) <= 0 || 
        parseInt(bird.style.top) + parseInt(bird.style.height) >= BACKGROUND_BOUND.height )
        return true
    return false
}

export function isCollisionPipe(pipeRect){
    let birdRect = document.querySelector('.bird').getBoundingClientRect()
    if(birdRect.top > pipeRect.bottom || pipeRect.top > birdRect.bottom)
        return false
    if(birdRect.left > pipeRect.right || pipeRect.left > birdRect.right)
        return false

    return true

}

export function isScore(pipeRect){
    let birdRect = document.querySelector('.bird').getBoundingClientRect()
    return pipeRect.right < birdRect.right
}

export function initialize(){
    bird.style.top = '50%'
    bird.style.left = '10%'
    bird.style.width = '60px'
    bird.style.height = '60px'
    return setInterval(() => {
        if(START_STATE == 'flop'){
            constanst.bird.src = './assets/img/bird_flop.png'
            ModifyStartState('fly')
        }else{
            constanst.bird.src = './assets/img/bird_fly.png'
            ModifyStartState('flop')
        }
    }, 1000);
}