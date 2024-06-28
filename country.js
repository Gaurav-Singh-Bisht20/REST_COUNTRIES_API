const urlParams = new URLSearchParams(location.search);
const countryName = urlParams.get('name');
const countryMainContainer = document.querySelector('.country-main')


let countryData;

fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
  .then((res) => res.json())
  .then((data) => {
    countryData = data[0];
    console.log(countryData)
    console.log(countryData.flags.svg)
    const countryDetail = document.createElement('div');
    countryDetail.classList.add('country-detail');
    countryDetail.innerHTML = `
            <div class="img-container">
                <img src="${countryData?.flags?.svg}" alt="" width="100%">
            </div>
            <div class="country-detail-text">
                <h1>${countryData.name.common}</h1>
                <div class="detailtext">
                    <div class="left">
                        <p><b>Native Name:</b> ${countryData.name.common}</p>
                        <p><b>Population:</b> ${countryData.population}</p>
                        <p><b>Region:</b>${countryData.region}</p>
                        <p><b>Sub Region:</b> ${countryData.subregion}</p>
                        <p><b>Capital:</b>${countryData.capital}</p>
                    </div>
                    <div class="right">
                        <p><b>Top Level Domain:</b>be</p>
                        <p><b>Currencies:</b>${countryData.currencies.countryName}</p>
                        <p><b>Languages:</b>${countryData.languages}</p>
                    </div>
                </div>
                <p><b>Border Countries:</b>
                    <a href=""></a>
                    <a href="">nepal</a>
                    <a href="">china</a>
                </p>
            </div>
`

countryMainContainer.append(countryDetail);
  })
.catch((error) => console.error('Error fetching country data:', error));





// console.log(countryMainContainer)

