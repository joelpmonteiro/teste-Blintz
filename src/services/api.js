const url = 'https://development-api.blintz.com.br/properties';
export const getAllProperties = async () => {
    try {
        const response = await fetch(url, {
            method: 'GET', mode: 'cors', headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
        })
        if (response.status === 200)
            return response.json();

        return '';
    } catch (error) {
        console.log(error)
        return '';
    }

    // fetch().then(result => {
    //     return result.json
    // }).then((data) => {
    //     console.log(data)
    // }).catch((err) => {
    //     console.log(err)
    // })
}