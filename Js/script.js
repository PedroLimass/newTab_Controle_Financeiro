import fetchData from './modules/fetchData.js'
// import postData from './modules/postData.js'

//GET Data
fetchData()

const postData = (type, name, value) => {
    const data = {
        fields: {
            Responsavel: '8118',
            Json: `[{type: "${type}",name: "${name}",value: "${value}"}]`,
        },
    }

    fetch('https://api.airtable.com/v0/appRNtYLglpPhv2QD/Historico', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-type': 'application/json',
            Authorization: 'Bearer key2CwkHb0CKumjuM',
        },
    })
    .then((response) => response.json())
    .then((json) => {
        console.log(json)
    })
}

const form = document.getElementById('addTransition')

form.addEventListener('submit', (event) => {
    event.preventDefault()
    console.log(form.elements)
    let type = form.elements['purchase'].value
    let name = form.elements['nameProduct'].value
    let value = form.elements['moeneyInput'].value
    

    postData(type, name, value)
})

// Money Mask

const money = document.getElementById('moeneyInput')

money.addEventListener('keydown', (event) => {
    // let value = document.getElementById('moeneyInput').value
    let value = event.target.value
    console.log(value)

    // value = value + ''
    // value = value.replace(/[\D]+/g, '')
    // value = value + ''
    // value = value.replace(/([0-9]{1})$/g, ',$1')

    value = value.replace('.', '').replace(',', '').replace(/\D/g, '')

    const options = { minimumFractionDigits: 2 }
    const result = new Intl.NumberFormat('pt-BR', options).format(
        parseFloat(value) / 100
    )
    // result = Number(result.stringify())

    document.getElementById('moeneyInput').value = result
})
