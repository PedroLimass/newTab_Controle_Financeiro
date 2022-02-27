const fetchData = () => {
    const data = {
        Responsavel: '8118',
    }
    fetch(
        'https://api.airtable.com/v0/appRNtYLglpPhv2QD/Historico?filterByFormula='+encodeURI(`{Responsavel} = '8118'`),
        {
            method: 'GET',            
            headers: {
                Authorization: 'Bearer key2CwkHb0CKumjuM',
            },
        }
    )
        .then((response) => response.json())
        .then((json) => {
            console.log(json)
        })
}

export default fetchData
