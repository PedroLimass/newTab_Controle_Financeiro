import fetchData from './modules/fetchData.js'
import postData from './modules/postData.js'
import deleteData from './modules/deleteData.js'

//GET Data
fetchData()

const form = document.getElementById('addTransition')

async function postConfirm(type, name, value) {
    let dataPost = await postData(type, name, value)
    if (dataPost.status === 200) {
        fetchData()
    }
}

form.addEventListener('submit', (event) => {
    event.preventDefault()
    let type = form.elements['purchase'].value
    let name = form.elements['nameProduct'].value
    let value = form.elements['moneyInput'].value

    postConfirm(type, name, value)    
})

// Money Mask

const money = document.getElementById('moneyInput')

money.addEventListener('keydown', (event) => {
    let value = event.target.value

    value = value + ''
    value = value.replace(/[\D]+/g, '')
    value = value + ''
    value = value.replace(/([0-9]{2})$/g, ',$1')
    value = value.replace(/\B(?=(\d{3})+(?!\d))/g, '.')

    document.getElementById('moneyInput').value = value
})

// Clear Data

const clearBtn = document.getElementById('clearData')

async function deleteConfirm() {
    let data = await deleteData()
    if (data.status === 200) {
        fetchData()
    }
}

clearBtn.addEventListener('click', () => {
    if (confirm('Você tem certeza que deseja apagar todos os extratos?')) {
        deleteConfirm()
    }
})
