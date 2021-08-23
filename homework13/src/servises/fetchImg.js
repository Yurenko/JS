const baseUrl = `https://pixabay.com/api/`;
const option = {
    method: 'GET',
    headers: {
        'Accept': 'application/json'
    }

}

export default {
    page: 1,
    query: '',
    fetchCountries() {
        return fetch(baseUrl + `?image_type=photo&orientation=horizontal&q=${this.query}&page=${this.page}&per_page=12&key=23038109-8e0e25503253e4f392237619f`, option)
            .then(res => res.json())
            .then(res => {
                this.increment()
                return res.hits
            }).catch(console.warn)
    },
    get searcQuery() {
        return this.query
    },
    set searchQuery(string) {
        this.query = string
    },
    increment() {
        this.page += 1
    }
}