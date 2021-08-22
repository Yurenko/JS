export default function fetchCountries(searchQuery) {
    const baseUrl = `https://restcountries.eu/rest/v2/name/${searchQuery}`;
    const option = {
        method: 'GET',
        headers: {
            'Accept': 'application/json'
        }
    }
    return fetch(baseUrl, option).then(res => res.json()).catch(console.warn)
}

