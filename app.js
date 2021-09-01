const searchButton = document.getElementById('search-button');
const searchInput = document.getElementById('search-input');
const restContainer = document.getElementById('rest-container');
const detailsContainer = document.getElementById('countryDetails')

searchButton.addEventListener('click', function () {
    const searchText = searchInput.value;
    searchInput.value = '';

    const url = `https://restcountries.eu/rest/v2/name/${searchText}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayCountry(data))
})
const displayCountry = data => {
    data.forEach(result => {
        const div = document.createElement('div');
        div.classList.add('col-md-4');
        div.innerHTML = `
            <img width="100%" height="200" src="${result.flag}">
            <h3 class="my-2">Country Name : ${result.name}</h3>
            <p>Capital : ${result.capital}</p>
            <button onclick="countryDetails('${result.alpha3Code}')">Show Details</button>
        `;
        restContainer.appendChild(div);
    })
}
const countryDetails = detailsId => {
    const url = `https://restcountries.eu/rest/v2/alpha/${detailsId}`
    fetch(url)
        .then(res => res.json())
        .then(data => showDetails(data))
}

const showDetails = data => {
    console.log(data)
    detailsContainer.innerHTML = `
        <div class="col-md-6 rounded mx-auto p-5 text-center my-5 border border-lg shadow-lg">
            <h3>country : ${data.name}</h3>
            <p>Capital: ${data.capital}</p>
            <p>Currencies Name : ${data.currencies[0].name}</p>
            <p>Currencies Symbol : ${data.currencies[0].symbol}</p>
        </div>
    `
}