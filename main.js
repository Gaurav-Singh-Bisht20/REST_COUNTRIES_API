const countryContainer = document.querySelector('.countries-container');

fetch('https://restcountries.com/v3.1/all')
.then((res)=>res.json())
.then((data)=>{
    data.forEach(country => {
        const countryCard = document.createElement('a');
        countryCard.classList.add('country-card');
        
        countryCard.innerHTML = `
            <img src= "${country.flags.svg}" alt="flag">
            <div class="cardText">
                <h2 class="country-name">${country.name.common}</h2>
                <p><b>Population:</b> ${country.population}</p>
                <p><b>Region:</b> ${country.region}</p>
                <p><b>Capital:</b> ${country.capital}</p>
            </div>
        `
        countryContainer.append(countryCard) 
    });
})
