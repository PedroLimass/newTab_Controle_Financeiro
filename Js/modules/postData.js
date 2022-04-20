// import fetchData from "./fetchData"

async function postData(type, name, value) {
    if (name === '' || value === '') {
        document.getElementById('formAlert').style.display = 'block'
        if (name === '') {
            document.getElementById('nameProduct').style.border =
                'solid 1px red'
        } else {
            document.getElementById('nameProduct').style.border =
                '1px solid #000'
        }

        if (value === '') {
            document.getElementById('moneyInput').style.border = 'solid 1px red'
        } else {
            document.getElementById('moneyInput').style.border =
                '1px solid #000'
        }
    } else {
        document.getElementById('formAlert').style.display = 'none'

        const data = {
            fields: {
                Responsavel: '8118',
                Json: `[{"type": "${type}", "name": "${name}", "value": "${value}"}]`,
            },
        }

        return await fetch('https://api.airtable.com/v0/appRNtYLglpPhv2QD/Historico', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json',
                Authorization: 'Bearer key2CwkHb0CKumjuM',
            },
        })        
    }
}

export default postData
