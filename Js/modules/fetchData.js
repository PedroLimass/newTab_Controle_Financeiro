const fetchData = async () => {
    await fetch(
        'https://api.airtable.com/v0/appRNtYLglpPhv2QD/Historico?filterByFormula=' +
            encodeURI(`{Responsavel} = '8118'`),
        {
            method: 'GET',
            headers: {
                Authorization: 'Bearer key2CwkHb0CKumjuM',
                'Content-Type': 'application/json',
            },
        }
    )
        .then((response) => response.json())
        .then((json) => {
            if (json.records.length === 0) {
                document.getElementById('checkGetData').style.display = 'block'
                document.getElementById('table-transaction').style.display =
                    'none'
                console.log(`empety`)
            } else {
                document.getElementById('checkGetData').style.display = 'none'
                document.getElementById('table-transaction').style.display =
                    'block-inline'

                let row = json.records.map((val) => {
                    let data = JSON.parse(val.fields.Json)

                    let type = data[0].type
                    let info = data[0].name
                    let value = 'R$ ' + data[0].value

                    return (
                        '<tr>' +
                        '<td class="table-left">' +
                        '<span class="typeStyle">' +
                        type +
                        '</span>' +
                        info +
                        '</td>' +
                        '<td class="table-right">' +
                        value +
                        '</td>' +
                        '</tr>'
                    )
                })

                document.querySelector('tbody').innerHTML = row.join('')

                let amount = json.records
                    .map((val) => {
                        let data = JSON.parse(val.fields.Json)
                        return Number(
                            data[0].type + data[0].value.replace(',', '.')
                        )
                    })
                    .reduce((acc, amount) => acc + amount)
                    .toFixed(2)
                    .toString()
                    .replace('.', ',')

                document.querySelector('#amount').innerHTML = 'R$ ' + amount

                if (Number(amount.replace(',', '.')) > 0) {
                    document.querySelector('.lucro-span').innerHTML = '[LUCRO]'
                } else {
                    document.querySelector('.lucro-span').innerHTML =
                        '[PREJUÍZO]'
                }
                console.log(json.records)
                let res = json.records
                return res
            }
        })
}

export default fetchData
