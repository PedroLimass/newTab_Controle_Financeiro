import fetchData from './modules/fetchData.js'
import postData from './modules/postData.js'
import deleteData from './modules/deleteData.js'

//GET Data
fetchData()

const form = document.getElementById('addTransition')

form.addEventListener('submit', (event) => {
    event.preventDefault()
    let type = form.elements['purchase'].value
    let name = form.elements['nameProduct'].value
    let value = form.elements['moneyInput'].value

    postData(type, name, value)
})

// Money Mask

const money = document.getElementById('moneyInput')

money.addEventListener('keydown', (event) => {
    let value = event.target.value

    value = value.replace('.', '').replace(',', '').replace(/\D/g, '')

    // const result = (Number(value) / 100)
    //     .toFixed(2)
    //     .replace('.', ',')
    //     .split('')
    //     .reverse()
    //     .map((v, i) => (i > 5 && (i + 6) % 3 === 0 ? `${v}.` : v))
    //     .reverse()
    //     .join('')

    const result = (Number(value) / 100)
        .toFixed(2)
        .replace(/\d(?=(\d{3})+\.)/g, '$&,')

    document.getElementById('moneyInput').value = result
})

// Clear Data

const clearBtn = document.getElementById('clearData')

clearBtn.addEventListener('click', () => {
    if (confirm('Você tem certeza que deseja apagar todos os extratos?')) {
        deleteData()
    }
})
