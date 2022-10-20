import {data} from './users.js'

let ListEl = document.getElementById('blok')

function render(list, data){

    ListEl.innerHTML = ''

    data.forEach(el => {

        let cardEl = document.createElement('div')
        cardEl.className = 'card'

        let imgEl = document.createElement('img')
        imgEl.className = 'card-img'
        imgEl.src = el.ava

        let titleEl = document.createElement('h3')
        titleEl.textContent = el.text

        let nameEl = document.createElement('h3')
        nameEl.textContent = el.name

        let dayEl = document.createElement('h3')
        dayEl.textContent = el.time

        let btnEl = document.createElement('button')
        btnEl.className = 'card-btn'
        btnEl.textContent = el.priority

        cardEl.append(imgEl, titleEl, nameEl, dayEl, btnEl)
        list.append(cardEl)

    })

}

render(ListEl, data)


let searchInput = document.getElementById('search-input')
let searchBtn = document.getElementById('search-btn')

searchBtn.addEventListener('click', () => {
    let newArray = []
    for(let i = 0; i < data.length; i++){
        if(data[i].text.includes(searchInput.value)) newArray.push(data[i])
    }
    console.log(newArray);
    render(ListEl, newArray)
})


let sortEl = document.getElementById('sort')

sortEl.addEventListener('click', () => {
    let sorted = data.sort((a, b) => {
        return a.name.localeCompare(b.name)
    })
   render(ListEl, sorted)
})


let sortsEl = document.getElementById('sorts')

sortsEl.addEventListener('click', () => {
    let sorteed = data.sort((a, b) => {
        return b.name.localeCompare(a.name)
    })
   render(ListEl, sorteed)
})
