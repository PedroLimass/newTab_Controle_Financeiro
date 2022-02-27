import { response } from 'express'

const postData = (type, name, value) => {
    const data = {
        fields: {
            Responsavel: '8118',
            Json: `[{type: ${type},name: ${name},value: ${value}}]`,
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

export default postData
