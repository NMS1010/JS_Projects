import * as constanst from "./constanst.js"
import {GAME_STATE} from "./ultis.js"
let pipe_count = 0

export function createPartialPipe(top, height, className){
    let pipe = document.createElement('div')
    pipe.className = className
    pipe.style.top = `${top}px`
    pipe.style.height = `${height}px`
    pipe.style.width = `${constanst.PIPE_WIDTH}px`
    if(className == 'pipe')
        pipe.increase = '1'
        constanst.container.appendChild(pipe)
}
export function createPipeline(){
    if(GAME_STATE != 'play')
        return

    if(pipe_count < 200){
        pipe_count += 1
        requestAnimationFrame(createPipeline)
        return
    }

    pipe_count = 0
    let pipe_position = Math.floor(Math.random() * (constanst.BACKGROUND_BOUND.height / 2)) + 5

    let pipe_above_height = pipe_position
    let pipe_above_top = 0
    createPartialPipe(pipe_above_top, pipe_above_height, 'pipe')
    
    let pipe_below_height = constanst.BACKGROUND_BOUND.height - pipe_position - constanst.PIPE_GAP
    let pipe_below_top = pipe_position + constanst.PIPE_GAP
    createPartialPipe(pipe_below_top, pipe_below_height, 'pipe pipe-sub')  

    requestAnimationFrame(createPipeline)
}
export function clearPipe(){
    let pipes = document.querySelectorAll('.pipe')
    pipes.forEach(p => p.remove())
}