/*Get all the countries from Asia continent /region using Filter function
Get all the countries with a population of less than 2 lakhs using Filter function
Print the following details name, capital, flag, using forEach function
Print the total population of countries using reduce function
Print the country that uses US dollars as currency.*/

// Fetching data from the REST Countries API
fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(data => {       
        // a) Get all the countries from Asia continent/region using Filter function

          const asiaCountries = data.filter(country => country.region === "Asia");
          console.log("Countries from Asia:", asiaCountries.map(country => country.name.common));

        // b) Get all the countries with a population of less than 2 lakhs using Filter function

          const smallPopulationCountries = data.filter(country => country.population < 200000);
          console.log("Countries with population less than 2 lakhs:", smallPopulationCountries.map(country => country.name.common));

        // c) Print the names of countries

          data.forEach(country => {
            console.log("Name of the  Country: ", country.name.common);
          });

        // d) Print the total population of countries using reduce function

          const totalPopulation = data.reduce((total, country) => total + country.population, 0);
          console.log("Total population of countries:", totalPopulation);

        // e) Print the name of the country that uses US dollars as currency

          const countriesUsingUSD = data.filter(country => country.currencies && Object.keys(country.currencies).includes("USD")).map(country => country.name.common);
          console.log("Countries Using USD:", countriesUsingUSD);
  })
  .catch(error => console.error('Error fetching data:', error));
