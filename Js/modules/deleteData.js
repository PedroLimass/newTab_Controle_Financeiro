const deleteData = async () => {
    let data = await fetch(
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
        .then((res) => res.json())
        .then((data) => {
            return data.records
        })

    let records = data
        .map((val, index) => {
            if (index === 0) {
                return encodeURI('?records[]=' + val.id)
            } else {
                return encodeURI('&records[]=' + val.id)
            }
        })
        .join('')

    const deleteStatus = await fetch(
        'https://api.airtable.com/v0/appRNtYLglpPhv2QD/Historico' + records,

        {
            method: 'DELETE',
            headers: {
                Authorization: 'Bearer key2CwkHb0CKumjuM',
                'Content-Type': 'application/json',
            },
        }
    )

    return deleteStatus
}

export default deleteData
