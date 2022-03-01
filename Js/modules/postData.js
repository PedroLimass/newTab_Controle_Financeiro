async function postData(type, name, value) {
    if (name === '' || value === '') {
        document.getElementById('formAlert').style.display = 'block'
    } else {
        document.getElementById('formAlert').style.display = 'none'

        const data = {
            fields: {
                Responsavel: '8118',
                Json: `[{"type": "${type}", "name": "${name}", "value": "${value}"}]`,
            },
        }

        await fetch('https://api.airtable.com/v0/appRNtYLglpPhv2QD/Historico', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json',
                Authorization: 'Bearer key2CwkHb0CKumjuM',
            },
        }).then((response) =>
            response.status === 200
                ? window.location.reload()
                : window.alert('Error ao Adicionar transação')
        )
    }
}

export default postData
