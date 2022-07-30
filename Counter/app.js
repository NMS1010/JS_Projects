const number = document.querySelector('.number')
let currNumber = parseInt(number.textContent, 10)
const btn = document.querySelectorAll('.btn')


btn.forEach(e => {
    e.addEventListener('click', function(e) {
        let s = e.target.classList.value
        if(s.includes('btn-decrease'))
            currNumber -= 1
        else if(s.includes('btn-increase'))
            currNumber += 1
        else if(s.includes('btn-reset'))
            currNumber = 0

        if(currNumber <0){
            number.style.color = 'red'
        }
        else if (currNumber == 0){    
            number.style.color = 'black'
        }
        else{
            number.style.color = 'green'
        }
        number.textContent = currNumber.toString()
    })
});