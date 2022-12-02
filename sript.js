const cols = document.querySelectorAll('.col')
const lockEls = document.querySelectorAll('button')

function getRandomColor() {
    const symbols = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']
    let color = '#'

    for(let i = 0; i < 6; i++) {
        let s = Math.floor(Math.random() * 16)
        color += symbols[s]
    }
    return color
}

function setRandomColor() {
    cols.forEach(col => {
        let stopedEl = col.querySelector('.fa-lock')
       if(!stopedEl) {
       colorName = col.querySelector('h2')
       let color = getRandomColor() 
       col.style.background = color
       colorName.innerText = color
    }
    })
}

document.addEventListener('DOMContentLoaded', function() {
    setRandomColor()
})

window.addEventListener('keydown', (e) => {
    if (e.keyCode == 32) {
        setRandomColor()
    }
})

function lockCol(lock) {
    lock.classList.toggle('fa-lock-open')
    lock.classList.toggle('fa-lock')
}

window.addEventListener('click', (e) => {
    if(e.target.dataset.action == 'btn') {
        let currLock = e.target
        lockCol(currLock)
    }

    if(e.target.dataset.action == 'btn-2') {
        let currLock = e.target.querySelector('.fa-solid')
        lockCol(currLock)
    }

    let targetH2 = e.target.closest('div').querySelector('h2')
    if(e.target === targetH2) {
        console.log('1234')
        navigator.clipboard.writeText(targetH2.innerText)
    }
})